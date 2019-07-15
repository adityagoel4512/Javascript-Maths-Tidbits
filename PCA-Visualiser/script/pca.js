//Global Initial Parameters:
var setosa = 'setosa';
var versicolor = 'versicolor';
var virginica = 'virginica';
var flower_set = [[5.1,3.5,1.4,0.2,setosa],
    [4.9,3.0,1.4,0.2,setosa],
    [4.7,3.2,1.3,0.2,setosa],
    [4.6,3.1,1.5,0.2,setosa],
    [5.0,3.6,1.4,0.2,setosa],
    [5.4,3.9,1.7,0.4,setosa],
    [4.6,3.4,1.4,0.3,setosa],
    [5.0,3.4,1.5,0.2,setosa],
    [4.4,2.9,1.4,0.2,setosa],
    [4.9,3.1,1.5,0.1,setosa],
    [5.4,3.7,1.5,0.2,setosa],
    [4.8,3.4,1.6,0.2,setosa],
    [4.8,3.0,1.4,0.1,setosa],
    [4.3,3.0,1.1,0.1,setosa],
    [5.8,4.0,1.2,0.2,setosa],
    [5.7,4.4,1.5,0.4,setosa],
    [5.4,3.9,1.3,0.4,setosa],
    [5.1,3.5,1.4,0.3,setosa],
    [5.7,3.8,1.7,0.3,setosa],
    [5.1,3.8,1.5,0.3,setosa],
    [5.4,3.4,1.7,0.2,setosa],
    [5.1,3.7,1.5,0.4,setosa],
    [4.6,3.6,1.0,0.2,setosa],
    [5.1,3.3,1.7,0.5,setosa],
    [4.8,3.4,1.9,0.2,setosa],
    [5.0,3.0,1.6,0.2,setosa],
    [5.0,3.4,1.6,0.4,setosa],
    [5.2,3.5,1.5,0.2,setosa],
    [5.2,3.4,1.4,0.2,setosa],
    [4.7,3.2,1.6,0.2,setosa],
    [4.8,3.1,1.6,0.2,setosa],
    [5.4,3.4,1.5,0.4,setosa],
    [5.2,4.1,1.5,0.1,setosa],
    [5.5,4.2,1.4,0.2,setosa],
    [4.9,3.1,1.5,0.1,setosa],
    [5.0,3.2,1.2,0.2,setosa],
    [5.5,3.5,1.3,0.2,setosa],
    [4.9,3.1,1.5,0.1,setosa],
    [4.4,3.0,1.3,0.2,setosa],
    [5.1,3.4,1.5,0.2,setosa],
    [5.0,3.5,1.3,0.3,setosa],
    [4.5,2.3,1.3,0.3,setosa],
    [4.4,3.2,1.3,0.2,setosa],
    [5.0,3.5,1.6,0.6,setosa],
    [5.1,3.8,1.9,0.4,setosa],
    [4.8,3.0,1.4,0.3,setosa],
    [5.1,3.8,1.6,0.2,setosa],
    [4.6,3.2,1.4,0.2,setosa],
    [5.3,3.7,1.5,0.2,setosa],
    [5.0,3.3,1.4,0.2,setosa],
    [7.0,3.2,4.7,1.4,versicolor],
    [6.4,3.2,4.5,1.5,versicolor],
    [6.9,3.1,4.9,1.5,versicolor],
    [5.5,2.3,4.0,1.3,versicolor],
    [6.5,2.8,4.6,1.5,versicolor],
    [5.7,2.8,4.5,1.3,versicolor],
    [6.3,3.3,4.7,1.6,versicolor],
    [4.9,2.4,3.3,1.0,versicolor],
    [6.6,2.9,4.6,1.3,versicolor],
    [5.2,2.7,3.9,1.4,versicolor],
    [5.0,2.0,3.5,1.0,versicolor],
    [5.9,3.0,4.2,1.5,versicolor],
    [6.0,2.2,4.0,1.0,versicolor],
    [6.1,2.9,4.7,1.4,versicolor],
    [5.6,2.9,3.6,1.3,versicolor],
    [6.7,3.1,4.4,1.4,versicolor],
    [5.6,3.0,4.5,1.5,versicolor],
    [5.8,2.7,4.1,1.0,versicolor],
    [6.2,2.2,4.5,1.5,versicolor],
    [5.6,2.5,3.9,1.1,versicolor],
    [5.9,3.2,4.8,1.8,versicolor],
    [6.1,2.8,4.0,1.3,versicolor],
    [6.3,2.5,4.9,1.5,versicolor],
    [6.1,2.8,4.7,1.2,versicolor],
    [6.4,2.9,4.3,1.3,versicolor],
    [6.6,3.0,4.4,1.4,versicolor],
    [6.8,2.8,4.8,1.4,versicolor],
    [6.7,3.0,5.0,1.7,versicolor],
    [6.0,2.9,4.5,1.5,versicolor],
    [5.7,2.6,3.5,1.0,versicolor],
    [5.5,2.4,3.8,1.1,versicolor],
    [5.5,2.4,3.7,1.0,versicolor],
    [5.8,2.7,3.9,1.2,versicolor],
    [6.0,2.7,5.1,1.6,versicolor],
    [5.4,3.0,4.5,1.5,versicolor],
    [6.0,3.4,4.5,1.6,versicolor],
    [6.7,3.1,4.7,1.5,versicolor],
    [6.3,2.3,4.4,1.3,versicolor],
    [5.6,3.0,4.1,1.3,versicolor],
    [5.5,2.5,4.0,1.3,versicolor],
    [5.5,2.6,4.4,1.2,versicolor],
    [6.1,3.0,4.6,1.4,versicolor],
    [5.8,2.6,4.0,1.2,versicolor],
    [5.0,2.3,3.3,1.0,versicolor],
    [5.6,2.7,4.2,1.3,versicolor],
    [5.7,3.0,4.2,1.2,versicolor],
    [5.7,2.9,4.2,1.3,versicolor],
    [6.2,2.9,4.3,1.3,versicolor],
    [5.1,2.5,3.0,1.1,versicolor],
    [5.7,2.8,4.1,1.3,versicolor],
    [6.3,3.3,6.0,2.5,virginica],
    [5.8,2.7,5.1,1.9,virginica],
    [7.1,3.0,5.9,2.1,virginica],
    [6.3,2.9,5.6,1.8,virginica],
    [6.5,3.0,5.8,2.2,virginica],
    [7.6,3.0,6.6,2.1,virginica],
    [4.9,2.5,4.5,1.7,virginica],
    [7.3,2.9,6.3,1.8,virginica],
    [6.7,2.5,5.8,1.8,virginica],
    [7.2,3.6,6.1,2.5,virginica],
    [6.5,3.2,5.1,2.0,virginica],
    [6.4,2.7,5.3,1.9,virginica],
    [6.8,3.0,5.5,2.1,virginica],
    [5.7,2.5,5.0,2.0,virginica],
    [5.8,2.8,5.1,2.4,virginica],
    [6.4,3.2,5.3,2.3,virginica],
    [6.5,3.0,5.5,1.8,virginica],
    [7.7,3.8,6.7,2.2,virginica],
    [7.7,2.6,6.9,2.3,virginica],
    [6.0,2.2,5.0,1.5,virginica],
    [6.9,3.2,5.7,2.3,virginica],
    [5.6,2.8,4.9,2.0,virginica],
    [7.7,2.8,6.7,2.0,virginica],
    [6.3,2.7,4.9,1.8,virginica],
    [6.7,3.3,5.7,2.1,virginica],
    [7.2,3.2,6.0,1.8,virginica],
    [6.2,2.8,4.8,1.8,virginica],
    [6.1,3.0,4.9,1.8,virginica],
    [6.4,2.8,5.6,2.1,virginica],
    [7.2,3.0,5.8,1.6,virginica],
    [7.4,2.8,6.1,1.9,virginica],
    [7.9,3.8,6.4,2.0,virginica],
    [6.4,2.8,5.6,2.2,virginica],
    [6.3,2.8,5.1,1.5,virginica],
    [6.1,2.6,5.6,1.4,virginica],
    [7.7,3.0,6.1,2.3,virginica],
    [6.3,3.4,5.6,2.4,virginica],
    [6.4,3.1,5.5,1.8,virginica],
    [6.0,3.0,4.8,1.8,virginica],
    [6.9,3.1,5.4,2.1,virginica],
    [6.7,3.1,5.6,2.4,virginica],
    [6.9,3.1,5.1,2.3,virginica],
    [5.8,2.7,5.1,1.9,virginica],
    [6.8,3.2,5.9,2.3,virginica],
    [6.7,3.3,5.7,2.5,virginica],
    [6.7,3.0,5.2,2.3,virginica],
    [6.3,2.5,5.0,1.9,virginica],
    [6.5,3.0,5.2,2.0,virginica],
    [6.2,3.4,5.4,2.3,virginica],
    [5.9,3.0,5.1,1.8,virginica]];


