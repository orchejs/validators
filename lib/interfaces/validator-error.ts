/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.org/orchejs/validators/LICENSE
 */

/**
 * @interface
 * @description
 * Structure of a validator error.
 */
export interface ValidatorError {
  /**
   * Validator message. It is the only one required parameter.
   */
  message: string;
  /**
   * Name of the field to help to better identify.
   */
  fieldName?: string;
  /**
   * Details message about the validation problem.
   */
  details?: string;
  /**
   * Value that were validated against the Validator.
   */
  value?: any;
}
