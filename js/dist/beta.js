const dist_name = "beta";

const dist_type = "continuous";

const params = [alpha=2, beta=2];  // set initial params

const xRange = [0, 1];
const yRange = [0, 2.5];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: alpha,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});

noUiSlider.create(slider_1, {
    start: beta,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});
