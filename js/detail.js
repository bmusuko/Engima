function convertDateToFormat(e) {
    let day = e.split(' ')[1];
    let month = e.split(' ')[0];
    let year = e.split(' ')[2];

    switch (month) {
        case "January":
            month = '01';
            break;
        case "February":
            month = '02';
            break;
        case "March":
            month = '03';
            break;
        case "April":
            month = '04';
            break;
        case "May":
            month = '05';
            break;
        case "June":
            month = '06';
            break;
        case "July":
            month = '07';
            break;
        case "August":
            month = '08';
            break;
        case "September":
            month = '09';
            break;
        case "October":
            month = '10';
            break;
        case "November":
            month = '11';
            break;
        case "December":
            month = '12';
            break;
    }

    histDate = year + '-' + month + '-' + day;
    return histDate;
}

function convertDate(e) {
    let tempDate = e.split('-');
    let month = tempDate[1];
    let day = tempDate[2];
    let year = tempDate[0];

    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
    }

    if (day[0] == '0') {
        day = day.substr(-1);
    }

    let date = month + " " + day + " " + year;
    return date;
}

function renderTop(e) {
    let itemTop = document.getElementsByClassName("grid-item-top")[0];

    let poster = document.createElement('div');
    poster.className = 'poster';

    let posterImg = document.createElement('img');
    posterImg.src = 'http://image.tmdb.org/t/p/w500'+e.poster_path;

    poster.appendChild(posterImg);
    itemTop.appendChild(poster);

    let movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    let title = document.createElement('label');
    title.className = 'title';
    title.innerHTML = e.title;

    let genreDuration = document.createElement('label');
    genreDuration.className = 'genre-duration';
    let genres = 'Drama';
    if(e.genres){
        genres = '';
        for (let i = 0; i < e.genres.length; i += 1) {
            genres += e.genres[i].name;
            if(i !==  e.genres.length-1){
                genres += ', '
            }
        }
    }
    genreDuration.innerHTML = genres;

    let separator = document.createElement('label');
    separator.innerHTML = ' | ';

    let duration = document.createElement('label');
    duration.className = 'duration';
    duration.innerHTML = e.runtime ? e.runtime + ' mins' : '90' + ' mins';

    genreDuration.appendChild(separator);
    genreDuration.appendChild(duration);

    let release = document.createElement('label');
    release.className = 'release';
    release.innerHTML = 'Release date: ';

    let date = document.createElement('span');
    date.className = 'date';

    date.innerHTML = convertDate(e.release_date);
    release.appendChild(date);

    let ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating-container';

    let rating1 = document.createElement('div');
    rating1.className = 'rating-1';

    let starIcon = document.createElement('img');
    starIcon.classNamec = 'star-icon'
    starIcon.src = "assets/star_icon.png";

    let rating = document.createElement('label');
    rating.className = 'rating';
    rating.innerHTML = e.vote_average + " ";

    let outTen = document.createElement('span');
    outTen.className = 'out-ten';
    outTen.innerHTML = '/10 (IMDb Rating)';

    rating.appendChild(outTen);
    rating1.appendChild(starIcon);
    rating1.appendChild(rating);

    let rating2 = document.createElement('div');
    rating2.className = 'rating-2';

    let starIcon2 = document.createElement('img');
    starIcon2.classNamec = 'star-icon-1'
    starIcon2.src = "assets/star_icon.png";

    let ratingVal2 = document.createElement('label');
    ratingVal2.className = 'rating-val-2';
    ratingVal2.innerHTML = e.rateval + " ";

    let outTen2 = document.createElement('span');
    outTen2.className = 'out-ten-2';
    outTen2.innerHTML = '/10 (User Rating)';

    ratingVal2.appendChild(outTen2);
    rating2.appendChild(starIcon2);
    rating2.appendChild(ratingVal2);

    ratingContainer.appendChild(rating1);
    ratingContainer.appendChild(rating2);

    let descContainer = document.createElement('div');
    descContainer.className = 'desc-container';

    let desc = document.createElement('p');
    desc.className = 'desc';
    desc.innerHTML = e.overview;

    descContainer.appendChild(desc);

    movieInfo.appendChild(title);
    movieInfo.appendChild(genreDuration);
    movieInfo.appendChild(release);
    movieInfo.appendChild(ratingContainer);
    movieInfo.appendChild(descContainer);

    itemTop.appendChild(movieInfo);
}

