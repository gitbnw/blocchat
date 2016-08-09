(function() {
    function roomService($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var createRoom = function(roomname) {
            rooms.$add({ name: roomname }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                list.$indexFor(id); // returns location in the array
            });

        };

        return {
            all: rooms
        };
    }
    angular
        .module('bloc_chat')
        .factory('roomService', ['$firebaseArray', roomService]);
})();
