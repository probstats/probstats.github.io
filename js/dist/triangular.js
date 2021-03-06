const dist_name = "triangular";

const dist_type = "continuous";

const params = [a=3, b=6, c=5];   // set initial params

const xRange = [0, 10];
const yRange = [0, 1];

const slider_config = "1-slider-3-handles";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: [a, c, b],
    step: 0.01,
    margin: 0.9,     // minimum distance between the handles
    connect: [false, true, true, false],
    tooltips: [wNumb({decimals: 2}), wNumb({decimals: 2}), wNumb({decimals: 2})],
    range: {
        'min': 0,
        'max': 10
    }
});
