(function() {
    function roomService($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            getMessages: function(roomId) {
                // getMessages query logic
               var ref = firebase.database().ref("messages")
               var messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))
               console.log(messages)
               return messages
            }

        };
    }
    angular
        .module('bloc_chat')
        .factory('roomService', ['$firebaseArray', roomService]);
})();
