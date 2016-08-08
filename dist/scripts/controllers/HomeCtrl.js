 (function() {
     function HomeCtrl(roomService) {
      this.rooms = roomService.all;
     }

     angular
         .module('bloc_chat')
         .controller('HomeCtrl', HomeCtrl);
 })();
