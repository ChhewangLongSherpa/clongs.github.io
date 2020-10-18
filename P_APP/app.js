//Source: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript, 10/12/2020
/* Goal: Send data from Form to another html page for display and printing*/
/*
window.addEventListener( "DOMContentLoaded", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const FD = new FormData( form );
  
      // Define what happens on successful data submission
      XHR.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
  
      // Define what happens in case of error
      XHR.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
  
      // Set up our request
      XHR.open( "POST", "https://example.com/cors.php" );
  
      // The data sent is what the user provided in the form
      XHR.send( FD );
    }
   
    // Access the form element...
    const form = document.getElementById( "input-form" );
  
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
  
      sendData();
    } );
  } );
  */

/*
document.addEventListener( "DOMContentLoaded", function() {
    for ( const input of document.getElementById("phone_number"))
    {
        validateUSPhoneNumber();
    }

});
function validateUSPhoneNumber( inputText )
{
    const usPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ( inputText.value.match(usPhone) ){ return true; } else { alert( "Invalid Phone Number" ); return false; }
}

function validateForm(){
    //Validate email, phone,
}
*/
   
/*
function confirm_reset(){
    return confirm("Are you sure you want to reset all values?");
}
*/

/*
document.addEventListener( "DOMContentLoaded", function() {
    var data= {};
    $("#services option").each(function(i,el)
    {
    data[$(el).data("value")] = $(el).val();
    });

    console.log(data, $("#services option").val());
    $('#submit').click(function()
    {
        var value = $('#selected').val();
        alert($('#services[ value="'+value +'"]'.data('value')));
    });
});
*/

document.addEventListener("DOMContentLoaded", function () {
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
  /*
  document.getElementById('input-form').onsubmit = function(e) {
      // reference to select list using this keyword and form elements collection
      // no callback function used this time
      var opts = getSelectedOptions( this.elements['services[]'] );

     
      //alert( 'The number of options selected is: ' + opts.length ); //  number of selected options

      return false; // don't return online form
  };
  */
  document.getElementById('input-form').onsubmit = function(e){
    const name = document.getElementById("full_name").value;
    const phone = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;

    const address = document.getElementById("address_street").value + '\n' + document.getElementById("address_city").value 
    + ', ' + document.getElementById("address_state").value + ', ' + document.getElementById("address_zip").value;
    const service_notes = document.getElementById("service_note").value;
    const payment_method = document.getElementById("payment_method").value;
    const payment_deposit = document.getElementById("payment_deposit").value;
    const payment_balance = document.getElementById("payment_balance").value;
    const payment_final = document.getElementById("payment_final").value;
    const picked_up_by = document.getElementById("picked_up_by").value;

    document.write("<h3>Here is your data: </h3>");
    document.write("Name: " + name + "<br/>" + "Address: " + address + "<br/>" 
    + "Phone: " + phone + "<br/>" + "Email: " + email + "<br/>");

    var opts = getSelectedOptions( this.elements['services[]'] );
    if(opts.length != 0 ){
      document.write("<br />");
      for(i = 0; i < opts.length; i++)
      {
        document.write("Service " + (i+1) + ": " + opts[i].value + "<br />");
      }
    }
    else{
      document.write("<br />No service needed")
      document.write("<br />");
    }
 
    document.write( "<br />Service Notes: " + service_notes + "<br/>");
    document.write( "Paying via: " + payment_method +"<br />");
    document.write( 
        "Balance is: " + payment_balance + "<br/>"
        + "Depost is: " + payment_deposit + "<br/>" 
        + "Total Due: " + payment_final + "<br/>" 
        );
    document.write( "Will be picked up by: " + picked_up_by + "<br/>");

    document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"window.location.reload()\"\>"
    );
    return false; //don't return online form
  }
});
/* Paraphrased from source: https://www.mvcode.com/lessons/display-form-results-with-javascript, 10/13/2020*/
/*
function results(){
    const name = document.getElementById("full_name").value;
    const phone = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address_street").value + '\n' + document.getElementById("address_city").value
    + ', ' + document.getElementById("address_state").value + ', ' + document.getElementById("address_zip").value;
    //const service = document.getElementById("services");
    const service_notes = document.getElementById("service_note").value;
    const payment_method = document.getElementById("payment_method").value;
    const payment_deposit = document.getElementById("payment_deposit").value;
    const payment_balance = document.getElementById("payment_balance").value;
    const payment_final = document.getElementById("payment_final").value;
    const picked_up_by = document.getElementById("picked_up_by").value;

    message = document.write("<h3>Here is your data: </h3>");
    message += document.write("Name: " + name + "<br/>" 
    + "Address: " + address + "<br/>" 
    + "Phone: " + phone + "<br/>" 
    + "Email: " + email + "<br/>");

    message += document.write( service_notes + "<br/>");
    message += document.write( "Paying via: " + payment_method +"<br />");
    message += document.write( 
        "Balance is: " + payment_balance + "<br/>"
        + "Depost is: " + payment_deposit + "<br/>" 
        + "Total Due: " + payment_final + "<br/>" 
        );
    message += document.write( "Will be picked up by: " + picked_up_by + "<br/>");

    var opts = getSelectedOptions( this.elements['services[]'] );
    for(i = 0; i < opts.length; i++)
    {
      document.write(opts[i].value + "<br />");
    }
    document.write(message);
    document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"window.location.reload()\"\>"
    );
}
*/