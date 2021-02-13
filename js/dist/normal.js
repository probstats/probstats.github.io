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
        .domain([0, 50])
        .range([0, width]);
 
var y = d3.scaleLinear()
        .domain([0, 0.1])
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

var dist_name = "normal";

var params = [mu=25, sigma=6];  // set initial params

var start = 0, stop = 50 + 0.5, step = 0.1;

var slider_0 = document.getElementById('slider_0');
var slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: mu,
    step: 0.01,
    tooltips: wNumb({decimals: 1}),
    range: {
        'min': 0,
        'max': 50
    }
});

noUiSlider.create(slider_1, {
    start: sigma,
    step: 0.01,
    tooltips: wNumb({decimals: 1}),
    range: {
        'min': 3,
        'max': 20
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get();
    update_line(dist_name, params);
    update_aid_lines(dist_name, params);
});

slider_1.noUiSlider.on('update', function() {
    params[1] = +slider_1.noUiSlider.get();
    update_line(dist_name, params);
    update_aid_lines(dist_name, params);
});

initial_transition_line(dist_name, params);
