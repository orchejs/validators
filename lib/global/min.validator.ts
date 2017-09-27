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
 * Validates that the value should be greater than the reference number.
 */
export class MinValidator implements Validator {
  /**
   * Executes the validation, verifing if the value is greater than the validatorParams.
   * 
   * @param value value to be evaluated
   * @param minValue min reference value.
   * @returns a Promise with the ValidationError if happened any.
   */
  public validate(value: any, minValue: any): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      if (!minValue) {
        reject('The reference value was not informed.');
        return;
      }
      if (!value || value < minValue) {
        const response: ValidatorError = {
          value,
          message: `The value is less than ${minValue}`,
        };
        resolve(response);
        return;
      }
      resolve();
    });    
  }
}
