/*
function validateUSPhoneNumber( inputText )
{
    const usPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ( inputText.value.match(usPhone) ){ return true; } else { alert( "Invalid Phone Number" ); return false; }
}

function validateForm(){
    //Validate email, phone,
}
*/

const debug = true;

//Encapuslate clearing of localStorage and Reload
function reloadForm(){
  window.localStorage.clear();
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  if(localStorage){
    window.localStorage.clear();
  } 
  
  /*https://stackoverflow.com/questions/6982692/how-to-set-input-type-dates-default-value-to-today, 10/27/2020*/
  document.getElementById("autogen_date").value = new Date().toLocaleDateString('en-CA');

  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // arguments: reference to select list, callback function (optional)
  function getSelectedOptions(sel, fn) {
    var opts = [], opt;
    
    // loop through options in select list
    for (var i=0, len=sel.options.length; i<len; i++) {
        opt = sel.options[i];
        
        // check if selected
        if ( opt.selected ) {
            // add to array of option elements to return from this function
            opts.push(opt);
            
            // invoke optional callback function if provided
            if (fn) {
                fn(opt);
            }
        }
    }
    
    // return array containing references to selected option elements
    return opts;
  }

  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // example callback function (selected options passed one by one)
  function callback(opt) {
      // display in textarea for this example
      var display = document.getElementById('display');
      display.innerHTML += opt.value + ', ';

      // can access properties of opt, such as...
      //alert( opt.value )
      //alert( opt.text )
      //alert( opt.form )
  }

  /*
  Paraphrased from
  https://stackoverflow.com/questions/16507222/create-json-object-dynamically-via-javascript-without-concate-strings,
  accessed 10/19/2020
  */
  function serviceObjectBuilder( serviceArray ) {
    var jsonData = {};
    for( i=0; i < serviceArray.length; i++ ){
      var itemName = 'Service_' + i;
      jsonData[itemName] = serviceArray[i].value;
    }
    return jsonData;
  }

  // Source: https://www.dyn-web.com/tutorials/forms/select/multi-selected.php, 10/17/2020
  // anonymous function onchange for select list with id demoSel
  document.getElementById('services').onchange = function(e) {
      // get reference to display textarea
      var display = document.getElementById('display');
      display.innerHTML = ''; // reset
      
      // callback fn handles selected options
      getSelectedOptions(this, callback);
      
      // remove ', ' at end of string
      var str = display.innerHTML.slice(0, -2);
      display.innerHTML = str;
  };

  document.getElementById('input-form').onsubmit = function(e){
    //Personal Info Pull from Document
    const name = document.getElementById("full_name").value;
    const phone = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;
    //Address Testing area from Document
    const address_street = document.getElementById("address_street").value;
    const address_city = document.getElementById("address_city").value;
    const address_state = document.getElementById("address_state").value;
    const address_zip = document.getElementById("address_zip").value;
    if( address_street || address_city || address_state || address_zip )
    {
      var address = address_street + '\n' + address_city + ', ' 
      + address_state + ', ' + address_zip;
    }
    else
    {
      var address = "";
    }

    //Services and Notes
    var service= getSelectedOptions( this.elements['services[]'] );
    const service_note = document.getElementById("service_note").value;

    //Payment 
    const payment_method = document.getElementById("payment_method").value;
    const payment_deposit = document.getElementById("payment_deposit").value;
    const payment_balance = document.getElementById("payment_balance").value;
    const payment_final = document.getElementById("payment_final").value;
    const picked_up_by = document.getElementById("picked_up_by").value;

    document.write("<h3>Here is your data: </h3>");
    //TODO: NEED TO INSERT DATA TO COOKIE TO MAINTAIN STATE
    document.write("Name: " + name + "<br/>" + "Address: " + address + "<br/>" 
    + "Phone: " + phone + "<br/>" + "Email: " + email + "<br/>");

    if(service.length != 0 ){
      document.write("<br />");
      for(i = 0; i < service.length; i++)
      {
        document.write("Service " + (i+1) + ": " + service[i].value + "<br />");
      }
    }
    else{
      document.write("<br />No service needed <br />");
    }

    document.write( "<br />Service Notes: " + service_note + "<br/>");
    document.write( "Paying via: " + payment_method +"<br />");
    document.write( 
        "Balance is: " + payment_balance + "<br/>"
        + "Depost is: " + payment_deposit + "<br/>" 
        + "Total Due: " + payment_final + "<br/>" 
        );
    document.write( "Will be picked up by: " + picked_up_by + "<br/>");

    //Building a object for passing data on into LocalStorage
     var requiredData = {
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
    /*
    Source: https://stackoverflow.com/questions/36599781/how-to-pass-data-from-one-page-to-another-page-html, 10/19/2020
    Paraphrased it for my situation
    */
    var myData = [requiredData, additionalDataAddress, services, additionalDataAdditional];

    window.localStorage.setItem('cmms_info', JSON.stringify(myData));

    //Reset button to reload form
    //document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"window.location.reload()\"\>" );

    document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"reloadForm()\"\>" );
    document.write( " \<input type=\"button\" value=\"Print Display\" onClick=\"window.location.href='display.html'\"\>"
    );
    return false; //don't return online form
  }
});