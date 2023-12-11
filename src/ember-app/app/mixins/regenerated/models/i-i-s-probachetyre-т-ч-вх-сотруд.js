import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-probachetyre-сотрудник', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-probachetyre-форма-рег-входа', { inverse: 'тЧВхСотруд', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-probachetyre-т-ч-вх-сотруд.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-probachetyre-т-ч-вх-сотруд.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧВхСотрудE', 'i-i-s-probachetyre-т-ч-вх-сотруд', {
    сотрудник: belongsTo('i-i-s-probachetyre-сотрудник', 'Сотрудник', {
      должности: belongsTo('i-i-s-probachetyre-должности', '', {
        должность: attr('', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' })
  });
};
