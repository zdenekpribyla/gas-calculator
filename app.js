var getValues = function () {
    console.log('moje - getValues()');
    return {
        numberOfPassangers: Number(document.getElementById('num-pass-input').value),
        gasPrice: document.getElementById('gas-price-input').value,
        averageConsumption: document.getElementById('average-consumption-input').value,
        totalDistance: document.getElementById('total-distance-input').value
    }
};


var calculate = function (inputData) {
    console.log('moje - calculate()');
    var result = (((inputData.totalDistance / 100) * inputData.gasPrice * inputData.averageConsumption) / inputData.numberOfPassangers);
    console.log(result);
    var wayBack = function () {
        if (document.getElementById('way-back-input').checked) {
            return result * 2
        }
        else {
            return result
        }
    };

    if (wayBack() < 1) {
        document.getElementById('display-result-value').innerHTML = 'Everybody will pay less than 1 CZK.'
    }
    else {
        document.getElementById('display-result-value').innerHTML = 'Everybody will pay ' + Math.floor(wayBack()) + ' CZK.'
    }


};

var button = document.getElementById('button-click');
console.log(button);

button.addEventListener('click', function () {
    console.log('button-clicked');
    calculate(getValues())
    // document.getElementById('display-result-value').innerHTML = calculate(getValues());
});


// Pro enter pouzit toto: Pavlova verze
var passangerElement = document.getElementById('num-pass-input');
console.log('passanger element: ', passangerElement);

passangerElement.addEventListener('keypress', function (event) {
    var key = event.keyCode;
    if (key === 13) {
        console.log('put enter');
        calculate(getValues())
    }
    console.log('event: ', event)
});

