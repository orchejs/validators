import { Validator } from '../interfaces';

export class NotEmptyValidator implements Validator {
  public validate(): any {
    throw new Error('Not implemented yet.');
  }
}
