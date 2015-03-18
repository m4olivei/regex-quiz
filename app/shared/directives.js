angular.module('RegExQuiz').directive('regex', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.regex = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // Consider empty models to be valid
          return true;
        }

        try {
          new RegExp(modelValue);
          return true;
        }
        catch (e) {
          // Invalid regular expression
          return false;
        }
      };
    }
  }
});
