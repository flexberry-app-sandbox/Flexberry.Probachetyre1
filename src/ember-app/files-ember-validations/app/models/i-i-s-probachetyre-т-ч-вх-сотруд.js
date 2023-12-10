import {
  defineNamespace,
  defineProjections,
  Model as ТЧВхСотрудMixin
} from '../mixins/regenerated/models/i-i-s-probachetyre-т-ч-вх-сотруд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧВхСотрудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
