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

    let saveTitle = document.createElement('input');
    saveTitle.type = 'hidden';
    saveTitle.id = 'movie-title';
    saveTitle.className = 'movie-title';
    saveTitle.name = 'movie-title';
    saveTitle.value = movieTitle;

    ticketInfoContainer.appendChild(backIconContainer);
    ticketInfoContainer.appendChild(ticketInfo);
    ticketInfoContainer.appendChild(saveTitle);
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
    buyButton.setAttribute('onclick', 'getPaymentInfo()');
    buyButton.innerHTML = 'Buy Ticket';

    summaryButton.appendChild(buyButton);

    seatSummary.appendChild(title);
    seatSummary.appendChild(schedule);
    seatSummary.appendChild(summarySeat);
    seatSummary.appendChild(summaryButton);

    return seatSummary;
}

function setMovieInfoFromSchedule(id, date, time) {
    document.getElementById('movie-id').setAttribute('value', id);
    document.getElementById('movie-date').setAttribute('value', date);
    document.getElementById('movie-time').setAttribute('value', time);
}

function getMovieInfoFromSchedule() {
    let url = new URL(window.location.href);
    let scheduleID = new URLSearchParams(url.search).get("scheduleID");
    let params = "scheduleID=" + scheduleID;
    let request = new XMLHttpRequest();
    request.open("GET", "php/getMovieFromSchedule.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        let respond = JSON.parse(request.response);
        let id = respond[0].movieID;
        let date = respond[0].scheduleDate;
        let time = respond[0].scheduleTime;
        setMovieInfoFromSchedule(id, date, time);
        getSeatInfo();
        getMovie();
    }
}

function setFilled(e) {
    let id = "seat-" + e.seatNo;
    document.getElementById(id).setAttribute("value", 0);
    document.getElementById(id).style.backgroundColor = '#cccccc';
    document.getElementById(id).style.borderColor = '#8f8f8f';
    document.getElementById(id).style.color = '#8f8f8f';
}

function getSeatInfo() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("scheduleID");

    let params = "scheduleID=" + id;
    let request = new XMLHttpRequest();
    request.open("GET", "php/ticket.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        let seats = JSON.parse(request.response);
        seats.forEach(setFilled);
    }
}

function getMovie() {
    let id = document.getElementById('movie-id').getAttribute('value');
    let date = convertDate(document.getElementById('movie-date').getAttribute('value'));
    let time = document.getElementById('movie-time').getAttribute('value');
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.themoviedb.org/3/movie/"+id+"?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US", true);
    request.send()
    request.onload = function() {
        let title = JSON.parse(request.response);
        title = title.title;
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
        let title = document.getElementById('movie-title').getAttribute('value');
        let date = convertDate(document.getElementById('movie-date').getAttribute('value'));
        let time = document.getElementById('movie-time').getAttribute('value');

        let seat = e.innerHTML;
        document.getElementById('seat-saved').value = seat;

        let seatID = "seat-" + seat;
        document.getElementById(seatID).value = 0;
        document.getElementById(seatID).style.backgroundColor = '#cccccc';
        document.getElementById(seatID).style.borderColor = '#8f8f8f';
        document.getElementById(seatID).style.color = '#8f8f8f';

        document.getElementById('seat-not-selected').style.display = 'none';
        document.getElementById('seat-selected').style.display = 'default';

        document.getElementById('seat-selected').replaceChild(renderSeatSummary(title, date, time, seat), document.getElementById('seat-summary'));
    }
}

