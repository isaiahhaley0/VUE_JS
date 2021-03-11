const app = Vue.createApp({
    data() {
        return {
            keword: '',
            result: null
        }

    },


    methods: {
        searchGoogleBooks() {

            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + txtSearch.value + "&startIndex=0&maxResults=20")
                .then(response => response.json())
                .then(json => {this.result = json})

                }


    }

    })