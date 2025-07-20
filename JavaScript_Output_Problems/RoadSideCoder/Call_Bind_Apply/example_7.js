//Partial Application for login function


function checkPassword(success, failed) {
  let password = prompt("Password", "");
  if (password == "kapil") success();
  else failed();
}

let user1 = {
  name: "Kapil",

  login(result) {
    console.log(`${this.name} ` +  (result?"login SuccessFull" :"login Failed"));
  },
};

// checkPassword(?,?);
checkPassword(user1.login.bind(user1,true), user1.login.bind(user1,false));
