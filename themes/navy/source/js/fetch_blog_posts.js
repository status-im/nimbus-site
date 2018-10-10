$(document).ready(function () {
  var url = 'https://our-status.ghost.io/ghost/api/v0.1/posts/?limit=3&include=tags&filter=tags:nimbus&formats=plaintext&client_id=ghost-frontend&client_secret=1c5590b47eb4';
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
