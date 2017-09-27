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
 * Validate if a value is null or undefined.
 */
export class NotNullValidator implements Validator {
  /**
   * Validate if a value is null or undefined.
   * 
   * @param value value that will be performed the validations
   */
  validate(value: any): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      if (value === null || value === undefined) {
        resolve({
          message: 'Value was null or undefined.'
        });
        return;
      }
      resolve();
    });
  }
}
