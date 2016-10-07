var users = ["freecodecamp","storbeck","terakilobyte", "comster404", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "ESL_SC2", "OgamingSC2", "cretetion"];

for (var i = 0; i < users.length; i++){
   var secoes;
   (function(i) {
     
     var mediaAPI = "https://api.twitch.tv/kraken/streams/"+users[i]+"?callback=";
      
      $.getJSON(mediaAPI, {

      })
 
      .done(function(data) {
          $("body").append("<div class='name'><h5><a href='https://www.twitch.tv/"+users[i]+"' target='_blank'>"+users[i]+"</a></h5></div>");
         // $.each(data.stream,function(i,item){
            if(data.stream != null){
                $("body").append("<img src='"+data.stream.channel.logo+"' width='50' height='50'><div class='game'><h5>"+data.stream.game+"</h5></div>");
             }else{
                $("body").append("<div class='off'><p>offline</p></div>");
             }       
        }).fail(function(d) {
             $("body").append("<div class='closed'><h5>"+users[i]+"</h5> Account Closed or Non-existent</div>");
        });
  })(i);
}