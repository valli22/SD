$(document).ready(function () {
    var date = '';
    var contentType = 7;
    var argDescription = '';
    var argContentType = '&content_type=' + contentType;
    var argTag = '';
    var argMinWidth = 0
    var argMinHeight = 0
    var argMaxWidht = 5000
    var argMaxHeight = 5000
    var argViews = 0
    $('#buscar').click(function () {
        $('.borrar').remove()
        date = $('#dateMin').val().split('T')
        var argMinTakenDate = '&min_taken_date=' + date[0]+' '+date[1]+':00';
        switch ($('#tipo').val()) {
        case 'Fotos':
            argContentType = '&content_type=' + 1;
            break;
        case 'Captura de pantalla':
            argContentType = '&content_type=' + 2;
            break;
        case 'Otras':
            argContentType = '&content_type=' + 3;
            break;
        case 'Foto y capturas':
            argContentType = '&content_type=' + 4;
            break;
        case 'Fotos y otras':
            argContentType = '&content_type=' + 6;
            break;
        case 'Capturas y otras':
            argContentType = '&content_type=' + 5;
            break;
        case 'Todo':
            argContentType = '&content_type=' + 7;
            break;
        }


        if ($('#widthMin').val() !== undefined && $('#widthMin').val() !== '') {
            argMinWidth = $('#widthMin').val();
        }else{
            argMinWidth = 0;
        }
        if ($('#widthMax').val() !== undefined && $('#widthMax').val() !== '') {
            aux = ($('#widthMax').val());
            argMaxWidht = aux;
        }else{
            argMaxWidht = 5000;
        }
        if ($('#heightMin').val() !== undefined && $('#heightMin').val() !== '') {
            argMinHeight = $('#heightMin').val();
        }else{
            argMinHeight = 0;
        }
        if ($('#heightMax').val() !== undefined && $('#heightMax').val() !== '') {
            argMaxHeight = $('#heightMax').val();
        }else{
            argMaxHeight = 5000
        }
        if ($('#views').val() !== undefined && $('#views').val() !== '') {
            argViews = $('#views').val();
        }else{
            argViews = 0
        }
        if ($('#tags').val() !== undefined && $('#tags').val() !== '') {
            argTag = $('#tags').val();
        }else{
            argTag = '';
        }
        if ($('#descripcion').val() !== undefined && $('#descripcion').val() !== '') {
            argDescription = $('#descripcion').val();
        }else{
            argDescription='';
        }


        var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=' + api_key + '&extras=url_s,tags,views,description,date_taken&user_id=' + user_id + '&format=json&nojsoncallback=1' + argContentType + argMinTakenDate;
        console.log(url);
        $.ajax({
            url: url
        }).done(function (data) {
            var i = 0;
            console.log(data)
            data.photos.photo.forEach(function (foto) {

                var width = foto.width_s
                var height = foto.height_s
                var withTag = foto.tags.indexOf(argTag) > -1
                var withSize = width <= argMaxWidht && width >= argMinWidth && height <= argMaxHeight && height >= argMinHeight
                var withDescription = foto.description._content.indexOf(argDescription) > -1
                var withViews = foto.views >= argViews
                if (withDescription && withSize && withTag && withViews) {
                    
                    $('#lista').append('<div class="borrar"><img value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg" data-type="zoomin" class="img"/><div id="' + i + '" class="overlay-container"><div class="window-container zoomin"><span class="glyphicon glyphicon-remove close" aria-hidden="true"></span><img id="fotito" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg" class="img "></div></div>')
                }
                i++;
            })
            
            $('.img').click(function (event) {
                let valor = $(this).attr('value');
                type = $(this).attr('data-type');
                let selector = '#' + valor;
                $(selector).fadeIn(function () {

                    window.setTimeout(function () {
                        $('.window-container.' + type).addClass('window-container-visible');

                    }, 100);

                });
            });

            $('.close').click(function () {
                console.log('entra')
                $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
            });

        })
    })



})