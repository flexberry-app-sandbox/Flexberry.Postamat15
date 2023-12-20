import { Serializer as КлючSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat15-ключ';
import УведомлениеSerializer from './i-i-s-postamat15-уведомление';

export default УведомлениеSerializer.extend(КлючSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
