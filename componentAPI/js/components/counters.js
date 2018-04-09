var counter = {
  bindings: {
    count: '='
  }
  // transclude: true,
  // require: {
  //   parent: '^^parent'
  // },
  controller: function () {
    this.increment = function () {
      this.count++;
    };
    this.decrement = function () {
      this.count--;
    };
  },
  template: `
    <div class="todo">
      <button type="button" ng-click="$ctrl.decrement();">-</button>
      <input type="text" ng-model="$ctrl.count">
      <button type="button" ng-click="$ctrl.increment();">+</button>
    </div>
  `
};

angular
  .module('app')
  .component('counter', counter);