function renderScheduleItemContent(e) {
    let scheduleItemContent = document.createElement('div');
    scheduleItemContent.className = 'schedule-item-content';

    let date = document.createElement('div');
    date.className = 'schedule-item-date';
    date.innerHTML = convertDate(e.scheduleDate);

    let time = document.createElement('div');
    time.className = 'schedule-item-time';
    time.innerHTML = e.scheduleTime;

    let seats = document.createElement('div');
    seats.className = 'schedule-item-seats';

    let seatsAvailable = document.createElement('span');
    seatsAvailable.className = 'seats-available';
    seatsAvailable.innerHTML = e.seat + ' seats';

    seats.appendChild(seatsAvailable);

    let status = document.createElement('div');
    status.className = 'schedule-item-status';

    let available = document.createElement('label');
    available.className = 'available';
    if (parseInt(e.seat, 10) > 0) {
        available.setAttribute('style', 'color: #12abde;');
        available.innerHTML = 'Book Now';
        status.setAttribute('onclick', 'book(this)');
    } else {
        available.setAttribute('style', 'color: #e31212;');
        available.innerHTML = 'Not Available';
    }

    let availableIcon = document.createElement('img');
    availableIcon.className = 'available-icon';
    if (parseInt(e.seat, 10) > 0) {
        availableIcon.src = 'assets/next_icon.png';
    } else {
        availableIcon.src = 'assets/unavailable_icon.png';
    }

    status.appendChild(available);
    status.appendChild(availableIcon);

    scheduleItemContent.appendChild(date);
    scheduleItemContent.appendChild(time);
    scheduleItemContent.appendChild(seats);
    scheduleItemContent.appendChild(status);

    return scheduleItemContent;
}

function renderScheduleItem(e) {
    let scheduleItem = document.createElement('div');
    scheduleItem.className = 'schedule-item';

    for (i = 0; i < e.length; i += 1) {
        scheduleItem.append(renderScheduleItemContent(e[i]));
    }

    return scheduleItem;
}

function renderScheduleContainer(e) {
    let scheduleContainer = document.getElementsByClassName('schedule-container')[0];

    let schedule = document.createElement('div');
    schedule.className = 'schedule';

    let bottomTitle = document.createElement('label');
    bottomTitle.className = 'bottom-title';
    bottomTitle.innerHTML = 'Schedules';

    let scheduleContent = document.createElement('div');
    scheduleContent.className = 'schedule-content';

    let scheduleItemHeader = document.createElement('div');
    scheduleItemHeader.className = 'schedule-item-header';

    let date = document.createElement('div');
    date.className = 'schedule-title';
    date.innerHTML = 'Date';

    let time = document.createElement('div');
    time.className = 'schedule-title';
    time.innerHTML = 'Time';

    let seats = document.createElement('div');
    seats.className = 'schedule-title';
    seats.innerHTML = 'Available Seats';

    scheduleItemHeader.appendChild(date);
    scheduleItemHeader.appendChild(time);
    scheduleItemHeader.appendChild(seats);

    scheduleContent.appendChild(scheduleItemHeader);
    scheduleContent.appendChild(renderScheduleItem(e));

    schedule.appendChild(bottomTitle);
    schedule.appendChild(scheduleContent);

    scheduleContainer.appendChild(schedule);
}

