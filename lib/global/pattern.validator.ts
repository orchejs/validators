/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */
import { Validator, ValidatorError } from '../interfaces';

/**
 * @class
 * @description
 * Validates if a value matches a regex.
 */
export class PatternValidator implements Validator {
  /**
   * Validates if the value matches a pattern.
   * 
   * @param value value to be matched
   * @param regex regex value
   */
  public validate(value: string, regex: RegExp): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      if (!regex) {
        reject('The regex must be informed.');
        return;
      }
      if (!regex.test(value)) {
        resolve({
          message: 'Pattern wasn\'t fulfilled'
        });
        return;
      }
      resolve();
    });
  }
}
