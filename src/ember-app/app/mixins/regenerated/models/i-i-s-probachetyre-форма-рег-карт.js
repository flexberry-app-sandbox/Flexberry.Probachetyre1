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
    дата: attr('Дата', { index: 0 })
  });

  modelClass.defineProjection('ФормаРегКартL', 'i-i-s-probachetyre-форма-рег-карт', {
    дата: attr('Дата', { index: 0 })
  });
};
