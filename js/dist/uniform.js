const dist_name = "uniform";

const dist_type = "continuous";

const params = [a=4, b=6];   // set initial params

const xRange = [0, 10];
const yRange = [0, 1];

const slider_config = "1-slider-2-handles";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: [a, b],
    step: 0.01,
    margin: 0.9,     // minimum distance between handles
    connect: [false, true, false],
    tooltips: [wNumb({decimals: 2}), wNumb({decimals: 2})],
    range: {
        'min': 0.1,
        'max': 10
    }
});
