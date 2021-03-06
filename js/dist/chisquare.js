const dist_name = "chisquare";

const dist_type = "continuous";

const params = [dof=1];   // set initial params

const xRange = [0, 16];
const yRange = [0, 0.5];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: dof,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 12
    }
});
