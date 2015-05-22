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
    $scope.joblist = [];
    $scope.clients = [{
      name: 'Damian Prus',
      email: 'prus.damian@gmail.com'
    }, {
      name: 'Kasia Dziadek',
      email: 'kasiadzia@gmail.com'
    }];

    $scope.addJob = function (job) {
      $scope.joblist.push(job);
      $scope.job.new = '';
    };

    $scope.removeJob = function (index) {
      $scope.joblist.splice(index, 1);
    };

    $scope.sendReport = function() {
      console.log($scope);
    };
  });
