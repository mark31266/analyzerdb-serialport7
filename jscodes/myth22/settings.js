
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
    authDomain: "analyzerdb.firebaseapp.com",
    databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
    projectId: "analyzerdb",
    storageBucket: "analyzerdb.appspot.com",
    messagingSenderId: "326480477399",
    appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
    measurementId: "G-NHM4EMZ8HS"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  import {
    getFirestore, query, doc,setDoc,getDoc, where ,getDocs, onSnapshot, collection, 
  }
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"

  import {
    getStorage, ref as sRef, uploadBytesResumable, getDownloadURL
  }
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js"

const db = getFirestore(); 
let db2 = firebase.firestore();
var auto_inc = 0; 
var logresultstable = document.getElementById("logresults"); 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      var user = firebase.auth().currentUser;
      if(user != null){ 
        console.log(user.email);

      }
    }
      // db2.collection("DateSetting").doc("Format").get().then((doc) => {
      //   var format3 = doc.data().format; 
      //   const optionObj = document.createElement("option");
      //   const optionObj2 = document.createElement("option");
      //   const optionObj3 = document.createElement("option");
      //   const optionObj4 = document.createElement("option");
      //   const optionObj5 = document.createElement("option");
      //   optionObj.textContent = "Current Selection: " + format3; 
      //   optionObj.disabled = true; 
      //   optionObj.selected = true; 
      //   optionObj.style = "text-align:center"; 
      //   optionObj.className = "btn-disabled"

      //   optionObj2.textContent = "dd-mm-yyyy";
      //   optionObj2.style = "text-align:center;"; 

      //   optionObj3.textContent = "mm-dd-yyyy";
      //   optionObj3.style = "text-align:center;"; 

      //   optionObj4.textContent = "yyyy-mm-dd";
      //   optionObj4.style = "text-align:center;"; 

      //   optionObj5.textContent = "yyyy-dd-mm";
      //   optionObj5.style = "text-align:center;"; 


      //   document.getElementById("dateselection").appendChild(optionObj);
      //   document.getElementById("dateselection").appendChild(optionObj2);
      //   document.getElementById("dateselection").appendChild(optionObj3);
      //   document.getElementById("dateselection").appendChild(optionObj4);
      //   document.getElementById("dateselection").appendChild(optionObj5);
      //   $('#dateselection').selectpicker('refresh');
      //   $('#dateselection').selectpicker('render');
      // }); 
    
    var socket = io();
    var machinename; 
    socket.on('status', function(status) {
      console.log(status);
      if (String(status).includes("COM6") ){
       machinename = "Orphee Mythic 18 Vet"; 
         //SelectPicker Nav
       const navobj = document.createElement("li");
       const navobj2 = document.createElement("a");
       navobj2.textContent = "Mythic 18 Vet";
       navobj2.href = "/myth22/run"; 
       navobj.appendChild(navobj2)
       document.getElementById("homeSubmenu1").appendChild(navobj);
      }
      if (String(status).includes("COM2") ){
        machinename = "Orphee Mythic 18"; 
        const navobj = document.createElement("li");
        const navobj2 = document.createElement("a");
        navobj2.textContent = "Mythic 18";
        navobj2.href = "/myth18/run"; 
        navobj.appendChild(navobj2)
        document.getElementById("homeSubmenu1").appendChild(navobj);
       }
       if (String(status).includes("COM3") ){
        machinename = "Orphee Mythic 60"; 
        const navobj = document.createElement("li");
        const navobj2 = document.createElement("a");
        navobj2.textContent = "Mythic 22";
        navobj2.href = "/myth60/run"; 
        navobj.appendChild(navobj2)
        document.getElementById("homeSubmenu1").appendChild(navobj);
       }
   setTimeout(() => {
     socket.close(); 
   }, 2000);
    });
     function AddItemToTable (activity,date,machine,sid,testdate,username)
     {
       let tr_data = document.createElement('tr'); 
       let td1 = document.createElement('td');
       let td2 = document.createElement('td'); 
       let td3 = document.createElement('td'); 
       let td4 = document.createElement('td'); 
       let td5 = document.createElement('td'); 
       let td6 = document.createElement('td'); 
       let td7 = document.createElement('td'); 
       td1.innerHTML = ++auto_inc; 
       td2.innerHTML = activity; 
       td3.innerHTML = date; 
       td4.innerHTML = machine; 
       td5.innerHTML = sid; 
       td6.innerHTML = testdate; 
       td7.innerHTML = username;  
       tr_data.appendChild(td1); 
       tr_data.appendChild(td2); 
       tr_data.appendChild(td3); 
       tr_data.appendChild(td4); 
       tr_data.appendChild(td5); 
       tr_data.appendChild(td6); 
       tr_data.appendChild(td7); 
       logresultstable.appendChild(tr_data); 
     }

     function AddAllItemsToTable(auditlog) {
      auto_inc = 0 ; 
      logresultstable.innerHTML=""; 
      auditlog.forEach(element => {
        AddItemToTable(element.Activity, element.DateDid, element.Machine, element.SID, element.Test_Run_Date,element.id); 
      }); 
     }
     async function GetAllDataOnce() {
      const q = query(collection(db, "auditlog"));
       const querySnapshot = await getDocs(q); 
       var datalog = []; 
       querySnapshot.forEach(doc => {
      datalog.push(doc.data()); 
       }); 

       AddAllItemsToTable(datalog);
     }

     async function RealTimeData() {
       
      const dbRef = collection(db,"auditlog"); 
        onSnapshot(dbRef, (querySnapshot) => {
          var datalog = []; 
        querySnapshot.forEach(doc => {
datalog.push(doc.data()); 
        });  

      AddAllItemsToTable(datalog);
      
    })
  }
  RealTimeData(); 
  setTimeout(function() {
    $(document).ready(function () {
     
      $('#example').dataTable({
        iDisplayLength : 5,
        pagingType: "full_numbers",
        searching: true,
        paginate : true,
        select: true,
        select: {
          style: 'os',
          className: 'focusedRow',
          selector: 'td:last-child a'
      },
        responsive: true,
        "autoWidth": false,
        sorting: true,
        "order": [[0]],
        lengthChange: false,
        pageLength: 12,
        scrollY: "400px",
        columnDefs: [
          {
            "targets": [ 0 ],
            "visible": true,
            "searchable": true,
            orderable : true,
          },
          {
            "targets": [ 1 ],
            "visible": true,
            "searchable": true,
            orderable : true,
          },
          {
            "targets": [ 2 ],
            "visible": true,
            "searchable": true,
            orderable : true,
        },
        {
          "targets": [ 3 ],
          "visible": false,
          "searchable": true,
          orderable : true,
      },
      {
        "targets": [ 4 ],
        "visible": false,
        "searchable": true,
        orderable : true,
      },
      {
      "targets": [ 5 ],
      "visible": false,
      "searchable": true,
      orderable : true,
      },
      {
      "targets": [ 6 ],
      "visible": false,
      "searchable": true,
      orderable : true
      },
          { width: "10px", targets: 0 },
          { width: "500px", targets: 1 },
          { width: "500px", targets: 2 },
          { width: "500px", targets: 3 },
          { width: "500px", targets: 4 },
          { width: "500px", targets: 5 },
          { width: "500px", targets: 6 }, 
      ],
      fixedColumns: true,
      "dom": '<lf<t>ip>',
        info: true,
        scrollCollapse: true,
        processing: false,
        language: { 
          
            paginate: {first: "First", last: "Last", next: "Next", previous: "Previous"}
           
        },
        serverSide: false,
        select: {
          style: 'os',
          items: 'cell'
        },
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () {
            var api = this.api();
      
            // For each column
            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    $(cell).html('<input id="searchinput" type="text"/>');
      
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('keyup change', function (e) {
                            e.stopPropagation();
      
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
      
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
      
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
          });

     });
    },2000);

//    document.getElementById("advancedbtn").addEventListener('click',function ()
// {
//   setTimeout(function(){ 
    
//   }, 1000);
 
//    }); 
 
}); 
var barcode = '';
var interval;
document.addEventListener('keydown', function(evt) {
    if (interval)
        clearInterval(interval);
    if (evt.code == 'Enter') {
        if (barcode)
            handleBarcode(barcode);
        barcode = '';
        return;
    }
    if (evt.key != 'Shift')
        barcode += evt.key;
    interval = setInterval(() => barcode = '', 20);
});

function handleBarcode(scanned_barcode) {
    document.querySelector('#last-barcode').innerHTML = scanned_barcode;

    
}

// //--------Image Upload---------//
//  var reader = new FileReader(); 
//  var proglab = document.getElementById("upprogress"); 
//  document.getElementById("filenamelabel") += " "; 
// function readURL() {
//   var $input = $(this);
//   var $newinput =  $(this).parent().parent().parent().find('.portimg ');
//   if (this.files && this.files[0]) {
//       reader.onload = function (e) {
//           reset($newinput.next('.delbtn'), true);
//           $newinput.attr('src', e.target.result).show();
//           $newinput.after('<input type="button" class="delbtn removebtn" value="✖">');   
//       }
//       reader.readAsDataURL(this.files[0]);
//      var ImgToUpload = this.files[0];
//      var ImgName = document.getElementById("filenamelabel").innerText; 
//      const metaData = {
//       contentType : ImgToUpload.type
//     }
//      const storage = getStorage(); 
//      const storageRef = sRef(storage, "Images/" +ImgName)
//   const UploadTask = uploadBytesResumable(storageRef, ImgToUpload,metaData);
  
//   UploadTask.on('state-changed', (snapshot)=>{
//     var progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
//     proglab.innerHTML = "Upload " + progress + "%"; 
//   },
//   (error) => {
//     console.log("error" + error); 
//   },
//   ()=> {
//     getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
//       SaveURLtoFirestore(downloadURL); 
//     }); 
//   }
//   );
//   }
// }

// $(".custom-file-input").change(readURL);
// $("form").on('click', '.delbtn', function (e) {
//   reset($(this));
// });

// function reset(elm, prserveFileName) {
//   if (elm && elm.length > 0) {
//       var $input = elm;
//       $input.prev('.portimg').attr('src', '').hide();
//       if (!prserveFileName) {
//           $($input).parent().parent().parent().find('input.custom-file-input ').val("");
//           //input.fileUpload and input#uploadre both need to empty values for particular div
//       }
//       elm.remove();
     
//   }
// }
// document.getElementById("submitdata1").addEventListener("click", function(event) {
//   datesettings(); 
 
 
// })


async function datesettings()
{
  var dateselection = document.getElementById("dateselection"); 
  if(dateselection.value == "dd-mm-yyyy")
  {
    await setDoc(doc(db, "DateSetting", "Format"), {
      format : "dd-mm-yyyy"
    });
  }
  if(dateselection.value == "mm-dd-yyyy")
  {
    await setDoc(doc(db, "DateSetting", "Format"), {
      format : "mm-dd-yyyy"
    });
  }
  if(dateselection.value == "yyyy-mm-dd")
  {
    await setDoc(doc(db, "DateSetting", "Format"), {
      format : "yyyy-mm-dd"
    });
  }
  if(dateselection.value == "yyyy-dd-mm")
  {
    await setDoc(doc(db, "DateSetting", "Format"), {
      format : "yyyy-dd-mm"
    });
  }
  window.location.reload(); 
}
//   async function SaveURLtoFirestore(url)
//   {
//   var filename = document.getElementById("filenamelabel").innerText;

//   var ref = doc(db, "Images/"+filename); 

//   await setDoc(ref, {
//     ImageName: filename,
//     ImageURL : url
//   })
// }


//reference ranges
var msselect1 = document.getElementById("msselect"); 
var machineselect1 = document.getElementById("machineselect"); 

var myth18table = document.getElementById("mythic18vettable"); 
var mnchipv5table = document.getElementById("mnchipv5table"); 

var myth18table1 = document.getElementById("mythic18vettable1"); 
var mnchipv5table1 = document.getElementById("mnchipv5table1"); 

var speciesinput = document.getElementById("speciesInp"); 

var savesubmit1 = document.getElementById("savesubmit"); 
var addsubmit1 = document.getElementById("addsubmit");
var changemachine1 = document.getElementById("changemachine"); 

//MNCHIP V5 Data
var albl1 = document.getElementById("albl"); 
var albu1 = document.getElementById("albu"); 

var tpl1 = document.getElementById("tpl"); 
var tpu1 = document.getElementById("tpu"); 

var cal1 = document.getElementById("calower"); 
var cau1 = document.getElementById("caupper"); 

var glul1 = document.getElementById("glul"); 
var gluu1 = document.getElementById("gluu"); 

var bunl1 = document.getElementById("bunl"); 
var bunu1 = document.getElementById("bunu"); 

var pl1 = document.getElementById("pl"); 
var pu1 = document.getElementById("pu"); 

var amyl1 = document.getElementById("amyl"); 
var amyu1 = document.getElementById("amyu"); 

var choll1 = document.getElementById("choll"); 
var cholu1 = document.getElementById("cholu"); 

var altl1 = document.getElementById("altl"); 
var altu1 = document.getElementById("altu"); 

var tbill1 = document.getElementById("tbill"); 
var tbilu1 = document.getElementById("tbilu");

var alpl1 = document.getElementById("alpl"); 
var alpu1 = document.getElementById("alpu"); 

var crel1 = document.getElementById("crel"); 
var creu1 = document.getElementById("creu"); 

var ckl1 = document.getElementById("ckl"); 
var cku1 = document.getElementById("cku"); 

//Mythic 18 Vet Data

var wbcl1 = document.getElementById("wbcl"); 
var wbcu1 = document.getElementById("wbcu");

var neul1 = document.getElementById("neul"); 
var neuu1 = document.getElementById("neuu");

var lyml1 = document.getElementById("lyml"); 
var lymu1 = document.getElementById("lymu");

var monl1 = document.getElementById("monl"); 
var monu1 = document.getElementById("monu");

var eosl1 = document.getElementById("eosl"); 
var eosu1 = document.getElementById("eosu");

var basl1 = document.getElementById("basl"); 
var basu1 = document.getElementById("basu");

var rbcl1 = document.getElementById("rbcl"); 
var rbcu1 = document.getElementById("rbcu");

var hgbl1 = document.getElementById("hgbl"); 
var hgbu1 = document.getElementById("hgbu");

var hctl1 = document.getElementById("hctl"); 
var hctu1 = document.getElementById("hctu");

var mcvl1 = document.getElementById("mcvl"); 
var mcvu1 = document.getElementById("mcvu");

var mchl1 = document.getElementById("mchl"); 
var mchu1 = document.getElementById("mchu");

var mchcl1 = document.getElementById("mchcl"); 
var mchcu1 = document.getElementById("mchcu");

var pltl1 = document.getElementById("pltl"); 
var pltu1 = document.getElementById("pltu");



function adddatatodb1() {
  db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
    {
   ALBLower : albl1.value, 
   ALBUpper : albu1.value,
   TPLower : tpl1.value, 
   TPUpper : tpu1.value, 
   CaLower : cal1.value, 
   CaUpper : cau1.value, 
   GLULower : glul1.value, 
   GLUUpper : gluu1.value, 
   BUNLower : bunl1.value, 
   BUNUpper : bunu1.value, 
   PLower : pl1.value, 
   PUpper : pu1.value, 
   AMYLower : amyl1.value, 
   AMYUpper : amyu1.value, 
   CholLower : choll1.value, 
   CholUpper: cholu1.value, 
   AltLower : altl1.value,
   AltUpper : altu1.value,
   TbilLower : tbill1.value, 
   TbilUpper : tbilu1.value, 
   AlpLower : alpl1.value, 
   AlpUpper : alpu1.value, 
   CreLower : crel1.value, 
   CreUpper : creu1.value, 
   CkLower : ckl1.value, 
   CkUpper : cku1.value 
    }); 
}
function adddatatodb() { 
  db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
    {
      WBCLower : wbcl1.value,
      WBCUpper : wbcu1.value,
      NeuLower : neul1.value,
      NeuUpper : neuu1.value,
      LymLower : lyml1.value,
      LymUpper : lymu1.value,
      MonLower : monl1.value,
      MonUpper : monu1.value,
      EosLower : eosl1.value,
      EosUpper : eosu1.value,
      BasLower : basl1.value,
      BasUpper : basu1.value,
      RBCLower : rbcl1.value,
      RBCUpper : rbcu1.value,
      HBGLower : hgbl1.value,
      HGBUpper : hgbu1.value,
      HCTLower : hctl1.value,
      HCTUpper : hctu1.value,
      MCVLower : mcvl1.value,
      MCVUpper : mcvu1.value,
      MCHLower : mchl1.value,
      MCHUpper : mchu1.value,
      MCHCLower : mchcl1.value,
      MCHCUpper : mchcu1.value,
      PLTLower : pltl1.value,
      PLTUpper : pltu1.value,
    })
  
}

