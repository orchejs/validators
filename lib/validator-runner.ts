/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { ValidatorError, ValidatorDetails } from './interfaces';

/**
 * @class
 * @description
 * Validation runner. Tests the value against all informed validators.
 */
export class ValidatorRunner {
  /**
   * @description
   * Runs the validations and returns an array of {@link ValidatorError}. If no errors are found
   * then it returns an empty array.
   *  
   * @param value value that will be validated 
   * @param fieldName field name being validated, for messages purposes
   * @param validators array of validators
   * @returns a Promise of ValidatorError array.
   */
  runValidations(
    value: any,
    fieldName: string = '',
    validators: ValidatorDetails[]
  ): Promise<ValidatorError[]> {
    return new Promise(async (resolve, reject) => {
      const validatorErrors: ValidatorError[] = [];
      if (!validators || validators.length === 0) {
        resolve(validatorErrors);
        return;
      }
      for (const validatorDetails of validators) {
        const validator = new validatorDetails.validator();
        let validatorError: ValidatorError;
        try {
          validatorError = await validator.validate(value, validatorDetails.parameters);
          if (validatorError) {
            validatorError.fieldName = fieldName;
            validatorError.message = validatorDetails.customMessage || validatorError.message;
            validatorErrors.push(validatorError);
          }
        } catch (error) {
          reject(error);
          return;
        }
      }
      resolve(validatorErrors);
    });
  }
}
