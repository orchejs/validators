/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */
import { Validator, ValidatorError } from '../interfaces';

/**
 * Validates if the length of a value, that can be a string or Array, is higher than the 
 * minimum length.
 */
export class MinLengthValidator implements Validator {
  /**
   * Check if the value has a minimum length.
   * @param value value to be checked
   * @param length min length number
   * @returns a Promise with the result error, if the value is lower than the length.
   */
  public validate(value: any, length: number): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      let isValid: boolean = true;
      if (length === undefined || length === null) {
        reject('The min length wasn\'t informed.');
        return;
      }
      if (!value || !value.length || value.length < length) {
        isValid = false;
      }
      if (!isValid) {
        resolve({
          message: 'The length is lower than the minimum length'
        });
      } else {
        resolve();
      }
    });
  }
}
