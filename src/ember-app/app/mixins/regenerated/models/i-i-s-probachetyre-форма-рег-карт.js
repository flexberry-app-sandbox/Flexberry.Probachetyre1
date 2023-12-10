import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  гость: DS.belongsTo('i-i-s-probachetyre-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probachetyre-карты', { inverse: null, async: false }),
  комната: DS.belongsTo('i-i-s-probachetyre-комната', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-probachetyre-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-карт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-карт.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-карт.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-карт.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probachetyre-форма-рег-карт.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегКартE', 'i-i-s-probachetyre-форма-рег-карт', {
    дата: attr('Дата', { index: 0 }),
    карты: belongsTo('i-i-s-probachetyre-карты', 'Карта', {

    }, { index: 1, displayMemberPath: 'код карты' }),
    комната: belongsTo('i-i-s-probachetyre-комната', 'Комната', {

    }, { index: 2, displayMemberPath: 'номер' }),
    гость: belongsTo('i-i-s-probachetyre-гость', 'Гость', {

    }, { index: 3, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-probachetyre-сотрудник', 'Ответственный', {

    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ФормаРегКартL', 'i-i-s-probachetyre-форма-рег-карт', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probachetyre-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true }),
    карты: belongsTo('i-i-s-probachetyre-карты', 'Код карты', {
      кодКарты: attr('Код карты', { index: 2 })
    }, { index: -1, hidden: true }),
    гость: belongsTo('i-i-s-probachetyre-гость', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-probachetyre-сотрудник', 'Ответственный', {
      фамилия: attr('Ответственный', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
