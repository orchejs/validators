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
 * Validates if a value is not higher than a number.
 */
export class MaxValidator implements Validator {
  /**
   * Executes the validation, verifing if the value is less than the maxValue.
   * 
   * @param value value to be evaluated
   * @param maxValue max reference value 
   * @returns a Promise with the ValidationError if happened any.
   */
  public validate(value: number, maxValue: number): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      if (!maxValue) {
        reject('The reference value was not informed.');
        return;
      }
      if (value > maxValue) {
        const response: ValidatorError = {
          value,
          message: `The value is greater than ${maxValue}`,
        };
        resolve(response);
      } else {
        resolve();
      }
    });    
  }
}
