var margin = {top: 40, right: 40, bottom: 30, left: 70},
    width = 750 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

var svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
var x = d3.scaleBand()
        .domain(d3.range(61))
        .rangeRound([0, width], .1)
        .paddingInner(0.4);
 
var y = d3.scaleLinear()
        .domain([0, 0.2])
        .range([height, 0]);

var xAxis = d3.axisBottom()
        .scale(x);

var yAxis = d3.axisLeft()
        .scale(y);
  
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis
        .tickValues(d3.range(0, 61, 5))
    );

svg.append("g")
    .attr("class", "y-axis")    
    .call(yAxis
        .tickValues(d3.range(0, 1, 0.05))
        .tickFormat(d3.format('.2f'))
    );


var dist_name = "hypgeom";

var params = [N=400, K=50, n=100];   // set initial params

var start = 1, stop = 61, step = 1;

var slider_0 = document.getElementById('slider_0');
var slider_1 = document.getElementById('slider_1');
var slider_2 = document.getElementById('slider_2');

noUiSlider.create(slider_0, {
    start: N,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 220,
        'max': 500
    }
});

noUiSlider.create(slider_1, {
    start: K,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 10,
        'max': 100
    }
});

noUiSlider.create(slider_2, {
    start: n,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 40,
        'max': 400
    }
});

slider_0.noUiSlider.on('update', function() {
    params[0] = +slider_0.noUiSlider.get();
    update_bars(dist_name, params);
});

slider_1.noUiSlider.on('update', function() {
    params[1] = +slider_1.noUiSlider.get();
    update_bars(dist_name, params);
});

slider_2.noUiSlider.on('update', function() {
    params[2] = +slider_2.noUiSlider.get();
    update_bars(dist_name, params);
});

initial_transition_bars(dist_name, params);
