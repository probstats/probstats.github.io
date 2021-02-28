const dist_name = "poisson";

const dist_type = "discrete";

const params = [lambda=4];   // set initial params

const xRange = [0, 20];
const yRange = [0, 0.5];

const slider_config = "1-slider";

var slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: lambda,
    step: 0.1,
    tooltips: wNumb({decimals: 1}),
    range: {
        'min': 0.8,
        'max': 15
    }
});
