import { expect } from 'chai';
import { NotNullValidator, ValidatorRunner } from '../';

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

    it('Should run a simple validation that results in an error.', async () => {
      let result = await validatorRunner.runValidations('has value', 'field1', [ { validator: NotNullValidator } ]);
      expect(result).to.be.length(1);
    })
  });

});
