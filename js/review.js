let url = new URL(window.location.href);
let title = new URLSearchParams(url.search).get("title");
let id = new URLSearchParams(url.search).get("id");
document.getElementById('title').innerHTML = title;
document.getElementById('schedule-id').value = id;
let getData = new FormData(document.forms.reviewForm);
let request = new XMLHttpRequest();
var method = "edit";
const urlParams = new URLSearchParams(window.location.search);
const scheduleID = urlParams.get('id');
request.open("POST", "php/editReview.php?id_schedule="+scheduleID, true);
request.send(getData);

request.onload = function () {
    if (request.response != null) {
        data = JSON.parse(request.response);

        if (data.userReview != null) {
            document.getElementById('review-input').value = data.userReview;
            document.getElementById('review-user').value = data.userReview;
        }

        if (data.userRating != null) {
            document.getElementById('rating-star').value = data.userRating;
        } else{
            method = "add"
        }
    }
    reset();
}

function changeImage(e) {
    let num = e.getAttribute('num');

    for (i = 0; i <= num; i += 1) {
        if (document.getElementById('star' + i).src.includes("star_icon.png")) {
        }
        else {
            document.getElementById('star' + i).src = "assets/star_icon_test.png";
        }
    }

    for (j = 9; j > num; j -= 1) {
        document.getElementById('star' + j).src = "assets/star_icon_grey.png";
    }

    e.addEventListener('mouseout', reset)
}

function reset() {
    let num = document.getElementById('rating-star').value;

    for (i = 0; i <= num; i += 1) {
        document.getElementById('star' + i).src = "assets/star_icon.png";
    }

    for (j = 9; j >= num; j -= 1) {
        document.getElementById('star' + j).src = "assets/star_icon_grey.png";
    }

    document.getElementById('review-user').value = document.getElementById('review-input').value;
}

function setRating(e) {
    let num = e.getAttribute('num');
    let ratingSrc = document.getElementById('star' + num).src;
    let ratingValue = Number(document.getElementById('rating-star').value);

    if (ratingSrc.includes("star_icon.png") && ((Number(num) + 1) == ratingValue)) {
        for (i = 0; i <= 9; i += 1) {
            document.getElementById('star' + i).src = "assets/star_icon_grey.png";
        }

        document.getElementById('rating-star').value = 0;
    } else {
        for (i = 0; i <= num; i += 1) {
            document.getElementById('star' + i).src = "assets/star_icon.png";
        }

        document.getElementById('rating-star').value = Number(num) + 1;
    }

    document.getElementById('review-user').value = document.getElementById('review-input').value;
}

function setReview() {
    document.getElementById('review-input').value = document.getElementById('review-user').value;
}

function addReview(e) {
    let getData = new FormData(document.forms.reviewForm);
    console.log(getData);
    let request = new XMLHttpRequest();
    request.open("POST", "php/review.php?method="+method+"&id_schedule="+scheduleID, true);
    request.send(getData);

    request.onload = function () {
        switch (request.response) {
            case '200':
                alert('Submission success');
                window.location.replace('transactions.html');
                break;

            case '201':
                alert('Submission failed');
                break;
        }
    }

    e.preventDefault();
}

document.getElementById('reviewForm').addEventListener('submit', addReview);