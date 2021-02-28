const dist_name = "pareto";

const dist_type = "continuous";

const params = [xm=1, alpha=3];  // set initial params

const xRange = [0, 5];
const yRange = [0, 5];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: xm,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.01,
        'max': 5
    }
});

noUiSlider.create(slider_1, {
    start: alpha,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});
