const dist_name = "bernoulli";

const dist_type = "discrete";

const params = [p=0.5];   // set initial params

const xRange = [0, 1];
const yRange = [0, 1];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: p,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0,
        'max': 1
    }
});
