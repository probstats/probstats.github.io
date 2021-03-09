const width = 750;
const height = 400;
const margin = {top: 40, right: 40, bottom: 30, left: 70};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const svg = d3.select("#chart")
              .append("svg")
                .attr("width", width)
                .attr("height", height)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xScale;

if (dist_type == "continuous") {
    xScale = d3.scaleLinear()
        .domain(xRange)
        .range([0, innerWidth]);

    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + innerHeight + ")")
        .call(d3.axisBottom(xScale)
        );
}
else if (dist_type == "discrete") {

    if (dist_name == "bernoulli") {    // special treatment for Bernoulli
        xScale = d3.scaleBand()
        .domain([-1, 0, 1, 2])
        .rangeRound([0, innerWidth], 0.1)
        .paddingInner(0.85);
    }
    else if (dist_name == "benford") {    // special treatment for Bernoulli
        xScale = d3.scaleBand()
        .domain([d3.range(10), "A", "B", "C", "D", "E", "F"].flat())
        .rangeRound([0, innerWidth], 0.1)
        .paddingInner(0.4);
    }
    else {
        xScale = d3.scaleBand()
        .domain(d3.range(xRange[1]+1))
        .rangeRound([0, innerWidth], 0.1)
        .paddingInner(0.4);
    }

    if (dist_name == "benford") {
        svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + innerHeight + ")")
        .call(d3.axisBottom(xScale)
            .tickValues([d3.range(1, 10), "A", "B", "C", "D", "E", "F"].flat())
        );
    }
    else {
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + innerHeight + ")")
        .call(d3.axisBottom(xScale)
            .tickValues(d3.range(xRange[0], xRange[1]+1, (xRange[1] - xRange[0] > 20) ? 5 : 1))
        );
    }

}

const yScale = d3.scaleLinear()
        .domain(yRange)
        .range([innerHeight, 0]);

svg.append("g")
    .attr("class", "y-axis")    
    .call(d3.axisLeft(yScale)
        .ticks(5)
    );
