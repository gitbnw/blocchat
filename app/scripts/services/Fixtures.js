 (function() {
     function Fixtures() {
         var Fixtures = {};

         function Field(name) {
             this.name = name;
             this.model = "formData." + name;
             this.type = name;
             this.id = name;
             this.label = name;
             this.placeholder = name;
             this.dataType = "default";
         };

         var fieldEmail = new Field("email");
         var fieldPassword = new Field("password");
         var fieldUsername = new Field("username");
         fieldUsername.type = "text";
         var fieldRoomname = new Field("roomname");
         fieldRoomname.type = "text";
         var fieldCPassword = new Field("cpassword")
         fieldCPassword.type = "password";
         fieldCPassword.label = "confirm password";
         fieldCPassword.placeholder = "do it again";


         var formLogin = {
             title: 'Login',
             submitBtnLbl: 'Log In',
             submitId: 'login',
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

         var formCreateRoom = {
             title: 'Create room',
             submitBtnLbl: 'Create',
             submitId: 'createRoom',
             fields: [
                 fieldRoomname
             ]
         };

         var forms = {
             "formLogin": formLogin,
             "formSignUp": formSignUp,
             "formCreateRoom": formCreateRoom
         }

         Fixtures.getForm = function(formName) {
             var form = forms[formName]

             return form;
         };

         return Fixtures;
     }

     angular
         .module('bloc_chat')
         .factory('Fixtures', [Fixtures]);
 })();
