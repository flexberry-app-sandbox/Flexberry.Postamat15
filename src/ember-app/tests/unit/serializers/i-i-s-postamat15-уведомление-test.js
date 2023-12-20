import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat15-уведомление', 'Unit | Serializer | i-i-s-postamat15-уведомление', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat15-уведомление',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat15-оплата',
    'transform:i-i-s-postamat15-состояние',
    'transform:i-i-s-postamat15-статус',
    'transform:i-i-s-postamat15-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
