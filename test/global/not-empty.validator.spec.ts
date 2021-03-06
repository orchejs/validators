/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { NotEmptyValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('NotEmptyValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(() => {
    details = {
      validator: NotEmptyValidator
    };
  });

  describe('#validate', () => {
    it('Should result in error if value is undefined', async () => {
      const result = await validatorRunner.runValidations(undefined, undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is blank === \'\'', async () => {
      const result = await validatorRunner.runValidations('', undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is filled by spaces === \'   \'', async () => {
      const result = await validatorRunner.runValidations('    ', undefined, [details]);
      expect(result).to.be.length(1);
    });

    it('Should pass if value is not empty', async () => {
      const result = await validatorRunner.runValidations('test', undefined, [details]);
      expect(result).to.be.length(0);
    });
  });
});
