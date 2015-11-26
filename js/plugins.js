
    $(".slideshow").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });



var content = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt auctor leo, ut ultricies lectus feugiat id. Duis sagittis erat id varius hendrerit. Etiam et hendrerit lectus. Nullam mattis, mauris vitae vestibulum gravida, enim ante adipiscing leo, sed imperdiet lacus dui bibendum erat. Sed convallis sed leo ac dapibus. Phasellus posuere lobortis euismod. Nam tempor elit ut justo tempor, eget egestas lectus sollicitudin. Cras vehicula sapien quis nisi ultricies rutrum. Nam ornare lorem mollis ullamcorper vestibulum.</p>' +
                    '<p>Nullam in vulputate erat, in mattis enim. Curabitur consequat velit a sem ornare adipiscing. Pellentesque nisl lectus, venenatis sed dui ut, placerat mollis urna. Nulla diam diam, consectetur et magna id, lobortis cursus risus. Curabitur feugiat purus sed massa imperdiet rutrum. Mauris eu sodales libero, eu ultrices orci. Nunc vel metus erat. Donec ornare bibendum leo id fermentum. Fusce nec justo consectetur, posuere elit ac, tincidunt odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
                    '<p>Etiam et magna in dui convallis consectetur sit amet sed quam. Vestibulum non libero et justo porttitor cursus nec ac arcu. Aliquam feugiat non ipsum et interdum. Aenean ac lectus erat. Integer vulputate turpis ac accumsan fermentum. Curabitur nec feugiat enim. Nullam lobortis mauris odio, a commodo mauris facilisis quis. Praesent id dapibus lectus. Morbi id blandit magna. Quisque adipiscing viverra massa, vitae sagittis eros dignissim sed. Praesent ornare placerat malesuada. Quisque nec eros dictum, ornare erat non, fringilla felis. Proin sollicitudin arcu ac turpis euismod rhoncus.</p>';

    var delays = ['300', '600', '900', '1200'];
    var setup = function(selector){
        $(selector).append(content + content + content);
        $(selector).scrollTop(0);
    };

    $('#myInfiniteScroll1').infinitescroll({
        dataSource: function(helpers, callback){
            setTimeout(function(){
                callback({ content: content });
            }, delays[Math.floor(Math.random() * 4)]);
        }
    });
    $('#myInfiniteScroll2').infinitescroll({
        dataSource: function(helpers, callback){
            setTimeout(function(){
                callback({ content: content });
            }, delays[Math.floor(Math.random() * 4)]);
        },
        hybrid: true
    });

    setup('#myInfiniteScroll1');
    setup('#myInfiniteScroll2');
