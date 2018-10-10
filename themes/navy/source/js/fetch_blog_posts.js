$(document).ready(function () {
  let url = 'https://our.status.im/ghost/api/v0.1/posts/?limit=3&formats=plaintext&client_id=ghost-frontend&client_secret=2b055fcd57ba';
  $.ajax({
    type: "get",
    url: url,
    success: function (response) {
      $.each(response.posts, function (index, val) { 
        $('.contribute.blog:nth-child('+ (index+1) +') h3').text(val.title);
        if(val.custom_excerpt != null) {
          $('.contribute.blog:nth-child('+ (index+1) +') p').text(val.custom_excerpt);
        }else{
          $('.contribute.blog:nth-child('+ (index+1) +') p').text(getWords(val.plaintext));
        }
      });
    }
  });

  function getWords(str) {
    return str.split(/\s+/).slice(0,25).join(" ");
  }

});
