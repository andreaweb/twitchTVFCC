var users = ["freecodecamp","storbeck","terakilobyte", "comster404", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "ESL_SC2", "OgamingSC2", "cretetion"];

for (var i = 0; i < users.length; i++){
   var secoes;
   (function(i) {
     
     var mediaAPI = "https://api.twitch.tv/kraken/streams/"+users[i]+"?callback=";
     //UPDATE V5
     var channelAPI = "https://api.twitch.tv/kraken/channels/"+users[i]+"?callback=";
     var clientID = 'rjppwqszy4rcrkev4sknawhjzmb5wl';
     //END UPDATE V5
     
      $.getJSON(mediaAPI, {
        //UPDATE V5
              'client_id':clientID
        //END UPDATE V5
      })
 
      .done(function(data) {
          //$("body").append("<div class='name'><h5><a href='https://www.twitch.tv/"+users[i]+"' target='_blank'>"+users[i]+"</a></h5></div>");
         // $.each(data.stream,function(i,item){
            if(data.stream != null){
                $("body").append("<div class='flex'><img src='"+data.stream.channel.logo+"' width='50' height='50'><div class='game'><h5>"+users[i]+" </h5>"+data.stream.game+"</div></div>");
             }else{
               //UPDATE V5
                $.getJSON(channelAPI, {
                   'client_id':clientID
                })
               .done(function(data) {
                 //get data from channel API
                 if(data.status == 404){
                    $("body").append("<div class='closed'><h5>"+users[i]+"</h5> Account Closed or Non-existent</div>");
                 }else{
                    $("body").append("<div class='off'><h5>"+users[i]+"</h5> <p>offline</p></div>");
                 }
               })(i);
               //END UPDATE V5
             }       
        });
  })(i);
}