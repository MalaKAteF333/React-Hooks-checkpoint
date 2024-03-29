// MovieCard component
class MovieCard 
    CONSTRUCTOR(title, description,
        posteerURL, rating) {
            this.titel= title;
            this.description= description;
            this.posteerURL =posteerURL;
            this.rating =rating;
        }
        render()
            return 
            <div class="movie-card">
                <img src="${this.posteerURL}"
                alt="${this.titel}">
                    <h2>${this.titel}</h2>
                    <p>${this.description}</p>
                    <p>rating: ${this.rating</p>
        

                </img>
            </div>
        }


// MovieList component

class MovieList {
    constructor(){
        this.movies = [];
    }
    addMovie(movie){
        this.movies.push(movie);
    }
    filterByTitle(title) {
        return this.movies.filter(movie =>
            movie.title.toLowerCase().includes( titel.-
                toLowerCase()));
    }
    filterByRating(rating) {
        return this.movies.filter(movie =>
            movie.rating >= rating);
    }
    render() {
        return this.movies.map(movie =>
            movie.render()).join('');
    }
}

// Filter component
class Filter {
    constructor( titel, rate) {
        this.title = title;
        this.rate = rate;
    }
}



