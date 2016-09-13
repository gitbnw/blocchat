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

         var create = function(model) {
             model.$add($scope.formData).then(function() {
                 $uibModalInstance.dismiss('submit');
             })
         };

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
             submitId: 'createRoom',
             submitBtnLbl: 'Create',
             noReset: true,
             fields: [
                 fieldRoomname
             ]
         };

         var forms = {
             "formLogin": formLogin,
             "formSignUp": formSignUp,
             "formCreateRoom": formCreateRoom
         }

         var modalCreateRoom = {
             tabbed: false,
             form: formCreateRoom
         }

         var modalConstructs = {
             "createRoom": modalCreateRoom
         }

         Fixtures.getForm = function(formName) {
             var form = forms[formName]

             return form;
         };

         Fixtures.getModalConstruct = function(modalName) {
             var modalConstruct = modalConstructs[modalName]

             return modalConstruct
         }

         return Fixtures;
     }

     angular
         .module('bloc_chat')
         .factory('Fixtures', Fixtures);
 })();
