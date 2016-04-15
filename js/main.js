var $biglockin = $('.biglockin');
var $lineupin = $('.lineupin');
var $chartin = $('.chartin');
var $coinin = $('.coinin');
var $bandsin = $('.bandsin');
var $lockbottomin = $('.lockbottomin');
var $lockbottomin = $('.lockbottomin');
var $orangechart = $('.orangechart');

$biglockin.waypoint(function () {
  $biglockin.addClass('js-appear-animate');
}, { offset: '75%'});

$lineupin.waypoint(function () {
  $lineupin.addClass('js-appear-animate');
}, { offset: '75%'});

$chartin.waypoint(function () {
  $chartin.addClass('js-appear-animate');
}, { offset: '75%'});

$coinin.waypoint(function () {
  $coinin.addClass('js-appear-animate');
}, { offset: '75%'});

$bandsin.waypoint(function () {
  $bandsin.addClass('js-appear-animate');
}, { offset: '75%'});

$lockbottomin.waypoint(function () {
  $lockbottomin.addClass('js-appear-animate');
}, { offset: '75%'});

// expand chart
// $orangechart.on('mouseover', function () {
//  $orangechart.toggleClass('expand');
// });

// $('.ball').css('animation-name', 'change-colour');
