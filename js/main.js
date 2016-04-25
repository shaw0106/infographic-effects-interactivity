var $biglockin = $('.biglockin');
var $lineupin = $('.lineupin');
var $chartin = $('.chartin');
var $coinin = $('.coinin');
var $bandsin = $('.bandsin');
var $lockbottomin = $('.lockbottomin');
var $lockbottomin = $('.lockbottomin');
var $orangechart = $('.orangechart');
var $bluechart = $('.bluechart');
var $top = $('.top');
var $bottom = $('.bottom');

$biglockin.waypoint(function (direction) {
  if (direction == 'down') {
    $biglockin.addClass('js-appear-animate');
  } else {
    $biglockin.removeClass('js-appear-animate');
  }
}, {offset: '70%'});

$lineupin.waypoint(function (direction) {
  if (direction == 'down') {
    $lineupin.addClass('js-appear-animate');
  } else {
    $lineupin.removeClass('js-appear-animate');
  }
}, {offset: '65%'});

$chartin.waypoint(function (direction) {
  if (direction == 'down') {
    $chartin.addClass('js-appear-animate');
  } else {
    $chartin.removeClass('js-appear-animate');
  }
}, {offset: '70%'});

$coinin.waypoint(function (direction) {
  if (direction == 'down') {
    $coinin.addClass('js-appear-animate');
  } else {
    $coinin.removeClass('js-appear-animate');
  }
}, {offset: '65%'});

$bandsin.waypoint(function (direction) {
  if (direction == 'down') {
    $bandsin.addClass('js-appear-animate');
  } else {
    $bandsin.removeClass('js-appear-animate');
  }
}, {offset: '70%'});

$lockbottomin.waypoint(function (direction) {
  if (direction == 'down') {
    $lockbottomin.addClass('js-appear-animate');
  } else {
    $lockbottomin.removeClass('js-appear-animate');
  }
}, {offset: '65%'});

// expand chart
$chartin.on('mouseover', function () {
  $orangechart.addClass('expand');
});

$chartin.on('mouseout', function () {
  $orangechart.removeClass('expand');
});

$chartin.on('mouseover', function () {
  $bluechart.addClass('expand');
});

$chartin.on('mouseout', function () {
  $bluechart.removeClass('expand');
});

$bandsin.on('mouseover', function () {
  $top.toggleClass('zoomin');
});

$bandsin.on('mouseout', function () {
  $top.removeClass('zoomin');
});

$bandsin.on('mouseover', function () {
  $bottom.toggleClass('zoomin');
});

$bandsin.on('mouseout', function () {
  $bottom.removeClass('zoomin');
});
