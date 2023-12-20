import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as КлючMixin
} from '../mixins/regenerated/models/i-i-s-postamat15-ключ';

import УведомлениеModel from './i-i-s-postamat15-уведомление';

let Model = УведомлениеModel.extend(КлючMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
