import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКарты: DS.attr('number', { defaultValue: 1 }),
  типКарты: DS.attr('i-i-s-probachetyre-вид-карты')
});

export let ValidationRules = {
  кодКарты: {
    descriptionKey: 'models.i-i-s-probachetyre-карты.validations.кодКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типКарты: {
    descriptionKey: 'models.i-i-s-probachetyre-карты.validations.типКарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартыE', 'i-i-s-probachetyre-карты', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 })
  });

  modelClass.defineProjection('КартыL', 'i-i-s-probachetyre-карты', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 })
  });
};
