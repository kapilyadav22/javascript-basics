//Fix the issue to make code work properly

function checkPassword(success, failed) {
  let password = prompt("Password", "");
  if (password == "kapil") success();
  else failed();
}

let user = {
  name: "Kapil",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

// checkPassword(user.loginSuccessful,user.loginFailed); -> we are passing a plain js function, It doesnt have user context
// Even though loginSuccessful() was defined inside user, it doesn't remember user — because this is not lexically scoped.

checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user));
