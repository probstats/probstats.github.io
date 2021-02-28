// main function for updating chart
function update_chart(dist_name, dist_type, params){  

    d3.selectAll(".bar, .line").remove();  // clear chart

    var data = generate_data(dist_name, dist_type, params); 

    if (dist_type == "discrete") {

        bars = svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", d => xScale(d[0]))
                .attr("width", xScale.bandwidth())
                .attr("y", d => yScale(d[1]))
                .attr("height", d => innerHeight - yScale(d[1]));

            mouseover_bars();
    }

    else if (dist_type == "continuous") {

        var line = d3.line()
                    .x(d => xScale(d[0]))
                    .y(d => yScale(d[1]));

        path = svg.append('path')
                    .attr("class", "line")
                    .datum(data)
                    .attr("d", line);
    
    }
}

function mouseover_bars(){

    bars.on("mouseover", function() {
        d3.select(this)
          .style("fill", "#b30000");     // dark red
        })
        .on("mouseout", function() {
        d3.select(this)
          .style("fill", "red");
        }); 
}

// add reference line
function add_ref_line(dist_name, params) {

    var line = d3.line()
                 .x(d => xScale(d[0]))
                 .y(d => yScale(d[1]));

    var data = generate_data(dist_name, dist_type, params);

    path = svg.append('path')
              .attr("class", "line_reference")
              .datum(data)
              .attr("d", line);
}


// initial transition
function initial_transition(dist_name, dist_type, params) {

    d3.selectAll(".bar, .bar-value").remove();  // clear chart
    d3.selectAll(".mean").remove();  // clear chart


    update_chart(dist_name, dist_type, params);

    if (dist_type == "discrete") {

        bars.attr("y",  innerHeight)
            .attr("height", 0)
            .transition()
            .duration(700)
            .delay((d, i) => i * 50)
            .attr("y", d => yScale(d[1]))
            .attr("height", d => innerHeight - yScale(d[1]))
            .on("end", function() {update_bar_values(dist_name, params)});
    }

    else if (dist_type == "continuous") {

        var totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0) // Set final value of dash-offset for transition
            .on("end", function() {update_aid_lines(dist_name, params)});

    }
}

// display bar values for some discrete distributions
var bar_value_dist_list = ["bernoulli", "uniform_discrete"];      // list of distributions that display bar values

function update_bar_values(dist_name, params){

    if (bar_value_dist_list.includes(dist_name)) {

    d3.selectAll(".bar-value").remove();

    var data = generate_data(dist_name, dist_type, params);

    svg.selectAll("text.bar")
       .data(data)
       .enter()
       .append("text")
       .attr("class", "bar-value")
       .attr("text-anchor", "middle")
       .attr("x", d => xScale(d[0]) + xScale.bandwidth()/2)
       .attr("y", d => yScale(d[1]) - 8)                // add some padding
       .text(d => (d[1] > 0) ? d[1].toFixed(2) : "");   // only display values greater than 0 
    }
}

// display aid lines (e.g., mean, mode, etc.)
var mean_dist_list = ["normal", "standard_normal", "triangular"];

function update_aid_lines(dist_name, params){

    if (mean_dist_list.includes(dist_name)) {

        d3.selectAll(".mean").remove();

        switch (dist_name) {
            case "normal":              // fall through
            case "standard_normal": 
                var mu = params[0];
                var sigma = params[1];        
                var x_aid = mu;
                var height_aid = jStat.normal.pdf(x_aid, mu, sigma);
                break;
            case "triangular":
                var a = params[0];
                var b = params[1];
                var c = params[2];
                var x_aid = c;
                var height_aid = jStat.triangular.pdf(x_aid, a, b, c);
                break;
            case "exponential": 
                var lambda = params[0];  
                var x_aid = 1/lambda;
                var height_aid = jStat.exponential.pdf(x_aid, lambda);
                break;
        }

    svg.append("line")
        .attr("class", "mean")
        .attr("x1", xScale(x_aid))
        .attr("y1", yScale(height_aid)+5)  // add a few pixels to avoid overlapping
        .attr("x2", xScale(x_aid))
        .attr("y2", innerHeight);
    }
}