var active_button_queue_dataset = [0, 1];
var active_button_queue_covariance = [0, 1];
var active_button_queue_eigenvectors = [3, 1, 2];
var param_titles = ['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width'];
var extra_text_p1 = false;
var extra_text_p3 = false;
var f_index = [];

function pcaIntro() {
    Plotly.purge("graph1");
    document.getElementById('information').innerText = "\n\nAn introduction to Principle Component Analysis. \n\n If there's any preamble we can put it here, otherwise this landing page can be removed.";
    
    f_index.push(flower_set.findIndex(vector => vector[vector.length-1] == versicolor));
    f_index.push(flower_set.findIndex(vector => vector[vector.length-1] == virginica));

    flower_set.forEach(vector => {
        vector.pop();
    });

}

function datasetVisualisation() {
    var xs = []; ys = []; zs = []; ts = [];
    flower_set.forEach(vector => {
        xs.push(vector[0]);
        ys.push(vector[1]);
        zs.push(vector[2]);
        ts.push(vector[3]);
    });

         
    var data = [
        {
            type: 'parcoords',
            pad: [80,80,80,80],
            line: {
                colorscale: [[0, 'red'], [0.5, 'green'], [1, 'blue']],
            },
            
            dimensions: [{
                range: [4,8],
                constraintrange: [5, 5.5],
                label: param_titles[0],
                values: xs
            }, {
                range: [2, 4.5],
                label: param_titles[1],
                values: ys
            }, {
                label: param_titles[2],
                range: [1, 7],
                values: zs
            }, {
                label: param_titles[3],
                range: [0, 2.5],
                values: ts
            }]
        }
    ];

              
        Plotly.newPlot('graph1', data), {width: document.getElementById('graph1').offsetWidth};

        document.getElementById('information').innerText = "\n\nHumans are generally very bad at interpreting data in more than three dimensions. " + 
                                                            "We can attempt to visualise data by tabulating it in a spreadsheet or by Parallel Coordinate Plots as " +
                                                            "done to the left for our sample data. Slide the slider up and down to look down different data points." +
                                                            "You can probably tell that it is really quite hard to discern any important features from the data like this! " +
                                                            "We will look at Principle Component Analysis " +
                                                            "as a way of successfully reducing the dimensionality of this data in a manner that most preserves the " +
                                                            "meaning of, or the patterns within, it.\n\n Select two parameters below to try and find" +
                                                            "some kind of conclusive relationship between all the variables. It's hard!\n\n";
        
        const graphWithParamsDataset = function(selected) {

            active_button_queue_dataset[0] = active_button_queue_dataset[1];
            active_button_queue_dataset[1] = param_titles.findIndex(title => title == selected.srcElement.id);
        
            var xs = []; var ys = [];
            flower_set.forEach(vector => {xs.push(vector[active_button_queue_dataset[0]]); ys.push(vector[active_button_queue_dataset[1]]);});
        
            var data = [
                {
                    x : xs.slice(0, f_index[0]), y : ys.slice(0, f_index[0]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Setosa Data'
                },
                {
                    x : xs.slice(f_index[0], f_index[1]), y : ys.slice(f_index[0], f_index[1]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Versicolor Data'
                },
                {
                    x : xs.slice(f_index[1]), y : ys.slice(f_index[1]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Virginica Data'
                }
            ]
        
            var layout = {
                width: document.getElementById('graph2').offsetWidth,
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
                      text: param_titles[active_button_queue_dataset[1]],
                      font: {
                        size: 12,
                        color: '#7f7f7f'
                      }
                    }
                  }
            };
        
            Plotly.newPlot('graph2', data, layout);
        
            if (!extra_text_p1) {
                document.getElementById('information').innerText += "As you can see, even exploring data in just four dimensions can be difficult, if not impossible. "  +
                                                                "There's alot of not so relevant relationships.\n\n"
                extra_text_p1 = true;
            }
        }

        setupButtons(graphWithParamsDataset);
}

// This is called when any of the parameter buttons are pressed
// We discern which button is pressed from the id attribute set priorly

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

    var centred_matrix = PCA.computeDeviationMatrix(flower_set);
    var covariance = 0;
    var x_mean = 0; var y_mean = 0;

    centred_matrix.forEach(vector => {
        x_mean += vector[active_button_queue_covariance[0]];
        y_mean += vector[active_button_queue_covariance[1]];
    });

    // Sample
    x_mean /= centred_matrix.length;
    y_mean /= centred_matrix.length;

    centred_matrix.forEach(vector => {
        covariance += (vector[active_button_queue_covariance[0]] - x_mean) * (vector[active_button_queue_covariance[1]] - y_mean);
    });

    covariance /= (centred_matrix.length-1);

    document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                        "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                        "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                        "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                        "data point by the mean. As we are trying to only analyse the most relevant, pairs of attributes with very positive " +
                                                        "or negative covariance will be of interest as this suggests some sort of relationship between dimensions." +
                                                        "\n\nCompute the covariances between attributes of our real dataset by picking two points below.\n\n";
    document.getElementById('information').innerText += param_titles[active_button_queue_covariance[0]] + " and " +
                                                            param_titles[active_button_queue_covariance[1]] + "'s covariance:\n" + 
                                                            "X = " + param_titles[active_button_queue_covariance[0]] + ", " +
                                                            "Y = " + param_titles[active_button_queue_covariance[1]] + "\n" +
                                                            "Cov(X, Y) = " + covariance + "\n\n";

}

