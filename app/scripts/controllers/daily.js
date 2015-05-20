'use strict';

/**
 * @ngdoc function
 * @name reportEmailSenderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reportEmailSenderApp
 */
angular.module('reportEmailSenderApp')
  .controller('DailyCtrl', function ($scope) {
    //Datepicker
    $scope.date = {
      selected: Date.now(),
      today: Date.now()
    };
    //Timepicker
    $scope.time = {
      from: 25200000,
      to: 54000000
    };
    //Joblist
    $scope.joblist = ['Lorem ipsum dolor sit amet bla bla bla.', 'The other one.'];
  });
