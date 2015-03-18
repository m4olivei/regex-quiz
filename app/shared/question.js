angular.module('RegExQuiz').factory('Question', function QuestionFactory() {
  var questions = [
    {
      id: 1,
      question: 'Match all dates in the following text with the format YYYY-MM-DD.',
      sampleText: 'The date is 2015-03-16.',
      regex: '\\d{4}-\\d{2}-\\d{2}',
      modifiers: '',
    },
    {
      id: 2,
      question: 'Match the src attribute including the name, value and quotations.  Capture the value in the first capturing group.',
      sampleText: '<img src="/assets/img/funny.gif" />',
      regex: 'src="([^"]+)"',
      modifiers: 'i',
    }
  ];

  return {
    all: function() {
      return questions;
    },
    create: function(question) {
      questions.push(question);
    },
    get: function(id) {
      var question;
      questions.forEach(function(value, index) {
        if (id == value.id) {
          question = value;
          return false;
        }
      });
      return question;
    }
  };
});
