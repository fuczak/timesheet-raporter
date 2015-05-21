'use strict';

/**
 * @ngdoc overview
 * @name reportEmailSenderApp
 * @description
 * # reportEmailSenderApp
 *
 * Main module of the application.
 */
angular.module('reportEmailSenderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'mgcrea.ngStrap',
    'monospaced.elastic'
  ])

  .config(function($datepickerProvider, $timepickerProvider) {
    //Datepicker directive settings
    angular.extend($datepickerProvider.defaults, {
      startWeek: 1,
      maxDate: 'today',
      autoclose: true
    });
    //TImepicker directive settings
    angular.extend($timepickerProvider.defaults, {
      timeType: 'number',
      length: 3,
      arrowBehavior: 'picker',
      timeFormat: 'HH:mm',
      placement: 'auto',
      template: 'views/partials/timepicker.html'
    });
  });