function covarianceSetup() {

    document.getElementsByClassName('covariance_matrix')[0].style.display = "block";
    document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                        "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                        "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                        "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                        "data point by the mean. As we are trying to only analyse the most relevant relationships, pairs of attributes " +
                                                        "with very positive or negative covariance will be of interest as this suggests some sort " +
                                                        "of relationship between dimensions.\n\nCompute some covariances in our sample data below.\n\n";
    
    setupButtons(covariance2D);

}

function eigenvectorsSetup() {
    document.getElementById('information').innerHTML = "<br><br><a href=\"/home/adi/Desktop/Physics-Visualizations/visuals_maths/Eigenvectors/index.html\">Click here for a quick primer about Eigenvectors.</a>" +
                                                       "<p1><br><br>Since the covariance matrix is square, we can calculate the eigenvectors and eigenvalues for this matrix. " +
                                                       "These are rather important, as they tell us useful information about our data as you will find out." + 
                                                       "<br><br>Choose the number of principle components with the slider - what do you notice about how the adjusted data behaves with respect to the Principle Component axes?<br><br>";
    

    var deviation_flower_set = PCA.computeDeviationMatrix(flower_set);
    var eigenvectors = PCA.getEigenVectors(deviation_flower_set);

    
    var importance_3_pc = [];
    for(var i = 0; i < 3; ++i) {
        importance_3_pc.push(1*Math.round(100 * PCA.computePercentageExplained(eigenvectors, eigenvectors[i])));
    }

    var data = [{
    x: ['PC1', 'PC2', 'PC3'],
    y: importance_3_pc,
    type: 'bar',
    text: importance_3_pc.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
        color: 'rgb(8,48,107)',
        width: 1.5
        }
    }
    }];

    var layout = {
        title: 'Importance of the first 3 principle components in flower dataset (%)'
    };

    Plotly.newPlot('graph2', data, layout);
    
    const graphWithParamsEigenvectors = function(selected) {

        var xs = []; var ys = []; var zs = []; var xyz_space = []; var pc_xyz = [[[],[],[]], [[],[],[]], [[],[],[]]];

    
        var pcs = document.getElementById('aController') == null ? 3 : parseFloat(document.getElementById('aController').value);
        active_button_queue_eigenvectors[0] = active_button_queue_eigenvectors[1];
        active_button_queue_eigenvectors[1] = active_button_queue_eigenvectors[2];
        active_button_queue_eigenvectors[2] = param_titles.findIndex(title => title == selected.srcElement.id);
    
        deviation_flower_set.forEach(vector => {
            xs.push(vector[active_button_queue_eigenvectors[0]]); 
            ys.push(vector[active_button_queue_eigenvectors[1]]); 
            zs.push(vector[active_button_queue_eigenvectors[2]]);
        });
    
        xyz_space.push(numeric.linspace(-8, 8, 100), 
        numeric.linspace(-8, 8, 100),
        numeric.linspace(-8, 8, 100));
    
        for (var i = 0; i < pc_xyz.length; ++i) {
            for(var j = 0; j < xyz_space.length; ++j) {
                xyz_space[j].forEach(element => {
                    pc_xyz[i][j].push(eigenvectors[i].vector[j] * element);
                });
            }
        }

        const plot_pc_graph = function() {

            var scatter = pcs == 3 ? 'scatter3d' : 'scatter';
            var pc3data = pcs == 3 ? 
            {
                x : pc_xyz[2][0], y : pc_xyz[2][1], z : pc_xyz[2][2],
                name: 'PC',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
                }
            } : {};

            var recomputedData = PCA.computeAdjustedData(flower_set, eigenvectors[0], eigenvectors[1], eigenvectors[2]);
            var adjData = pcs == 3 ? 
            {
                x : recomputedData.adjustedData[0], y : recomputedData.adjustedData[1], z : recomputedData.adjustedData[2],
                name: 'Adjusted Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5,
                }
            } :
            {
                x : recomputedData.adjustedData[0], y : recomputedData.adjustedData[1],
                name: 'Adjusted Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5,
                }
            };
            var setosaData = pcs == 3 ? 
            {   x : xs.slice(0, f_index[0]), y : ys.slice(0, f_index[0]), z : zs.slice(0, f_index[0]),
                name: 'Setosa Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }} : 
            {   x : xs.slice(0, f_index[0]), y : ys.slice(0, f_index[0]),
                name: 'Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }};
            var versicolorData = pcs == 3 ? 
            {   x : xs.slice(f_index[0], f_index[1]), y : ys.slice(f_index[0], f_index[1]), z : zs.slice(f_index[0], f_index[1]),
                name: 'Versicolor Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }} : 
            {   x : xs.slice(f_index[0], f_index[1]), y : ys.slice(f_index[0], f_index[1]),
                name: 'Versicolor Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }};
            var virginicaData = pcs == 3 ? 
            {   x : xs.slice(f_index[1]), y : ys.slice(f_index[1]), z : zs.slice(f_index[1]),
                name: 'Virginica Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }} : 
            {   x : xs.slice(f_index[1]), y : ys.slice(f_index[1]),
                name: 'Virginica Data',
                mode: 'markers',
                type: scatter,
                marker: {
                    size: 5
            }};

            var data = [
                {
                    x : pc_xyz[0][0], y : pc_xyz[0][1], z : pc_xyz[0][2],
                    name: 'PC',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 5,
                    }
                },

                {
                    x : pc_xyz[1][0], y : pc_xyz[1][1], z : pc_xyz[1][2],
                    name: 'PC',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 5,
                    }
                },

                pc3data,

                adjData,

                setosaData,

                versicolorData,

                virginicaData
 
            ];
        
            var layout = {
                width: document.getElementById('graph1').offsetWidth,
                height: document.getElementById('graph1').offsetWidth,
                title: {
                    text: pcs == 3 ? param_titles[active_button_queue_eigenvectors[0]] + ' vs ' + param_titles[active_button_queue_eigenvectors[1]] + ' vs ' + param_titles[active_button_queue_eigenvectors[2]] : 
                                     param_titles[active_button_queue_eigenvectors[0]] + ' vs ' + param_titles[active_button_queue_eigenvectors[1]],
                    font: {
                        size: 14
                    },
                    xref: 'paper',
                    x: 0.05,
                    },
                    xaxis: {
                    title: {
                        text: param_titles[active_button_queue_eigenvectors[0]],
                        font: {
                        size: 9,
                        color: '#7f7f7f'
                        }
                    },
                    },
                    yaxis: {
                    title: {
                        text: param_titles[active_button_queue_eigenvectors[1]],
                        font: {
                        size: 9,
                        color: '#7f7f7f'
                        }
                    },
                    },
                    
            };

            layout.title.zaxis = {
                title: {
                    text: param_titles[active_button_queue_eigenvectors[2]],
                    font: {
                    size: 9,
                    color: '#7f7f7f'
                    }
                },
            };
        
            Plotly.newPlot('graph1', data, layout);
        };
    
        plot_pc_graph();

        if (!extra_text_p3) {
            document.getElementById('information').innerHTML +=  "It seems that one of these principle components seems to somewhat goes through the middle of the cloud of data points, like a line of best fit. " +
                                                                    "<br><br>The second principle component, and so on give us other, less important, patterns in the data. This makes sense! The vectors correspond to the most important eigenvectors (as determined by the magnitude of their eigenvalues) " +
                                                                    "of the covariance matrix, which itself encodes the relationships between all the data attributes.<br><br>" +
                                                                    "The rest of the steps involve transforming the data so that it is expressed in terms of these lines into the adjusted data. This dimensionally reduced dataset is obtained " +
                                                                    "by multiplying the feature vector containing all the used principle component vectors by the transpose of mean adjusted orignial dataset matrix.<br><br>" + 
                                                                    "We can more easily now see two things: similar flowers cluster together and which attribute of the data is most responsible for this clustering. The adjusted data " +
                                                                    "above demonstrates this.<br><br></p1>";

            document.getElementById('information').innerHTML += "<label class=\"sliderTitle\">Number of Principle Components:&nbsp;<span id=\"aControllerDisplay\" data-unit=\"\">3</span> </label><label class=\"slider\"><input id=\"aController\" class=\"inputs\" type=\"range\" value=\"3\" min=\"2\" max=\"3\" step=\"1\"/></label>"; 
            document.getElementById('graph1').innerHTML += "";
            document.getElementById('aController').onchange = function() {pcs = parseFloat(document.getElementById('aController').value); document.getElementById('aControllerDisplay').innerText = pcs; plot_pc_graph();};

            extra_text_p3 = true;
        }
    };

    setupButtons(graphWithParamsEigenvectors);
}


