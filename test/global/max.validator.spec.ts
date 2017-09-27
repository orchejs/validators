/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { MaxValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('MaxValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(()=> {
    details = {
      validator: MaxValidator,
      parameters: 50
    };
  });

  describe('#validate', () => {
    it('Should result in error if maxValue is undefined', async () => {
      details.parameters = undefined;
      try {
        let result = await validatorRunner.runValidations(10, undefined, [ details ]);
      } catch (error) {
        expect(error).to.be.not.undefined;
      }
    });

    it('Should pass if value is undefined', async () => {
      let result = await validatorRunner.runValidations(undefined, undefined, [ details ]);
      expect(result).to.be.length(0);
    });

    it('Should result in error if value is higher than 50', async () => {
      let result = await validatorRunner.runValidations(100, undefined, [ details ]);
      expect(result).to.be.length(1);
    });

    it('Should pass if value is lower than max', async () => {
      let result = await validatorRunner.runValidations(30, undefined, [ details ]);
      expect(result).to.be.length(0);
    });     
  });
});
