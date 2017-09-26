/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.org/orchejs/validators/LICENSE
 */
import { ValidatorError } from './';

/**
 * @description
 * 
 * @interface
 */
export interface Validator {
  /**
   * 
   */
  validate(params: any): Promise<ValidatorError>;
}
