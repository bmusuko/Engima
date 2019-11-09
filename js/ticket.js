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
            month = '1';
            break;
        case "December":
            month = '12';
            break;
    }

    histDate = year + '-' + month + '-' + day;
    return histDate;
}

function renderTicketInfoContainer(movieID, movieTitle, movieDate, movieTime) {
    let ticketInfoContainer = document.getElementsByClassName('ticket-info-container')[0];

    let backIconContainer = document.createElement('div');
    backIconContainer.className = 'back-icon';

    let backIcon = document.createElement('img');
    let link = "location.href = 'detail.html?movie=" + movieID + "'";
    backIcon.src = "assets/back_icon.png";
    backIcon.setAttribute("onclick", link);

    backIconContainer.appendChild(backIcon);

    let ticketInfo = document.createElement('div');
    ticketInfo.className = 'ticket-info';

    let title = document.createElement('label');
    title.id = 'title'
    title.innerHTML = movieTitle;

    let date = document.createElement('label');
    date.id = 'schedule';
    date.innerHTML = movieDate + ' - ' + movieTime;

    ticketInfo.appendChild(title);
    ticketInfo.appendChild(date);

    let errorMsg = document.createElement('span');
    errorMsg.id = 'false-username-msg';
    errorMsg.className = 'input-message';

    ticketInfoContainer.appendChild(backIconContainer);
    ticketInfoContainer.appendChild(ticketInfo);
    ticketInfoContainer.appendChild(errorMsg);
}

function renderSeatSummary(movieTitle, movieDate, movieTime, seatNum) {
    let seatSummary = document.createElement('span');
    seatSummary.id = 'seat-summary';

    let title = document.createElement('span');
    title.id = 'summary-title';
    title.innerHTML = movieTitle;


    let schedule = document.createElement('span');
    schedule.id = 'summary-schedule';
    schedule.innerHTML = movieDate + ' - ' + movieTime;

    let summarySeat = document.createElement('div');
    summarySeat.className = 'summary-seat';

    let seatText = document.createElement('span');
    seatText.id = 'seat-text';
    seatText.innerHTML = 'Seat';

    let numberText = document.createElement('span');
    numberText.id = 'number-text';
    numberText.innerHTML = '#' + seatNum;

    let priceText = document.createElement('span');
    priceText.id = 'price-text';
    priceText.innerHTML = 'Rp 45.000';

    summarySeat.appendChild(seatText);
    summarySeat.appendChild(numberText);
    summarySeat.appendChild(priceText);

    let summaryButton = document.createElement('div');
    summaryButton.className = 'summary-button';

    let buyButton = document.createElement('button');
    buyButton.id = 'buy-button';
    buyButton.setAttribute('onclick', 'payment()');
    buyButton.innerHTML = 'Buy Ticket';

    summaryButton.appendChild(buyButton);

    seatSummary.appendChild(title);
    seatSummary.appendChild(schedule);
    seatSummary.appendChild(summarySeat);
    seatSummary.appendChild(summaryButton);

    return seatSummary;
}

function setFilled(e) {
    let id = "seat-" + e["seatNo"];
    document.getElementById(id).setAttribute("value", 0);
    document.getElementById(id).style.backgroundColor = '#cccccc';
    document.getElementById(id).style.borderColor = '#8f8f8f';
    document.getElementById(id).style.color = '#8f8f8f';
}

function getSeatInfo() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let histDate = convertDateToFormat(date);
    let time = new URLSearchParams(url.search).get("time");

    let params = "movie=" + id + "&date=" + histDate + "&time=" + time;
    let request = new XMLHttpRequest();
    request.open("GET", "php/ticket.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        let seats = JSON.parse(request.response);
        seats.forEach(setFilled);
    }
}

