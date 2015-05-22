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

  .config(function($datepickerProvider, $timepickerProvider, $selectProvider) {
    //Datepicker directive settings
    angular.extend($datepickerProvider.defaults, {
      startWeek: 1,
      maxDate: 'today',
      //testing purposes
      //trigger: 'click',
      autoclose: true
    });
    //TImepicker directive settings
    angular.extend($timepickerProvider.defaults, {
      timeType: 'number',
      length: 3,
      arrowBehavior: 'pager',
      timeFormat: 'HH:mm',
      placement: 'auto',      
      template: 'views/partials/timepicker.html'
    });
    //ngStrap select directive settings
    angular.extend($selectProvider.defaults, {
      placement: 'bottom',
      placeholder: 'Wybierz e-mail'
    });
  });
