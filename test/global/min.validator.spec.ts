/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { MinValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('MinValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(() => {
    details = {
      validator: MinValidator,
      parameters: 10
    };
  });

  describe('#validate', () => {
    it('Should result in error if minValue is undefined', async () => {
      details.parameters = undefined;
      try {
        const result = await validatorRunner.runValidations(10, undefined, [details]);
      } catch (error) {
        expect(error).to.be.not.undefined;
      }
    });

    it('Should pass in error if value is undefined', async () => {
      const result = await validatorRunner.runValidations(undefined, undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is lower than 10', async () => {
      const result = await validatorRunner.runValidations(9, undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should pass if value is higher than min', async () => {
      const result = await validatorRunner.runValidations(30, undefined, [details]);
      expect(result).to.be.length(0);
    });
  });
});
