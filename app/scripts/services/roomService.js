(function() {
    function roomService($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        console.log(rooms)

        return {
            all: rooms
        };
    }
    angular
        .module('bloc_chat')
        .factory('roomService', ['$firebaseArray', roomService]);
})();
