const dist_name = "gamma";

const dist_type = "continuous";

const params = [shape=1, scale=1];  // set initial params

const xRange = [0, 20];
const yRange = [0, 1];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: shape,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 10
    }
});

noUiSlider.create(slider_1, {
    start: scale,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});
