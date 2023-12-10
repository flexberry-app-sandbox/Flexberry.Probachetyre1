import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧВхСотрудMixin
} from '../mixins/regenerated/models/i-i-s-probachetyre-т-ч-вх-сотруд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧВхСотрудMixin, Validations, {
});

defineProjections(Model);

export default Model;
