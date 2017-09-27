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
 * teste
 */
export interface ValidatorDetails {
  /**
   * Class that will execute the validation. Must implements the Validator interface.
   */
  validator: any;
  /**
   * Parameters that will be passed to the validator, for example: max and min values
   */
  parameters?: any;
  /**
   * Option to customize the message that will be replied in case of an unmet validation. 
   * If not informed it will send the default message from validator implementation.
   */
  customMessage?: string;
}
