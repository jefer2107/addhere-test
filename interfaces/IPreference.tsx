import { ICommunity } from './ICommunity';

export interface IPreference {
    id: number;
    title: string;
    user_profiles: any[];
    community: ICommunity;
    published_at: Date;
    created_by: string;
    updated_by: string;
}