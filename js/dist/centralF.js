const dist_name = "centralF";

const dist_type = "continuous";

const params = [d1=1, d2=1];  // set initial params

const xRange = [0, 5];
const yRange = [0, 2.5];

const slider_config = "2-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');

noUiSlider.create(slider_0, {
    start: d1,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 100
    }
});

noUiSlider.create(slider_1, {
    start: d2,
    step: 1,
    tooltips: wNumb({decimals: 0}),
    range: {
        'min': 1,
        'max': 100
    }
});
