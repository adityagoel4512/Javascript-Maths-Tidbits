function pcaIntro() {
    Plotly.purge("graph");

    flowerTypeSplit.push(originalFlowerDataSet.findIndex(vector => vector[vector.length-1] == 'versicolor'));
    flowerTypeSplit.push(originalFlowerDataSet.findIndex(vector => vector[vector.length-1] == 'virginica'));

    originalFlowerDataSet.forEach(vector => {
        vector.pop();
    });

    var dataInfo = normaliseData(originalFlowerDataSet);
    normalisedData = dataInfo[0]; meanVector = dataInfo[1]; stdDevVector = dataInfo[2];

    covarianceM = covarianceMatrix(normalisedData);
    eigs = numeric.eig(covarianceM);
    for (var i = 0; i < covarianceM.length; i++) {
        partialCovarianceMatrix.push([]);
        for (var j = 0; j < covarianceM.length; j++) {
            partialCovarianceMatrix[i][j] = 'Cov (' + shortenedParameterTitles[i] + ', ' + shortenedParameterTitles[j] + ')';
        }
    }

    var order = numeric.linspace(0, eigs.E.x.length-1, eigs.E.x.length).sort((i, j) => {
        return (eigs.lambda.x[j] - eigs.lambda.x[i]);
    });

    var eigenvectors = [];
    for (var i = 0; i < eigs.E.x.length; ++i) {
        eigenvectors.push(transposeMatrix(eigs.E.x)[order[i]]);
    }

    transformationMatrix = transposeMatrix(eigenvectors);
    newdata = math.multiply(normalisedData, transformationMatrix);

    var totalEigs = eigs.lambda.x.reduce((e1, e2) => e1 + e2, 0);
    for(var i = 0; i < eigs.lambda.x.length; ++i) {
        importancePC.push(Math.round(100 * eigs.lambda.x[order[i]]/totalEigs));
    }


    datasetVisualisation();

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

              
        Plotly.newPlot('graph', data), {width: document.getElementById('graph').offsetWidth};

}


$(document).ready(pcaIntro); 