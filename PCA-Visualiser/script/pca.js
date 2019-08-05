//Global Initial parameterTitles:
var setosa = 'setosa';
var versicolor = 'versicolor';
var virginica = 'virginica';
var originalFlowerDataSet = [[5.1,3.5,1.4,0.2,setosa],
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


var activeButtonQueueDataset = [0, 1];
var activeButtonQueueCovariance = [0, 1];
var parameterTitles = ['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width'];
var extraTextp1 = false;
var extraTextp3 = false;
var flowerTypeSplit = [];
var normalisedData;
var covarianceM;
var eigs;

function pcaIntro() {
    Plotly.purge("graph1");
    document.getElementById('information').style.fontSize = '130%';
    document.getElementById('graph1').style.fontSize = '130%';
    document.getElementById('graph2').style.fontSize = '130%';
    document.getElementById('transformationmaths').style.fontSize = '130%';
    document.getElementsByClassName('covariance_matrix')[0].style.fontSize = '130%';
    document.getElementsByClassName('variance_maths')[0].style.fontSize = '130%';
    document.getElementsByClassName('transformation3')[0].style.fontSize = '130%';
    document.getElementsByClassName('transformation2')[0].style.fontSize = '130%';

    flowerTypeSplit.push(originalFlowerDataSet.findIndex(vector => vector[vector.length-1] == versicolor));
    flowerTypeSplit.push(originalFlowerDataSet.findIndex(vector => vector[vector.length-1] == virginica));

    originalFlowerDataSet.forEach(vector => {
        vector.pop();
    });
    normalisedData = normaliseData(originalFlowerDataSet);
    covarianceM = covarianceMatrix(normalisedData);
    eigs = numeric.eig(covarianceM);

    switchTab('Eigenvectors')

}

function datasetVisualisation() {
    var xs = []; ys = []; zs = []; ts = [];
    originalFlowerDataSet.forEach(vector => {
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
                label: parameterTitles[0],
                values: xs
            }, {
                range: [2, 4.5],
                label: parameterTitles[1],
                values: ys
            }, {
                label: parameterTitles[2],
                range: [1, 7],
                values: zs
            }, {
                label: parameterTitles[3],
                range: [0, 2.5],
                values: ts
            }]
        }
    ];

              
        Plotly.newPlot('graph1', data), {width: document.getElementById('graph1').offsetWidth};

        document.getElementById('information').innerText = "\n\nHumans are generally very bad at interpreting data in more than three dimensions." + 
                                                            "We can attempt to visualise data by tabulating it in a spreadsheet or by Parallel Coordinate Plots as " +
                                                            "done to the left for our sample data. \n\nSlide the slider up and down to look down different data points. " +
                                                            "You can probably tell that it is really quite hard to discern any important features from the data like this! \n\n" +
                                                            "We will look at Principle Component Analysis " +
                                                            "as a way of successfully reducing the dimensionality of this data in a manner that most preserves the " +
                                                            "meaning of, or the patterns within, it.\n\n Select two parameterTitles below to try and find " +
                                                            "some kind of conclusive relationship between all the variables. It's hard!\n\n";
        
        const graphWithParamsDataset = (selected) => {

            activeButtonQueueDataset[0] = activeButtonQueueDataset[1];
            activeButtonQueueDataset[1] = parameterTitles.findIndex(title => title == selected.srcElement.id);
        
            var xs = []; var ys = [];
            originalFlowerDataSet.forEach(vector => {
                xs.push(vector[activeButtonQueueDataset[0]]); ys.push(vector[activeButtonQueueDataset[1]]);
            });
        
            var data = [
                {
                    x : xs.slice(0, flowerTypeSplit[0]), y : ys.slice(0, flowerTypeSplit[0]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Setosa Data'
                },
                {
                    x : xs.slice(flowerTypeSplit[0], flowerTypeSplit[1]), y : ys.slice(flowerTypeSplit[0], flowerTypeSplit[1]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Versicolor Data'
                },
                {
                    x : xs.slice(flowerTypeSplit[1]), y : ys.slice(flowerTypeSplit[1]),
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Virginica Data'
                }
            ]
        
            var layout = {
                width: document.getElementById('graph2').offsetWidth,
                title: {
                    text: parameterTitles[activeButtonQueueDataset[0]] + ' vs ' + parameterTitles[activeButtonQueueDataset[1]],
                    font: {
                      size: 18
                    },
                    xref: 'paper',
                    x: 0.05,
                  },
                  xaxis: {
                    title: {
                      text: parameterTitles[activeButtonQueueDataset[0]],
                      font: {
                        size: 12,
                        color: '#7f7f7f'
                      }
                    },
                  },
                  yaxis: {
                    title: {
                      text: parameterTitles[activeButtonQueueDataset[1]],
                      font: {
                        size: 12,
                        color: '#7f7f7f'
                      }
                    }
                  }
            };
        
            Plotly.newPlot('graph2', data, layout);
        
            if (!extraTextp1) {
                document.getElementById('information').innerText += "As you can see, even exploring data in just four dimensions can be difficult, if not impossible. "  +
                                                                "There's alot of not so relevant relationships.\n\n"
                extraTextp1 = true;
            }
        }

        setupButtons(graphWithParamsDataset);
}

// This is called when any of the parameter buttons are pressed
// We discern which button is pressed from the id attribute set priorly

function setupButtons(fx) {
    var buttons = [];                                                    

    for (var i = 0; i < parameterTitles.length; ++i) {
        buttons.push(document.createElement("button"));
    }

    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].innerHTML = parameterTitles[i];
        buttons[i].id = parameterTitles[i];
        buttons[i].onclick = (i) => { fx(i) };
        document.getElementById('params').appendChild(buttons[i]);
    }
}

