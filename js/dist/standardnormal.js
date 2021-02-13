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
        .domain([-5, 5])
        .range([0, width]);
 
var y = d3.scaleLinear()
        .domain([0, 0.4])
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

var params = [mu=0, sigma=1];

var start = -5, stop = 5 + 0.1, step = 0.01;

initial_transition_line(dist_name, params);
