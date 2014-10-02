'use strict';

/**
 * @ngdoc function
 * @name pulleyCalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pulleyCalcApp
 */
angular.module('pulleyCalcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.staticPulleyEffect = 95;
    $scope.movingPulleyEffect = 95;
    $scope.brakeEffect = 65;
    $scope.multiplierPulleyEffect = 95;

    function multiplier() {
        var multiPE = $scope.multiplierPulleyEffect/100;
        var bE = $scope.brakeEffect/100;
        return 1 + multiPE + multiPE * bE;
    }

    function fiveToOneBase(forceIn) {
        var mpE = $scope.movingPulleyEffect/100;
        var spE = $scope.staticPulleyEffect/100;
        var strand1 = forceIn * mpE;
        var strand2 = strand1 * spE;
        var strand3 = strand2 * mpE;
        var strand4 = strand3 * spE;

        return forceIn + strand1 + strand2 + strand3 + strand4;
    }

    $scope.actualMA = function() {
        return fiveToOneBase(multiplier());
    };
  });
