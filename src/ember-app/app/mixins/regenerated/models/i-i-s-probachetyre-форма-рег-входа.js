import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комната: DS.belongsTo('i-i-s-probachetyre-комната', { inverse: null, async: false }),
  тЧВхСотруд: DS.hasMany('i-i-s-probachetyre-т-ч-вх-сотруд', { inverse: 'формаРегВхода', async: false }),
  тЧРегВхГост: DS.hasMany('i-i-s-probachetyre-т-ч-рег-вх-гост', { inverse: 'формаРегВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧВхСотруд: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-входа.validations.тЧВхСотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧРегВхГост: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-входа.validations.тЧРегВхГост.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегВходаE', 'i-i-s-probachetyre-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probachetyre-комната', 'Комната', {

    }, { index: 1, displayMemberPath: 'номер' }),
    тЧРегВхГост: hasMany('i-i-s-probachetyre-т-ч-рег-вх-гост', 'Регистрация входа гостей', {
      гость: belongsTo('i-i-s-probachetyre-гость', 'Гость', {

      }, { index: 0, displayMemberPath: 'фамилия' }),
      карты: belongsTo('i-i-s-probachetyre-карты', 'Карты', {

      }, { index: 1, displayMemberPath: 'код карты' })
    }),
    тЧВхСотруд: hasMany('i-i-s-probachetyre-т-ч-вх-сотруд', 'Регистрация входа сотрудников', {
      сотрудник: belongsTo('i-i-s-probachetyre-сотрудник', 'Сотрудник', {
        должности: belongsTo('i-i-s-probachetyre-должности', '', {
          должность: attr('Должность', { index: 1 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('ФормаРегВходаL', 'i-i-s-probachetyre-форма-рег-входа', {
    дата: attr('Дата', { index: 0 })
  });
};
