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
        height: '311px',
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
    
    
    
    $(".sparkline1").sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 1, 5, 7, 6, 6, 5, 5, 4, 4, 3, 3, 4, 4, 5, 6, 7, 2, 3, 4], {
        type: "bar", barColor: "#fff", height: "40", barWidth: "3", barSpacing: 2
    }); 
    $(".sparkline2").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, 6, 8, 3, 2, 6], {
        type: "discrete", lineColor: "#fff", width: "200", height: "40"
    }); 
    $(".sparkline3").sparkline([5, 6, 7, 2, 0, -4, -2, -3, -4, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3, 4, -3, -5, -4, 5, 4, 3, 6, -2, -3, -4, -5, 5, 6, 3, 4, 5], {
        type: "bar", barColor: "#fff", negBarColor: "#c6c6c6", width: "200", height: "40"
    });
    $(".sparkline4").sparkline([10, 34, 13, 33, 35, 24, 32, 24, 52, 35], {
        type: "line", height: "40", width: "100%", lineColor: "#fff", fillColor: "rgba(255,255,255,0.1)"
    });

    //bar chart
    var ctx = document.getElementById("barChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(87, 120, 123 , 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(87, 120, 123 , 0.5)" 
                },
                {
                    label: "My Second dataset",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0,0,0,0.07)"
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    //radar chart
    var ctx = document.getElementById("radarChart");
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 66, 45, 56, 55, 40],
                    borderColor: "rgba(87, 120, 123, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(87, 120, 123, 0.4)"
                },
                {
                    label: "My Second dataset",
                    data: [28, 12, 40, 19, 63, 27, 87],
                    borderColor: "rgba(87, 120, 123, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(87, 120, 123, 0.5)"
                }
            ]
        },
        options: {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

    // Footable example 1
    $('#example1').footable();
    
    $(".sidebar-toggle").click(function(){
        $(this).toggleClass("turning");
    });

});
