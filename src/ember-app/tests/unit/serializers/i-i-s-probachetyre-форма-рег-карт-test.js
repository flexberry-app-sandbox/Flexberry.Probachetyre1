import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probachetyre-форма-рег-карт', 'Unit | Serializer | i-i-s-probachetyre-форма-рег-карт', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probachetyre-форма-рег-карт',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probachetyre-вид-карты',

    'model:i-i-s-probachetyre-гость',
    'model:i-i-s-probachetyre-должности',
    'model:i-i-s-probachetyre-карты',
    'model:i-i-s-probachetyre-комната',
    'model:i-i-s-probachetyre-сотрудник',
    'model:i-i-s-probachetyre-т-ч-вх-сотруд',
    'model:i-i-s-probachetyre-т-ч-рег-вх-гост',
    'model:i-i-s-probachetyre-форма-рег-входа',
    'model:i-i-s-probachetyre-форма-рег-карт',
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
