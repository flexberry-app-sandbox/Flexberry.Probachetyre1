import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probachetyre-гость-l');
  this.route('i-i-s-probachetyre-гость-e',
  { path: 'i-i-s-probachetyre-гость-e/:id' });
  this.route('i-i-s-probachetyre-гость-e.new',
  { path: 'i-i-s-probachetyre-гость-e/new' });
  this.route('i-i-s-probachetyre-должности-l');
  this.route('i-i-s-probachetyre-должности-e',
  { path: 'i-i-s-probachetyre-должности-e/:id' });
  this.route('i-i-s-probachetyre-должности-e.new',
  { path: 'i-i-s-probachetyre-должности-e/new' });
  this.route('i-i-s-probachetyre-карты-l');
  this.route('i-i-s-probachetyre-карты-e',
  { path: 'i-i-s-probachetyre-карты-e/:id' });
  this.route('i-i-s-probachetyre-карты-e.new',
  { path: 'i-i-s-probachetyre-карты-e/new' });
  this.route('i-i-s-probachetyre-комната-l');
  this.route('i-i-s-probachetyre-комната-e',
  { path: 'i-i-s-probachetyre-комната-e/:id' });
  this.route('i-i-s-probachetyre-комната-e.new',
  { path: 'i-i-s-probachetyre-комната-e/new' });
  this.route('i-i-s-probachetyre-сотрудник-l');
  this.route('i-i-s-probachetyre-сотрудник-e',
  { path: 'i-i-s-probachetyre-сотрудник-e/:id' });
  this.route('i-i-s-probachetyre-сотрудник-e.new',
  { path: 'i-i-s-probachetyre-сотрудник-e/new' });
  this.route('i-i-s-probachetyre-форма-рег-входа-l');
  this.route('i-i-s-probachetyre-форма-рег-входа-e',
  { path: 'i-i-s-probachetyre-форма-рег-входа-e/:id' });
  this.route('i-i-s-probachetyre-форма-рег-входа-e.new',
  { path: 'i-i-s-probachetyre-форма-рег-входа-e/new' });
  this.route('i-i-s-probachetyre-форма-рег-карт-l');
  this.route('i-i-s-probachetyre-форма-рег-карт-e',
  { path: 'i-i-s-probachetyre-форма-рег-карт-e/:id' });
  this.route('i-i-s-probachetyre-форма-рег-карт-e.new',
  { path: 'i-i-s-probachetyre-форма-рег-карт-e/new' });
});

export default Router;