function covarianceSetup(covarianceM) {

    document.getElementsByClassName('covariance_matrix')[0].style.display = "block";
    document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                        "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                        "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                        "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                        "data point by the mean. As we are trying to only analyse the most relevant relationships, pairs of attributes " +
                                                        "with very positive or negative covariance will be of interest as this suggests some sort " +
                                                        "of relationship between dimensions.\n\nCompute some covariances in our sample data below.\n\n";
    
    setupButtons((selected) => {

        activeButtonQueueCovariance[0] = activeButtonQueueCovariance[1];
        activeButtonQueueCovariance[1] = parameterTitles.findIndex(title => title == selected.srcElement.id);
    
        var covariance = covarianceM[activeButtonQueueCovariance[0]][activeButtonQueueCovariance[1]];
    
        document.getElementById('information').innerText = "\n\nCovariance is defined as the joint variability of two random variables.\n\n" +
                                                            "As Covariance can only be calculated between two variables, we compute a Covariance matrix " +
                                                            "to represent the covariances between all the permutations of two random variables. We can do so for the " +
                                                            "same dataset here. \n\nThe first step is to center the data around 0 by subtracting each " +
                                                            "data point by the mean. As we are trying to only analyse the most relevant, pairs of attributes with very positive " +
                                                            "or negative covariance will be of interest as this suggests some sort of relationship between dimensions." +
                                                            "\n\nCompute the covariances between attributes of the normalised dataset by picking two points below.\n\n";
        document.getElementById('information').innerText += parameterTitles[activeButtonQueueCovariance[0]] + " and " +
                                                                parameterTitles[activeButtonQueueCovariance[1]] + "'s covariance:\n" + 
                                                                "X = " + parameterTitles[activeButtonQueueCovariance[0]] + ", " +
                                                                "Y = " + parameterTitles[activeButtonQueueCovariance[1]] + "\n" +
                                                                "Cov(X, Y) = " + covariance + "\n\n";
    
    });
}

