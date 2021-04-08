"use strict";

const app = new Vue({
    el: "#app",
    data: {
        selected: "",
        musicAlbums: [],
        orderDesc: true
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
            this.musicAlbums = result.data.response;
        });
    },
    computed: {
        filterMusic() {
            if (this.selected === "") {
                return this.musicAlbums;
            } else {
                return this.musicAlbums.filter((item) => item.genre === this.selected);
            }
        }
    }
});

// 1 nel mounted nel then
// 2 BUtton 