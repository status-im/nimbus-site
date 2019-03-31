/* global $ */
const moment = require('moment');

function formatDate(date) {
  const day = moment().date(date.get('date')).format('DD');
  const month = moment().month(date.get('month')).format('MMM');
  const hour = moment().hour(date.get('hour')).format('HH');
  const minute = moment().minute(date.get('minute')).format('mm');

  return `${day} ${month} at ${hour}:${minute}`;
}

$(document).ready(function () {

  // Fixes Parallax effect and div to popup overlapping with the main menu options
  $('div#container').append($('.popup-wrap.popup-wrap--community')[0])
  $('div#container').append($('.popup-wrap.popup-wrap--projects')[0])

  let url = 'https://our.status.im/ghost/api/v0.1/posts/?filter=tag:nimbus&order=published_at%20desc&limit=3&formats=plaintext&client_id=ghost-frontend&client_secret=2b055fcd57ba';
  var urlBase = [location.protocol, '//', location.host, location.pathname].join('');

  $.ajax({
    type: "get",
    url: url,
    success: function (response) {
      response.posts = response.posts.reverse();
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

  let url_news = 'https://our.status.im/ghost/api/v0.1/posts/?order=published_at%20desc&limit=2&formats=plaintext&client_id=ghost-frontend&client_secret=2b055fcd57ba';

  $.ajax({
    type: 'get',
    url: url_news,
    success: function(response) {
      response.posts = response.posts.reverse();

      $.each(response.posts, function(index, val) {
        const date = moment(val.published_at);

        $('.latest-news').prepend(
          `<div class="post">
            <time>${formatDate(date)}</time>
            <h4><a href="https://our.status.im/${val.slug}">${val.title}</a></h4>
          </div>`
        );
      });
    }
  });

});

var addClassToElement = require('./utils').addClassToElement;
var removeClassFromElement = require('./utils').removeClassFromElement;

/* Code highlighting */

function highlight() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}
 $(document).ready(function() {
  try {
    highlight();
  } catch(err) {
    console.log("retrying...")
    setTimeout(function() {
      highlight();
    }, 2500)
  }

  var clipboard = new ClipboardJS(".btn");
  clipboard.on('success', function(e) {
    var id = $(e.trigger).attr("data-clipboard-target");
    $(id).toggleClass("flash");
    setTimeout(function() {
      $(id).toggleClass("flash");
    }, 200);
    e.clearSelection();
  })
})

/* Mobile Nav */

let moreLink = document.querySelectorAll(".item--more")[0]

let nav = document.querySelectorAll(".mobile-nav-wrap")[0]
let navOverlay = document.querySelectorAll(".mobile-nav-overlay")[0]
let navCloseButton = document.querySelectorAll(".mobile-nav-close")[0]


moreLink.addEventListener('click', function(event){
    showNav()
    event.preventDefault()
})

navCloseButton.addEventListener('click', closeNav)
navOverlay.addEventListener('click', closeNav)


function showNav() {
  addClassToElement(nav, "mobile-nav--shown");
}

function closeNav() {
  removeClassFromElement(nav, "mobile-nav--shown");
}