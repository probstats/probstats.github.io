var margin = {top: 40, right: 40, bottom: 30, left: 70},
    width = 750 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
var x = d3.scaleBand()
        .domain(d3.range(41))
        .rangeRound([0, width], .1)
        .paddingInner(0.4);
 
var y = d3.scaleLinear()
        .domain([0, 0.6])
        .range([height, 0]);

var xAxis = d3.axisBottom()
        .scale(x);

var yAxis = d3.axisLeft()
        .scale(y);
  
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis
        .tickValues(d3.range(0, 41, 5))
    );

svg.append("g")
    .attr("class", "y-axis")    
    .call(yAxis
        .tickValues(d3.range(0, 1, 0.1))
        .tickFormat(d3.format('.1f'))
    );


var dist_name = "geometric";

var params = [p=0.5];   // set initial params

var start = 0, stop = 41, step = 1;

var slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: p,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.01,
        'max': 0.6
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get();
    update_bars(dist_name, params);
});

initial_transition_bars(dist_name, params);
