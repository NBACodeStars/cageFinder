
console.log('test')

const cageFinder = {}

cageFinder.baseURL = "https://api.themoviedb.org/3"
cageFinder.apiKey = "bc9b7d4e7d76676601ab9360b373eedc"
// AC key - bc9b7d4e7d76676601ab9360b373eedc


cageFinder.movies = []

// poster_path
// ***************************************************
// perform a network request
// ***************************************************

http://api.tmdb.org/3/search/person?api_key=KEY&query=tom%20hanks

cageFinder.findCage = () => {
    // const url = new URL(``)
    // url.search = new URLSearchParams({
    //     api_key: cageFinder.apiKey,
    //     param: {
    //         q: "Nicholas Cage",
    //     }
    // })
    // /person/{person_id}/movie_credits
    fetch('https://api.themoviedb.org/3/person/2963/movie_credits?api_key=bc9b7d4e7d76676601ab9360b373eedc')
        .then((res) => {
            console.log(res.cast)
            return res.json()
        })
        .then((data) => {
            console.log(data)
           
            // cageFinder.movies = data.genres ???
            // cageFinder.displayCage(data.cast)
            cageFinder.movies = data.cast;
        })
}

// ***************************************************
// PUT CAGE ON THE PAGE!!
// ***************************************************

let index = 0;

cageFinder.displayCage = () => {

    alert(`getting movie number ${index}`);

    const movie = cageFinder.movies[0];
    index++;
    
    const cageList = document.getElementsByClassName("cageList") 
    cageList.innerHTML = ""
    
    const newListItem= document.createElement("li")
       
    const newCagePhoto = document.createElement("img")
    
    const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    newCagePhoto.setAttribute("src", movieImage)
    newCagePhoto.setAttribute("alt", `This is a poster for the movie: ${movie.title}`)

    const newListTitle = document.createElement("p")
    newListTitle.textContent = movie.title
    const newListOverview = document.createElement("p")
    newListOverview.textContent = movie.overview
    const newListMetric = document.createElement("p")
    newListMetric.textContent = `Average rating of: ${movie.vote_average}; from ${movie.vote_count} users`
    
    newListItem.appendChild(newCagePhoto)
    newListItem.appendChild(newListTitle)
    newListItem.appendChild(newListOverview)
    newListItem.appendChild(newListMetric)
    
    cageList.append(newListItem)
}

document.getElementById('loadAMovie').addEventListener('click', cageFinder.displayCage);

cageFinder.getCageOnThePage = () => {
    cageFinder.findCage()
}

cageFinder.getCageOnThePage()