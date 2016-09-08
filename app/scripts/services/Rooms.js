(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            getMessages: function(roomId) {
                // getMessages query logic
               var ref = firebase.database().ref("messages");
               var messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))
               return messages
            }

        };
    }
    angular
        .module('bloc_chat')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();
