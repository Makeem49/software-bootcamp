mapboxgl.accessToken = 'pk.eyJ1IjoibWFrZWVtNDkiLCJhIjoiY2t1a3hhdGhwMjNybTJwbnZjOTVtZjdzbiJ9.2VPLyMzGbJkJDRSS1NLFOg';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-71.060982, 42.35725], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });