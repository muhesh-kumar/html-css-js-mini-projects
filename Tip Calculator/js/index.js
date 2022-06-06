function calculate() {
    var bill_amount = document.getElementById('bill').value;
    var service_value = document.getElementById("service_quality").selectedIndex;
    var num_of_persons = document.getElementById('persons').value;
    var tip_percentage;
    var tip;

    if (service_value == 0) {
        tip_percentage = 0;
    } else if (service_value == 1) {
        tip_percentage = 0.05;
    } else if (service_value == 2) {
        tip_percentage = 0.10;
    } else if (service_value == 3) {
        tip_percentage = 0.15;
    } else if (service_value == 4) {
        tip_percentage = 0.20;
    }


    tip = ((bill_amount * tip_percentage) / num_of_persons).toPrecision(3);


    var buttons = document.getElementById('tip_amount');
    buttons.innerHTML = '<p>Each share $' + tip;

}