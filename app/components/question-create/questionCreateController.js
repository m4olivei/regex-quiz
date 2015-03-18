angular.module('RegExQuiz').controller('QuestionCreateController', function($scope, Question) {
  $scope.question = {};

  $scope.createQuestion = function(question) {
    Question.create(question);
    $scope.question = {};
  };
});
