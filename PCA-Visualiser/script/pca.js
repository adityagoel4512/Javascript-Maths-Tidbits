//Global Initial Parameters:

var high_dim_set = [[2, 8, 0, 6], 
                    [3, 6, 1, 4], 
                    [4, 4, 2, 2],
                    [2.3, 5.4, 1.2, 3.4],
                    [3.4, 7.6, 1.4, 6.8],
                    [2.3, 4.2, 2.5, 2.2],
                    [4.9, 4.9, 0.2, 1.5]];

var small_data_set = [[2, 8, 0, 6], 
                      [3, 6, 1, 4],
                      [4, 4, 2, 2]]

var active_button_queue_dataset = [0, 1];
var active_button_queue_covariance = [0, 1];
var param_titles = ['sepal width', 'sepal length', 'petal width', 'petal length'];
var extra_text_p1 = false;

///TODO: text content appropriately

function pcaIntro(type) {
    Plotly.purge("graph1");
    document.getElementById('information').innerText = "\n\nAn introduction to Principle Component Analysis.";
}

function datasetVisualisation() {
    var xs = []; ys = []; zs = []; ts = [];
            high_dim_set.forEach(vector => {
                xs.push(vector[0]);
                ys.push(vector[1]);
                zs.push(vector[2]);
                ts.push(vector[3]);
            });

    var data = [{
        type: 'parcoords',
        pad: [80,80,80,80],
        line: {
            colorscale: [[0, 'red'], [0.5, 'green'], [1, 'blue']]
        },
        
        dimensions: [{
            range: [2, 4.5],
            constraintrange: [2, 2.25],
            label: param_titles[0],
            values: xs
        }, {
            range: [4,8],
            label: param_titles[1],
            values: ys
        }, {
            label: param_titles[2],
            range: [0, 2.5],
            values: zs
        }, {
            label: param_titles[3],
            range: [1, 7],
            values: ts
        }]
        }];

              
        Plotly.newPlot('graph1', data);

        document.getElementById('information').innerText = "\n\nHumans are generally very bad at interpreting data in more than three dimensions. " + 
                                                            "We can attempt to visualise data by tabulating it or by Parallel Coordinate Plots as " +
                                                            "done to the left for our sample data. Slide the slider up and down to look down different data points." +
                                                            "You can probably tell that generally it is almost impossible to discern any important features from the data like this." +
                                                            " We will look at Principle Component Analysis " +
                                                            "as a way of successfully reducing the dimensionality of this data in a manner that most preserves the " +
                                                            "meaning of, or the patterns within, it.\n\n Select two parameters below to try and find" +
                                                            "some kind of relationship between all the variables. It's hard!\n\n";
        
        setupButtons(graphWithParams);
}

// This is called when any of the parameter buttons are pressed
// We discern which button is pressed from the id attribute set priorly

function graphWithParams(selected) {

    active_button_queue_dataset[0] = active_button_queue_dataset[1];
    active_button_queue_dataset[1] = param_titles.findIndex(title => title == selected.srcElement.id);

    var xs = []; var ys = [];
    high_dim_set.forEach(vector => xs.push(vector[active_button_queue_dataset[0]]));
    high_dim_set.forEach(vector => ys.push(vector[active_button_queue_dataset[1]]));

    var data = [
        {
            x : xs, y : ys,
            mode: 'markers',
            type: 'scatter'
        }
    ]

    var layout = {
        title: {
            text: param_titles[active_button_queue_dataset[0]] + ' vs ' + param_titles[active_button_queue_dataset[1]],
            font: {
              size: 18
            },
            xref: 'paper',
            x: 0.05,
          },
          xaxis: {
            title: {
              text: param_titles[active_button_queue_dataset[0]],
              font: {
                size: 12,
                color: '#7f7f7f'
              }
            },
          },
          yaxis: {
            title: {
              text: param_titles[active_button_queue_dataset[0]],
              font: {
                size: 12,
                color: '#7f7f7f'
              }
            }
          }
    };

    Plotly.newPlot('graph2', data, layout);

    if (!extra_text_p1) {
        document.getElementById('information').innerText += "As you can see, even exploring data in just four dimensions can be difficult."  +
                                                        "There's alot of not so relevant relationships.\n\n"
        extra_text_p1 = true;
    }
}

function setupButtons(fx) {
    var buttons = [];                                                    

    for (var i = 0; i < param_titles.length; ++i) {
        buttons.push(document.createElement("button"));
    }

    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].innerHTML = param_titles[i];
        buttons[i].id = param_titles[i];
        buttons[i].onclick = function(i) { fx(i) };
        document.getElementById('params').appendChild(buttons[i]);
    }
}

