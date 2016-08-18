(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref("messages");
        var messages = $firebaseArray(ref);

        return {
            send: function(newMessage) {
                // Send method logic
                messages.$add(newMessage).then(function() {
                    //clear input
                    var form = document.getElementById("messageForm");
                    form.reset();
                })
            }
        }
    }

    angular
        .module('bloc_chat')
        .factory('Message', ['$firebaseArray', Message]);
})();
