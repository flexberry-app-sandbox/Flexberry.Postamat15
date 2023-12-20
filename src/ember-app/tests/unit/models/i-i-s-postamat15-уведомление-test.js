import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat15-уведомление', 'Unit | Model | i-i-s-postamat15-уведомление', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat15-ключ',
    'model:i-i-s-postamat15-логистика',
    'model:i-i-s-postamat15-пользователь',
    'model:i-i-s-postamat15-постамат',
    'model:i-i-s-postamat15-посылка',
    'model:i-i-s-postamat15-регистр-посылки',
    'model:i-i-s-postamat15-регистр-хран',
    'model:i-i-s-postamat15-служба-доставки',
    'model:i-i-s-postamat15-уведомление',
    'model:i-i-s-postamat15-хранение',
    'model:i-i-s-postamat15-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
