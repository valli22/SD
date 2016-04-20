$(document).ready(function () {
    var date = encodeURI('0000-01-01 00:00:00')
    var contentType = 7
    console.log(date)
    var argMinTakenDate = '&min_taken_date=' + date; //añadir esto a la url para buscar por min_taken_date
    var argDescription = 'Esto es una prueba'
    var argContentType = '&content_type=' + contentType
    var argTag = 'animal'
    var argMinWidth = 0
    var argMinHeight = 0
    var argMaxWidht = 5000
    var argMaxHeight = 5000
    var argViews = 2
    var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=' + api_key + '&extras=url_s,tags,views,description&user_id=' + user_id + '&format=json&nojsoncallback=1' + argContentType + argMinTakenDate
    console.log(url)
    $.ajax({
        url: url
    }).done(function (data) {
        data.photos.photo.forEach(function (foto) {
            console.log(foto)
            var width = foto.width_s
            var height = foto.height_s
            var withTag = foto.tags.indexOf(argTag) > -1
            var withSize = width <= argMaxWidht && width >= argMinWidth && height <= argMaxHeight && height >= argMinHeight
            var withDescription = foto.description._content.indexOf(argDescription) > -1
            var withViews = foto.views >= argViews
            if (withDescription && withSize && withTag && withViews) {
                //Para sacar las fotos que tengan un tag especifico
                /*if (foto.tags.indexOf(argTag) > -1) {
                    $('body').append('<img src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/>')
                    console.log('https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpeg')
                }*/
                //Para sacar las fotos que tengan un width y un height minimo y maximo
                /*
                if(fotoWidth<=argMaxWidht && fotoWidth>=argMinWidth && fotoHeight<=argMaxHeight && fotoHeight>=argMinHeight){
                    $('body').append('<img src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/>')
                }*/
                //Para sacar las fotos que tengan un minimo de visitas
                /*if(foto.views>=argViews){
                    $('body').append('<img src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/>')
                }*/
                //Para sacar las fotos que tengan X frase o palabra su descripcion
                /*if (foto.description._content.indexOf(argDescription) > -1) {
                    $('body').append('<img src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/>')*/
                $('body').append('<img src="https://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg"/>')
            }
        })
    })


})