import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-probachetyre-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probachetyre-карты', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-probachetyre-форма-рег-входа', { inverse: 'тЧРегВхГост', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-probachetyre-т-ч-рег-вх-гост.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probachetyre-т-ч-рег-вх-гост.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-probachetyre-т-ч-рег-вх-гост.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегВхГостE', 'i-i-s-probachetyre-т-ч-рег-вх-гост', {
    гость: belongsTo('i-i-s-probachetyre-гость', 'Гость', {

    }, { index: 0, displayMemberPath: 'фамилия' }),
    карты: belongsTo('i-i-s-probachetyre-карты', 'Карты', {

    }, { index: 1, displayMemberPath: 'код карты' })
  });
};
