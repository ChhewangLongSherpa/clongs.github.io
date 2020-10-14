//Source: https://jsfiddle.net/meziantou/b04mx19f/ from https://www.meziantou.net/html-multiple-selections-with-datalist.htm, 10/12/2020
/*Allow multiple selects from a data select list while showing it in the UI */
document.addEventListener("DOMContentLoaded", function () {
    const separator = ',';
    for (const input of document.getElementsByTagName("input")) {
        if (!input.multiple) {
            continue;
        }
        if (input.list instanceof HTMLDataListElement) {
            const optionsValues = Array.from(input.list.options).map(opt => opt.value);
            let valueCount = input.value.split(separator).length;
            input.addEventListener("input", () => {
                const currentValueCount = input.value.split(separator).length;
                /*
                Do not update list if the user doesn't add/remove a separator
                Current value: "a, b, c"; New value: "a, b, cd" => Do not change the list
                Current value: "a, b, c"; New value: "a, b, c," => Update the list
                Current value: "a, b, c"; New value: "a, b" => Update the list
                */
                if (valueCount !== currentValueCount) {
                    const lsIndex = input.value.lastIndexOf(separator);
                    const str = lsIndex !== -1 ? input.value.substr(0, lsIndex) + separator : "";
                    filldatalist(input, optionsValues, str);
                    valueCount = currentValueCount;
                }
            });
        }
    }
    function filldatalist(input, optionValues, optionPrefix) {
        const list = input.list;
        if (list && optionValues.length > 0) {
            list.innerHTML = "";
            const usedOptions = optionPrefix.split(separator).map(value => value.trim());
            for (const optionsValue of optionValues) {
                if (usedOptions.indexOf(optionsValue) < 0) {
                    const option = document.createElement("option");
                    option.value = optionPrefix + optionsValue;
                    list.append(option);
                }
            }
        }
    }
});

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
   
function confirm_reset(){
    return confirm("Are you sure you want to reset all values?");
}

/* Paraphrased from source: https://www.mvcode.com/lessons/display-form-results-with-javascript, 10/13/2020*/
function results(){
    const name = document.getElementById("full_name").value;
    const phone = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address_street").value + '\n' + document.getElementById("address_city").value
    + ', ' + document.getElementById("address_state").value + ', ' + document.getElementById("address_zip").value;
    const service = document.getElementById("services").list;
    const service_notes = document.getElementById("service_note").value;
    const payment_method = document.getElementById("payment_method").value;
    const payment_deposit = document.getElementById("payment_deposit").value;
    const payment_balance = document.getElementById("payment_balance").value;
    const payment_final = document.getElementById("payment_final").value;
    const picked_up_by = document.getElementById("picked_up_by").value;

    message = document.write("<h3>Here is your data: </h3>");
    message += document.write( name + "<br/>" + address + "<br/>" + phone + "<br/>" + email + "<br/>");

    for ( i = 0; i < service.length; i++ )
    {
        document.write( service[i] );
    }
    message += document.write( service_notes + "<br/>");
    message += document.write( "Paying via: " + payment_method +"<br />");
    message += document.write( 
        "Balance is: " + payment_balance + "<br/>"
        + "Depost is: " + payment_deposit + "<br/>" 
        + "Total Due: " + payment_final + "<br/>" 
        );
    message += document.write( "Will be picked up by: " + picked_up_by + "<br/>");

    document.write( " \<input type=\"reset\" value=\"Reset\" onClick=\"window.location.reload()\"\>"
    );
}
    /*document.getElementById(\"input-from\").reset();\"\>"*/