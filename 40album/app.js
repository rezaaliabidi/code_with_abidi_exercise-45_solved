//Exercise 45 Q 40
//Creating object through different functions
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating three variables with different values
var album1 = make_album("Ali Raza", "album title.1");
var album2 = make_album("Ahsan", "Album title.2");
var album3 = make_album("Ali", "Album title.3", 10);
//Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
