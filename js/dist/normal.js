const dist_name = "normal";

const dist_type = "continuous";

const params = [mu=25, sigma=6];  // set initial params

const xRange = [0, 50];
const yRange = [0, 0.1];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

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
