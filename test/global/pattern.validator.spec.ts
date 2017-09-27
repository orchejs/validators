/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { PatternValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('PatternValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(() => {
    details = {
      validator: PatternValidator,
      parameters: /(\.com)$/i
    };
  });

  describe('#validate', () => {
    it('Should result in error if regex is undefined', async () => {
      details.parameters = undefined;
      try {
        const result = await validatorRunner.runValidations('access.com', undefined, [details]);
      } catch (error) {
        expect(error).to.be.not.undefined;
      }
    });

    it('Should result in error if the regex is not matched', async () => {
      const result = await validatorRunner.runValidations('test', undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is undefined', async () => {
      const result = await validatorRunner.runValidations(null, undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should pass if value matches the regex', async () => {
      const result = await validatorRunner.runValidations('access.com', undefined, [details]);
      expect(result).to.be.length(0);
    });
  });
});
