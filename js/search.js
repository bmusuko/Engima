function changeBackButton(e) {
    if (e == 0) {
        document.getElementById('back-button').style.color = '#a6a6a6';
        document.getElementById('back-button').style.borderColor = '#a6a6a6';
        document.getElementById('back-button').style.cursor = 'default';
        document.getElementById('back-button').disabled = true;
    } else {
        document.getElementById('back-button').style.color = '#12abde';
        document.getElementById('back-button').style.borderColor = '#12abde';
        document.getElementById('back-button').disabled = false;
    }
}

function changeNextButton(e) {
    if (e == 0) {
        document.getElementById('next-button').style.color = '#a6a6a6';
        document.getElementById('next-button').style.borderColor = '#a6a6a6';
        document.getElementById('next-button').style.cursor = 'default';
        document.getElementById('next-button').disabled = true;
    } else {
        document.getElementById('next-button').style.color = '#12abde';
        document.getElementById('next-button').style.borderColor = '#12abde';
        document.getElementById('next-button').disabled = false;
    }
}

function changePage(e) {
    let url = new URL(window.location.href);
    let input = new URLSearchParams(url.search).get("search");
    let currentPage = new URLSearchParams(url.search).get("page");

    if (typeof currentPage === 'undefined') {
        currentPage = 1;
    }

    let destinationPage = e.getAttribute('num');

    if (currentPage != destinationPage) {
        if (destinationPage == 1) {
            changeBackButton(0);
        } else {
            changeBackButton(1);
        }

        let pages = document.getElementsByClassName('page-button');
        for(let i = 0;i<pages.length;i++){
            pages[i].style.color = '#12abde';
            pages[i].style.borderColor = '#12abde';
        }
        if (destinationPage == pages.length) {
            changeNextButton(0);
        } else {
            changeNextButton(1);
        }

        let params1 = "search=" + input;
        let params2 = "page=" + destinationPage;
        window.location.replace('search.html' + "?" + params1 + "&" + params2);

        getSearchResult();
    }
}

function onePage(e) {
    let url = new URL(window.location.href);
    let input = new URLSearchParams(url.search).get("search");
    let currentPage = new URLSearchParams(url.search).get("page");

    if (typeof currentPage === 'undefined') {
        currentPage = 1;
    }

    let destinationPage = parseInt(currentPage, 10) + parseInt(e, 10);

    if (currentPage != destinationPage) {
        if (destinationPage == 1) {
            changeBackButton(0);
        } else {
            changeBackButton(1);
        }

        let pages = document.getElementsByClassName('page-button')
        for(let i = 0;i<pages.length;i++){
            pages[i].style.color = '#12abde';
            pages[i].style.borderColor = '#12abde';
        }

        if (destinationPage == pages.length) {
            changeNextButton(0);
        } else {
            changeNextButton(1);
        }

        let params1 = "search=" + input;
        let params2 = "page=" + destinationPage;
        window.location.replace('search.html' + "?" + params1 + "&" + params2);

        getSearchResult();
    }
}

