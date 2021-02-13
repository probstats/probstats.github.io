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
        .domain(d3.range(11))
        .rangeRound([0, width], .1)
        .paddingInner(0.8);
 
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
    .call(xAxis);

svg.append("g")
    .attr("class", "y-axis")    
    .call(yAxis);


var dist_name = "uniform_discrete";

var params = [a=1, b=6];   // set initial params

var start = 0, stop = 11, step = 1;

var slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: [a, b],
    step: 1,
    margin: 1,     // minimum distance between the handles
    connect: [false, true, false],
    // behaviour: 'drag-tap',
    tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': 1,
        'max': 10
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get()[0];
    params[1] = +slider_0.noUiSlider.get()[1];
    update_bars(dist_name, params);
});

initial_transition_bars(dist_name, params);
