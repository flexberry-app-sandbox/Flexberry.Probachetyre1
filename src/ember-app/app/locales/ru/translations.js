import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbachetyreГостьLForm from './forms/i-i-s-probachetyre-гость-l';
import IISProbachetyreДолжностиLForm from './forms/i-i-s-probachetyre-должности-l';
import IISProbachetyreКартыLForm from './forms/i-i-s-probachetyre-карты-l';
import IISProbachetyreКомнатаLForm from './forms/i-i-s-probachetyre-комната-l';
import IISProbachetyreСотрудникLForm from './forms/i-i-s-probachetyre-сотрудник-l';
import IISProbachetyreФормаРегВходаLForm from './forms/i-i-s-probachetyre-форма-рег-входа-l';
import IISProbachetyreФормаРегКартLForm from './forms/i-i-s-probachetyre-форма-рег-карт-l';
import IISProbachetyreГостьEForm from './forms/i-i-s-probachetyre-гость-e';
import IISProbachetyreДолжностиEForm from './forms/i-i-s-probachetyre-должности-e';
import IISProbachetyreКартыEForm from './forms/i-i-s-probachetyre-карты-e';
import IISProbachetyreКомнатаEForm from './forms/i-i-s-probachetyre-комната-e';
import IISProbachetyreСотрудникEForm from './forms/i-i-s-probachetyre-сотрудник-e';
import IISProbachetyreФормаРегВходаEForm from './forms/i-i-s-probachetyre-форма-рег-входа-e';
import IISProbachetyreФормаРегКартEForm from './forms/i-i-s-probachetyre-форма-рег-карт-e';
import IISProbachetyreГостьModel from './models/i-i-s-probachetyre-гость';
import IISProbachetyreДолжностиModel from './models/i-i-s-probachetyre-должности';
import IISProbachetyreКартыModel from './models/i-i-s-probachetyre-карты';
import IISProbachetyreКомнатаModel from './models/i-i-s-probachetyre-комната';
import IISProbachetyreСотрудникModel from './models/i-i-s-probachetyre-сотрудник';
import IISProbachetyreТЧВхСотрудModel from './models/i-i-s-probachetyre-т-ч-вх-сотруд';
import IISProbachetyreТЧРегВхГостModel from './models/i-i-s-probachetyre-т-ч-рег-вх-гост';
import IISProbachetyreФормаРегВходаModel from './models/i-i-s-probachetyre-форма-рег-входа';
import IISProbachetyreФормаРегКартModel from './models/i-i-s-probachetyre-форма-рег-карт';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probachetyre-гость': IISProbachetyreГостьModel,
    'i-i-s-probachetyre-должности': IISProbachetyreДолжностиModel,
    'i-i-s-probachetyre-карты': IISProbachetyreКартыModel,
    'i-i-s-probachetyre-комната': IISProbachetyreКомнатаModel,
    'i-i-s-probachetyre-сотрудник': IISProbachetyreСотрудникModel,
    'i-i-s-probachetyre-т-ч-вх-сотруд': IISProbachetyreТЧВхСотрудModel,
    'i-i-s-probachetyre-т-ч-рег-вх-гост': IISProbachetyreТЧРегВхГостModel,
    'i-i-s-probachetyre-форма-рег-входа': IISProbachetyreФормаРегВходаModel,
    'i-i-s-probachetyre-форма-рег-карт': IISProbachetyreФормаРегКартModel
  },

  'application-name': 'Probachetyre',

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
        'application-name': 'Probachetyre',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probachetyre',
          title: 'Probachetyre'
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
        probachetyre: {
          caption: 'Probachetyre',
          title: 'Probachetyre',
          'i-i-s-probachetyre-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-probachetyre-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-probachetyre-форма-рег-карт-l': {
            caption: 'Форма рег карт',
            title: ''
          },
          'i-i-s-probachetyre-гость-l': {
            caption: 'Гость',
            title: ''
          },
          'i-i-s-probachetyre-карты-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-probachetyre-форма-рег-входа-l': {
            caption: 'Форма рег входа',
            title: ''
          },
          'i-i-s-probachetyre-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          klienty: {
            caption: 'Klienty',
            title: 'Klienty',
            'i-i-s-probachetyre-гость-l': {
              caption: 'ГостьL',
              title: 'Гость'
            }
          }
        },
        klienty: {
          caption: 'Klienty',
          title: 'Klienty',
          'i-i-s-probachetyre-гость-l': {
            caption: 'ГостьL',
            title: 'Гость'
          }
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probachetyre-комната-l': {
            caption: 'КомнатаL',
            title: 'Комната'
          },
          'i-i-s-probachetyre-должности-l': {
            caption: 'ДолжностиL',
            title: 'Должности'
          },
          'i-i-s-probachetyre-сотрудник-l': {
            caption: 'СотрудникL',
            title: 'Сотрудник'
          },
          'i-i-s-probachetyre-карты-l': {
            caption: 'КартыL',
            title: 'Карты'
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-probachetyre-форма-рег-карт-l': {
            caption: 'ФормаРегКартL',
            title: 'Форма рег карт'
          },
          'i-i-s-probachetyre-форма-рег-входа-l': {
            caption: 'ФормаРегВходаL',
            title: 'Форма рег входа'
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
    'i-i-s-probachetyre-гость-l': IISProbachetyreГостьLForm,
    'i-i-s-probachetyre-должности-l': IISProbachetyreДолжностиLForm,
    'i-i-s-probachetyre-карты-l': IISProbachetyreКартыLForm,
    'i-i-s-probachetyre-комната-l': IISProbachetyreКомнатаLForm,
    'i-i-s-probachetyre-сотрудник-l': IISProbachetyreСотрудникLForm,
    'i-i-s-probachetyre-форма-рег-входа-l': IISProbachetyreФормаРегВходаLForm,
    'i-i-s-probachetyre-форма-рег-карт-l': IISProbachetyreФормаРегКартLForm,
    'i-i-s-probachetyre-гость-e': IISProbachetyreГостьEForm,
    'i-i-s-probachetyre-должности-e': IISProbachetyreДолжностиEForm,
    'i-i-s-probachetyre-карты-e': IISProbachetyreКартыEForm,
    'i-i-s-probachetyre-комната-e': IISProbachetyreКомнатаEForm,
    'i-i-s-probachetyre-сотрудник-e': IISProbachetyreСотрудникEForm,
    'i-i-s-probachetyre-форма-рег-входа-e': IISProbachetyreФормаРегВходаEForm,
    'i-i-s-probachetyre-форма-рег-карт-e': IISProbachetyreФормаРегКартEForm
  },

});

export default translations;