document.getElementById("machinebutton").addEventListener("click", function(event) {
if(msselect1.value.includes("Mythic 18 Vet"))
{
  myth18table.style.display = "table"; 
  mnchipv5table.style.display = "none"; 
}
if(msselect1.value.includes("MNCHIP V5"))
{
  myth18table.style.display = "none"; 
  mnchipv5table.style.display = "table"; 
}
}) 
document.getElementById("changemachine").addEventListener("click", function(event) {
  if(machineselect1.value.includes("Mythic 18 Vet"))
  {
    myth18table1.style.display = "table"; 
    mnchipv5table1.style.display = "none"; 
  }
  if(machineselect1.value.includes("MNCHIP V5"))
  {
    myth18table1.style.display = "none"; 
    mnchipv5table1.style.display = "table"; 
  }
})

document.getElementById("addsubmit").addEventListener("click", function(event) {
  if(machineselect1.value.includes("Mythic 18 Vet"))
  {
    myth18table1.style.display = "table"; 
    mnchipv5table1.style.display = "none"; 
    savesubmit1.style.display = "block"
    changemachine1.style.display = "block"
    addsubmit1.style.display = "none"
    savesubmit1.addEventListener("click", function(event) {
      adddatatodb(); 
      alert("Data Written!")
    })
  }
  if(machineselect1.value.includes("MNCHIP V5"))
  {
    myth18table1.style.display = "none"; 
    mnchipv5table1.style.display = "table"; 
    savesubmit1.style.display = "block"
    changemachine1.style.display = "block"
    savesubmit1.addEventListener("click", function(event) {
      adddatatodb1(); 
      alert("Data Written!")
    })
  }
  }) 

