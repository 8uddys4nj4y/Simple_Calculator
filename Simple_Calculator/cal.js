

const disp = document.getElementById('disp');

function append(value) {

    disp.value += value;
}

function clearDisplay(){

    disp.value = '';
}

function calculate(){

    try {

        disp.value = eval(disp.value);
    }

    catch(error){

        disp.value = 'Error';
    }
}