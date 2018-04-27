var login = {
  templateUrl: './login.html',
  controller: 'LoginController'
};

angular
  .module('components.auth')
  .component('login', login)
  .config(function ($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login'.
        url: '/auth',
        template: '<div ui-view></div>'
      })
      .state('auth.login', {
        url: '/login',
        component: 'login'
      });
    $urlRouteProvider.otherwise('/auth/login');
  });
