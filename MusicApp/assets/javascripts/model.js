function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.selected = false;
}

var obj = {
    playList: [],
    addSong: function(id, name, url, image) {
        var song = new Song(id, name, url, image);
        this.playList.push(song);
        console.log(this.playList);
    },

    deleteSong: function(id) {
        // for (var i = 0; i < this.playList.length; i++) {
        //     if (this.playList[i].id == id) {
        //         this.playList[i].selected = true;
        //     }
        // }
        // console.log(this.playList);
        var song = this.playList.filter(function(x) {
            return x.id == id;
        });
        song[0].selected = true;
        this.playList = this.playList.filter(function(x) {
            return x.selected == false;
        });
        console.log(this.playList);
    }
}