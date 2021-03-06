import { StorageService } from './storage-service';
import { StorageType } from './storage-type.enum';
import { ConfigService } from './config.service';
export declare class BrowserStorageService extends StorageService {
    private config;
    private store;
    private storageType;
    constructor(config: ConfigService);
    updateStorageType(storageType: StorageType): boolean;
    get(key: string): Promise<any>;
    set(key: string, value: string, date: string): Promise<void>;
    remove(key: string): Promise<void>;
    private checkIsStorageAvailable;
    private isWindowStorageAvailable;
    private isCookieStorageAvailable;
    private setCookie;
    private removeCookie;
    private getCookie;
}