function varianceDemo() {
    document.getElementsByClassName('variance_maths')[0].style.display = "block";
    document.getElementById('information').innerHTML = "<br><br><label class=\"sliderTitle\">Standard Deviation:&nbsp;<span id=\"aControllerDisplay\" data-unit=\"\">5</span> </label><label class=\"slider\"><input id=\"aController\" class=\"inputs\" type=\"range\" value=\"5\" min=\"0\" max=\"10\" step=\"1\"/></label>"; 
    document.getElementById('aController').onchange = function() {
        var stdDev = parseFloat(document.getElementById('aController').value); 
        plotNormalGraph(numeric.linspace(-50, 50, 5000), 0, stdDev); 
        document.getElementById('aControllerDisplay').innerText = stdDev;
    };
    
    const normalY = (x, mean, stdDev) => Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2));
    const plotNormalGraph = (xs, mean, stdDev) => {
        var xs = numeric.linspace(-35,35,10000);
        var ys = [];

        xs.forEach(x => {
            ys.push(normalY(x, mean, stdDev));
        });

        var data = [
            {
                x : xs, y : ys,
                mode: 'markers',
                type: 'scatter',
                marker: {
                    size: 3
                }
            }
        ];
    
        Plotly.newPlot('graph2', data);
    };
    plotNormalGraph(numeric.linspace(-50, 50, 5000), 0, parseFloat(document.getElementById('aController').value));
}

