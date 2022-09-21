import { IDestination } from './IDestination';
import { IPreference } from './IPreference';

export interface IUserTag {
    preferences: IPreference[];
    destinations: IDestination[];
}
