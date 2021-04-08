"use strict";

const app = new Vue({
    el: "#app",
    data: {
        selected: "",
        musicAlbums: [],
        order: true
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
    },
    methods: {
        sortByOldestYear() {
            if (this.order) {
                this.musicAlbums.sort((a, b) => {
                    if (a.year < b.year) {
                        return -1;
                    } else if (a.year > b.year) {
                        return 1;
                    }
                    return 0;
                });

                this.order = false;
            }                
        },
        sortByRecentYear() {
            if (this.order === false) {
                this.musicAlbums.sort((a, b) => {
                    if (a.year > b.year) {
                        return -1;
                    } else if (a.year < b.year) {
                        return 1;
                    }
                    return 0;
                });

                this.order = true;
            }
        }
    }
});