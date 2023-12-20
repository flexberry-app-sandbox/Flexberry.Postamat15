import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat15-ключ-l');
  this.route('i-i-s-postamat15-ключ-e',
  { path: 'i-i-s-postamat15-ключ-e/:id' });
  this.route('i-i-s-postamat15-ключ-e.new',
  { path: 'i-i-s-postamat15-ключ-e/new' });
  this.route('i-i-s-postamat15-логистика-l');
  this.route('i-i-s-postamat15-логистика-e',
  { path: 'i-i-s-postamat15-логистика-e/:id' });
  this.route('i-i-s-postamat15-логистика-e.new',
  { path: 'i-i-s-postamat15-логистика-e/new' });
  this.route('i-i-s-postamat15-пользователь-l');
  this.route('i-i-s-postamat15-пользователь-e',
  { path: 'i-i-s-postamat15-пользователь-e/:id' });
  this.route('i-i-s-postamat15-пользователь-e.new',
  { path: 'i-i-s-postamat15-пользователь-e/new' });
  this.route('i-i-s-postamat15-постамат-l');
  this.route('i-i-s-postamat15-постамат-e',
  { path: 'i-i-s-postamat15-постамат-e/:id' });
  this.route('i-i-s-postamat15-постамат-e.new',
  { path: 'i-i-s-postamat15-постамат-e/new' });
  this.route('i-i-s-postamat15-посылка-l');
  this.route('i-i-s-postamat15-посылка-e',
  { path: 'i-i-s-postamat15-посылка-e/:id' });
  this.route('i-i-s-postamat15-посылка-e.new',
  { path: 'i-i-s-postamat15-посылка-e/new' });
  this.route('i-i-s-postamat15-служба-доставки-l');
  this.route('i-i-s-postamat15-служба-доставки-e',
  { path: 'i-i-s-postamat15-служба-доставки-e/:id' });
  this.route('i-i-s-postamat15-служба-доставки-e.new',
  { path: 'i-i-s-postamat15-служба-доставки-e/new' });
  this.route('i-i-s-postamat15-уведомление-l');
  this.route('i-i-s-postamat15-уведомление-e',
  { path: 'i-i-s-postamat15-уведомление-e/:id' });
  this.route('i-i-s-postamat15-уведомление-e.new',
  { path: 'i-i-s-postamat15-уведомление-e/new' });
  this.route('i-i-s-postamat15-хранение-l');
  this.route('i-i-s-postamat15-хранение-e',
  { path: 'i-i-s-postamat15-хранение-e/:id' });
  this.route('i-i-s-postamat15-хранение-e.new',
  { path: 'i-i-s-postamat15-хранение-e/new' });
  this.route('i-i-s-postamat15-ячейка-l');
  this.route('i-i-s-postamat15-ячейка-e',
  { path: 'i-i-s-postamat15-ячейка-e/:id' });
  this.route('i-i-s-postamat15-ячейка-e.new',
  { path: 'i-i-s-postamat15-ячейка-e/new' });
});

export default Router;
