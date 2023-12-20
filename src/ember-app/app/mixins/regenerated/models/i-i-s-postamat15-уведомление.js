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
    уведомление: attr('Уведомление', { index: 0 }),
    сгенКлюч: attr('Сген ключ', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    хранение: belongsTo('i-i-s-postamat15-хранение', 'Хранение', {
      продления: attr('Продление', { index: 5, hidden: true }),
      датаНачала: attr('Дата начала хранения', { index: 6 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 7 })
    }, { index: 4, displayMemberPath: 'продления' })
  });

  modelClass.defineProjection('УведомлениеL', 'i-i-s-postamat15-уведомление', {
    уведомление: attr('Уведомление', { index: 0 }),
    сгенКлюч: attr('Сген ключ', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    хранение: belongsTo('i-i-s-postamat15-хранение', 'Продление', {
      продления: attr('Продление', { index: 4 }),
      датаНачала: attr('Дата начала хранения', { index: 5 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
