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
 * Validate if a value is not undefined, null and blank ''
 */
export class NotEmptyValidator implements Validator {
  /**
   * Validation if the value is empty.
   * @param value text that will be checked if it is empty.
   */
  public validate(value: string): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      if (!value || value.trim() === '') {
        resolve({
          value,
          message: 'Value is empty, null or undefined'
        });
        return;
      }
      resolve();
    });
  }
}
