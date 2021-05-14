import { Indicator } from './indicator';

export interface Country extends Indicator {

    Slug: string;
    Country: string;
    CountryCode: string;
}
