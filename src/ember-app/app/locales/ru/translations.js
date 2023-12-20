import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPostamat15КлючLForm from './forms/i-i-s-postamat15-ключ-l';
import IISPostamat15ЛогистикаLForm from './forms/i-i-s-postamat15-логистика-l';
import IISPostamat15ПользовательLForm from './forms/i-i-s-postamat15-пользователь-l';
import IISPostamat15ПостаматLForm from './forms/i-i-s-postamat15-постамат-l';
import IISPostamat15ПосылкаLForm from './forms/i-i-s-postamat15-посылка-l';
import IISPostamat15СлужбаДоставкиLForm from './forms/i-i-s-postamat15-служба-доставки-l';
import IISPostamat15УведомлениеLForm from './forms/i-i-s-postamat15-уведомление-l';
import IISPostamat15ХранениеLForm from './forms/i-i-s-postamat15-хранение-l';
import IISPostamat15ЯчейкаLForm from './forms/i-i-s-postamat15-ячейка-l';
import IISPostamat15КлючEForm from './forms/i-i-s-postamat15-ключ-e';
import IISPostamat15ЛогистикаEForm from './forms/i-i-s-postamat15-логистика-e';
import IISPostamat15ПользовательEForm from './forms/i-i-s-postamat15-пользователь-e';
import IISPostamat15ПостаматEForm from './forms/i-i-s-postamat15-постамат-e';
import IISPostamat15ПосылкаEForm from './forms/i-i-s-postamat15-посылка-e';
import IISPostamat15СлужбаДоставкиEForm from './forms/i-i-s-postamat15-служба-доставки-e';
import IISPostamat15УведомлениеEForm from './forms/i-i-s-postamat15-уведомление-e';
import IISPostamat15ХранениеEForm from './forms/i-i-s-postamat15-хранение-e';
import IISPostamat15ЯчейкаEForm from './forms/i-i-s-postamat15-ячейка-e';
import IISPostamat15КлючModel from './models/i-i-s-postamat15-ключ';
import IISPostamat15ЛогистикаModel from './models/i-i-s-postamat15-логистика';
import IISPostamat15ПользовательModel from './models/i-i-s-postamat15-пользователь';
import IISPostamat15ПостаматModel from './models/i-i-s-postamat15-постамат';
import IISPostamat15ПосылкаModel from './models/i-i-s-postamat15-посылка';
import IISPostamat15РегистрПосылкиModel from './models/i-i-s-postamat15-регистр-посылки';
import IISPostamat15РегистрХранModel from './models/i-i-s-postamat15-регистр-хран';
import IISPostamat15СлужбаДоставкиModel from './models/i-i-s-postamat15-служба-доставки';
import IISPostamat15УведомлениеModel from './models/i-i-s-postamat15-уведомление';
import IISPostamat15ХранениеModel from './models/i-i-s-postamat15-хранение';
import IISPostamat15ЯчейкаModel from './models/i-i-s-postamat15-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat15-ключ': IISPostamat15КлючModel,
    'i-i-s-postamat15-логистика': IISPostamat15ЛогистикаModel,
    'i-i-s-postamat15-пользователь': IISPostamat15ПользовательModel,
    'i-i-s-postamat15-постамат': IISPostamat15ПостаматModel,
    'i-i-s-postamat15-посылка': IISPostamat15ПосылкаModel,
    'i-i-s-postamat15-регистр-посылки': IISPostamat15РегистрПосылкиModel,
    'i-i-s-postamat15-регистр-хран': IISPostamat15РегистрХранModel,
    'i-i-s-postamat15-служба-доставки': IISPostamat15СлужбаДоставкиModel,
    'i-i-s-postamat15-уведомление': IISPostamat15УведомлениеModel,
    'i-i-s-postamat15-хранение': IISPostamat15ХранениеModel,
    'i-i-s-postamat15-ячейка': IISPostamat15ЯчейкаModel
  },

  'application-name': 'Postamat15',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Postamat15',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat15',
          title: 'Postamat15'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        postamat15: {
          caption: 'Postamat15',
          title: 'Postamat15',
          'i-i-s-postamat15-посылка-l': {
            caption: 'Посылка',
            title: ''
          },
          'i-i-s-postamat15-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat15-ячейка-l': {
            caption: 'Ячейка',
            title: ''
          },
          'i-i-s-postamat15-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat15-уведомление-l': {
            caption: 'Уведомление',
            title: ''
          },
          'i-i-s-postamat15-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat15-ключ-l': {
            caption: 'Ключ',
            title: ''
          },
          'i-i-s-postamat15-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat15-хранение-l': {
            caption: 'Хранение',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-postamat15-ключ-l': IISPostamat15КлючLForm,
    'i-i-s-postamat15-логистика-l': IISPostamat15ЛогистикаLForm,
    'i-i-s-postamat15-пользователь-l': IISPostamat15ПользовательLForm,
    'i-i-s-postamat15-постамат-l': IISPostamat15ПостаматLForm,
    'i-i-s-postamat15-посылка-l': IISPostamat15ПосылкаLForm,
    'i-i-s-postamat15-служба-доставки-l': IISPostamat15СлужбаДоставкиLForm,
    'i-i-s-postamat15-уведомление-l': IISPostamat15УведомлениеLForm,
    'i-i-s-postamat15-хранение-l': IISPostamat15ХранениеLForm,
    'i-i-s-postamat15-ячейка-l': IISPostamat15ЯчейкаLForm,
    'i-i-s-postamat15-ключ-e': IISPostamat15КлючEForm,
    'i-i-s-postamat15-логистика-e': IISPostamat15ЛогистикаEForm,
    'i-i-s-postamat15-пользователь-e': IISPostamat15ПользовательEForm,
    'i-i-s-postamat15-постамат-e': IISPostamat15ПостаматEForm,
    'i-i-s-postamat15-посылка-e': IISPostamat15ПосылкаEForm,
    'i-i-s-postamat15-служба-доставки-e': IISPostamat15СлужбаДоставкиEForm,
    'i-i-s-postamat15-уведомление-e': IISPostamat15УведомлениеEForm,
    'i-i-s-postamat15-хранение-e': IISPostamat15ХранениеEForm,
    'i-i-s-postamat15-ячейка-e': IISPostamat15ЯчейкаEForm
  },

});

export default translations;
