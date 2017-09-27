/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { ValidatorError } from './';

/**
 * @interface
 * @description
 * Validator interface, containing the #validate method, that all validators
 * have to implement.
 */
export interface Validator {
  /**
   * Validate method that must be implemented.
   * @param {any} value this is the value that will be validated.
   * @param {any} validatorParams this param may contains zero, one or more values. It can be used
   * as a reference for the validation.
   * @returns a Promise with the ValidationError if happened any.
   */
  validate(value: any, validatorParams?: any): Promise<ValidatorError>;
}
