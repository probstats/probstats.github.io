const dist_name = "binomial";

const dist_type = "discrete";

const params = [n=20, p=0.5];    // set initial params

const xRange = [0, 100];
const yRange = [0, 0.25];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: n,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 10,
        'max': 100
    }
});

noUiSlider.create(slider_1, {
    start: p,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.01,
        'max': 0.99
    }
});
