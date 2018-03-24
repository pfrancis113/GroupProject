function getLyrics(){
  var artistSearch = document.getElementById("artistSearch").value;
  document.getElementById("lyrics").textContent = "";
  $.ajax({
    type: "Get",
    data: {
      
      apikey: "32aebbe7388e91bf330ba15b45c9c70e",
      q_artist: artistSearch,

      format:"jsonp",
      
      callback: "jasonp_callback"

    },
    url: "http://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
        console.log(data); 
        console.log(data.message.body.track_list[0].track.album_coverart_350x350);
  }})
}

getLyrics();


  
  

