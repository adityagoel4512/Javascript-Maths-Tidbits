//Global Initial Parameters:
var initialPoint = [1.5, 1.5];
var layout = {
    width: 600, height: 1000,
    margin: {l:30, r:30, t:30, b:30},
    hovermode: "closest",
    showlegend: false,
    xaxis: {range: [-40, 40], zeroline: true, title: "x"},
    yaxis: {range: [-100, 100], zeroline: true, title: "y"},
    aspectratio: {x:1, y:1}
};
var currentPoint = initialPoint;

var face_diameter = 10;
var canvas_width = 500;
var canvas_height = 500;
var grid = [];
var col = 100;
let r, g, b;

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
    
}

// TODO: add parameter to this function that takes into account graph
function disease(i, j) {
    if (i/20 > 5 && j/20 > 5) {
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
}

function mouseClicked() {

}

function computeQuadratic() {
    var xs = numeric.linspace(-10, 10, 200);
    var ys = numeric.linspace(-10, 10, 200);

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
    document.getElementById('graph').style.top = 5;

    data = computeQuadratic();

    Plotly.newPlot('graph', data);
    return;
}


/** updates the plot according to the slider controls. */
function updatePlot() {
    var data = [];
    // NB: updates according to the active tab
    document.getElementById('graph').style.position = "absolute";
    document.getElementById('graph').style.left = 0;
    document.getElementById('graph').style.top = 0;

    data = computeQuadratic();

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

function main() {
    /*Jquery*/ //NB: Put Jquery stuff in the main not in HTML
    $("input[type=range]").each(function () {
        var displayEl;
        /*Allows for live update for display values*/
        $(this).on('input', function(){
            //Displays: (FLT Value) + (Corresponding Unit(if defined))
            $("#"+$(this).attr("id") + "Display").text( $(this).val() + $("#"+$(this).attr("id") + "Display").attr("data-unit") );
            updatePlot(); //Updating the plot is linked with display (Just My preference)
        
        });

    });

    /*Tabs*/
    $(function() {
        $('ul.tab-nav li a.button').click(function() {
            var href = $(this).attr('href');
            $('li a.active.button', $(this).parent().parent()).removeClass('active');
            $(this).addClass('active');
            $('.tab-pane.active', $(href).parent()).removeClass('active');
            $(href).addClass('active');

            initGraph(href); //re-initialise when tab is changed
            return false;
        });
    });

    //The First Initialisation - I use 's' rather than 'z' :p
    initGraph("#basis");
}
$(document).ready(main); //Load main when document is ready.