function RegisterController() {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.createUser = functio (event) {

  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);
