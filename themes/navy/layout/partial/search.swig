<div class="search">
    <input type="text" name="userSearch" id="userSearch" placeholder="Search...">
    <script src="/js/jquery-3.3.1.min.js"></script>
    <script src="/js/jquery.marcopolo.min.js" type="text/javascript"></script>
    <script type="text/javascript" defer>
    $('#userSearch').marcoPolo({
        url: 'https://search.status.im/' + window.location.host + '/_search?size=5&_source=title,url&',
        minChars: 3,
        formatItem: function (data, $item) {
        return data.title || data.url;
        },
        formatData: function (data) {
        return data.hits.hits.map(function(obj) {
            return obj._source;
        });
        },
        onSelect: function (data, $item) {
        window.location = data.url;
        }
    });
    </script>
</div>
<div class="clear"></div>