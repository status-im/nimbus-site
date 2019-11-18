import fathom from './fathom.js'

const ghostApiUrl = 'https://our.status.im/ghost/api/v2'
const ghostApiKey = '10e7f8c1f793d2945ea1177076'

function customExcerpt(str) {
  return str.split(/\s+/).slice(0,25).join(" ")
}

const newsPostTemplate = (post, excerpt) => (`
<div class="contribute blog">
  <a href="https://our.status.im/${post.slug}" class="feature-image">
  <img src="${post.feature_image}" alt="${post.title}"></a>
  <h3>
    <a href="https://our.status.im/${post.slug}">${post.title}</a>
  </h3>
  <p>${excerpt}</p>
  <a href="https://our.status.im/${post.slug}">Read More <img src="/img/arrow_ogn.png"/></a>
</div>
`)

const fetchGhostBlogPosts = async () => {
  let url = new URL(`${ghostApiUrl}/content/posts/`)
  let params = {
    key: ghostApiKey,
    filter: 'tag:nimbus',
    formats: 'plaintext',
    order: 'published_at desc',
    limit: 3,
  }
  url.search = new URLSearchParams(params).toString()

  let resp = await fetch(url)
  let json = await resp.json()

  for (const post of json.posts.reverse()) {
    let excerpt = post.custom_excerpt || customExcerpt(post.plaintext)
    const div = document.querySelector('.contribute-wrap-blog')
    div.insertAdjacentHTML('afterbegin', newsPostTemplate(post, excerpt))
  }
}

const incrementFathomAnalytics = () => {
  fathom('set', 'trackerUrl', '//fathom.status.im/collect');
  fathom('set', 'siteId', 'KKAJT');
  fathom('trackPageview');
}

document.addEventListener('DOMContentLoaded', (event) => { 
  fetchGhostBlogPosts()
  incrementFathomAnalytics()
})
