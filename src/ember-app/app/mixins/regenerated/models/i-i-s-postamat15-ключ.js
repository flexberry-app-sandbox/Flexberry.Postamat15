import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКлюч: DS.attr('number'),
  пользователь: DS.belongsTo('i-i-s-postamat15-пользователь', { inverse: null, async: false }),
  посылка: DS.belongsTo('i-i-s-postamat15-посылка', { inverse: null, async: false })
});

export let ValidationRules = {
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat15-ключ.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat15-ключ.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat15-ключ.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-postamat15-уведомление'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлючE', 'i-i-s-postamat15-ключ', {
    
  });

  modelClass.defineProjection('КлючL', 'i-i-s-postamat15-ключ', {
    сгенКлюч: attr('Сген ключ', { index: 0 }),
    уведомление: attr('Уведомление', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    посылка: belongsTo('i-i-s-postamat15-посылка', 'Номер', {
      номер: attr('Номер', { index: 4 })
    }, { index: -1, hidden: true }),
    пользователь: belongsTo('i-i-s-postamat15-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    хранение: belongsTo('i-i-s-postamat15-хранение', 'Продления', {
      продления: attr('Продления', { index: 6 }),
      датаНачала: attr('Дата начала хранения', { index: 7 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
