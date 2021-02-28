const dist_name = "hypgeom";

const dist_type = "discrete";

const params = [N=400, K=50, n=100];   // set initial params

const xRange = [0, 60];
const yRange = [0, 0.2];

const slider_config = "3-sliders";

var slider_0 = document.getElementById('slider_0');
var slider_1 = document.getElementById('slider_1');
var slider_2 = document.getElementById('slider_2');

noUiSlider.create(slider_0, {
    start: N,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 220,
        'max': 500
    }
});

noUiSlider.create(slider_1, {
    start: K,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 10,
        'max': 100
    }
});

noUiSlider.create(slider_2, {
    start: n,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 40,
        'max': 400
    }
});
