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
    posterImage.src = 'http://image.tmdb.org/t/p/w500'+e.poster_path;

    poster.appendChild(posterImage);
    contentPoster.appendChild(poster);
    item.appendChild(contentPoster);

    let contentInfo = document.createElement('div');
    contentInfo.className = 'grid-content';

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = e.title;

    let rating = document.createElement('div');
    rating.className = 'rating';

    let starIcon = document.createElement('img');
    starIcon.src = "assets/star_icon.png";

    let ratingValue = document.createElement('span');
    ratingValue.className = 'rating-value';
    ratingValue.innerHTML = e.vote_average;

    rating.appendChild(starIcon);
    rating.appendChild(ratingValue);
    contentInfo.appendChild(title);
    contentInfo.appendChild(rating);

    item.appendChild(contentInfo);

    let target = document.createElement('input');
    target.type = 'hidden';
    target.className = 'target-movie';
    target.name = 'target-movie';
    target.value = e.id;

    item.appendChild(target);
    container.appendChild(item);
}

  function getMovies() {
    let now = new Date();
    now = `${now.getFullYear()}-${now.getMonth()+1 % 12}-${now.getDate()}`
    console.log(now);
    let week_ago = new Date();
    week_ago.setDate(week_ago.getDate()-7);
    week_ago = `${week_ago.getFullYear()}-${week_ago.getMonth()+1 % 12}-${week_ago.getDate()}`
    console.log(week_ago)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.themoviedb.org/3/discover/movie?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${week_ago}&primary_release_date.lte=${now}&vote_count.gte=1`, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            let response = JSON.parse(xhr.response);
            console.log(response);
            let movie_list = response.results
            for (let i = 0; i < movie_list.length; i++) {
                renderMovies(movie_list[i]);
            }
        }
    }
}