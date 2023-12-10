import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probachetyre-гость', 'Unit | Model | i-i-s-probachetyre-гость', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
