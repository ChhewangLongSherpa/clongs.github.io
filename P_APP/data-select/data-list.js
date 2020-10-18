//Source: https://jsfiddle.net/meziantou/b04mx19f/ from https://www.meziantou.net/html-multiple-selections-with-datalist.htm, 10/12/2020
/*Allow multiple selects from a data select list while showing it in the UI */
document.addEventListener("DOMContentLoaded", function () {
    /*
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
                // Do not update list if the user doesn't add/remove a separator
                // Current value: "a, b, c"; New value: "a, b, cd" => Do not change the list
                // Current value: "a, b, c"; New value: "a, b, c," => Update the list
                // Current value: "a, b, c"; New value: "a, b" => Update the list
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
        return list;
    }
    */
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

    document.getElementById('services').onsubmit = function(e) {
        // reference to select list using this keyword and form elements collection
        // no callback function used this time
        var opts = getSelectedOptions( this.elements['demoSel[]'] );
        
        alert( 'The number of options selected is: ' + opts.length ); //  number of selected options
        
        return false; // don't return online form
    };


});


window.onload = function () {

}