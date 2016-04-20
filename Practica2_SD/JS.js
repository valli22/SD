$(document).ready(function () {
    $.ajax({
        url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=11aafca7ef8ecf5179d1f1d87a423f6d&user_id=140248047@N08&format=json&nojsoncallback=1'
    }).done(function (data) {
            data.photos.photo.forEach(function(foto){
                $('body').append('<img src="https://farm'+foto.farm+'.staticflickr.com/'+foto.server+'/'+foto.id+'_'+foto.secret+'.jpg"/>')
                console.log('https://farm'+foto.farm+'.staticflickr.com/'+foto.server+'/'+foto.id+'_'+foto.secret+'.jpg')
            })
            
        
    })
})