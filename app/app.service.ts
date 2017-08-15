import { getString, setString } from "application-settings";
import {
    User,
    LoginType,
    createUser,
    login,
    logout,
    getCurrentUser,
    query,
    addValueEventListener,
    removeEventListeners,
    setValue,
    update,
    remove,
    push,
    QueryOptions,
    QueryLimitType,
    QueryOrderByType,
    QueryRangeType
} from "nativescript-plugin-firebase";
import { Observable } from "rxjs/Observable";

export class AuthService {
    static get isLoggedIn(): boolean {
        return !!getString("uid");
    }

    static get uid(): string {
        return getString("uid");
    }

    static set uid(uid: string) {
        setString("uid", uid);
    }

    static createUser({email, password}) {
        return createUser({email, password})
    }

    static login({email, password}): Promise<User> {
        return login({
            type: LoginType.PASSWORD,
            email,
            password
        });
    }

    static logout(): Promise<any> {
        return logout();
    }
}


export class DatabaseService {
    static QueryLimitType = QueryLimitType;
    static QueryOrderByType = QueryOrderByType;
    static QueryRangeType = QueryRangeType;

    static queryAll(path: string, options: QueryOptions): Observable<any[]> {
        return new Observable((observer: any) => {
            let resultHash = {};
            let onValueListener = (data) => {
                console.log("queryAll", JSON.stringify(data));
                let key = data.key;
                let value = data.value;
                resultHash[key] = DatabaseService._mapValue(key, value);
                let results = Object.keys(resultHash).map(key => resultHash[key]);
                observer.next(results);
            };
            query(onValueListener, path, options);
        })
    }

    static getAll(path: string): Observable<any[]> {
        return new Observable((observer: any) => {
            let onValueListener = (data) => {
                let values = data.value;
                let results = DatabaseService._mapValues(values);
                observer.next(results);
            };
            addValueEventListener(onValueListener, path);
            return () => {
                removeEventListeners([onValueListener], path)
            }
        })
    }

    static get(path: string): Observable<any> {
        return new Observable((observer: any) => {
            let onValueListener = (data) => {
                let key = data.key;
                let value = data.value;
                let result = DatabaseService._mapValue(key, value);
                observer.next(result);
            };
            addValueEventListener(onValueListener, path);
            return () => {
                removeEventListeners([onValueListener], path)
            }
        })
    }

    static create(path: string, value: any) {
        return push(path, DatabaseService._unMapValue(value))
    }

    static set(path: string, value: any) {
        return setValue(path, DatabaseService._unMapValue(value));
    }

    static update(path: string, value: any) {
        return update(path, DatabaseService._unMapValue(value));
    }

    static remove(path: string) {
        return remove(path)
    }

    static _mapValues(value: any): any[] {
        value = value || {};
        return Object.keys(value).map(key => {
            let obj = value[key];
            let _obj = {
                $id: key
            };
            Object.keys(obj).forEach(_key => {
                if (obj.hasOwnProperty(_key)) {
                    _obj[_key] = obj[_key];
                }
            });
            return _obj
        })
    }

    static _mapValue(key: string, obj: any): any {
        obj = obj || {};
        let _obj = {
            $id: key
        };
        Object.keys(obj).forEach(_key => {
            if (obj.hasOwnProperty(_key)) {
                _obj[_key] = obj[_key];
            }
        });
        return _obj
    }

    static _unMapValue(obj: any): any {
        obj = obj || {};
        Object.keys(obj).forEach(function (key) {
            if (key.indexOf('$') == 0) {
                delete obj[key];
            }
        });
        return obj
    }
}