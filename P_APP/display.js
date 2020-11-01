/*
    var requiredData = {
      form_id: "3203492",
      form_date: "10/20/2020",
      cust_name : "John Smith",
      cust_phone : "403-202-3030",
      cust_email : "jsmith@smithers.com"
     };

    var additionalDataAddress = {
      a_street : "200 Lorem St",
      a_city : "Lorem",
      a_state : "CA",
      a_zip :38939 
    };

//    var services = serviceObjectBuilder(service);
  
    var additionalDataAdditional = {
      serv_notes : "Nothing",
      p_method : "Cash",
      p_deposit : 30202,
      p_balance : 39399,
      p_final : 202302,
      pickUp : "Owner" 
    };

    var myData = [requiredData, additionalDataAddress, services, additionalDataAdditional];
    window.localStorage.setItem('cmms_info', JSON.stringify(myData));
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
      Service_1: "Purchased as Part(s)",
      Service_2: "Screen Replacement",
      Service_3: "Traded Computers",
      Service_4: "Tune Up",
      Service_5: "Virus Cleanup",
      Service_6: "Webcam Test",
      Service_7: "Wifi Test",
      Service_8: "Liquid Damage Repair",
    };
  
    var additionalDataAdditional = {
      serv_notes : "Nothing",
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
        //var paymentInfo = JSON.parse(displayData[3]);
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
      var pi = document.getElementById("prices_container");
      if(re){
        re.innerHTML += '<tr class="service_item"><td>'+serviceInfo[key]+'</td>\n'+'<td>'+ 0 +'</td></tr>';
        //re.innerHTML += '<li class="service_item">' + serviceInfo[key] + '</li>';
        //pi.innerHTML += '<li class="service_price">0</li>\n';
        console.log(re);
      }
    });

    /*
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

    

    /*
    for ( var key in requiredInfo ){
        console.log("Key: " + key);
        console.log("Value: " + requiredInfo[key]);
        var required = document.getElementById( key.toString() );
        if( required ){
          required.innerHTML += requiredInfo[key];
        }
      }
      */
    
    /*
    var required = document.getElementById();
    required.innerHTML = '';
    required.innerHTML = requiredInfo.name;

    var required = document.getElementById("form_date");
    required.innerHTML = '';
    required.innerHTML = requiredInfo.name;

    var required = document.getElementById("full_name");
    required.innerHTML = '';
    required.innerHTML = requiredInfo.cust_name;

    var required = document.getElementById("phone_num");
    required.innerHTML = '';
    required.innerHTML = requiredInfo.cust_phone;
    */
    /*
    var requiredData = {
      form_id: id,
      form_date: date,
      cust_name : name,
      cust_phone : phone,
      cust_email : email
     };

    var additionalDataAddress = {
      a_street : address_street,
      a_city : address_city,
      a_state : address_state,
      a_zip : address_zip
    };

    var services = serviceObjectBuilder(service);
  
    var additionalDataAdditional = {
      serv_notes : service_note,
      p_method : payment_method,
      p_deposit : payment_deposit,
      p_balance : payment_balance,
      p_final : payment_final,
      pickUp : picked_up_by
    };
    
    if(debug === true){
      console.log(requiredData);
      console.log(additionalDataAddress);
      console.log(services);
      console.log(additionalDataAdditional);
    }
    */
      
      /*
      <p id="form_id"> </p>
       <p id="form_date"></p>
       <p id="full_name"></p>
       <p id="phone_num"></p>
       */

    


    console.log(requiredInfo);
    console.log(addressInfo);
    console.log(serviceInfo);
    console.log(paymentInfo);
});