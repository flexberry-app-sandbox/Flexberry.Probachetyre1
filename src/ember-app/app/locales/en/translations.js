import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probachetyre',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probachetyre',
          title: 'Probachetyre'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
