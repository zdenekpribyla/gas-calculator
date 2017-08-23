var getValues = function () {
    console.log('moje - getValues()');
    return {
        numberOfPassangers: document.getElementById('num-pass-input').value,
        gasPrice: document.getElementById('gas-price-input').value,
        averageConsumption: document.getElementById('average-consumption-input').value,
        totalDistance: document.getElementById('total-distance-input').value
    }
};


var calculate = function (inputData) {
    console.log('moje - calculate()');
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

//spusteni calculate pres click na button
var button = document.getElementById('button-click');
console.log(button);

button.addEventListener('click', function () {
    console.log('button-clicked');
    calculate(getValues())
});

//loop for inputs class instead of id

var inputsAll = document.getElementsByClassName('inputs-field');  //create a field
console.log('tady je inputs all', inputsAll);

for (var index = 0; index < inputsAll.length; ++index) {
    // console.log('zavolal jsem for loop')

    // console.log('index je ted:', index)

    var singleInputElement = inputsAll[index]
    // console.log('pres index jsem si vytahl z pole singleInputElement ktery je: ', singleInputElement);

    singleInputElement.addEventListener('keypress', function (event) {
        var key = event.keyCode;
        if (key === 13) {
            calculate(getValues())
        }
        // console.log('event: ', event);
    });

}




//wayBack input
var wayBackElement = document.getElementById('way-back-input');
wayBackElement.addEventListener('click', function (event) {
    calculate(getValues())
});

