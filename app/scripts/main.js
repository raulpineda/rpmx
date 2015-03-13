$(document).ready(function() {
    scrollIntervalID = setInterval(stickIt, 10);
    ageInterval = setInterval(setAge, 100);
    $('.carousel').carousel()

    var birthday = moment('1988-12-24T21:00:00-06:00');
    var oneYear = 31536000;
    var ageField = $('.js-age');

    $('.js-scroll').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000);
    })

    function setAge() {
        var now = moment();
        var years = now.diff(birthday, 'years');
        var secondsNow = now.diff(moment().format('YYYY'), 'seconds');
        var elapsedSeconds = secondsNow / oneYear;
        var age = years + elapsedSeconds;
        ageField.html(age.toPrecision(6).toString() + ' years');
    }

    function stickIt() {

    var hero = $('.identity').offset();
    heroBottom = hero.top;

    if ($(window).scrollTop() >= (heroBottom)) {
        $('.stickyNav').fadeIn();
    } else {
         $('.stickyNav').fadeOut();
    }
    }
});
