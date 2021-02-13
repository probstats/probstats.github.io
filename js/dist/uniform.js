var margin = {top: 40, right: 40, bottom: 30, left: 70},
    width = 750 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
 
var y = d3.scaleLinear()
        .domain([0, 1])
        .range([height, 0]);
  
var xAxis = d3.axisBottom()
        .scale(x);

var yAxis = d3.axisLeft()
        .scale(y);

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y-axis")    
    .call(yAxis);

var dist_name = "uniform";

var params = [a=4, b=6];   // set initial params

var start = 0, stop = 10 + 0.1, step = 0.01;

var slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: [a, b],
    step: 0.01,
    margin: 0.9,     // minimum distance between the handles
    connect: [false, true, false],
    tooltips: [wNumb({decimals: 2}), wNumb({decimals: 2})],
    range: {
        'min': 0.1,
        'max': 10
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get()[0];
    params[1] = +slider_0.noUiSlider.get()[1];
    update_line(dist_name, params);
});

initial_transition_line(dist_name, params);
