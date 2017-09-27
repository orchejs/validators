/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { MaxLengthValidator, ValidatorError, ValidatorRunner, ValidatorDetails } from '../../';

describe('MaxLengthValidator', () => {
  let validatorRunner: ValidatorRunner;
  let details: ValidatorDetails;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  beforeEach(()=> {
    details = {
      validator: MaxLengthValidator,
      parameters: 5
    };
  });

  describe('#validate', () => {
    it('Should result in error if length is undefined', async () => {
      details.parameters = undefined;
      try {
        let result = await validatorRunner.runValidations('test', undefined, [ details ]);
      } catch (error) {
        expect(error).to.be.not.undefined;
      }
    });

    it('Should result in error if value is not undefined', async () => {
      let result = await validatorRunner.runValidations(undefined, undefined, [ details ]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value length is higher than 5', async () => {
      let result = await validatorRunner.runValidations('this text is higher than 5 positions', undefined, [ details ]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if value is an array with length higher than 5', async () => {
      let result = await validatorRunner.runValidations([1,2,3,4,5,6], undefined, [ details ]);
      expect(result).to.be.length(1);
    });    

    it('Should pass if value is lower than max', async () => {
      let result = await validatorRunner.runValidations('test', undefined, [ details ]);
      expect(result).to.be.length(0);
    });     
  });
});
