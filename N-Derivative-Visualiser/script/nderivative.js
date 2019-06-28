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

//Plot
/**
 * Resets and plots initial area element or basis vectors of plane polar.
 * @param {string} type - basis vectors or area element
 */

function computeQuadratic(a, b, c) {
    var xs = numeric.linspace(-4, 4, 64);
    var ys = numeric.linspace(-4, 4, 64);

    for(var i = 0; i < ys.length; ++i) {
        ys[i] = (a * ys[i] * ys[i]) + (b * ys[i]) + c;
    }


    var data = [{
        x: xs,
        y: ys,
        type: 'scatter'
    }];

    return data;
}

// delim_op := '+' | '-'
// 

function computeDerivative(token) {
    
    var i = 0;

    var n;
    var a;

    while(i < token.length) {

        if (token.slice(i, i+2) == "**") {
            n = token[i+2];
        } else if (!isNaN(token[i])) {
            a = token[i];
        }

        ++i;
    }

    a = parseFloat(a) * parseFloat(n);
    n = parseFloat(n) - 1;

    var derivative = a.toString(10) + "x" + n.toString(10);
    return derivative;

}

function tokeniseExps(expression) {
    var tokens = [];
    var i = 0;
    var t = 0;
    var curr = "";
    while(i < expression.length) {
        
        if (expression[i] == "+" || expression[i] == "-") {
            //deal with signs later
            tokens.push(curr);
            curr = "";
            ++t;
            ++i;
        } else if (expression[i] == " ") {
            
            ++i;
        } else {
            // could be a number, **, symbol
            curr += expression[i];
            ++i;
        }
        
        if (i == expression.length) {
            tokens.push(curr);
            ++t;
            curr = "";
        }

    }

    return tokens;
}

function initGraph(type) {
    Plotly.purge("graph");

    var a = parseFloat(document.getElementById('aController').value);
    var b = parseFloat(document.getElementById('bController').value);
    var c = parseFloat(document.getElementById('cController').value);

    var formula = document.getElementById('aInput').value;
    console.log(formula);

    data = computeQuadratic(a, b, c);

    Plotly.newPlot('graph', data);
    return;
}


/** updates the plot according to the slider controls. */
function updatePlot() {
    var data = [];
    // NB: updates according to the active tab
    var href = $('ul.tab-nav li a.active.button').attr('href'); // finds out which tab is active

    var rho = parseFloat(document.getElementById('aController').value);
    var phi = 1;
    var a = parseFloat(document.getElementById('aController').value);
    var b = parseFloat(document.getElementById('bController').value);
    var c = parseFloat(document.getElementById('cController').value);
    data = computeQuadratic(a, b, c);
    
    var formula = document.getElementById("aInput").value;
    console.log(formula);

    var ts = tokeniseExps(formula);

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
    $("input").each(function () {
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