this.default = function () {
    // Initialize Slider component
    var heightSlider = new ej.inputs.Slider({
        // Set the value for slider
        value: 30,
        min: 0, max: 100
    });
    heightSlider.appendTo('#height_slider');

    // Initialize Slider component
    var gradientSlider = new ej.inputs.Slider({
        // Set slider minimum and maximum values
        min: 0, max: 100,
        // Set the intial range values for slider
        value: 50,
        type: 'MinRange'
    });
    gradientSlider.appendTo('#gradient_slider');

    var sliderTrack;
    var sliderHandle;

    // Initialize Slider component
    var dynamicColorSlider = new ej.inputs.Slider({
        // Set slider minimum and maximum values
        min: 0, max: 100,
        value: 20,
        type: 'MinRange',
        // Handler used for slider created event
        created: function() {
            sliderTrack = document.getElementById('dynamic_color_slider').querySelector('.e-range');
            sliderHandle = document.getElementById('dynamic_color_slider').querySelector('.e-handle');
            (sliderHandle).style.backgroundColor = 'green';
            (sliderTrack).style.backgroundColor = 'green';
        },
        // Handler used for slider change event
        change: function (args) {
            if (args.value > 0 && args.value <= 25) {
                // Change handle and range bar color to green when
                (sliderHandle).style.backgroundColor = 'green';
                (sliderTrack).style.backgroundColor = 'green';
            } else if (args.value > 25 && args.value <= 50) {
                // Change handle and range bar color to royal blue
                (sliderHandle).style.backgroundColor = 'royalblue';
                (sliderTrack).style.backgroundColor = 'royalblue';
            } else if (args.value > 50 && args.value <= 75) {
                // Change handle and range bar color to dark orange
                (sliderHandle).style.backgroundColor = 'darkorange';
                (sliderTrack).style.backgroundColor = 'darkorange';
            } else if (args.value > 75 && args.value <= 100) {
                // Change handle and range bar color to red
                (sliderHandle).style.backgroundColor = 'red';
                (sliderTrack).style.backgroundColor = 'red';
            }
        }
    });
    dynamicColorSlider.appendTo('#dynamic_color_slider');
};