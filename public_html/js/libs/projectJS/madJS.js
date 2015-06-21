/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init(){
    Parse.initialize("j3OCnccIaeGYTpFLueczeo009mNtZlqMqWPbfsiT", "uCOLxZW7qGnVMbHQ4OySgo3QsB9knf4pqITD5qoK");
}
function signup(){
    var user = new Parse.User();
    user.set("username", $('#un').val());
    user.set("password", $('#pw').val());
    user.set("email", "email@example.com");

    // other fields can be set just like with Parse.Object
    user.set("phone", "415-392-0202");

    user.signUp(null, {
      success: function(user) {
        alert('sigined up');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
}
function signin(){    
    Parse.User.logIn($('#unin').val(), $('#pwin').val(), {
      success: function(user) {
        alert('logged in');
      },
      error: function(user, error) {
        alert('loging error' + error[0]);
      }
    });
}