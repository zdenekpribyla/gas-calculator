var getValues = function () {
    console.log('getValues()');

    return {
        numberOfPassangers: Number(document.getElementById('num-pass-input').value),
        gasPrice: Number(document.getElementById('gas-price-input').value),
        averageConsumption: Number(document.getElementById('average-consumption-input').value),
        totalDistance: Number(document.getElementById('total-distance-input').value)
    }
};

var validate = function (inputData) {
    console.log('validate()');

    // console.log(inputData);

    if (inputData.numberOfPassangers <= 0 || inputData.gasPrice <= 0 || inputData.averageConsumption <= 0
        || inputData.totalDistance <= 0) {
        console.log('cislo je nula nebo nizsi');
        return false

        // document.getElementById('display-result-value').innerHTML = 'Put number higher than 0'
    }

    else {
        console.log('numberOfPassangers je OK');
        return true
    }
};


var calculate = function (inputData) {
    console.log('calculate()');

    var result = (((inputData.totalDistance / 100) * inputData.gasPrice * inputData.averageConsumption)
        / inputData.numberOfPassangers);
    console.log(result);
    var wayBack = function () {
        if (document.getElementById('way-back-input').checked) {
            return result * 2
        }
        else {
            return result
        }
    };
    document.getElementById('display-result-value').innerHTML = 'Everybody will pay ' + Math.round(wayBack() * 100) / 100 + ' CZK.'
};

var finalRun = function () {
    console.log('finalRun()');

    var inputData = getValues();

    if (validate(inputData)) {
        console.log('splnena podminka true - calculate');

        calculate(inputData);
    }
    else {
        alert('You have to put number higher than 0');
        console.log('false - vyhodi alert');
    }
};

//spusteni calculate pres click na button
var button = document.getElementById('button-click');
//console.log(button);

button.addEventListener('click', function () {
    console.log('button click');
    //   console.log('button-clicked');
    finalRun()
});


//loop for inputs class instead of id

var inputsAll = document.getElementsByClassName('inputs-field');  //create a field
//console.log('tady je inputs all', inputsAll);

for (var index = 0; index < inputsAll.length; ++index) {
    // console.log('zavolal jsem for loop')

    // console.log('index je ted:', index)

    var singleInputElement = inputsAll[index];
    // console.log('pres index jsem si vytahl z pole singleInputElement ktery je: ', singleInputElement);

    singleInputElement.addEventListener('keypress', function (event) {
        var key = event.keyCode;
        if (key === 13) {
            console.log('keypress enter');

            finalRun()
        }
        // console.log('event: ', event);
    });

}


//wayBack input
var wayBackElement = document.getElementById('way-back-input');
wayBackElement.addEventListener('click', function (event) {
    console.log('wayBackElement click');

    calculate(getValues())
});

