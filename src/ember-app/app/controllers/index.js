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
          caption: i18n.t('forms.application.sitemap.probachetyre.caption'),
          title: i18n.t('forms.application.sitemap.probachetyre.title'),
          children: [{
            link: 'i-i-s-probachetyre-комната-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-комната-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probachetyre-должности-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-должности-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-probachetyre-форма-рег-карт-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-форма-рег-карт-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-форма-рег-карт-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-probachetyre-гость-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-гость-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-probachetyre-карты-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-карты-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-probachetyre-форма-рег-входа-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-форма-рег-входа-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-форма-рег-входа-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-probachetyre-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.probachetyre.i-i-s-probachetyre-сотрудник-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.klienty.caption'),
          title: i18n.t('forms.application.sitemap.klienty.title'),
          children: [{
            link: 'i-i-s-probachetyre-гость-l',
            caption: i18n.t('forms.application.sitemap.klienty.i-i-s-probachetyre-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.klienty.i-i-s-probachetyre-гость-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})