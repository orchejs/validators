/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.org/orchejs/validators/LICENSE
 */

/**
 * @description
 * 
 * @interface
 */
export interface ValidatorError {
  /**
   * 
   */
  message: string;
  /**
   * 
   */
  fieldName?: string;
  /**
   * 
   */
  details?: string;
  /**
   * 
   */
  value?: any;
}
