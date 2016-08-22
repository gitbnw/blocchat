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
         }

         var fieldEmail = new Field("email");
         var fieldPassword = new Field("password");
         var fieldUsername = new Field("username");
         fieldUsername.type = "text";
         var fieldRoomname = new Field("roomname");
         fieldRoomname.type = "text";
         var fieldCPassword = new Field("confirm password")
         fieldCPassword.type = "password";

         var login = function() {

             $scope.authData = null;
             $scope.error = null;

             auth.$authAnonymously().then(function(authData) {
                 $scope.authData = authData;
             }).catch(function(error) {
                 $scope.error = error;
             });
         };

         var formLogin = {
             title: 'Login',
             submitBtnLbl: 'Log In',
             submit: '$scope.login',
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
             fields: [
                 fieldRoomname
             ]
         };

         Fixtures.getForm = function() {

             return formLogin;
         };

         return Fixtures;
     }

     angular
         .module('bloc_chat')
         .factory('Fixtures', Fixtures);
 })();
