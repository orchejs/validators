import { expect } from 'chai';
import { ValidatorRunner } from '../'

describe('ValidatorRunner', () => {
  let validatorRunner: ValidatorRunner;

  before(()=> {
    validatorRunner = new ValidatorRunner();
  });

  describe('#runValidations', () => {
    it('Should resolve without errors if there are no validators', async () => {
      let result = await validatorRunner.runValidations('some value', 'some field', []);
      expect(result).to.be.length(0);
    });
  });

});