function dotProduct(xs, ys) {
    console.assert(xs.length == ys.length);
    return  numeric.linspace(0, xs.length-1, xs.length)
           .map(i => xs[i] * ys[i])
           .reduce((x, y) => x + y, 0);
}

function transposeMatrix(xs) {
    var transpose = [];
    xs[0].forEach(() => transpose.push([]));
    for (var i = 0; i < xs.length; ++i) {
        for (var j = 0; j < xs[i].length; ++j) {
            transpose[j].push(xs[i][j]);
        }
    }
    return transpose;
}

function normaliseData(data) {
    var means = []; var stdDevs = [];
    var transpose = transposeMatrix(data);
    for (var i = 0; i < transpose.length; ++i) {
        means[i] = transpose[i].reduce((x,y) => x+y, 0) / transpose[i].length;
        stdDevs[i] = Math.sqrt(transpose[i].map(x => (x - means[i]) ** 2).reduce((x,y) => x+y, 0) / (transpose[i].length - 1));
        for (var j = 0; j < transpose[i].length; ++j) {
            transpose[i][j] = (transpose[i][j] - means[i]) / stdDevs[i];
        }
    }
    return transposeMatrix(transpose);
}

function covarianceMatrix(normalisedData) {
    var matrix = [[], [], [], []];
    var transpose = transposeMatrix(normalisedData);
    for (var i = 0; i < transpose.length; ++i) {
        for (var j = 0; j < transpose.length; ++j) {
            matrix[i].push(dotProduct(transpose[i], transpose[j]) / (transpose[i].length - 1));
        }
    }
    return matrix;
}

function scalarProduct(lambda, xs) {
    return xs.map(x => x * lambda);
}

