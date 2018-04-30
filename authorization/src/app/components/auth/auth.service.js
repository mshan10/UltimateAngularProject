function AuthService(------$PARSE----) {
  var auth = -----$Parse----();
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  thi.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };
}

angular
  .module('omponents.auth')
  .service('uthService', AuthService);
