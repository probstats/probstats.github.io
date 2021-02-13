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
        .domain([0, 5])
        .range([0, width]);
 
var y = d3.scaleLinear()
        .domain([0, 2.5])
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
   .call(yAxis
    .tickValues(d3.range(0, 2.6, 0.5)));

var dist_name = "centralF";

var params = [d1=1, d2=1];  // set initial params

var start = 0.01, stop = 5 + 0.05, step = 0.01;

var slider_0 = document.getElementById('slider_0');
var slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: d1,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 100
    }
});

noUiSlider.create(slider_1, {
    start: d2,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 100
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get();
    update_line(dist_name, params);
});

slider_1.noUiSlider.on('update', function() {
    params[1] = +slider_1.noUiSlider.get();
    update_line(dist_name, params);
});

initial_transition_line(dist_name, params);
