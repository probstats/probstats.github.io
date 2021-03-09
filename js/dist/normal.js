const dist_name = "normal";

const dist_type = "continuous";

const params = [mu=0, sigma=1];  // set initial params

const xRange = [-6, 6];
const yRange = [0, 0.6];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: mu,
    step: 0.01,
    tooltips: wNumb({decimals: 2}),
    range: {
        'min': -6,
        'max': 6
    }
});

noUiSlider.create(slider_1, {
    start: sigma,
    step: 0.01,
    tooltips: wNumb({decimals: 2}),
    range: {
        'min': 0.4,
        'max': 4
    }
});
