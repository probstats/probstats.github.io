const dist_name = "uniform_discrete";

const dist_type = "discrete";

const params = [a=1, b=6];   // set initial params

const xRange = [0, 10];
const yRange = [0, 0.5];

const slider_config = "1-slider-2-handles";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: [a, b],
    step: 1,
    margin: 1,     // minimum distance between handles
    connect: [false, true, false],
    tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': 1,
        'max': 10
    }
});
