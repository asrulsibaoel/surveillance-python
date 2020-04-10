$(document).ready(function () {

    "use strict"; // Start of use strict

    //counter
    $('.count-number').counterUp({
        delay: 10,
        time: 5000
    });

    //Sparklines Charts
    $('.sparkline1').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 1, 5, 7, 6, 6, 5, 5, 4, 4, 3, 3, 4, 4, 5, 6, 7, 2, 3, 4], {
        type: 'bar',
        barColor: '#fff',
        height: '40',
        barWidth: '3',
        barSpacing: 2
    });

    $(".sparkline2").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, 6, 8, 3, 2, 6], {
        type: 'discrete',
        lineColor: '#fff',
        width: '200',
        height: '40'
    });

    $(".sparkline3").sparkline([5, 6, 7, 2, 0, -4, -2, -3, -4, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3, 4, -3, -5, -4, 5, 4, 3, 6, -2, -3, -4, -5, 5, 6, 3, 4, 5], {
        type: 'bar',
        barColor: '#fff',
        negBarColor: '#c6c6c6',
        width: '200',
        height: '40'
    });

    $(".sparkline4").sparkline([10, 34, 13, 33, 35, 24, 32, 24, 52, 35], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#fff',
        fillColor: 'rgba(255,255,255,0.1)'
    });
    $("#sparkline5").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
        type: 'line',
        lineColor: '#57787b',
        fillColor: '#57787b',
        width: '150',
        height: '20'
    });
    $("#sparkline6").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3], {
        type: 'bar',
        barColor: '#57787b',
        negBarColor: '#c6c6c6',
        width: '150',
        height: '20'
    });
    $("#sparkline7").sparkline([10, 2], {
        type: 'pie',
        sliceColors: ['#57787b', '#ffffff'],
        width: '150',
        height: '20'
    });
    $("#sparkline8").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
        type: 'line',
        lineColor: '#57787b',
        fillColor: '#57787b',
        width: '150',
        height: '20'
    });
    $("#sparkline9").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        posBarColor: '#57787b',
        negBarColor: '#ffffff',
        width: '150',
        height: '20'
    });
    $("#sparkline10").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        lineColor: '#57787b',
        width: '150',
        height: '20'
    });
    
    $(".sparkline11").sparkline([25, 34, 31, 33, 45, 39, 31, 41, 49, 29], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#10595f'
    });
    $(".sparkline12").sparkline([10, 43, 13, 25, 45, 24, 19, 41, 49, 39], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#10595f'
    });
    $(".sparkline13").sparkline([30, 45, 35, 41, 29, 37, 30, 26, 35, 39], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#10595f'
    });
    $('.sparkline-trade').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 1, 5, 7, 6, 6, 5, 5, 4, 4, 3, 3, 4, 4, 5, 6, 7, 2, 3, 4], {
        type: 'bar',
        barColor: '#10595f',
        height: '40',
        barWidth: '3',
        barSpacing: 2
    });

});