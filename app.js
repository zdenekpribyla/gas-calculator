
//get element by class name
// get its value
// zkonvertujes text na number
// a to vse ulozis do promene

// var numberOfPassengers = document.getElementsByClassName('num-pass-input').value (
// numberOfPassengers=parseFloat(numberOfPassengers));

// window.onload = function () {
//
// }


// console.log('testsss')



// var pozdrav = objekt.greetings('pavel');
//
// var objekt = {
//     name: "zdenek",
//     age: 33,
//     getElementsByClassName: function (var1) {
//         console.log('ahoj ' + var1)
//     }
// }
//
// var typ = 'age'




var getValues = function () {
    console.log('moje - getValues()');
    return {
        numberOfPassengers: Number(document.getElementById('num-pass-input').value),
        gasPrice: document.getElementById('gas-price-input').value,
        averageConsumption: document.getElementById('average-consumption-input').value,
        totalDistance: document.getElementById('average-consumption-input').value
    }
};


//var getNumbers = Number(getValues);


// toto na konec var wayBack = document.getElementById('way-back-input');

// vytvori var se string
// konvertovat na number - novy var
// a vypsat do console
//
// var getValue = '33';
// console.log('getValue: ' + getValue);
//
//
// var getNumber = Number(getValue);
// console.log('getNumber: ' + getNumber);
// console.log('getNumber: ', getNumber);




// var calculate = function (osoby, cena, prumerna, ujeteKm) {
//     console.log('Na vylet jsme vyrazili ' + osoby + ' kluci.' )
//     console.log('Ujeli jsme ' + ujeteKm + ' jen tam.');
//     console.log('Se zpáteční cestou celkem ' + ujeteKm * 2 + '.')
//     console.log('Pri cene ' + cena + ' kc za litr jsme utratili za benzin ' + (ujeteKm / 100) * cena * prumerna)
// };
//
// calculate(3, 30, 10, 2000)



var calculate = function(parametryJizdy) {
    console.log('moje - calculate()')
    // console.log('Na vylet jsme vyrazili ' + parametryJizdy.osoby + ' kluci.' );
    // console.log('Ujeli jsme ' + parametryJizdy.ujeteKm + ' jen tam.');
    // console.log('Se zpáteční cestou celkem ' + parametryJizdy.ujeteKm * 2 + ' km.');
    //console.log('Celkem jsme zaplatili ' + ((parametryJizdy.ujeteKm / 100) * parametryJizdy.cena * parametryJizdy.prumerna) + ' kc');
    var result = ((parametryJizdy.totalDistance / 100) * parametryJizdy.gasPrice * parametryJizdy.averageConsumption);
    console.log(result)
    return result;
};


var parametryJizdy = {
    osoby: 3,
    cena: 30,
    prumerna: 10,
    ujeteKm: 2000
}

//calculate(getValues())


// calculate(parametryJizdy);


//nebo



// var pozdrav = function (jmeno, prijmeni, vek) {
//     // console.log('ahoj ' + jmeno + ' ' + prijmeni);
//     // console.log('hello ' + prijmeni + ' ' + vek +' let')
//     // console.log('Jmenuji se ' + jmeno + ' a je mi ' + vek + ' let.')
//        console.log(jmeno)
// };
//
// pozdrav('pavel', 'binar', 32);
// pozdrav('zdenek', 'pribyla', 33);

