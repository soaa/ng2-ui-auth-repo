import { TokenRefreshService } from './token.refresh.service';
/**
 * Created by Ron on 17/12/2015.
 */
import { Observable } from 'rxjs/Observable';
import { ConfigService, Tokens } from './config.service';
import { StorageService } from './storage.service';
import { StorageType } from './storage-type.enum';
/**
 * Created by Ron on 17/12/2015.
 */
export declare class SharedService {
    private tokenRefreshService;
    private storage;
    private config;
    tokenName: string;
    refreshTokenName: string;
    constructor(tokenRefreshService: TokenRefreshService, storage: StorageService, config: ConfigService);
    getRefreshToken(): Promise<string>;
    getToken(): Promise<string>;
    getPayload(token?: string): Promise<any>;
    setToken(response: string | object): Promise<Tokens>;
    removeToken(): Promise<void>;
    isAuthenticated(token?: string): Promise<boolean>;
    isValidToken(token: string): Promise<boolean>;
    getExpirationDate(token?: string): Promise<Date>;
    logout(): Observable<any>;
    setStorageType(type: StorageType): boolean;
    private b64DecodeUnicode(str);
}
