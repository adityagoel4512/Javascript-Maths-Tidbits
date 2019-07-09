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

var colors = [];
var small_data_set = [[2, 8, 0, 6], 
                      [3, 6, 1, 4],
                      [4, 4, 2, 2]];



var active_button_queue_dataset = [0, 1];
var active_button_queue_covariance = [0, 1];
var active_button_queue_eigenvectors = [0, 1, 2];
var param_titles = ['sepal length', 'sepal width', 'petal length', 'petal width'];
var extra_text_p1 = false;
var extra_text_p3 = false;

function pcaIntro(type) {
    Plotly.purge("graph1");
    document.getElementById('information').innerText = "\n\nAn introduction to Principle Component Analysis.";
}

function datasetVisualisation() {
    var xs = []; ys = []; zs = []; ts = [];
            flower_set.forEach(vector => {
                xs.push(vector[0]);
                ys.push(vector[1]);
                zs.push(vector[2]);
                ts.push(vector[3]);
            });

    var data = [{
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
        }];

              
        Plotly.newPlot('graph1', data);

        document.getElementById('information').innerText = "\n\nHumans are generally very bad at interpreting data in more than three dimensions. " + 
                                                            "We can attempt to visualise data by tabulating it or by Parallel Coordinate Plots as " +
                                                            "done to the left for our sample data. Slide the slider up and down to look down different data points." +
                                                            "You can probably tell that generally it is almost impossible to discern any important features from the data like this." +
                                                            " We will look at Principle Component Analysis " +
                                                            "as a way of successfully reducing the dimensionality of this data in a manner that most preserves the " +
                                                            "meaning of, or the patterns within, it.\n\n Select two parameters below to try and find" +
                                                            "some kind of conclusive relationship between all the variables. It's hard!\n\n";
        
        const graphWithParamsDataset = function(selected) {

            active_button_queue_dataset[0] = active_button_queue_dataset[1];
            active_button_queue_dataset[1] = param_titles.findIndex(title => title == selected.srcElement.id);
        
            var xs = []; var ys = [];
            flower_set.forEach(vector => {xs.push(vector[active_button_queue_dataset[0]]); ys.push(vector[active_button_queue_dataset[1]]);});
        
            var pl_colorscale=[
                [0.0, '#19d3f3'],
                [0.5, '#e763fa'],
                [1, '#636efa']
            ]
        
            var data = [
                {
                    x : xs, y : ys,
                    mode: 'markers',
                    type: 'scatter',
                    marker: {
                        color: colors,
                        colorscale: pl_colorscale
                    }
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
    // X = active_button_queue_covariance[0], Y = active_button_queue_covariance[0]
    // E[XY] - E[X]E[Y]

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

    covariance = covariance / (centred_matrix.length-1);

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
                                                       "These are rather important, as they tell us useful information about our data." + 
                                                       "<br><br>Choose 3 attributes to plot on the 3D graph below and overlay the eigenvectors - what do you notice?<br><br>";
    
    const graphWithParamsEigenvectors = function(selected) {
            active_button_queue_eigenvectors[0] = active_button_queue_eigenvectors[1];
            active_button_queue_eigenvectors[1] = active_button_queue_eigenvectors[2];
            active_button_queue_eigenvectors[2] = param_titles.findIndex(title => title == selected.srcElement.id);
        
            var xs = []; var ys = []; var zs = [];
            var eigenvectors = PCA.getEigenVectors(flower_set);
            var first = PCA.computePercentageExplained(eigenvectors, eigenvectors[0]);
            var topTwo = PCA.computePercentageExplained(eigenvectors, eigenvectors[0], eigenvectors[1]);
            var topThree = PCA.computePercentageExplained(eigenvectors, eigenvectors[0], eigenvectors[1], eigenvectors[2]);
        
            flower_set.forEach(vector => {
                xs.push(vector[active_button_queue_eigenvectors[0]]); 
                ys.push(vector[active_button_queue_eigenvectors[1]]); 
                zs.push(vector[active_button_queue_eigenvectors[2]]);
            });
        
            var xyz_space = [];
            
            xyz_space.push(numeric.linspace(Math.min(...xs), Math.max(...xs), 100), 
            numeric.linspace(Math.min(...ys), Math.max(...ys), 100),
            numeric.linspace(Math.min(...zs), Math.max(...zs), 100));
        
            var pc1 = eigenvectors[0].vector; var pc2 = eigenvectors[1].vector; var pc3 = eigenvectors[2].vector;
            pc1.pop(); pc2.pop(); pc3.pop();
            var pc1_xyz = [[],[],[]];
            var pc2_xyz = [[],[],[]];
            var pc3_xyz = [[],[],[]];

            for(var x = 0; x < xyz_space.length; ++x) {
                xyz_space[x].forEach(element => {
                    pc1_xyz[x].push(pc1[x] * element);
                });
            }

            for(var x = 0; x < xyz_space.length; ++x) {
                xyz_space[x].forEach(element => {
                    pc2_xyz[x].push(pc2[x] * element);
                });
            }

            for(var x = 0; x < xyz_space.length; ++x) {
                xyz_space[x].forEach(element => {
                    pc3_xyz[x].push(pc3[x] * element);
                });
            }

            var data = [
                {
                    x : xs, y : ys, z : zs,
                    mode: 'markers',
                    type: 'scatter3d',
                    marker: {
                        size: 5,
                    }
                },
        
                {
                    x : pc1_xyz[0], y : pc1_xyz[1], z : pc1_xyz[2],
                    mode: 'markers',
                    type: 'scatter3d',
                    marker: {
                        size: 5
                    }
                },

                {
                    x : pc2_xyz[0], y : pc2_xyz[1], z : pc2_xyz[2],
                    mode: 'markers',
                    type: 'scatter3d',
                    marker: {
                        size: 5
                    }
                },

                {
                    x : pc3_xyz[0], y : pc3_xyz[1], z : pc3_xyz[2],
                    mode: 'markers',
                    type: 'scatter3d',
                    marker: {
                        size: 5
                    }
                },
        
                // {
                //     x : xyz_space[0], y : xyz_space[1], z : xyz_space[2],
                //     mode: 'markers',
                //     type: 'scatter3d',
                //     marker: {
                //         size: 5
                //     }
                // },
        
                // {
                //     x : xyz_space[0], y : xyz_space[1], z : xyz_space[2],
                //     mode: 'markers',
                //     type: 'scatter3d',
                //     marker: {
                //         size: 5
                //     }
                // },
        
            ]
        
            var layout = {
                title: {
                    text: param_titles[active_button_queue_eigenvectors[0]] + ' vs ' + param_titles[active_button_queue_eigenvectors[1]] + ' vs ' + param_titles[active_button_queue_eigenvectors[2]],
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
                    }
                  },
                  zaxis: {
                    title: {
                      text: param_titles[active_button_queue_eigenvectors[2]],
                      font: {
                        size: 9,
                        color: '#7f7f7f'
                      }
                    }
                  },
            };
        
            Plotly.newPlot('graph1', data, layout);
        
            if (!extra_text_p3) {
                document.getElementById('information').innerHTML +=  "It seems that one of the eigenvectors goes through the middle of the points, like drawing a line of best fit. " +
                                                                     "<br><br>The second eigenvector gives us the other, less important, pattern in the data, that all the points follow the " + 
                                                                     "main line, but are off to the side of the main line by some amount. So, by this process of taking the eigenvectors of the covariance matrix, we have " +
                                                                     "been able to extract lines that characterise the data. The rest of the steps involve transforming the data so that it is expressed in terms of these lines.<br><br></p1>"
                extra_text_p3 = true;
            }
    };

    setupButtons(graphWithParamsEigenvectors);
}


function varianceDemo() {
    document.getElementsByClassName('variance_maths')[0].style.display = "block";
    document.getElementById('information').innerHTML = "<label class=\"sliderTitle\">Standard Deviation:&nbsp;<span id=\"aControllerDisplay\" data-unit=\"\">5</span> <!--default: 0--></label><label class=\"slider\"><input id=\"aController\" class=\"inputs\" type=\"range\" value=\"5\" min=\"0\" max=\"20\" step=\"1\"/></label>"; 
    document.getElementById('aController').onchange = function() {var stdDev = parseFloat(document.getElementById('aController').value); plotNormalGraph(numeric.linspace(-50, 50, 10000), 0, stdDev); document.getElementById('aControllerDisplay').innerText = stdDev;};
    
    const normalY = (x, mean, stdDev) => Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2));
    const plotNormalGraph = (xs, mean, stdDev) => {
        var xs = numeric.linspace(-5,5,1000);
        var ys = [];

        xs.forEach(x => {
            ys.push(normalY(x, mean, stdDev));
        });

        var data = [
            {
                x : xs, y : ys,
                mode: 'markers',
                type: 'scatter',
            }
        ];
    
        Plotly.newPlot('graph2', data);
    };
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
            //document.getElementById('graph').innerHTML = tabName;
            var xs = [];
            var ys = [];
            var zs = [];

            flower_set.forEach(vector => {
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