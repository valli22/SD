$(document).ready(function () {
    //Una vez el documento este cargado inicializamos datos a deafult
    /*var date = '';
    var contentType = 7;
    var argDescription = '';
    var argContentType = '&content_type=' + contentType;
    var argTag = '';
    var argMinWidth = 0
    var argMinHeight = 0
    var argMaxWidht = 5000
    var argMaxHeight = 5000
    var argViews = 0
    // Si haces click en el boton de buscar se borran todas las fotos que estuviesen antes y se realiza la nueva busqueda
    // en caso de algun parametro este vacio, se utiliza los que estaban puesto por defecto
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

        //Realizamos la peticion ajax con la url correspondiente y mostramos las fotos
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
                    
                    $('#lista').append('<div class="borrar"><img value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg" data-type="zoomin" class="img"/><div id="' + i + '" class="overlay-container"><div class="window-container zoomin"><span class="glyphicon glyphicon-remove close" aria-hidden="true"></span><img id="fotito" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpeg" class="img "></div></div>')
                }
                i++;
            })
            //Cada vez que se haga click en una imagen esta se mostrara en un dialogo mas grande
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
*/

    var content_type = '';
    var minTakenDate = '';
    var tags = [];
    var text = '';
    var geo = '';
    var minUploadDate = '';

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $("#locale").change(function () {
        $("#dateMin").datepicker("option",
            $.datepicker.regional[$(this).val()]);
    });

    $("#dateMin").datepicker();

    $("#dateMin").change(mostrarFecha);
    $("#dateUploadMin").datepicker();

    $("#dateUploadMin").change(mostrarFecha);

    function mostrarFecha() {
        $('#copiaFecha').text($(this).datepicker('getDate'));
        $('#fechaUnix').text($(this).datepicker('getDate').getTime() / 1000 + ' segundos desde el 1 de enero de 1970');
    }

    $('#buttonTags').click(function () {
        tags.push($('#tags').val());
        $("#tagList").append('<li><span>' + $('#tags').val() + '</span><button class="eliminar" id="eliminar_' + $('#tags').val() + '" type="button">Eliminar</button></li>');
    })

    $('ul').click('li button .eliminar', function (event) {
        aux = $(event.target).attr('id').split('_');
        var tagActual = aux[1];
        var i = 0;
        for (var tag of tags) {
            if (tag === tagActual) {
                tags.splice(i, 1);
                break;
            }
            i++;
        }
        $(event.target.parentElement).remove();
    })

    //QUITAR LOS EXTRAS CUANDO ESTE TERMINADO

    $('#buscar').click(function () {
        var lat = '';
        var long = '';
        if ($('#address').val() != '') {
            geo = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI($('#address').val()) + '&key=AIzaSyAeLSgaTCd_BcxqvmMovUcRHUIgXtu4Za4'
            $.ajax({
                url: geo
            }).done(function (data) {
                lat = data.results[0].geometry.location.lat;
                long = data.results[0].geometry.location.lng;
            })
        }

        minTakenDate = $('#dateMin').val();
        aux = minTakenDate.split('/');
        minTakenDate = encodeURI(aux[2] + '-' + aux[1] + '-' + aux[0]);

        minUploadDate = $('#dateUploadMin').val();
        aux = minUploadDate.split('/');
        minUploadDate = encodeURI(aux[2] + '-' + aux[1] + '-' + aux[0]);

        //tags = encodeURI($('#tags').val());

        text = encodeURI($('#texto').val());

        if ($('#fotos').is(':checked')) {
            if ($('#captura').is(':checked')) {
                if ($('#otros').is(':checked')) {
                    content_type = '7';
                } else {
                    content_type = '4';
                }
            } else {
                if ($('#otros').is(':checked')) {
                    content_type = '6';
                } else {
                    content_type = '1';
                }
            }
        } else {
            if ($('#captura').is(':checked')) {
                if ($('#otros').is(':checked')) {
                    content_type = '5';
                } else {
                    content_type = '2';
                }
            } else {
                if ($('#otros').is(':checked')) {
                    content_type = '3';
                } else {
                    content_type = '7';
                }
            }
        }

        /*
        console.log(content_type);
        console.log('Tomada'+minTakenDate);
        console.log('Subida'+minUploadDate);
        */

        tagResult = '';
        var j = 0;
        for (var tag of tags) {
            if (j == 0) {
                tagResult += tag;
                j++;
            } else {
                tagResult += ',' + tag;
            }
        }

        console.log(tagResult);

        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + api_key + '&user_id=' + user_id + '&min_taken_date=' + minTakenDate + '&tags=' + tagResult + '&text=' + text + '&content_type=' + content_type + '&min_upload_date=' + minUploadDate;

        if ($('#address').val() !== '') {
            geo = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI($('#address').val()) + '&key=AIzaSyAeLSgaTCd_BcxqvmMovUcRHUIgXtu4Za4'
            $.ajax({
                url: geo
            }).done(function (data) {
                if (data.status === 'OK') {
                    lat = data.results[0].geometry.location.lat;
                    long = data.results[0].geometry.location.lng;
                    console.log(lat);
                    console.log(long);
                    url += '&accuracy=11&lat=' + lat + '&lon=' + long;
                    console.log(url);
                    $.ajax({
                        url: url
                    }).done(function (data) {
                        console.log(data);
                    })
                }else{
                    alert('La direccion introducida no es valida.')
                }
            })
        } else {

            console.log(url);
            $.ajax({
                url: url
            }).done(function (data) {
                console.log(data);
            })
        }
    })

})