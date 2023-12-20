import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat15-статус'),
  пользователь: DS.belongsTo('i-i-s-postamat15-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat15-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat15-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat15-посылка.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat15-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    пользователь: belongsTo('i-i-s-postamat15-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПосылкаL', 'i-i-s-postamat15-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    пользователь: belongsTo('i-i-s-postamat15-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