function getPaymentInfo() {
    // GET VIRTUAL ACCOUNT
    let request = new XMLHttpRequest();
    request.open('POST', 'php/account.php', true);
    request.send();
    
    request.onload = function() {
        let acc = request.response;
        let soapRequest = new XMLHttpRequest();
        
        soapRequest.open('POST', 'http://localhost:8080/ws-bank-1.0-SNAPSHOT/services/AccountService', true);
        soapRequest.setRequestHeader('Content-Type', 'text/xml');
        let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.account.com/">
                        <soapenv:Header/>
                        <soapenv:Body>
                            <ser:makeVirtualAccount>
                                <arg0>${acc}</arg0>
                            </ser:makeVirtualAccount>
                        </soapenv:Body>
                    </soapenv:Envelope>`;
        soapRequest.send(body);

        soapRequest.onload = function() {
            let xml = new DOMParser();
            xml = xml.parseFromString(soapRequest.response, 'text/xml');
            document.getElementById('virtual-num').innerHTML = xml.getElementsByTagName("return")[0].innerHTML;

            //-------------------------------------------------------------------------------------------------------------
            let url = new URL(window.location.href);
            let scheduleID = new URLSearchParams(url.search).get("scheduleID");

            let getUserID = new XMLHttpRequest();
            getUserID.open('GET', 'php/userID.php', true);
            getUserID.send();

            getUserID.onload = function() {
                let userID = getUserID.response;

                let expressReq = new XMLHttpRequest();
                let data = {
                    "id_pengguna": userID,
                    "id_schedule": scheduleID,
                    "no_kursi": document.getElementById('seat-saved').getAttribute('value')
                };

                let expressBody = JSON.stringify(data);

                expressReq.open('POST', 'http://localhost:3000/createTransaction/', true);
                expressReq.setRequestHeader('Content-Type', 'application/json');
                expressReq.send(expressBody);

                expressReq.onload = function() {
                    let respond = JSON.parse(expressReq.response);
                    let respondData = JSON.parse(respond['data']);
                    let len = respondData.length;
                    if (respond['status']) {
                        document.getElementById('transaction-id').innerHTML = respondData[len-1]['id_transaksi'];
                        document.getElementById('payment-status').setAttribute('value', 0);
                        document.getElementById('modal').style.display = 'block';
                        timer();
                    }
                }
            }
        }
    }
}

function timer() {
    var tempDate = new Date().getTime();
    var countDownDate = new Date(tempDate + 2*60000);

    let request = new XMLHttpRequest();
    request.open('POST', 'php/account.php', true);
    request.send();
    
    request.onload = function() {
        let acc = request.response;
        let dest = document.getElementById('virtual-num').innerHTML;
        let amount = 45000;

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
        
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for minutes and seconds
            var minutes = Math.floor((distance % 3600000) / 60000);
            var seconds = Math.floor((distance % 60000) / 1000);
            
            // var checkTime = (120 - (minutes * 60 + seconds)) / 60;

            if (distance % 5 == 0) {
                let soapRequest = new XMLHttpRequest();
                soapRequest.open('POST', 'http://localhost:8080/ws-bank-1.0-SNAPSHOT/services/TransactionService', true);
                soapRequest.setRequestHeader('Content-Type', 'text/xml');
                let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">
                            <soapenv:Header/>
                            <soapenv:Body>
                                <ser:checkCredit>
                                    <arg0>${acc}</arg0>
                                    <arg1>${dest}</arg1>
                                    <arg2>${amount}</arg2>
                                    <arg3>2</arg3>
                                </ser:checkCredit>
                            </soapenv:Body>
                        </soapenv:Envelope>`;
                soapRequest.send(body);

                soapRequest.onload = function() {
                    let xml = new DOMParser();
                    xml = xml.parseFromString(soapRequest.response, 'text/xml');
                    document.getElementById('payment-status').setAttribute('value', xml.getElementsByTagName("return")[0].innerHTML);
                    if (document.getElementById('payment-status').getAttribute('value') == 'true') {
                        document.getElementById('payment-status').setAttribute('value', 1);
                    }
                }
            }
        
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
                payment_success();
            }
        }, 1000);
    }
}

function payment_failed() {
    let request = new XMLHttpRequest();

    let body = 'status=2';
    let id = document.getElementById('transaction-id').innerHTML;

    request.open('POST', 'http://localhost:3000/changeStatus/' + id, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(body);

    request.onload = function() {
        let respond = JSON.parse(request.response);
        if (respond['status']) {
            document.getElementById('payment-status').setAttribute('value', 2);
            document.getElementById('countdown').style.fontSize = '2rem';
            document.getElementById('countdown').innerHTML = 'Payment failed';
        }
    }
}

function payment_success() {
    let url = new URL(window.location.href);
    let scheduleID = new URLSearchParams(url.search).get("scheduleID");
    let succBook = new XMLHttpRequest();
    bookParams = "scheduleID=" + scheduleID + "&seatNo=" + document.getElementById('seat-saved').getAttribute('value');
    succBook.open("GET", "php/successBook.php" + "?" + bookParams, true);
    succBook.send()

    let request = new XMLHttpRequest();

    let body = 'status=1';
    let id = document.getElementById('transaction-id').innerHTML;

    request.open('POST', 'http://localhost:3000/changeStatus/' + id, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(body);

    request.onload = function() {
        let respond = JSON.parse(request.response);
        if (respond['status']) {
            document.getElementById('payment-modal-container').style.display='none';
            document.getElementById('success-modal-container').style.display='block';
        }
    }
}

function goToTransaction() {
    window.location.replace('transactions.html');
}

// let modal = document.getElementById('modal');

// window.onclick = function(event) {
//     if (event.target == modal && document.getElementById('payment-status').getAttribute('value') != 0) {
//         modal.style.display = "none";
//     }
// }