import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat15.caption'),
          title: i18n.t('forms.application.sitemap.postamat15.title'),
          children: [{
            link: 'i-i-s-postamat15-посылка-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-посылка-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat15-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-постамат-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-postamat15-ячейка-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-ячейка-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-postamat15-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-служба-доставки-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat15-уведомление-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-уведомление-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat15-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-логистика-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat15-ключ-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-ключ-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-postamat15-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-пользователь-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat15-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat15.i-i-s-postamat15-хранение-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})