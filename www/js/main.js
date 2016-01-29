$(document).ready(function(){
    var viewPortHeight = $(window).height();

    var headerHeight = $('div[data-role="header"]').height();

    var footerHeight = $('div[data-role="footer"]').height();

    var contentHeight = viewPortHeight - headerHeight - footerHeight;

    $('div.content').css({'min-height': contentHeight + 'px'});
});
