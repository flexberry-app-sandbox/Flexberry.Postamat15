import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  хранение: DS.belongsTo('i-i-s-postamat15-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat15-постамат', { inverse: 'регистрХран', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat15-регистр-хран.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat15-регистр-хран.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat15-регистр-хран.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрХранE', 'i-i-s-postamat15-регистр-хран', {
    номер: attr('Номер', { index: 0 }),
    хранение: belongsTo('i-i-s-postamat15-хранение', 'Хранение', {
      продления: attr('Продления', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'продления' })
  });
};
