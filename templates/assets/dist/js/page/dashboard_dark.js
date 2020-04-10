$(document).ready(function () {
    "use strict"; // Start of use strict

    //counter
    $('.count-number').counterUp({
        delay: 10,
        time: 5000
    });

    //Chat list
    $('.chat_list').slimScroll({
        size: '3px',
        height: '296px',
        allowPageScroll: true,
        railVisible: true
    });

    // Message
    $('.message_inner').slimScroll({
        size: '3px',
        height: '351px',
        allowPageScroll: true,
        railVisible: true
                // position: 'left'
    });
    
    //Monthly calender
    $('.monthly_calender').slimScroll({
        size: '3px',
        height: '312px',
        allowPageScroll: true,
        railVisible: true
    });

    //emojionearea
    $(".emojionearea").emojioneArea({
        pickerPosition: "top",
        tonesStyle: "radio"
    });

    //monthly calender
    $('#m_calendar').monthly({
        mode: 'event',
        //jsonUrl: 'events.json',
        //dataType: 'json'
        xmlUrl: 'events.xml'
    });

    //Sparklines Charts
    $('.sparkline1').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 1, 5, 7, 6, 6, 5, 5, 4, 4, 3, 3, 4, 4, 5, 6, 7, 2, 3, 4], {
        type: 'bar',
        barColor: '#fff',
        width: '100%',
        height: '40',
        barWidth: '3',
        barSpacing: 2
    });

    $(".sparkline2").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, 6, 8, 3, 2, 6], {
        type: "discrete", 
        lineColor: "#fff", 
        width: "200", 
        height: "40"
    }); 

    $(".sparkline3").sparkline([5, 6, 7, 2, 0, -4, -2, -3, -4, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3, 4, -3, -5, -4, 5, 4, 3, 6, -2, -3, -4, -5, 5, 6, 3, 4, 5], {
        type: 'bar',
        barColor: '#fff',
        negBarColor: '#c6c6c6',
        width: '100%',
        height: '40'
    });

    $(".sparkline4").sparkline([10, 34, 13, 33, 35, 24, 32, 24, 52, 35], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#fff',
        fillColor: 'rgba(255,255,255,0.1)'
    });

    $(".sparkline5").sparkline([32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15], {
        type: 'line',
        lineColor: '#f0f',
        fillColor: '#f0f',
        width: '100',
        height: '20'
    });

    $(".sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        lineColor: '#f0f',
        width: '100',
        height: '20'
    });

    $(".sparkline7").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3], {
        type: 'bar',
        barColor: '#f0f',
        negBarColor: '#f0f',
        width: '100',
        height: '20'
    });

    //amchart
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "dark",
        "color": "#fff",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
                "id": "v1",
                "title": "Sales",
                "position": "left",
                "autoGridCount": false,
                "color": "#fff",
                "labelFunction": function (value) {
                    return "$" + Math.round(value) + "M";
                }
            
            }, {
                "id": "v2",
                "title": "Market Days",
                "gridAlpha": 0,
                "position": "right",
                "autoGridCount": false
            }],
        "graphs": [{
                "id": "g3",
                "valueAxis": "v1",
                "lineColor": "#e1ede9",
                "fillColors": "#e1ede9",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual Sales",
                "valueField": "sales2",
                "clustered": false,
                "columnWidth": 0.5,
                "color": "#fff",
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g4",
                "valueAxis": "v1",
                "lineColor": "#058aa0",
                "fillColors": "#058aa0",
                "fillAlphas": 1,
                "type": "column",
                "title": "Target Sales",
                "valueField": "sales1",
                "clustered": false,
                "columnWidth": 0.3,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g1",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#20acd4",
                "type": "smoothedLine",
                "title": "Market Days",
                "useLineColorForBulletBorder": true,
                "valueField": "market1",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }, {
                "id": "g2",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#ff5",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "lineColor": "#E5343D",
                "type": "smoothedLine",
                "dashLength": 5,
                "title": "Market Days ALL",
                "useLineColorForBulletBorder": true,
                "valueField": "market2",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }],
        "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis": false,
            "offset": 30,
            "scrollbarHeight": 50,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#fff",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#fff"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top",
            "color": "#fff",
            "fill": "#fff",
            "labelColor": "#fff",
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
                "date": "2013-01-16",
                "market1": 71,
                "market2": 75,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-17",
                "market1": 74,
                "market2": 78,
                "sales1": 4,
                "sales2": 6
            }, {
                "date": "2013-01-18",
                "market1": 78,
                "market2": 88,
                "sales1": 5,
                "sales2": 2
            }, {
                "date": "2013-01-19",
                "market1": 85,
                "market2": 89,
                "sales1": 8,
                "sales2": 9
            }, {
                "date": "2013-01-20",
                "market1": 82,
                "market2": 89,
                "sales1": 9,
                "sales2": 6
            }, {
                "date": "2013-01-21",
                "market1": 83,
                "market2": 85,
                "sales1": 3,
                "sales2": 5
            }, {
                "date": "2013-01-22",
                "market1": 88,
                "market2": 92,
                "sales1": 5,
                "sales2": 7
            }, {
                "date": "2013-01-23",
                "market1": 85,
                "market2": 90,
                "sales1": 7,
                "sales2": 6
            }, {
                "date": "2013-01-24",
                "market1": 85,
                "market2": 91,
                "sales1": 9,
                "sales2": 5
            }, {
                "date": "2013-01-25",
                "market1": 80,
                "market2": 84,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-26",
                "market1": 87,
                "market2": 92,
                "sales1": 4,
                "sales2": 8
            }, {
                "date": "2013-01-27",
                "market1": 84,
                "market2": 87,
                "sales1": 3,
                "sales2": 4
            }, {
                "date": "2013-01-28",
                "market1": 83,
                "market2": 88,
                "sales1": 5,
                "sales2": 7
            }, {
                "date": "2013-01-29",
                "market1": 84,
                "market2": 87,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-30",
                "market1": 81,
                "market2": 85,
                "sales1": 4,
                "sales2": 7
            }]
    });


    /**
     * SVG path for target icon
     */
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    /**
     * SVG path for plane icon
     */
    var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

    /**
     * Create the map
     */
    var map = AmCharts.makeChart("chartMap", {
        "type": "map",
        "theme": "dark",
        "color": "#fff",

        "projection": "winkel3",
        "dataProvider": {
            "map": "worldLow",
            "lines": [{
                    "id": "line1",
                    "arc": -0.85,
                    "alpha": 0.3,
                    "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                    "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
                }, {
                    "id": "line2",
                    "alpha": 0,
                    "color": "#E5343D",
                    "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                    "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
                }],
            "images": [{
                    "svgPath": targetSVG,
                    "title": "Bangladesh",
                    "latitude": 23.684994,
                    "longitude": 90.356331
                }, {
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510
                }, {
                    "svgPath": targetSVG,
                    "title": "Toronto",
                    "latitude": 43.8163,
                    "longitude": -79.4287
                }, {
                    "svgPath": targetSVG,
                    "title": "Los Angeles",
                    "latitude": 34.3,
                    "longitude": -118.15
                }, {
                    "svgPath": targetSVG,
                    "title": "Havana",
                    "latitude": 23,
                    "longitude": -82
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "Russia",
                    "latitude": 61.524010,
                    "longitude": 105.318756
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "India",
                    "latitude": 20.593684,
                    "longitude": 78.962880
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "Iraq",
                    "latitude": 33.223191,
                    "longitude": 43.679291
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#ffffff",
                    "alpha": 0.1,
                    "animateAlongLine": true,
                    "lineId": "line2",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.3
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#fff",
                    "animateAlongLine": true,
                    "lineId": "line1",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.8
                }]
        },

        "areasSettings": {
            "unlistedAreasColor": "#666"
        },

        "imagesSettings": {
            "color": "#ff0",
            "rollOverColor": "#ff0",
            "selectedColor": "#ff0",
            "pauseDuration": 0.2,
            "animationDuration": 4,
            "adjustAnimationSpeed": true
        },

        "linesSettings": {
            "color": "#ff0",
            "alpha": 0.8
        },

        "export": {
            "enabled": true
        }

    });

    var chart = AmCharts.makeChart("chartPie", {
        "type": "pie",
        "theme": "dark",
        "addClassNames": true,
        "classNameField": "class",
        "dataProvider": [{
                "value": 4852,
                "class": "color1"
            }, {
                "value": 9899,
                "class": "color2"
            }, {
                "value": 7789,
                "class": "color3"
            }],
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
            "enabled": true
        }
    });

});