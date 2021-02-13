var margin = {top: 40, right: 40, bottom: 30, left: 70},
width = 750 - margin.left - margin.right,
height = 350 - margin.top - margin.bottom;

var svg = d3.select("#chart")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .domain([0, 16])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0, 0.5])
    .range([height, 0]);

var xAxis = d3.axisBottom()
          .scale(x);

var yAxis = d3.axisLeft()
          .scale(y);

svg.append("g")
.attr("class", "x-axis")
.attr("transform", "translate(0," + height + ")")
.call(xAxis
    .tickValues(d3.range(0, 16.1, 1))
    );

svg.append("g")
.attr("class", "y-axis")    
.call(yAxis
    .tickValues(d3.range(0, 0.51, 0.1))
    .tickFormat(d3.format('.1f'))
    );


var dist_name = "chisquare";

var params = [dof=1];   // set initial params

var start = 0.01, stop = 16 + 0.2, step = 0.1;

var slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: dof,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 12
    }
});


slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get();
    update_line(dist_name, params);
});


initial_transition_line(dist_name, params);
