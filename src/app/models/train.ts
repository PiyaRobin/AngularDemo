import { Class } from './class';
import { Day } from './day';

export interface Train {
  classes: Class[];
  name: string;
  days: Day[];
  number: string;
}
