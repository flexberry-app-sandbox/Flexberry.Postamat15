import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сгенКлюч: DS.attr('number'),
  уведомление: DS.attr('string'),
  фИО: DS.attr('string'),
  хранение: DS.belongsTo('i-i-s-postamat15-хранение', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat15-уведомление.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat15-уведомление.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  уведомление: {
    descriptionKey: 'models.i-i-s-postamat15-уведомление.validations.уведомление.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat15-уведомление.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat15-уведомление.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УведомлениеE', 'i-i-s-postamat15-уведомление', {
    
  });

  modelClass.defineProjection('УведомлениеL', 'i-i-s-postamat15-уведомление', {
    
  });
};