function eigenvectorsSetup(normalisedData, eigs) {
    document.getElementById('information').innerHTML = "<br><br><a href=\"/home/adi/Desktop/Physics-Visualizations/visuals_maths/Eigenvectors/index.html\">Click here for a quick primer about Eigenvectors.</a>" +
                                                       "<p1><br><br>Since the covariance matrix is square, we can calculate the eigenvectors and eigenvalues for this matrix. " +
                                                       "These are rather important, as they tell us useful information about our data as you will find out." + 
                                                       "<br><br>Choose the number of principle components with the slider - what do you notice about how the adjusted data behaves with respect to the Principle Component axes?<br><br>";

    var order = numeric.linspace(0, eigs.E.x.length-1, eigs.E.x.length).sort((i, j) => {
        return (eigs.lambda.x[j] - eigs.lambda.x[i]);
    });

    var eigenvectors = [];
    for (var i = 0; i < eigs.E.x.length; ++i) {
        eigenvectors.push(transposeMatrix(eigs.E.x)[order[i]]);
    }

    var transformationMatrix = transposeMatrix(eigenvectors);
    var newdata = math.multiply(normalisedData, transformationMatrix);
    
    
    var importancepc = [];
    var totalEigs = eigs.lambda.x.reduce((e1, e2) => e1 + e2, 0);
    for(var i = 0; i < eigs.lambda.x.length; ++i) {
        importancepc.push(Math.round(100 * eigs.lambda.x[order[i]]/totalEigs));
    }

    var data = [{
    x: ['PC1', 'PC2', 'PC3', 'PC4'],
    y: importancepc,
    type: 'bar',
    text: importancepc.map(String),
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
        title: 'Explained Variance of the 4 principle components in flower dataset (%)'
    };

    Plotly.newPlot('graph2', data, layout);
    
    const graphWithParamsEigenvectors = () => {
    
        var pcs = document.getElementById('aController') == null ? 3 : parseFloat(document.getElementById('aController').value);


        const plotPrincipleComponentGraph = () => {

            var scatter = pcs == 3 ? 'scatter3d' : 'scatter';

            var data = [
                
                {
                    x : transposeMatrix(newdata)[0].slice(0, flowerTypeSplit[0]), y : transposeMatrix(newdata)[1].slice(0, flowerTypeSplit[0]), z : transposeMatrix(newdata)[2].slice(0, flowerTypeSplit[0]),
                    name: 'Adjusted Setosa Data',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 5
                    }
                },
                {
                    x : transposeMatrix(newdata)[0].slice(flowerTypeSplit[0], flowerTypeSplit[1]), y : transposeMatrix(newdata)[1].slice(flowerTypeSplit[0], flowerTypeSplit[1]), z : transposeMatrix(newdata)[2].slice(flowerTypeSplit[0], flowerTypeSplit[1]),
                    name: 'Adjusted Versicolor Data',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 5
                    }
                },
                {
                    x : transposeMatrix(newdata)[0].slice(flowerTypeSplit[1]), y : transposeMatrix(newdata)[1].slice(flowerTypeSplit[1]), z : transposeMatrix(newdata)[2].slice(flowerTypeSplit[1]),
                    name: 'Adjusted Virginica Data',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 5
                    }
                },
                {
                    x : numeric.linspace(-8, 8, 1000), y : numeric.linspace(0, 0, 1000), z : numeric.linspace(0, 0, 1000),
                    name: 'PC 1',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 2
                    }
                },
                {
                    x : numeric.linspace(0, 0, 1000), y : numeric.linspace(-8, 8, 1000), z : numeric.linspace(0, 0, 1000),
                    name: 'PC 2',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 2
                    }
                },
                pcs == 3 ? {
                    x : numeric.linspace(0, 0, 1000), y : numeric.linspace(0, 0, 1000), z : numeric.linspace(-8, 8, 1000),
                    name: 'PC 3',
                    mode: 'markers',
                    type: scatter,
                    marker: {
                        size: 2
                    }
                } : {},
 
            ];
        
            var layout = {
                width: document.getElementById('graph1').offsetWidth,
                height: document.getElementById('graph1').offsetWidth,
                autosize: true
            };  
        
            Plotly.newPlot('graph1', data, layout);
            var matrixClass = pcs == 3 ? 'transformation3' : 'transformation2';

            document.getElementsByClassName('transformation3')[0].style.display = "none";
            document.getElementsByClassName('transformation2')[0].style.display = "none";
            document.getElementsByClassName(matrixClass)[0].style.display = "block";
        };
    
        plotPrincipleComponentGraph();

        if (!extraTextp3) {            

            document.getElementById('information').innerHTML += "<label class=\"sliderTitle\">Number of Principle Components:&nbsp;<span id=\"aControllerDisplay\" data-unit=\"\">3</span> </label><label class=\"slider\"><input id=\"aController\" class=\"inputs\" type=\"range\" value=\"3\" min=\"2\" max=\"3\" step=\"1\"/></label>"; 
            pcs = parseFloat(document.getElementById('aController').value); 
            plotPrincipleComponentGraph();
            document.getElementById('information').innerHTML +=  "It seems that one of these principle components seems to somewhat goes through the middle of the cloud of data points, like a line of best fit. " +
                                                                    "<br><br>The second principle component, and so on give us other, less important, patterns in the data, and so on. This makes sense! The vectors correspond to the most important eigenvectors (as determined by the magnitude of their eigenvalues) " +
                                                                    "of the covariance matrix, which itself encodes the relationships between all the data attributes.<br><br>" +
                                                                    "The rest of the steps involve transforming the data so that it is expressed in terms of these lines into the adjusted data. The 2/3 dimension subspace or the reduced dataset to be computed is obtained by " +
                                                                    "multiplying the feature vector containing all the used principle component vectors by the transpose of normalised dataset matrix as illustrated below the plot. The feature vector is a \"projection matrix\". <br><br>" + 
                                                                    "We can more easily now see two things: similar flowers cluster together and which attribute of the data is most responsible for this clustering. The adjusted data " +
                                                                    "above demonstrates this.<br><br></p1>";
            document.getElementById('aController').onchange = () => {
                pcs = parseFloat(document.getElementById('aController').value); 
                document.getElementById('aControllerDisplay').innerText = pcs; 
                plotPrincipleComponentGraph();
            };

            extraTextp3 = true;
        }

    };

    graphWithParamsEigenvectors();

}


