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
 * Performs email validation.
 */
export class EmailValidator implements Validator {
  /**
   * Validates if the email format is valid.
   * 
   * @param {string} value email to be validated.
   * @returns a Promise with the ValidationError if the email is not valid.
   */
  public validate(value: string): Promise<ValidatorError> {
    return new Promise((resolve, reject) => {
      let isValid: boolean = true;

      if (!value) {
        isValid = false;
      } else {
        isValid = /\S+@\S+\.\S+/.test(value);
      }

      if (!isValid) {
        resolve({
          value,
          message: 'Email not valid'
        });
      } else {
        resolve();
      }
    });
  }
}
