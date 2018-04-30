function AppSidebarController() {
  var ctrl = this;
  ctrl.contactTags = [{
    label: 'All contacts',
    icon: 'star'
  }, {
    label: 'Friends',
    icon: 'people'
  }];
}

angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);
