const dist_name = "benford";

const dist_type = "discrete";

const params = [b=10];   // set initial params

const xRange = [1, 16];
const yRange = [0, 0.6];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: b,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 3,
        'max': 16
    }
});
