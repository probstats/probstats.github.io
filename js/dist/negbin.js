const dist_name = "negbin";

const dist_type = "discrete";

var params = [r=4, p=0.5];    // set initial params

const xRange = [0, 30];
const yRange = [0, 0.25];

const slider_config = "2-sliders";

var slider_0 = document.getElementById('slider_0');
var slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: r,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 40
    }
});

noUiSlider.create(slider_1, {
    start: p,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.2,
        'max': 0.8
    }
});