function varianceDemo() {
    document.getElementsByClassName('variance_maths')[0].style.display = "block";
    document.getElementById('information').innerHTML = "<br><br><label class=\"sliderTitle\">Standard Deviation:&nbsp;<span id=\"aControllerDisplay\" data-unit=\"\">5</span> </label><label class=\"slider\"><input id=\"aController\" class=\"inputs\" type=\"range\" value=\"5\" min=\"0\" max=\"10\" step=\"1\"/></label>"; 
    document.getElementById('aController').onchange = () => {
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

    document.getElementById('information').innerHTML += "<body>If you're familiar with the normal distrubution you'll recognise this! We do in fact normalise our dataset to improve the computational efficiency in doing Principle Component Analysis.</body>";
    plotNormalGraph(numeric.linspace(-50, 50, 5000), 0, parseFloat(document.getElementById('aController').value));
}

function resultSetup() {
    var compressed = adData.formattedAdjustedData;
    var uncompressed = PCA.computeOriginalData(compressed, adData.selectedVectors, adData.avgData).formattedOriginalData;

    document.getElementById('information').innerText = "\n\nWe have derived a new dataset, stripping away some of the dimensionality of the original dataset. So naturally, we must have lost a bit of information about our original dataset during this process right!. " +
                                                       "It turns out we have, and if using PCA to transform for data compression this may be a slight concern. In the same way we used the feature vector (the augmented matrix consisting of the eigenvectors of the covariance matrix) " +
                                                       "we can use the reduced feature vector we now have to then try to recompute the original data. Additionally working with non linear datasets presents other challenges. \n\n" +
                                                       "By repeatedly pressing the button below we can present a random original and the compressed datapoint and you can see that we loose a tiny bit of information generally for each data point. With more complex datasets this can be alot more pronounced.\n\n" +
                                                       "It turns out PCA in this form has many applications that extend beyond normal statistical analysis, especially in Computer Vision and Image Processing, where images are encoded as multidimensional matrices of pixel values.\n\n" +
                                                       "PCA can be used for lossy Image Compression using the dimensionality reduction and then feature recomputation we've discussed. It is known as the KL transform. \n\n" +
                                                       "PCA can also be used in Computer Vision for things like finding patterns in images including things like facial recognition.\n\n";

    var randomButton = document.createElement("button");
    randomButton.innerHTML = "Compare random data points";

    var randPoint = 0;
    randomButton.onclick = () => {
        
        randPoint = Math.floor((Math.random() * originalFlowerDataSet.length));

        var data = [
            {
                x: parameterTitles,
                y: originalFlowerDataSet[randPoint],
                name: 'Original Data',
                type: 'bar'
            }, {
                x: parameterTitles,
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
    extraTextp1 = false;
    extraTextp3 = false;
    document.getElementsByClassName('covariance_matrix')[0].style.display = "none";
    document.getElementsByClassName('variance_maths')[0].style.display = "none";
    document.getElementsByClassName('transformation3')[0].style.display = "none";
    document.getElementsByClassName('transformation2')[0].style.display = "none";
    document.getElementById('transformationmaths').style.display = 'none';

    switch(tabName) {
        case 'Dataset':
            datasetVisualisation();
            break;
        case 'Variance':
            varianceDemo();
            break;
        case 'Covariance':
            covarianceSetup(covarianceM);
            break;
        case 'Eigenvectors':
            eigenvectorsSetup(normalisedData, eigs);    
            break;
        case 'Result':
            resultSetup();
            break;
    }

}
  
$(document).ready(pcaIntro); 