function getMovie() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let time = new URLSearchParams(url.search).get("time");
    let seats = new URLSearchParams(url.search).get("seats");
    let params = "movie=" + id;
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.themoviedb.org/3/movie/"+id+"?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US", true);
    request.send()
    request.onload = function() {
        let title = JSON.parse(request.response);
        title = title['title'];
        renderTicketInfoContainer(id, title, date, time);
    }
}

function select(e) {
    if (document.getElementById("seat-saved").getAttribute("value") != 0) {
        let seatBefore = "seat-" + document.getElementById("seat-saved").value
        document.getElementById(seatBefore).style.backgroundColor = 'white';
        document.getElementById(seatBefore).style.borderColor = '#12abde';
        document.getElementById(seatBefore).style.color = '#12abde';
    }
    if (e.getAttribute('value') == 1) {
        let url = new URL(window.location.href);
        let id = new URLSearchParams(url.search).get("movie");
        let date = new URLSearchParams(url.search).get("date");
        let time = new URLSearchParams(url.search).get("time");
        let title = "";

        let params = "movie=" + id;
        let request = new XMLHttpRequest();
        request.open("GET", "php/title.php" + "?" + params, true);
        request.send()

        let seat = e.innerHTML;
        document.getElementById('seat-saved').value = seat;

        let seatID = "seat-" + seat;
        document.getElementById(seatID).value = 0;
        document.getElementById(seatID).style.backgroundColor = '#cccccc';
        document.getElementById(seatID).style.borderColor = '#8f8f8f';
        document.getElementById(seatID).style.color = '#8f8f8f';

        document.getElementById('seat-not-selected').style.display = 'none';
        document.getElementById('seat-selected').style.display = 'default';


        request.onload = function() {
            title = request.response;
            document.getElementById('seat-selected').replaceChild(renderSeatSummary(title, date, time, seat), document.getElementById('seat-summary'));
        }
    }
}

function getPaymentInfo() {
    //to be implemented
    return null;
    // document.getElementById('transaction-id').innerHTML = ;
    // document.getElementById('virtual-num').innerHTML = ;
}

function payment() {
    // let url = new URL(window.location.href);
    // let id = new URLSearchParams(url.search).get("movie");
    // let date = new URLSearchParams(url.search).get("date");
    // let histDate = convertDateToFormat(date)
    // let time = new URLSearchParams(url.search).get("time");
    // let seat = document.getElementById('seat-saved').value;
    // console.log(seat);

    // let request = new XMLHttpRequest();
    // let params = "movie=" + id + "&date=" + histDate + "&time=" + time + "&seat=" + seat;
    // request.open("GET", "php/insertTransaction.php" + "?" + params, true);
    // request.send()

    // request.onload = function() {
    //     if (request.response.substr(-3) == '200'){
    //         document.getElementById('modal').style.display = 'block';
    //     } else {
    //         alert("Payment failed");
    //     }
    // }
    document.getElementById('modal').style.display = 'block';
    timer();
}

function timer() {
    var tempDate = new Date().getTime();
    var countDownDate = new Date(tempDate + 2*60000);

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
    
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
    
        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % 3600000) / 60000);
        var seconds = Math.floor((distance % 60000) / 1000);
    
        // Output the result in an element with id="demo"
        if (seconds < 10) {
            var temp = '0' + seconds;
            seconds = temp;
        }
        document.getElementById('countdown').innerHTML = minutes + ':' + seconds;
    
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            payment_failed();
        } else if (document.getElementById('payment-status').getAttribute('value') == 1) {
            clearInterval(x);
            changeModal();
        }
    }, 1000);
}

function payment_failed() {
    document.getElementById('countdown').style.fontSize = '2rem';
    document.getElementById('countdown').innerHTML = 'Payment failed';
}

function changeModal() {
    document.getElementById('payment-modal-container').style.display='none';
    document.getElementById('success-modal-container').style.display='block';
}

function close() {
    document.getElementById('modal').style.display='none';
}

function goToTransaction() {
    window.location.replace('transactions.html');
}

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}