function getSearchResult() {
    let url = new URL(window.location.href);
    let input = new URLSearchParams(url.search).get("search");
    let page = new URLSearchParams(url.search).get("page");

    if (page == null) {
        page = 1;
    }

    let params = "search=" + input;
    let request = new XMLHttpRequest();
    request.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=${page}&query=${input}`, true);
    request.send();

    request.onload = function () {
        getData(request, page, input);
    }
}

function getData(request, page, input) {
    let url = new URL(window.location.href);
    let currentPage = new URLSearchParams(url.search).get("page");
    if (currentPage == null) {
        currentPage = 1;
    }
    console.log(currentPage);
    let data = JSON.parse(request.response);
    lastPage = data['total_pages']

    document.getElementById("search-key").innerHTML = input;
    document.getElementById("search-result").innerHTML = data['total_results'];
    
    
    data = data['results']
    for (i = 0; i<data.length; i++) {
        renderMovies(data[i]);
    }
    
    let currentPageIdx = renderPage(lastPage,currentPage);
    document.getElementsByClassName('page-button')[currentPageIdx].style.color = '#a6a6a6';
    document.getElementsByClassName('page-button')[currentPageIdx].style.borderColor = '#a6a6a6';
    document.getElementsByClassName('page-button')[currentPageIdx].style.cursor = 'default';


    if (page == 1) {
        changeBackButton(0);
    } else {
        changeBackButton(1);
    }

    if (page == lastPage) {
        changeNextButton(0);
    } else {
        changeNextButton(1);
    }
}

function renderMovies(e) {
    let container = document.getElementsByClassName("grid-container")[0];

    let item = document.createElement('div');
    item.className = 'grid-item';

    let poster = document.createElement('div');
    poster.className = 'poster';

    let posterImage = document.createElement('img');
    posterImage.className = 'posterImage';
    posterImage.src = 'http://image.tmdb.org/t/p/w500'+e['poster_path'];
    posterImage.setAttribute('onclick', 'viewDetail2(this)');

    poster.appendChild(posterImage);
    item.appendChild(poster);

    let movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    let title = document.createElement('label');
    title.className = 'title';
    title.innerHTML = e['title'];
    title.setAttribute('onclick', 'viewDetail2(this)');

    let rating = document.createElement('div');
    rating.className = 'rating-container';

    let starIcon = document.createElement('img');
    starIcon.src = "assets/star_icon.png";

    let ratingValue = document.createElement('label');
    ratingValue.className = 'rating';
    ratingValue.innerHTML = e['vote_average'];

    rating.appendChild(starIcon);
    rating.appendChild(ratingValue);
    movieInfo.appendChild(title);
    movieInfo.appendChild(rating);

    let description = document.createElement('div');
    description.className = 'desc-container';

    let desc = document.createElement('p');
    desc.className = 'desc';
    desc.innerHTML = e['overview'];

    description.appendChild(desc);
    movieInfo.appendChild(description)

    item.appendChild(movieInfo);

    let detail = document.createElement('div');
    detail.className = 'detail-container';
    detail.setAttribute('onclick', 'viewDetail1(this)');

    let view = document.createElement('label');
    view.className = 'view';
    view.innerHTML = 'View details';

    let detailIcon = document.createElement('img');
    detailIcon.className = 'detail-icon';
    detailIcon.src = "assets/next_icon.png";

    detail.appendChild(view);
    detail.appendChild(detailIcon);

    item.appendChild(detail);

    let target = document.createElement('input');
    target.type = 'hidden';
    target.className = 'target-movie';
    target.name = 'target-movie';
    target.value = e['id'];

    item.appendChild(target);
    container.appendChild(item);
}

function renderPage(last,currentPage) {
    let container = document.getElementsByClassName("grid-container")[0];
    let item = document.createElement('div');
    item.className = 'page-number';
    let back = document.createElement('button');
    back.id = 'back-button';
    back.setAttribute('onclick', 'onePage(-1)');
    back.innerHTML = 'Back'

    item.appendChild(back);

    let pages = document.createElement('span');
    pages.id = 'next-page';
    awal = Math.max(1,currentPage-2);
    let page_count = currentPage-awal+1;
    akhir = Math.min(last, (currentPage-page_count)+5);
    page_count += akhir-currentPage;
    if(awal !== 1 && page_count !== 5){
        awal = Math.max(1,awal-(5-page_count))
    }
    for (i = awal; i <= akhir; i++) {
        let page = document.createElement('button');
        page.className = 'page-button';
        page.setAttribute('num', i);
        page.innerHTML = i;
        page.setAttribute('onclick', 'changePage(this)');
        item.appendChild(page);
    }

    item.appendChild(pages);

    let next = document.createElement('button');
    next.id = 'next-button';
    next.setAttribute('onclick', 'onePage(1)');
    next.innerHTML = 'Next'

    item.appendChild(next);
    container.appendChild(item);
    return (currentPage-awal); // index tengah
}