"use strict";
var application_settings_1 = require("application-settings");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var AuthService = (function () {
    function AuthService() {
    }
    Object.defineProperty(AuthService, "isLoggedIn", {
        get: function () {
            return !!application_settings_1.getString("uid");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService, "uid", {
        get: function () {
            return application_settings_1.getString("uid");
        },
        set: function (uid) {
            application_settings_1.setString("uid", uid);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.createUser = function (_a) {
        var email = _a.email, password = _a.password;
        return nativescript_plugin_firebase_1.createUser({ email: email, password: password });
    };
    AuthService.login = function (_a) {
        var email = _a.email, password = _a.password;
        return nativescript_plugin_firebase_1.login({
            type: nativescript_plugin_firebase_1.LoginType.PASSWORD,
            email: email,
            password: password
        });
    };
    AuthService.logout = function () {
        return nativescript_plugin_firebase_1.logout();
    };
    return AuthService;
}());
exports.AuthService = AuthService;
var DatabaseService = (function () {
    function DatabaseService() {
    }
    DatabaseService.queryAll = function (path, options) {
        return new Observable_1.Observable(function (observer) {
            var resultHash = {};
            var onValueListener = function (data) {
                console.log("queryAll", JSON.stringify(data));
                var key = data.key;
                var value = data.value;
                resultHash[key] = DatabaseService._mapValue(key, value);
                var results = Object.keys(resultHash).map(function (key) { return resultHash[key]; });
                observer.next(results);
            };
            nativescript_plugin_firebase_1.query(onValueListener, path, options);
        });
    };
    DatabaseService.getAll = function (path) {
        return new Observable_1.Observable(function (observer) {
            var onValueListener = function (data) {
                var values = data.value;
                var results = DatabaseService._mapValues(values);
                observer.next(results);
            };
            nativescript_plugin_firebase_1.addValueEventListener(onValueListener, path);
            return function () {
                nativescript_plugin_firebase_1.removeEventListeners([onValueListener], path);
            };
        });
    };
    DatabaseService.get = function (path) {
        return new Observable_1.Observable(function (observer) {
            var onValueListener = function (data) {
                var key = data.key;
                var value = data.value;
                var result = DatabaseService._mapValue(key, value);
                observer.next(result);
            };
            nativescript_plugin_firebase_1.addValueEventListener(onValueListener, path);
            return function () {
                nativescript_plugin_firebase_1.removeEventListeners([onValueListener], path);
            };
        });
    };
    DatabaseService.create = function (path, value) {
        return nativescript_plugin_firebase_1.push(path, DatabaseService._unMapValue(value));
    };
    DatabaseService.set = function (path, value) {
        return nativescript_plugin_firebase_1.setValue(path, DatabaseService._unMapValue(value));
    };
    DatabaseService.update = function (path, value) {
        return nativescript_plugin_firebase_1.update(path, DatabaseService._unMapValue(value));
    };
    DatabaseService.remove = function (path) {
        return nativescript_plugin_firebase_1.remove(path);
    };
    DatabaseService._mapValues = function (value) {
        value = value || {};
        return Object.keys(value).map(function (key) {
            var obj = value[key];
            var _obj = {
                $id: key
            };
            Object.keys(obj).forEach(function (_key) {
                if (obj.hasOwnProperty(_key)) {
                    _obj[_key] = obj[_key];
                }
            });
            return _obj;
        });
    };
    DatabaseService._mapValue = function (key, obj) {
        obj = obj || {};
        var _obj = {
            $id: key
        };
        Object.keys(obj).forEach(function (_key) {
            if (obj.hasOwnProperty(_key)) {
                _obj[_key] = obj[_key];
            }
        });
        return _obj;
    };
    DatabaseService._unMapValue = function (obj) {
        obj = obj || {};
        Object.keys(obj).forEach(function (key) {
            if (key.indexOf('$') == 0) {
                delete obj[key];
            }
        });
        return obj;
    };
    return DatabaseService;
}());
DatabaseService.QueryLimitType = nativescript_plugin_firebase_1.QueryLimitType;
DatabaseService.QueryOrderByType = nativescript_plugin_firebase_1.QueryOrderByType;
DatabaseService.QueryRangeType = nativescript_plugin_firebase_1.QueryRangeType;
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkRBQTREO0FBQzVELDZFQWtCc0M7QUFDdEMsOENBQTZDO0FBRTdDO0lBQUE7SUE0QkEsQ0FBQztJQTNCRyxzQkFBVyx5QkFBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtCQUFHO2FBQWQ7WUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZSxHQUFXO1lBQ3RCLGdDQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTU0sc0JBQVUsR0FBakIsVUFBa0IsRUFBaUI7WUFBaEIsZ0JBQUssRUFBRSxzQkFBUTtRQUM5QixNQUFNLENBQUMseUNBQVUsQ0FBQyxFQUFDLEtBQUssT0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRU0saUJBQUssR0FBWixVQUFhLEVBQWlCO1lBQWhCLGdCQUFLLEVBQUUsc0JBQVE7UUFDekIsTUFBTSxDQUFDLG9DQUFLLENBQUM7WUFDVCxJQUFJLEVBQUUsd0NBQVMsQ0FBQyxRQUFRO1lBQ3hCLEtBQUssT0FBQTtZQUNMLFFBQVEsVUFBQTtTQUNYLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLHFDQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXO0FBK0J4QjtJQUFBO0lBdUdBLENBQUM7SUFsR1Usd0JBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsT0FBcUI7UUFDL0MsTUFBTSxDQUFDLElBQUksdUJBQVUs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QUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLDJCQUFXLEdBQWxCLFVBQW1CLEdBQVE7UUFDdkIsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF2R0Q7QUFDVyw4QkFBYyxHQUFHLDZDQUFjLENBQUM7QUFDaEMsZ0NBQWdCLEdBQUcsK0NBQWdCLENBQUM7QUFDcEMsOEJBQWMsR0FBRyw2Q0FBYyxDQUFDO0FBSDlCLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7XG4gICAgVXNlcixcbiAgICBMb2dpblR5cGUsXG4gICAgY3JlYXRlVXNlcixcbiAgICBsb2dpbixcbiAgICBsb2dvdXQsXG4gICAgZ2V0Q3VycmVudFVzZXIsXG4gICAgcXVlcnksXG4gICAgYWRkVmFsdWVFdmVudExpc3RlbmVyLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzLFxuICAgIHNldFZhbHVlLFxuICAgIHVwZGF0ZSxcbiAgICByZW1vdmUsXG4gICAgcHVzaCxcbiAgICBRdWVyeU9wdGlvbnMsXG4gICAgUXVlcnlMaW1pdFR5cGUsXG4gICAgUXVlcnlPcmRlckJ5VHlwZSxcbiAgICBRdWVyeVJhbmdlVHlwZVxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBzdGF0aWMgZ2V0IGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIWdldFN0cmluZyhcInVpZFwiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHVpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwidWlkXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQgdWlkKHVpZDogc3RyaW5nKSB7XG4gICAgICAgIHNldFN0cmluZyhcInVpZFwiLCB1aWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyKHtlbWFpbCwgcGFzc3dvcmR9KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVVc2VyKHtlbWFpbCwgcGFzc3dvcmR9KVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih7ZW1haWwsIHBhc3N3b3JkfSk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gbG9naW4oe1xuICAgICAgICAgICAgdHlwZTogTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBsb2dvdXQoKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSB7XG4gICAgc3RhdGljIFF1ZXJ5TGltaXRUeXBlID0gUXVlcnlMaW1pdFR5cGU7XG4gICAgc3RhdGljIFF1ZXJ5T3JkZXJCeVR5cGUgPSBRdWVyeU9yZGVyQnlUeXBlO1xuICAgIHN0YXRpYyBRdWVyeVJhbmdlVHlwZSA9IFF1ZXJ5UmFuZ2VUeXBlO1xuXG4gICAgc3RhdGljIHF1ZXJ5QWxsKHBhdGg6IHN0cmluZywgb3B0aW9uczogUXVlcnlPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRIYXNoID0ge307XG4gICAgICAgICAgICBsZXQgb25WYWx1ZUxpc3RlbmVyID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXJ5QWxsXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZGF0YS5rZXk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXN1bHRIYXNoW2tleV0gPSBEYXRhYmFzZVNlcnZpY2UuX21hcFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gT2JqZWN0LmtleXMocmVzdWx0SGFzaCkubWFwKGtleSA9PiByZXN1bHRIYXNoW2tleV0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcXVlcnkob25WYWx1ZUxpc3RlbmVyLCBwYXRoLCBvcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgb25WYWx1ZUxpc3RlbmVyID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IERhdGFiYXNlU2VydmljZS5fbWFwVmFsdWVzKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUxpc3RlbmVyLCBwYXRoKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoW29uVmFsdWVMaXN0ZW5lcl0sIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGdldChwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBvblZhbHVlTGlzdGVuZXIgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhLmtleTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBEYXRhYmFzZVNlcnZpY2UuX21hcFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUxpc3RlbmVyLCBwYXRoKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoW29uVmFsdWVMaXN0ZW5lcl0sIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHB1c2gocGF0aCwgRGF0YWJhc2VTZXJ2aWNlLl91bk1hcFZhbHVlKHZhbHVlKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0KHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICByZXR1cm4gc2V0VmFsdWUocGF0aCwgRGF0YWJhc2VTZXJ2aWNlLl91bk1hcFZhbHVlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZShwYXRoLCBEYXRhYmFzZVNlcnZpY2UuX3VuTWFwVmFsdWUodmFsdWUpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlKHBhdGg6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gcmVtb3ZlKHBhdGgpXG4gICAgfVxuXG4gICAgc3RhdGljIF9tYXBWYWx1ZXModmFsdWU6IGFueSk6IGFueVtdIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgbGV0IF9vYmogPSB7XG4gICAgICAgICAgICAgICAgJGlkOiBrZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goX2tleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBfb2JqW19rZXldID0gb2JqW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9vYmpcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX21hcFZhbHVlKGtleTogc3RyaW5nLCBvYmo6IGFueSk6IGFueSB7XG4gICAgICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICAgICAgbGV0IF9vYmogPSB7XG4gICAgICAgICAgICAkaWQ6IGtleVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goX2tleSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgX29ialtfa2V5XSA9IG9ialtfa2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfb2JqXG4gICAgfVxuXG4gICAgc3RhdGljIF91bk1hcFZhbHVlKG9iajogYW55KTogYW55IHtcbiAgICAgICAgb2JqID0gb2JqIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCckJykgPT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG59Il19