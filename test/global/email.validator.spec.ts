/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/orchejs/validators/LICENSE
 */

import { expect } from 'chai';
import { EmailValidator, ValidatorError, ValidatorRunner } from '../../';

describe('EmailValidator', () => {
  let validatorRunner: ValidatorRunner;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  describe('#validate', () => {
    it('Should result in error if the email value is undefined', async () => {
      let result = await validatorRunner.runValidations(undefined, 'email field', [ {validator: EmailValidator} ]);
      expect(result).to.be.length(1);
    });

    it('Should result in error if the email is not valid', async () => {
      let result = await validatorRunner.runValidations('@email.com', 'email field', [ {validator: EmailValidator} ]);
      expect(result).to.be.length(1);
    });

    it('Should pass if the email is valid', async () => {
      let result = await validatorRunner.runValidations('myemail@email.com', 'email field', [ {validator: EmailValidator} ]);
      expect(result).to.be.length(0);
    });     
  });
});
