angular.module('RegExQuiz')
  .controller('QuestionAnswerController', function($scope, $routeParams, $sce, Question) {
    // @todo make a service to share the mock data between controllers
    $scope.question = Question.get($routeParams.id);
    $scope.solution = {};
    $scope.messages = {success: '', error: ''};

    $scope.answerQuestion = function(question, solution) {
      // Check the solution against the question
      var regex = new RegExp(solution.regex, solution.modifiers),
        matches = regex.exec(question.sampleText),
        answerRegex = new RegExp(question.regex, question.modifiers),
        answerMatches = answerRegex.exec(question.sampleText);

      // Clear messages
      $scope.messages = {success: '', error: ''};

      // Check if we get a matching return
      if (angular.equals(matches, answerMatches)) {
        $scope.messages.success = $sce.trustAsHtml('<strong>Boo ya!</strong> That is correct good sir/madame.');
      }
      else {
        $scope.messages.error = $sce.trustAsHtml('<strong>Oh my..</strong> Sadly that is not the correct answer.');
      }
    };
  });
