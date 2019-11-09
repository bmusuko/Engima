function getUsername() {
    let cookie = document.cookie;

    if (cookie == null || cookie == "") {
        alert("You haven't login");
        window.location.replace('login.html');
    }

    let request = new XMLHttpRequest();
    request.open("POST", "php/username.php", true);
    request.send();

    request.onload = function() {
        document.getElementById('username').innerHTML = request.response;
    }
}

function renderMovies(e) {
    let container = document.getElementsByClassName("grid-container")[0];

    let item = document.createElement('div');
    item.className = 'grid-item';
    item.setAttribute('onclick', 'viewDetail(this)');

    let contentPoster = document.createElement('div');
    contentPoster.className = 'grid-content';

    let poster = document.createElement('div');
    poster.className = 'poster';

    let posterImage = document.createElement('img');
    posterImage.src = 'http://image.tmdb.org/t/p/w500'+e['poster_path'];

    poster.appendChild(posterImage);
    contentPoster.appendChild(poster);
    item.appendChild(contentPoster);

    let contentInfo = document.createElement('div');
    contentInfo.className = 'grid-content';

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = e['title'];

    let rating = document.createElement('div');
    rating.className = 'rating';

    let starIcon = document.createElement('img');
    starIcon.src = "assets/star_icon.png";

    let ratingValue = document.createElement('span');
    ratingValue.className = 'rating-value';
    ratingValue.innerHTML = e['vote_average'];

    rating.appendChild(starIcon);
    rating.appendChild(ratingValue);
    contentInfo.appendChild(title);
    contentInfo.appendChild(rating);

    item.appendChild(contentInfo);

    let target = document.createElement('input');
    target.type = 'hidden';
    target.className = 'target-movie';
    target.name = 'target-movie';
    target.value = e['id'];

    item.appendChild(target);
    container.appendChild(item);
}

  function getMovies() {
    let now = new Date();
    let week_ago = new Date();
    week_ago.setDate(week_ago.getDate()-7);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=1", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            let response = JSON.parse(xhr.response);
            let total_pages = response.total_pages;
            let request =[];
            for(let i=1; i<=total_pages;i++){
                request[i] = new XMLHttpRequest();
                request[i].open("GET", `https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=${i}`,true);
                request[i].onreadystatechange = function() {
                    if(request[i].readyState === XMLHttpRequest.DONE && request[i].status === 200){
                        let response = JSON.parse(request[i].response)
                        movie_list = response.results
                        for (j = 0; j < movie_list.length; j++) {
                            if(typeof(movie_list[j].release_date) !== undefined){
                                let d = new Date(movie_list[j].release_date);
                                if(d >= week_ago && d <= now){
                                    renderMovies(movie_list[j]);
                                }
                            }
                        }
                    }
                }
                request[i].send();
            }
        }
    }
}