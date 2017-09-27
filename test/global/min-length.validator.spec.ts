/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { MinLengthValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('MinLengthValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(() => {
    details = {
      validator: MinLengthValidator,
      parameters: 3
    };
  });

  describe('#validate', () => {
    it('Should result in error if length is undefined', async () => {
      details.parameters = undefined;
      try {
        const result = await validatorRunner.runValidations('test', undefined, [details]);
      } catch (error) {
        expect(error).to.be.not.undefined;
      }
    });

    it('Should result in error if value is not undefined', async () => {
      const result = await validatorRunner.runValidations(undefined, undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value length is lesser than 3', async () => {
      const result = await validatorRunner.runValidations('th', undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is an array with length higher than 3', async () => {
      const result = await validatorRunner.runValidations([1, 2], undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should pass if value is higher than min', async () => {
      const result = await validatorRunner.runValidations('test', undefined, [details]);
      expect(result).to.be.length(0);
    });
  });
});
