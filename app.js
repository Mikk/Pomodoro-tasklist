var app = angular.module("PomodoroTimer", []);

app.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){

    $scope.counter = 15000;
    var stopped;

    $scope.countdown = function() {
        stopped = $timeout(function() {
            console.log($scope.counter);
            $scope.counter--;
            if($scope.counter > 0)
                $scope.countdown();
        }, 1000);
    };


    $scope.stop = function(){
        $timeout.cancel(stopped);

    }


}]);

app.filter('formatTimer', function() {
    return function(input)
    {
        function z(n) {return (n<10? '0' : '') + n;}
        var seconds = input % 60;
        var minutes = Math.floor(input / 60);
        var hours = Math.floor(minutes / 60);
        if(z(hours) > 0)
            return (z(hours) +':'+z(minutes)+':'+z(seconds));
        else if(z(minutes) > 0)
            return (z(minutes)+':'+z(seconds));
        return(z(seconds));
    };
});