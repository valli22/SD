$(document).ready(function () {

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
        $("#tagList").append('<li class="list-group-item"><div class="row"><div class="col-lg-6 col-md-6 col-sm-6"><h4>' + $('#tags').val() + '</h4></div><div class="col-lg-6 col-md-6 col-sm-6"><button class="eliminar btn btn-default" id="eliminar_' + $('#tags').val() + '" type="button">Eliminar</button></div></div></li>');
        $('#tags').val('');
    });

    $('.list-group').click('li button .eliminar', function (event) {
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
        $(event.target.parentElement.parentElement.parentElement).remove();
    });
    

    $('#buscar').click(function () {
        var lat = '';
        var long = '';

        $('.borrar').remove();

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

        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + api_key + '&user_id=' + user_id + '&min_taken_date=' + minTakenDate + '&tags=' + tagResult + '&text=' + text + '&content_type=' + content_type + '&min_upload_date=' + minUploadDate + '&format=json&nojsoncallback=1';

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
                        mostrarImagenes(data.photos.photo);
                    })
                } else {
                    alert('La direccion introducida no es valida.')
                }
            })
        } else {

            console.log(url);
            $.ajax({
                url: url
            }).done(function (data) {
                mostrarImagenes(data.photos.photo);
            })
        }
        
        //Dejar los parametros vacios
        
        $('#texto').val('');
        $('#dateMin').val('');
        $('#dateUploadMin').val('');
        $('#address').val('');
        $('#fotos').prop('checked','');
        $('#captura').prop('checked','');
        $('#otros').prop('checked','');
        $('#tags').val('');
        tagResult = '';
        tags = [];
        $('.list-group-item').remove();
    })

    function mostrarImagenes(fotos) {
        var i = 0;
        var imagenes = '';
        for (var foto of fotos) {
            var modal = '<div class="modal fade" id="'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">'+foto.title+'</h4></div> <div class="modal-body"> <img class="img" value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/> </div>  <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';
            if (0 == i % 2) {
                if (i == fotos.length-1) {
                    $('#lista').append('<div class="row text-center"><div class="borrar col-lg-6 col-md-6 col-sm-12 col-xs-12"><a href="#" class="thumbnail" data-toggle="modal" data-target="#'+i+'"><img class="img img-responsive" value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/></a>'+modal+'</div></div>');
                }else{
                    imagenes+='<div class="row text-center"><div class="borrar col-lg-6 col-md-6 col-sm-12 col-xs-12"><a href="#" class="thumbnail" data-toggle="modal" data-target="#'+i+'"><img class="img img-responsive" value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/></a>'+modal+'</div>';
                }
            }else{
                $('#lista').append(imagenes + '<div class="borrar col-lg-6 col-md-6 col-sm-12 col-xs-12"><a href="#" class="thumbnail" data-toggle="modal" data-target="#'+i+'"><img class="img img-responsive" value="' + i + '" src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/></a>'+modal+'</div></div>');
                imagenes='';
            }
            i++;
        }
    }

})