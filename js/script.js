
$(window).on('load', function(){
    $('.text').addClass('show');
    $('.garis').addClass('show');
})

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.text').css({
        'transform' : 'translate(0px, -'+ wScroll/6 +'%)'
    });
    $('.garis').css({
        'transform' : 'translate(0px, -'+ wScroll/0.1 +'%)'
    });
    
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.music').offset().top -250)
    {
        $('.music .card').each(function(i){
            setTimeout(function(){
                $('.music .card').eq(i).addClass('show');
            }, 300 * (i+1));
        });
    }
    
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.sport').offset().top -250)
    {
        $('.sport .card').each(function(i){
            setTimeout(function(){
                $('.sport .card').eq(i).addClass('show');
            }, 300 * (i+1));
        });
    }
    
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.tech').offset().top -250)
    {
        $('.tech .card').each(function(i){
            setTimeout(function(){
                $('.tech .card').eq(i).addClass('show');
            }, 300 * (i+1));
        });
    }
    
});