import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧРегВхГостMixin
} from '../mixins/regenerated/models/i-i-s-probachetyre-т-ч-рег-вх-гост';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧРегВхГостMixin, Validations, {
});

defineProjections(Model);

export default Model;
