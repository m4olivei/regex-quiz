angular.module('RegExQuiz').controller('QuestionIndexController', function($scope, Question) {
  $scope.questions = Question.all();
});
