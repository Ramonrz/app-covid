import { Country } from './country';
import { Indicator } from './indicator';

export interface Summary {

    Global: Indicator;
    Countries: Country[];
}
