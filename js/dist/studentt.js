const dist_name = "studentt";

const dist_type = "continuous";

const params = [dof=1];   // set initial params

const xRange = [-5, 5];
const yRange = [0, 0.4];

const slider_config = "1-slider";

const slider_0 = document.getElementById('slider_0');

noUiSlider.create(slider_0, {
    start: dof,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 30
    }
});