function renderReviewItem(e) {
    let reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    let profile = document.createElement('div');
    profile.className ='profile';

    let profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = e.profilePicture;

    profile.appendChild(profilePic);

    let userReview = document.createElement('div');
    userReview.className = 'user-review';

    let uname = document.createElement('label');
    uname.className = 'uname';
    uname.innerHTML = e.username;

    let userRating = document.createElement('div');
    userRating.className = 'user-rating';

    let starIcon = document.createElement('img');
    starIcon.className = 'rating-star';
    starIcon.src = 'assets/star_icon.png';

    let ratingValueContainer = document.createElement('label');
    ratingValueContainer.className = 'rating-value-container';
    ratingValueContainer.innerHTML = e.userRating;

    let outTen = document.createElement('span');
    outTen.className = 'rating-out-10';
    outTen.innerHTML = ' /10';

    ratingValueContainer.appendChild(outTen);

    userRating.appendChild(starIcon);
    userRating.appendChild(ratingValueContainer);

    let userReviewContainer = document.createElement('div');
    userReviewContainer.className = 'user-review-container';

    let userReviewContent = document.createElement('p');
    userReviewContent.className = 'user-review-content';
    userReviewContent.innerHTML = e.userReview

    userReviewContainer.appendChild(userReviewContent);

    userReview.appendChild(uname);
    userReview.appendChild(userRating);
    userReview.appendChild(userReviewContainer);

    reviewItem.appendChild(profile);
    reviewItem.appendChild(userReview);

    return reviewItem;
}

function renderRatingValue(e){
    var sum = 0;

    for (i = 0; i < e.length; i += 1) {
        sum += Number(e[i].userRating);
    }

    return (sum/Number(e.length));
}

function renderReviewContent(e) {
    let reviewContent = document.createElement('div');
    reviewContent.className = 'review-content';

    for (i = 0; i < e.length; i += 1) {
        reviewContent.append(renderReviewItem(e[i]));
    }

    return reviewContent;
}

function renderReviewContainer(e) {
    let reviewContainer = document.getElementsByClassName('review-container')[0];

    let review = document.createElement('div');
    review.className = 'review';

    let bottomTitle = document.createElement('label');
    bottomTitle.className = 'bottom-title';
    bottomTitle.innerHTML = 'Review';

    review.appendChild(bottomTitle);
    review.appendChild(e);

    reviewContainer.appendChild(review);
}

function renderPage(e) {
    let params1 = "id=" + e.id;
    let request1 = new XMLHttpRequest();
    request1.open("GET", "php/getMovieSchedule.php" + "?" + params1, true);
    request1.send();

    request1.onload = function() {
        let schedule = JSON.parse(request1.response);
        renderScheduleContainer(schedule);
    }

    let params2 = "id=" + e.id;
    let request2 = new XMLHttpRequest();
    request2.open("GET", "php/getMovieReview.php" + "?" + params2, true);
    request2.send();

    request2.onload = function() {
        let review = JSON.parse(request2.response);
        let reviewContent = renderReviewContent(review);
        renderReviewContainer(reviewContent);
        if (review.length > 0){
            var rate = renderRatingValue(review);
        } else {
            rate = 0;
        }
        var rateval = "rateval";
        e[rateval] = rate;
        renderTop(e);
    }
}

function getMovie() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");

    let request = new XMLHttpRequest();
    request.open("GET", "https://api.themoviedb.org/3/movie/"+id+"?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US", true);
    request.send();

    request.onload = function() {
        let movie = JSON.parse(request.response);
        renderPage(movie);
    }
}

function book(e) {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");

    let parent = e.parentNode;
    children = parent.children;

    let date = children[0].innerHTML;
    date = convertDateToFormat(date);
    let time = children[1].innerHTML;

    let params = "movie=" + id + "&date=" + date + "&time=" + time;
    let request = new XMLHttpRequest();
    request.open("GET", "php/getScheduleId.php" + "?" + params, true);
    request.send()

    let scheduleID = -1;

    request.onload = function() {
        scheduleID = JSON.parse(request.response);
        let addParams = "scheduleID=" + scheduleID[0].scheduleID;

        window.location.replace('ticket.html' + "?" + addParams);
    }
}