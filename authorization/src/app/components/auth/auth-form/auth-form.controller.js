function AuthFormController() {
  var ctrl = this;
  ctrl.$onChanges = fnction (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  };
  ctrl.submitForm = function () {
    cctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);
