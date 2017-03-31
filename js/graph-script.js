$(function () {
    Highcharts.setOptions({
        colors: ['#67BCE6'],
        chart: {
            style: {
                fontFamily: 'sans-serif',
                color: '#000'
            }
        }
    });
    $('#graph-container').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#fff'
        },
        title: {
            text: 'Languages I know',
            style: {
                color: '#000'
            }
        },
        xAxis: {
            tickWidth: 0,
            labels: {
                style: {
                    color: '#000',
                }
            },
            categories: ['Java', 'C', 'C++', 'HTML', 'CSS', 'JS', 'PHP']
        },
        yAxis: {
            gridLineWidth: .5,
            gridLineDashStyle: 'dash',
            gridLineColor: 'black',
            title: {
                text: '',
                style: {
                    color: '#fff'
                }
            },
            labels: {
                formatter: function() {
                    return Highcharts.numberFormat(this.value, 0, '', ',')+'%';
                },
                style: {
                    color: '#000',
                }
            }
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        tooltip: {
            valuePostfix: '%'
        },
        plotOptions: {
            column: {
                borderRadius: 2,
                pointPadding: 0,
                groupPadding: 0.1
            }
        },
        series: [{
            name: 'Skill',
            data: [75, 70, 70, 80, 40, 40, 40]
        }]
    });
});