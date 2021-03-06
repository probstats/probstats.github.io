
if (slider_config == "1-slider") {

    slider_0.noUiSlider.on('update', function() {
        params[0] = +slider_0.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
        update_bar_values(dist_name, params);
        });

}
else if (slider_config == "2-sliders") {

    slider_0.noUiSlider.on('update', function() {
        params[0] = +slider_0.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
        });

    slider_1.noUiSlider.on('update', function() {
        params[1] = +slider_1.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
    });
}

else if (slider_config == "3-sliders") {

    slider_0.noUiSlider.on('update', function() {
        params[0] = +slider_0.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
        });

    slider_1.noUiSlider.on('update', function() {
        params[1] = +slider_1.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
    });

    slider_2.noUiSlider.on('update', function() {
        params[2] = +slider_2.noUiSlider.get();
        update_chart(dist_name, dist_type, params);
        update_aid_lines(dist_name, params);
    });
    
}

else if (slider_config == "1-slider-2-handles") {

    slider_0.noUiSlider.on('update', function() {
        params[0] = +slider_0.noUiSlider.get()[0];
        params[1] = +slider_0.noUiSlider.get()[1];
        update_chart(dist_name, dist_type, params);
        update_bar_values(dist_name, params);
    });

}

else if (slider_config == "1-slider-3-handles") {

    slider_0.noUiSlider.on('update', function() {
        params[0] = +slider_0.noUiSlider.get()[0];
        params[1] = +slider_0.noUiSlider.get()[2];
        params[2] = +slider_0.noUiSlider.get()[1];
        update_aid_lines(dist_name, params);
        update_chart(dist_name, dist_type, params);
    });

}

initial_transition(dist_name, dist_type, params);
