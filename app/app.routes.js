angular.module('RegExQuiz').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/questions'
    })
    .when('/questions', {
      templateUrl: 'app/components/question-index/questionIndexView.html',
      controller: 'QuestionIndexController',
    })
    .when('/questions/new', {
      templateUrl: 'app/components/question-create/questionCreateView.html',
      controller: 'QuestionCreateController',
    })
    .when('/questions/:id', {
      templateUrl: 'app/components/question-answer/questionAnswerView.html',
      controller: 'QuestionAnswerController',
    })
    .otherwise({
      redirectTo: '/'
    });
});