function resultSetup() {
    var eigenvectors = PCA.getEigenVectors(flower_set);
    var adData = PCA.computeAdjustedData(flower_set, eigenvectors[0], eigenvectors[1], eigenvectors[2]);
    var compressed = adData.formattedAdjustedData;
    var uncompressed = PCA.computeOriginalData(compressed, adData.selectedVectors, adData.avgData).formattedOriginalData;

    document.getElementById('information').innerText = "\n\nWe have derived a new dataset, stripping away some of the dimensionality of the original dataset. So naturally, we must have lost a bit of information about our original dataset during this process right!. " +
                                                       "It turns out we have, and if using PCA to transform for data compression this may be a slight concern. In the same way we used the feature vector (the augmented matrix consisting of the eigenvectors of the covariance matrix) " +
                                                       "we can use the reduced feature vector we now have to then try to recompute the original data.\n\n" +
                                                       "By repeatedly pressing the button below we can present a random original and the compressed datapoint and you can see that we loose a tiny bit of information generally for each data point. With more complex datasets this can be alot more pronounced.\n\n" +
                                                       "It turns out PCA in this form has many applications that extend beyond normal statistical analysis, especially in Computer Vision and Image Processing, where images are encoded as multidimensional matrices of pixel values.\n\n" +
                                                       "PCA can be used for lossy Image Compression using the dimensionality reduction and then feature recomputation we've discussed. It is known as the KL transform. \n\n" +
                                                       "PCA can also be used in Computer Vision for things like finding patterns in images including things like facial recognition.\n\n";

    var randomButton = document.createElement("button");
    randomButton.innerHTML = "Compare random data points";

    var randPoint = 0;
    randomButton.onclick = function() {
        
        randPoint = Math.floor((Math.random() * flower_set.length));

        var data = [
            {
                x: param_titles,
                y: flower_set[randPoint],
                name: 'Original Data',
                type: 'bar'
            }, {
                x: param_titles,
                y: uncompressed[randPoint],
                name: 'Compressed Data',
                type: 'bar'
            }
        ];

        Plotly.newPlot('graph1', data, {barmode: 'group'});
        
        };
    document.getElementById('params').appendChild(randomButton);
}

function switchTab(tabName) {

    document.getElementById('graph1').innerHTML = "";
    document.getElementById('graph2').innerHTML = "";
    document.getElementById('params').innerHTML = "";
    document.getElementById('information').innerHTML = "";
    extra_text_p1 = false;
    extra_text_p3 = false;
    document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
    document.getElementsByClassName('variance_maths')[0].style.display = "none";

    switch(tabName) {
        case 'Dataset':
            datasetVisualisation();
            break;
        case 'Variance':
            varianceDemo();
            break;
        case 'Covariance':
            covarianceSetup();
            break;
        case 'Eigenvectors':
            eigenvectorsSetup();    
            break;
        case 'Result':
            resultSetup();
            break;
    }

}
  
$(document).ready(pcaIntro); 