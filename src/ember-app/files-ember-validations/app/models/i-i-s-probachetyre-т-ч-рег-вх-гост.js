import {
  defineNamespace,
  defineProjections,
  Model as ТЧРегВхГостMixin
} from '../mixins/regenerated/models/i-i-s-probachetyre-т-ч-рег-вх-гост';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРегВхГостMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
