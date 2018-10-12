$(document).ready(function () {
  let url = 'https://our.status.im/ghost/api/v0.1/posts/?filter=tag:nimbus&order=published_at%20asc&limit=3&formats=plaintext&client_id=ghost-frontend&client_secret=2b055fcd57ba';
  var urlBase = [location.protocol, '//', location.host, location.pathname].join('');

  $.ajax({
    type: "get",
    url: url,
    success: function (response) {
      $.each(response.posts, function (index, val) { 
        var excerpt = '';
        if(val.custom_excerpt != null) {
          excerpt = val.custom_excerpt;
        }else{
          excerpt = getWords(val.plaintext);
        }
        $('.contribute-wrap-blog').prepend('<div class="contribute blog"><a href="https://our.status.im/'+ val.slug +'" class="feature-image"><img src="https://our.status.im/'+ val.feature_image +'" alt="'+ val.title +'"></a><h3><a href="https://our.status.im/'+ val.slug +'">'+ val.title +'</a></h3><p>'+ excerpt +'</p><a href="https://our.status.im/'+ val.slug +'">Read More <img src="'+ urlBase +'/img/arrow_ogn.png" /></a></div>');
      });
    }
  });

  function getWords(str) {
    return str.split(/\s+/).slice(0,25).join(" ");
  }

});
