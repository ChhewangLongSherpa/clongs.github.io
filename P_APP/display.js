document.addEventListener("DOMContentLoaded", function () {
    var myData = localStorage['cmms_info'];
    //localStorage.removeItem('objectToPass');

    displayData = JSON.parse(myData);
    if( displayData.length < 5 ){
        console.log(displayData.length);
        var requiredInfo = displayData[0];
        var addressInfo = displayData[1];
        var serviceInfo = displayData[2];
        var paymentInfo = displayData[3];
    }
    else{
        alert("Non-valid data");
    }

    console.log(requiredInfo);
    console.log(addressInfo);
    console.log(serviceInfo);
    console.log(paymentInfo);
});