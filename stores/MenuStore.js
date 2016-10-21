import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

    listenables: [MenuActions],

     init: function() {
    	 this.crearMenu();        
    },
  

    crearMenu: function() {
       $.ajax({
      	 "async": true,
  		 "crossDomain": true,
 		 "url": "https://haskell-dojo.herokuapp.com/menus",
  		  "method": "POST",
  		  "headers": {
  		  "content-type": "application/json",
   		  "cache-control": "no-cache",
   		 "postman-token": "e6ab05f0-81da-84c5-0895-e3ad1c763961"
  		},
  "processData": false,
  "data": "{\"restaurant\":1,\"name\":\"sal\",\"price\":5100,\"description\":\"salchicha\"}"
})

$.ajax(settings).done(function (response) {
  console.log(response);
});
}
});

export default MenuStore;