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

    /*
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
      Service_12: "Traded Computers"
}
*/
     
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

    /*
    function addStyleSheetRules(rules){
      var styleE1 = document.createElement('style'),
      styleSheet;
      document.head.appendChild(styleE1);

      styleSheet = styleE1.sheet;
      for (var i = 0, rl = rules.length; i < rl; i++) {
        var j = 1, rule = rules[i], selector = rules[i][0], propStr = '';
        // If the second argument of a rule is an array of arrays, correct our variables.
      if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
        rule = rule[1];
        j = 0;
      }

      for (var pl = rule.length; j < pl; j++) {
        var prop = rule[j];
        propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
      }

      // Insert CSS Rule
      styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
    };
    */
    /*
    //Trying to add a rule where if the services are greater than 20, that there is a page break inserted properly
    var serviceCount = Object.keys(serviceInfo).length;
    if( serviceCount >= 20 ){
      console.log("Services: " + serviceCount);
      addStyleSheetRules(['.page_break_id',['position','relative']],['.page_break_id',['page-break-before','always']]);
      var sheet = document.styleSheets[0];
      sheet.insertRule(".page_break_id","position:relative; page-break-before:always;",1);
      const mediaRuleText = '@media print {.page_break_id { position:relative; page-break-before:always; }';
      const mediaRuleIndex = CSSStyleSheet.insertRule(mediaRuleText);
      const mediaRule = CSSStyleSheet.cssRules[mediaRuleIndex];
      console.log(mediaRule.cssRules[0].selectorText);
    }*/
    Object.keys(serviceInfo).map(function(key){
      var re = document.getElementById("services_container");
      var price = 0;
      if(re){
        re.innerHTML += '<tr class="service_item"><td>'+serviceInfo[key]+'</td>'+'<td class="td-editable">'+ price +'</td></tr>';
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

    tdEdit("services_box");

    saveData();

    /*
    console.log(requiredInfo);
    console.log(addressInfo);
    console.log(serviceInfo);
    console.log(paymentInfo);
    */
});

function tdEdit( table ){
    /**
     * Source: https://plnkr.co/edit/GJlVn2ir1dhNilFc?p=preview&preview, 11/7/2020
     * Make Table cells editable
     */
    let sourceTable = document.getElementById(table);
    if(!sourceTable) return;
    let editingTd;

    sourceTable.onclick = function(event){
      let target = event.target.closest('.edit-cancel,.edit-ok,td');

      if( !sourceTable.contains(target)) return;

      if( target.className == 'edit-cancel'){
        finishTdEdit(editingTd.elem, false);
      } else if ( target.className == 'edit-ok'){
        finishTdEdit(editingTd.elem, true);
      } else if ( target.nodeName == 'TD'){
        if( editingTd ) return;
        makeTdEditable(target);
      }
    };

    function makeTdEditable(td){
      editingTd = {
        elem: td,
        data: td.innerHTML
      };

      td.classList.add('edit-td');
      //td.setAttribute("style","display: inline-block; align-items: right;")

      let textArea = document.createElement('textarea');
      textArea.setAttribute("style","outline:none;");
      textArea.style.height= 3.5 +'vh';
      //textArea.style.width= td.clientWidth +'px';
      textArea.className = 'edit-area';

      textArea.value = td.innerHTML;
      td.innerHTML = '';
      td.appendChild(textArea);
      textArea.focus(); //Bring mouse cursor inside field

      td.insertAdjacentHTML("beforeEnd",
      '<div style="display:inline-block; vertical-align: top" class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
      );
    }

    function finishTdEdit(td, isOk) {
      if( isOk ){
        td.innerHTML = td.firstChild.value;
      } else {
        td.innerHTML = editingTd.data;
      }

      td.classList.remove('edit-td');
      editingTd = null;
    }
}

/**
 * Source: https://seegatesite.com/tutorial-read-and-write-csv-file-with-javascript/
 * Exporting to CSV
 */
function saveData( ){
  let CRM_arrayheader = [
    "Customer_Name","Customer_Phone","Customer_Email",
    "Street_Address","City","State","Zipcode"
  ];


  let CRM_arraydata = [];
  let customer_info = {
    cust_name: displayData[0].cust_name,
    cust_phone: displayData[0].cust_phone,
    cust_email: displayData[0].cust_email,
    cust_address: displayData[1].a_street,
    cust_city: displayData[1].a_city,
    cust_state: displayData[1].a_state,
    cust_zip: displayData[1].a_zip
  };
  CRM_arraydata = [customer_info];
  //console.log(CRM_arraydata);

  let transaction_arrayheader = [
    "Transaction_Id","Transaction_Date","Customer_Name","Customer_Phone","Customer_Email","Service_Count","Service_Notes","Payment","Deposit","Balance","Final","Pickup"
  ];
  let transaction_arrayData =[];

  function cleanupStrForCsv( str ){
    if( str == null || str == '' ){
      return '';
    }
    return str.replace(/[^. a-zA-Z0-9]/g,'');
  }

  let transaction_info = {
    trans_id: displayData[0].form_id,
    trans_date: displayData[0].form_date,
    trans_cust_name:displayData[0].cust_name,
    trans_cust_phone: displayData[0].cust_phone,
    trans_cust_email:displayData[0].cust_email,
    trans_service_count: Object.keys(displayData[2]).length,
    trans_service_notes: cleanupStrForCsv(displayData[3].serv_notes),
    trans_pay_method: displayData[3].p_method,
    trans_pay_deposit: displayData[3].p_deposit,
    trans_pay_balance: displayData[3].p_balance,
    trans_pay_final: displayData[3].p_final,
    trans_pickup: displayData[3].pickUp
  };
  transaction_arrayData=[transaction_info];
  //console.log(transaction_arrayData);

  let servicesList_arrayheader =["Transaction_ID","Services"];
  let s_info = {
    trans_id: displayData[0].form_id/*,
    trans_date: displayData[0].form_date,
    trans_cust_name:displayData[0].cust_name,
    trans_cust_phone: displayData[0].cust_phone,
    trans_cust_email:displayData[0].cust_email,
    */
  };
  //TODO This is is not appending correctly

  function serviceObjectBuilder( serviceArray ) {
    var jsonData = {};
    for( i=0; i < serviceArray.length; i++ ){
      var itemName = 'Service_' + i;
      jsonData[itemName] = serviceArray[i].value;
    }
    return jsonData;
  }
  let tempObj = serviceObjectBuilder(displayData[2]);
  /*
  Object.keys(displayData[2]).map(function(key, index){
    let str = "Services_"+index;
    let temp = { `${index}` : displayData[2][key]};
    tempObj={
      ...temp
    }
  });
  */
  console.log(tempObj);

  let servicesList_info = Object.assign(s_info, tempObj);
  console.log(servicesList_info);
  
  let servicesList_arrayData = [servicesList_info]
  //***NOT WORKING */

  function export_csv( arrayHeader, arrayData, delimiter, fileName){
    let header = arrayHeader.join(delimiter)+'\n';
    let csv = header;
           arrayData.forEach( obj => {
               let row = [];
               for (key in obj) {
                   if (obj.hasOwnProperty(key)) {
                       row.push(obj[key]);
                   }
               }
               csv += row.join(delimiter)+"\n";
           });

           //Need Blob for large amounts of data
           let csvData = new Blob([csv], { type: 'text/csv' });  
           let csvUrl = URL.createObjectURL(csvData);

           let hiddenElement = document.createElement('a');
           hiddenElement.href = csvUrl;
           hiddenElement.target = '_blank';
           hiddenElement.download = fileName + '.csv';
           hiddenElement.click();
  }
  //export_csv(transaction_arrayheader, transaction_arrayData, ",", "transactions");
  //export_csv(CRM_arrayheader, CRM_arraydata, ",", "customers");
  //export_csv(servicesList_arrayheader, servicesList_arrayData, ",", "services");
}