const dist_name = "exponential";

const dist_type = "continuous";

const params = [lambda=3];  // set initial params

const xRange = [0, 5];
const yRange = [0, 5];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: lambda,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.1,
        'max': 6
    }
});
