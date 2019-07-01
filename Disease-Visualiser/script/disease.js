//Global Initial Parameters:
var initialPoint = [1.5, 1.5];
var layout = {
    sliders: [{
      pad: {t: 30},
      currentvalue: {
        xanchor: 'right',
        prefix: 'color: ',
        font: {
          color: '#888',
          size: 20
        }
      },
      steps: [{
        label: 'red',
        method: 'restyle',
        args: ['line.color', 'red']
      }, {
        label: 'green',
        method: 'restyle',
        args: ['line.color', 'green']
      }, {
        label: 'blue',
        method: 'restyle',
        args: ['line.color', 'blue']
      }]
    }]
  };

var currentPoint = initialPoint;

var face_diameter = 10;
var canvas_width = 500;
var canvas_height = 500;
var grid = [];
var col = 100;
let r, g, b;
let slider;
var slide;

 //Plot
/**
 * Resets and plots initial area element or basis vectors of plane polar.
 * @param {string} type - basis vectors or area element
 */

class People {
    constructor(x, y, diameter, state) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.state = state; 
    }

    display() {
        circle(this.x, this.y, this.diameter);
    }
}

function setup() {
    var canvas = createCanvas(canvas_width, canvas_height);
    background(0);
    canvas.parent('visualisation');
    slider = createSlider(-10, 10, 400);
    slider.parent('graph');
    slider.position(50, 500);
    slide = 10;
    initGraph();

}

// TODO: add parameter to this function that takes into account graph
function disease(i, j) {
    if (i/20 > abs(slide) && j/20 > abs(slide)) {
        r = g = b = 0;
    } else {
        r = g = b = 100;
    }
}

function draw() {
    stroke(51);
    strokeWeight(2);

    for (var i = 20; i < canvas_height; i = i + 20) {
        var row = [];
        for (var j = 20; j < canvas_width; j = j + 20) {
            disease(i, j);
            fill(r, g, b);
            var p = new People(i, j, face_diameter, 2);
            p.display();
            row.push(p);
        }
        grid.push(row);
    }

    slide = slider.value();
    updatePlot();
}

function computeQuadratic(final_x) {

    var xs = numeric.linspace(-10, final_x, (final_x + 10) * 20);
    var ys = numeric.linspace(-10, final_x, (final_x + 10) * 20);


    for(var i = 0; i < ys.length; ++i) {
        ys[i] = ys[i] * ys[i];
    }

    var data = [{
        x: xs,
        y: ys,
        type: 'scatter'
    }];

    return data;
}

function initGraph(type) {
    Plotly.purge("graph");

    document.getElementById('graph').style.position = "absolute";
    document.getElementById('graph').style.left = 0;
    document.getElementById('graph').style.top = 30;

    data = computeQuadratic(slide);

    Plotly.newPlot('graph', data);

    return;
}


/** updates the plot according to the slider controls. */
function updatePlot() {
    var data = [];
    // NB: updates according to the active tab
    document.getElementById('graph').style.position = "absolute";
    document.getElementById('graph').style.left = 0;
    document.getElementById('graph').style.top = 30;

    data = computeQuadratic(slide);

    Plotly.animate(
        'graph',
        {data: data},
        {
            fromcurrent: true,
            transition: {duration: 0,},
            frame: {duration: 0, redraw: false,},
            mode: "afterall"
        }
    );
}