 (function() {
     function Fixtures() {
         var Fixtures = {};

         function Field(name) {
             this.type = name;
             this.id = name;
             this.label = name;
             this.placeholder = name;
         }

         var fieldEmail = new Field("email");
         var fieldPassword = new Field("password");
         var fieldUsername = new Field("username");
         fieldUsername.type = "text";
         var fieldRoomname = new Field("roomname");
         fieldRoomname.type = "text";
         var fieldCPassword = new Field("confirm password")
         fieldCPassword.type = "password";


         var formLogin = {
             title: 'Login',
             submitBtnLbl: 'Log In',
             fields: [
                 fieldEmail,
                 fieldPassword
             ]
         };

         var formSignUp = {
             title: 'Sign up',
             submitBtnLbl: 'Sign up',
             fields: [
                 fieldUsername,
                 fieldEmail,
                 fieldPassword,
                 fieldCPassword,
             ]
         };

         var formLogin = {
             title: 'Login',
             submitBtnLbl: 'Log In',
             fields: [
                 fieldEmail,
                 fieldPassword
             ]
         };

          var formCreateRoom = {
             title: 'Create room',
             submitBtnLbl: 'Create',
             fields: [
                 fieldRoomname
             ]
         };


         return Fixtures;
     }

     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();
