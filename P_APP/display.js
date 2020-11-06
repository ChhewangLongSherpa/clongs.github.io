/*
Read/write from csv
  write to csv: 2 files, one for customers, one for the
  transactions - one record per service, so a single 
  transaction can have many services
  i.e. trans1, cust_email, serv#
  read from csv...tbd
    */

document.addEventListener("DOMContentLoaded", function () {
    var requiredData = {
      form_id: "IOJVWG12",
      form_date: "10/20/2020",
      cust_name : "John Smith",
      cust_phone : "403-202-3030",
      cust_email : "jsmith@smithers.com"
     };

    var additionalDataAddress = {
      a_street : "200 Lorem St",
      a_city : "Lorem",
      a_state : "CA",
      a_zip : "38939"
    };


    var services = {
      Service_0: "Power Adapter",
      Service_1: "Purchased as Part",
      Service_2: "Screen Replacement",
      Service_3: "Traded Computers",
      Service_4: "Tune Up",
      Service_5: "Virus Cleanup",
      Service_6: "Webcam Test",
      Service_7: "Wifi Test",
      Service_8: "Liquid Damage Repair",
      Service_9: "Power Adapter",
      Service_10: "Purchased as Part",
      Service_11: "Screen Replacement",
      Service_12: "Traded Computers",
      Service_13: "Tune Up",
      Service_14: "Virus Cleanup",
      Service_15: "Webcam Test",
      Service_16: "Wifi Test",
      Service_17: "Liquid Damage Repair",
      Service_18: "Liquid Damage Repair",
      Service_19: "Liquid Damage Repair",
      Service_20: "Liquid Damage Repair",
      Service_21: "Liquid Damage Repair",
      Service_22: "Liquid Damage Repair",
      Service_23: "Liquid Damage Repair",
      Service_24: "Liquid Damage Repair",
    };
  
    var additionalDataAdditional = {
      serv_notes : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      p_method : "Cash",
      p_deposit : "30202",
      p_balance : "39399",
      p_final : "202302",
      pickUp : "Owner" 
    };

    var myData = [requiredData, additionalDataAddress, services, additionalDataAdditional];
    window.localStorage.setItem('cmms_info', JSON.stringify(myData));


    if( localStorage ){
        var myData = localStorage['cmms_info'];
        displayData = JSON.parse(myData);
    }
    //localStorage.removeItem('objectToPass');

    if( displayData && displayData.length < 5 ){
        console.log(displayData.length);
        var requiredInfo = displayData[0];
        var addressInfo = displayData[1];
        var serviceInfo = displayData[2];
        var paymentInfo = displayData[3];
    }
    else{
        alert("Non-valid data");
    }

    /*
    Modified from link below to loop through object with key
    Source: https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object, 10/29/2020
    */
    function objectLoop ( obj ){
      for( var key in obj ){
        /*
        console.log("Key: " + key);
        console.log("Value: " + obj[key]);
        */
        var rep = document.getElementById( key.toString() );
        if( rep ){
          rep.innerHTML = obj[key];
        }
      }
    }

    objectLoop(requiredInfo);
    objectLoop(addressInfo);
    objectLoop(paymentInfo);

    Object.keys(serviceInfo).map(function(key, index){
      var re = document.getElementById("services_container");
      //var pi = document.getElementById("prices_container");
      var price = 0;
      if(re){
        re.innerHTML += '<tr class="service_item"><td>'+serviceInfo[key]+'</td>\n'+'<td>'+ price +'</td></tr>';
        //re.innerHTML += '<li class="service_item">' + serviceInfo[key] + '</li>';
        //pi.innerHTML += '<li class="service_price">0</li>\n';
        //console.log(re);
      }
    });

    /*
    //Alternate version for the code above for ServiceInfo object
    for( var key in serviceInfo ){
      console.log("Key: " + key);
      console.log("Value: " + serviceInfo[key]);
      var re = document.getElementById("services_container");
      if(re){
        re.innerHTML += '<li class="service_item">' + serviceInfo[key] + '</li>\n';
        console.log(re);
      }
    }
    */

    console.log(requiredInfo);
    console.log(addressInfo);
    console.log(serviceInfo);
    console.log(paymentInfo);
});