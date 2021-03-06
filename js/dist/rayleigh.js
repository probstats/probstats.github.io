const dist_name = "rayleigh";

const dist_type = "continuous";

const params = [sigma=1];  // set initial params

const xRange = [0, 10];
const yRange = [0, 1.2];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: sigma,
    step: 0.01,
    tooltips: true,
    range: {
        'min': 0.45,
        'max': 5
    }
});

