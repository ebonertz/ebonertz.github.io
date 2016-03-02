
$(document).ready(function() {

// Shotclock 30 seconds countdown
    var shotClock = 30;
    var countDown = setInterval (function() {
        shotClock = shotClock - 1; //subtract one from variable
        $('#timer').text("Shot Clock : " + shotClock);
        if (shotClock < 1) {
        alert("Shotclock Expired"); //Alert user that Shotclock has expired
        clearInterval(countDown); //stop the countdown
     }
    }, 1000);
  });

    var fouls= 8,
    firstFlip=true,
    secondFlip=false,
    flippedNames = [],
    flippedCards =[];
    heartDivs = $(".fa-heart").toArray();


 $('.card').click(function() {
        if(firstFlip){
            $(this).addClass('flipped');
            $(this).children().removeClass('name');
            flippedNames.push($(this).children().attr('class'));
            flippedCards.push($(this));
            // firstFlip=false;
        }
        else {
            fouls--;
            console.log('Lives remaining'+fouls);

            $(this).addClass('flipped');
            $(this).children().removeClass('name');
            flippedNames.push($(this).children().attr('class'));
            flippedCards.push($(this));

            setTimeout(function() {
                if(flippedNames[0] !== flippedNames[1]){
                    $(flippedCards[0]).removeClass('flipped');
                    $(flippedCards[0]).children().toggleClass('name');
                    $(flippedCards[1]).removeClass('flipped');
                    $(flippedCards[1]).children().toggleClass('name');
                    if(fouls){
                        heartDivs[fouls].remove();
                    }
                    if(fouls===0){
                        alert('You Fouled Out!');
                    }
                }
                flippedNames = [];
                flippedCards = [];
            }, 1000);

            firstFlip = true;
        }
