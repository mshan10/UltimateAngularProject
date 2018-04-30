var appNav = {
  binfings: {
    user: '<',
    onLogout: '&'
  },
  templateUrl: './app-nav.html'
};

angular
  .module('common')
  .component('appNav', appNav)
