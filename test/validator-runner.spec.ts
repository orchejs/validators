import { expect } from 'chai';
import { NotNullValidator, Validator, ValidatorError, ValidatorRunner } from '../';

class ForceErrorValidator implements Validator {
  validate(params: any): Promise<ValidatorError> {
    throw new Error('Force Error');
  }
}

describe('ValidatorRunner', () => {
  let validatorRunner: ValidatorRunner;

  before(() => {
    validatorRunner = new ValidatorRunner();
  });

  describe('#runValidations', () => {
    it('Should execute without errors if there are no validators', async () => {
      let result = await validatorRunner.runValidations('some value', 'some field', []);
      expect(result).to.be.length(0);
    });

    it('Should run a simple validation that results in an error.', async () => {
      let result = await validatorRunner.runValidations(undefined, 'field1', [
        { validator: NotNullValidator }
      ]);
      expect(result).to.be.length(1);
    });

    it('Should reject and interrupt the validation flow, as an exception happened', async () => {
      let result;
      try {
        result = await validatorRunner.runValidations('some value', 'field1', [
          { validator: ForceErrorValidator }
        ]);
      } catch (err) {
        expect(result).to.be.undefined;
        expect(err).to.be.not.undefined;
      }
    });

    it('Should run without validator errors', async () => {
      let result = await validatorRunner.runValidations('some value', 'field1', [
        { validator: NotNullValidator }
      ]);
      expect(result).to.be.length(0);
    });
  });
});
