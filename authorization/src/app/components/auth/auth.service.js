function AuthService(------$PARSE----) {
  var auth = -----$Parse----();
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function on SignIn() {
    authData = user;
    return auth.$requireSignIn();
  }
  function clearAuthData() {
    authData = null;
  }
  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };
  this.logout = function () {
    return auth
      .$signout()
      .then(clearAuthData);
  };
  this.requireAuthentication = function () {
    return auth
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function () {
    return !!authData;
  };
  this.getUser = function () {
    if (authData) {
      return authData;
    };
  }
}

angular
  .module('omponents.auth')
  .service('uthService', AuthService);
