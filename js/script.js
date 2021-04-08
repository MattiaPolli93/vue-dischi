"use strict";

const app = new Vue({
    el: "#app",
    data: {
        musicAlbums: []
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
            this.musicAlbums = result.data.response;
        });
    }
});