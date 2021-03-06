const dist_name = "lognormal";

const dist_type = "continuous";

const params = [mu=0, sigma=1];  // set initial params

const xRange = [0, 5];
const yRange = [0, 2];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: mu,
    step: 0.01,
    tooltips: wNumb({decimals: 2}),
    range: {
        'min': -1,
        'max': 5
    }
});

noUiSlider.create(slider_1, {
    start: sigma,
    step: 0.01,
    tooltips: wNumb({decimals: 2}),
    range: {
        'min': 0.2,
        'max': 3
    }
});
