/**
 * Created by Ron on 17/12/2015.
 */
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { StorageService } from './storage.service';
import { StorageType } from './storage-type.enum';
/**
 * Created by Ron on 17/12/2015.
 */
export declare class SharedService {
    private storage;
    private config;
    tokenName: string;
    constructor(storage: StorageService, config: ConfigService);
    getToken(): Promise<string>;
    getPayload(token?: string): Promise<any>;
    setToken(response: string | object): Promise<void>;
    removeToken(): Promise<void>;
    isAuthenticated(token?: string): Promise<boolean>;
    getExpirationDate(token?: string): Promise<Date>;
    logout(): Observable<any>;
    setStorageType(type: StorageType): boolean;
    private b64DecodeUnicode(str);
}