function covariance2D(selected) {

    active_button_queue_covariance[0] = active_button_queue_covariance[1];
    active_button_queue_covariance[1] = param_titles.findIndex(title => title == selected.srcElement.id);
    // X = active_button_queue_covariance[0], Y = active_button_queue_covariance[0]
    // E[XY] - E[X]E[Y]

    var centred_matrix = PCA.computeDeviationMatrix(small_data_set);

    var covariance = 0;
    var x_mean = 0; var y_mean = 0;

    centred_matrix.forEach(vector => {
        x_mean += vector[active_button_queue_covariance[0]];
        y_mean += vector[active_button_queue_covariance[1]];
    });

    x_mean /= centred_matrix.length;
    y_mean /= centred_matrix.length;

    centred_matrix.forEach(vector => {
        covariance += (vector[active_button_queue_covariance[0]] - x_mean) * (vector[active_button_queue_covariance[1]] - y_mean);
    });

    covariance = covariance / centred_matrix.length;

    document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                        "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                        "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                        "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                        "data point by the mean. As we are trying to only analyse the most relevant, pairs of attributes with very positive " +
                                                        "or negative covariance will be of interest as this suggests some sort of relationship between dimensions." +
                                                        "\n\nCompute some covariances in our sample data below.\n\n";
    document.getElementById('information').innerText += param_titles[active_button_queue_covariance[0]] + " and " +
                                                            param_titles[active_button_queue_covariance[1]] + "'s covariance:\n" + 
                                                            "X = " + param_titles[active_button_queue_covariance[0]] + ", " +
                                                            "Y = " + param_titles[active_button_queue_covariance[1]] + "\n" +
                                                            "Cov(X, Y) = " + covariance + "\n\n";


    return covariance;

}

function covarianceSetup() {
//     var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML";   // use the location of your MathJax

//   var config = 'MathJax.Hub.Config({ config: "MathJax.js" }); ' +
//                'MathJax.Hub.Startup.onload();';

//   if (window.opera) {script.innerHTML = config}
//                else {script.text = config}

//   document.getElementById('graph1').appendChild(script);

    document.getElementsByClassName('covariance_matrix')[0].style.display = "block";
    document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                        "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                        "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                        "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                        "data point by the mean. As we are trying to only analyse the most relevant relationships, pairs of attributes " +
                                                        "with very positive or negative covariance will be of interest as this suggests some sort " +
                                                        "of relationship between dimensions.\n\nCompute some covariances in our sample data below.\n\n";
    var centred_matrix = PCA.computeDeviationMatrix(PCA.transpose(small_data_set));
    var deviation_matrix = PCA.computeDeviationScores(centred_matrix);
    var covariance_matrix = PCA.computeVarianceCovariance(deviation_matrix, true);
    
    setupButtons(covariance2D);


    // TODO: some kind of latexy explanation of covariance formula etc.

}

function switchTab(tabName) {

    document.getElementById('graph1').innerHTML = "";
    document.getElementById('graph2').innerHTML = "";
    document.getElementById('params').innerHTML = "";
    document.getElementById('information').innerHTML = "";

    switch(tabName) {
        case 'Dataset':
            extra_text_p1 = false;
            document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
            datasetVisualisation();
            break;
        case 'Covariance':
            //document.getElementById('graph').innerHTML = tabName;
            extra_text_p1 = false;
            document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
            covarianceSetup();
            break;
        case 'Eigenvectors':
            extra_text_p1 = false;
            document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
            var eigenvectors = PCA.getEigenVectors(high_dim_set);

            //document.getElementById('graph').innerHTML = tabName;
            break;
        case 'Result':
            extra_text_p1 = false;
            document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
            //document.getElementById('graph').innerHTML = tabName;
            var xs = [];
            var ys = [];
            var zs = [];

            high_dim_set.forEach(vector => {
                xs.push(vector[0]);
                ys.push(vector[1]);
                zs.push(vector[2]);
            });

            var data = [
                {
                    x: xs, y: ys, z: zs,
                    mode: 'markers',
                    marker: {
                        size: 5,
                        line: {
                            color: 'rgba(100, 100, 100, 0.14)',
                            width: 0.5},
                            opacity: 0.5},
                    type: 'scatter3d'
                }
            ];

            var layout = {
                width: 600, height: 400,
                margin: {l:0, r:0, t:0, b:0},
                hovermode: "closest",
                showlegend: false,
                xaxis: {range: [-100, 100], zeroline: true, title: "x"},
                yaxis: {range: [-100, 100], zeroline: true, title: "y"},
                aspectratio: {x:1, y:1}
            };

            Plotly.newPlot('graph1', data, layout);


            break;
    }

    //document.getElementById('graph').innerHTML = tabName;

    //elmnt.style.backgroundColor = color;
  }
  



function main() {
    /*Jquery*/ //NB: Put Jquery stuff in the main not in HTML
    $("input[type=range]").each(function () {
        var displayEl;
        /*Allows for live update for display values*/
        $(this).on('input', function(){
            //Displays: (FLT Value) + (Corresponding Unit(if defined))
            $("#"+$(this).attr("id") + "Display").text( $(this).val() + $("#"+$(this).attr("id") + "Display").attr("data-unit") );
            // updatePlot(); //Updating the plot is linked with display (Just My preference)
        
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

            pcaIntro(href); //re-initialise when tab is changed
            return false;
        });
    });

    pcaIntro("#basis");
}
$(document).ready(main); //Load main when document is ready.