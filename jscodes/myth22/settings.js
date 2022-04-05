
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
  getFirestore, query, doc, setDoc, getDoc, where, getDocs, onSnapshot, collection,
}
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"

import {
  getStorage, ref as sRef, uploadBytesResumable, getDownloadURL
}
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js"

const db = getFirestore();
let db2 = firebase.firestore();
var submitbtn1 = document.getElementById("subchangeBTN");
var updatebtn1 = document.getElementById("updateBTN");
var forgotbtn1 = document.getElementById("forgotBTN");
var closebtn1 = document.getElementById("closeBTN");
let username5 = document.getElementById("username5");
let userlvl1 = document.getElementById("userlvl1");
let date2 = document.getElementById("date1");
let clock1 = document.getElementById("clock");

let desc1 = document.getElementById("desc1");
let desc1inputs = document.getElementById("desc1inputs");

let email1 = document.getElementById("email1");
let email1inputs = document.getElementById("email1inputs");

let username1 = document.getElementById("username1");
let username1inputs = document.getElementById("username1inputs");

var uid1;
var auto_inc = 0;
var logresultstable = document.getElementById("logresults");
firebase.auth().onAuthStateChanged(function (user) {
  uid1 = user.uid
  console.log(uid1);

  db2.collection("users").doc(uid1).get().then((doc) => {
    username5.innerHTML = String(doc.data().Name);
    userlvl1.innerHTML = String(doc.data().UserLevel);
    desc1.innerHTML = String(doc.data().Description);
    email1.innerHTML = String(doc.data().EMail);
    username1.innerHTML = String(doc.data().Username);
    $('#updateBTN').click(function () {
      forgotbtn1.style.display = "none";
      //Description
      desc1.style.display = "none";
      desc1inputs.style.display = "block";
      desc1inputs.value = desc1.innerHTML
      //Email
      email1.style.display = "none";
      email1inputs.style.display = "block";
      email1inputs.value = email1.innerHTML
      //Username
      username1.style.display = "none";
      username1inputs.style.display = "block";
      username1inputs.value = username1.innerHTML

      closebtn1.style.display = "inline-block"
      submitbtn1.style.display = "inline-block";
      updatebtn1.style.display = "none";
    });
    // document.getElementById('subchangebtn')
    // .addEventListener("click", function(event) {
    //     klikaj('rad1');
    // }, {once: true});
    $('#subchangeBTN').click(function () {
      desc1.style.display = "none";
      email1.style.display = "none";
      username1.style.display = "none";

      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
          NumberIdentifier: "-",
          Client: "-",
          Machine: "-",
          SerialDescription: "-",
          User: String(user.email),
          ExactDate: date2.innerText + " " + clock1.innerText,
          ChangeMode: "Changed Account Details",
        })
      db2.collection("username").doc(username1inputs.value).set(
        {
          email: email1inputs.value
        })
      user.updateEmail(email1inputs.value).then(() => {
        console.log("Update Success!");
      }).catch((error) => {
        console.log(error.message);
      });
      db2.collection("users").doc(uid1).set(
        {
          Description: desc1inputs.value,
          ExactDate: date2.innerText + " " + clock1.innerText,
          Username: username1inputs.value,
          EMail: email1inputs.value,
        }, { merge: true }).then(function (event) {
          document.getElementById("error1").innerHTML = "Update Submitted";
          $('#myModal').modal('show');
          setTimeout(() => {
            window.location.reload();
          }, 200);
        }, { once: true });
    })
    $('#closeBTN').click(function () {
      //Description
      desc1inputs.style.display = "none";
      email1inputs.style.display = "none";
      username1inputs.style.display = "none";

      desc1inputs.style.display = "block";
      email1inputs.style.display = "block";
      username1inputs.style.display = "block";

      closebtn1.style.display = "none";
      submitbtn1.style.display = "none";
      updatebtn1.style.display = "inline-block";
      forgotbtn1.style.display = "inline-block";


      // are you sure you want to discard changes
    });
    document
      .getElementById("forgotBTN")
      .addEventListener("click", (event) => {
        event.preventDefault();
        var email = document.getElementById("email1").innerHTML;
        forgotPassword(email)
      });
    const forgotPassword = (email) => {
      firebase.auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          document.getElementById("error1").innerHTML = "Email Sent to " + email
          $('#myModal').modal('show');
        }).catch(function (error) {
          var errorMessage = error.message;
          document.getElementById("error1").innerHTML = errorMessage
          $('#myModal').modal('show');
          console.log(error);

        });
    }
    function AddItemToTable(activity, date, machine, sid, testdate, username) {
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
      auto_inc = 0;
      logresultstable.innerHTML = "";
      auditlog.forEach(element => {
        AddItemToTable(element.Activity, element.DateDid, element.Machine, element.SID, element.Test_Run_Date, element.id);
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

      const dbRef = collection(db, "auditlog");
      onSnapshot(dbRef, (querySnapshot) => {
        var datalog = [];
        querySnapshot.forEach(doc => {
          datalog.push(doc.data());
        });

        AddAllItemsToTable(datalog);

      })
    }
    RealTimeData();
    setTimeout(function () {
      $(document).ready(function () {

        $('#example').dataTable({
          iDisplayLength: 5,
          pagingType: "full_numbers",
          searching: true,
          paginate: true,
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
              "targets": [0],
              "visible": true,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [1],
              "visible": true,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [2],
              "visible": true,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [3],
              "visible": false,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [4],
              "visible": false,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [5],
              "visible": false,
              "searchable": true,
              orderable: true,
            },
            {
              "targets": [6],
              "visible": false,
              "searchable": true,
              orderable: true
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

            paginate: { first: "First", last: "Last", next: "Next", previous: "Previous" }

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
        var table = $('#example').DataTable();
        $('#example tbody').on('click', 'tr', function () {
          $(".modal-body div span").text("");
          $("#number1").text(table.row(this).data()[0]);
          $("#activity1").text(table.row(this).data()[1]);
          $("#date6").text(table.row(this).data()[2]);
          $("#serial1").text(table.row(this).data()[3]);
          $("#machine1").text(table.row(this).data()[4]);
          $("#idnumber1").text(table.row(this).data()[5]);
          $("#username63").text(table.row(this).data()[6]);
          $("#messagemodal").modal("show");
        });
      });
    }, 2000);



    //--------Image Upload---------//
    var reader = new FileReader();
    var proglab = document.getElementById("upprogress");
    document.getElementById("filenamelabel").innerHTML += " ";
    function readURL() {
      var $input = $(this);
      var $newinput = $(this).parent().parent().parent().find('.portimg ');
      if (this.files && this.files[0]) {
        reader.onload = function (e) {
          reset($newinput.next('.delbtn'), true);
          $newinput.attr('src', e.target.result).show();
          $newinput.after('<input type="button" class="delbtn removebtn" value="✖">');
        }
        reader.readAsDataURL(this.files[0]);
        var ImgToUpload = this.files[0];
        var ImgName = document.getElementById("filenamelabel").innerText;
        const metaData = {
          contentType: ImgToUpload.type
        }
        const storage = getStorage();
        const storageRef = sRef(storage, "Images/" + ImgName)
        const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

        UploadTask.on('state-changed', (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          proglab.innerHTML = "Upload " + progress + "%";
        },
          (error) => {
            console.log("error" + error);
          },
          () => {
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
              SaveURLtoFirestore(downloadURL);
            });
          }
        );
      }
    }

    $(".custom-file-input").change(readURL);
    $("form").on('click', '.delbtn', function (e) {
      reset($(this));
    });

    function reset(elm, prserveFileName) {
      if (elm && elm.length > 0) {
        var $input = elm;
        $input.prev('.portimg').attr('src', '').hide();
        if (!prserveFileName) {
          $($input).parent().parent().parent().find('input.custom-file-input ').val("");
          //input.fileUpload and input#uploadre both need to empty values for particular div
        }
        elm.remove();

      }
    }


    async function SaveURLtoFirestore(url) {
      var filename = document.getElementById("filenamelabel").innerText;

      var ref = doc(db, "Images/" + filename);

      await setDoc(ref, {
        ImageName: filename,
        ImageURL: url
      })
    }
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

    var footerid1 = document.getElementById("footerRefMythic18vet");
    var footerid2 = document.getElementById("footerRefMnchipv5");

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

    var result1 = [];
   

    //Get Data Reference Range
    document.getElementById("machinebutton").addEventListener("click", function (event) {
    
      if (msselect1.value.includes("Mythic 18 Vet")) {
        myth18table.style.display = "table";
        mnchipv5table.style.display = "none";
        footerid1.style.display = "block";
        footerid2.style.display = "none";
      
    
      }
      if (msselect1.value.includes("MNCHIP V5")) {
        myth18table.style.display = "none";
        mnchipv5table.style.display = "table";
        footerid2.style.display = "block";
        footerid1.style.display = "none";
        db2.collection("Reference Ranges").doc(String(msselect1.value)).get()  
        .then((doc) => {
         
            document.getElementById("albl2").value = parseFloat(doc.data().ALBLower); 
            document.getElementById("albu2").value = parseFloat(doc.data().ALBupper); 
  
      })
      }
      if (msselect1 !== null && msselect1.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
    })

    db2.collection("Reference Ranges").get().then(querySnapshot => {
      querySnapshot.forEach(doc => result1.push(doc.id));
      result1.forEach(function (item1) {
        const optionObj1 = document.createElement("option");
        optionObj1.textContent = item1;
        document.getElementById("msselect").appendChild(optionObj1);

        $('#msselect').selectpicker('refresh');

      });
    })
   
    //------------breakpoint-------------------------//
    function adddatatodb1() {
      db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
        {
          ALBLower: albl1.value,
          ALBUpper: albu1.value,
          TPLower: tpl1.value,
          TPUpper: tpu1.value,
          CaLower: cal1.value,
          CaUpper: cau1.value,
          GLULower: glul1.value,
          GLUUpper: gluu1.value,
          BUNLower: bunl1.value,
          BUNUpper: bunu1.value,
          PLower: pl1.value,
          PUpper: pu1.value,
          AMYLower: amyl1.value,
          AMYUpper: amyu1.value,
          CholLower: choll1.value,
          CholUpper: cholu1.value,
          AltLower: altl1.value,
          AltUpper: altu1.value,
          TbilLower: tbill1.value,
          TbilUpper: tbilu1.value,
          AlpLower: alpl1.value,
          AlpUpper: alpu1.value,
          CreLower: crel1.value,
          CreUpper: creu1.value,
          CkLower: ckl1.value,
          CkUpper: cku1.value
        });
    }
    function adddatatodb() {
      db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
        {
          WBCLower: wbcl1.value,
          WBCUpper: wbcu1.value,
          NeuLower: neul1.value,
          NeuUpper: neuu1.value,
          LymLower: lyml1.value,
          LymUpper: lymu1.value,
          MonLower: monl1.value,
          MonUpper: monu1.value,
          EosLower: eosl1.value,
          EosUpper: eosu1.value,
          BasLower: basl1.value,
          BasUpper: basu1.value,
          RBCLower: rbcl1.value,
          RBCUpper: rbcu1.value,
          HBGLower: hgbl1.value,
          HGBUpper: hgbu1.value,
          HCTLower: hctl1.value,
          HCTUpper: hctu1.value,
          MCVLower: mcvl1.value,
          MCVUpper: mcvu1.value,
          MCHLower: mchl1.value,
          MCHUpper: mchu1.value,
          MCHCLower: mchcl1.value,
          MCHCUpper: mchcu1.value,
          PLTLower: pltl1.value,
          PLTUpper: pltu1.value,
        })

    }
    document.getElementById("changemachine").addEventListener("click", function (event) {
      if (machineselect1.value.includes("Mythic 18 Vet")) {
        myth18table1.style.display = "table";
        mnchipv5table1.style.display = "none";
      }
      if (machineselect1.value.includes("MNCHIP V5")) {
        myth18table1.style.display = "none";
        mnchipv5table1.style.display = "table";
      }

    })

    document.getElementById("addsubmit").addEventListener("click", function (event) {
      if (machineselect1.value.includes("Mythic 18 Vet")) {
        myth18table1.style.display = "table";
        mnchipv5table1.style.display = "none";
        savesubmit1.style.display = "block"
        changemachine1.style.display = "block"
        addsubmit1.style.display = "none"
      }
      if (machineselect1.value.includes("MNCHIP V5")) {

        myth18table1.style.display = "none";
        mnchipv5table1.style.display = "table";
        savesubmit1.style.display = "block"
        changemachine1.style.display = "block"
        addsubmit1.style.display = "none"
      }
      else if (machineselect1 !== null && machineselect1.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
    })
    document.getElementById("savesubmit").addEventListener("click", function (event) {
      if (machineselect1 !== null && machineselect1.value === "" || speciesinput !== null && speciesinput.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
      else if (machineselect1.value.includes("Mythic 18 Vet")) {
        if (wbcl1 !== null && wbcl1.value === "" ||
          wbcu1 !== null && wbcu1.value === "" ||
          neul1 !== null && neul1.value === "" ||
          neuu1 !== null && neuu1.value === "" ||
          lyml1 !== null && lyml1.value === "" ||
          lymu1 !== null && lymu1.value === "" ||
          monl1 !== null && monl1.value === "" ||
          monu1 !== null && monu1.value === "" ||
          eosl1 !== null && eosl1.value === "" ||
          eosu1 !== null && eosu1.value === "" ||
          basl1 !== null && basl1.value === "" ||
          basu1 !== null && basu1.value === "" ||
          rbcl1 !== null && rbcl1.value === "" ||
          rbcu1 !== null && rbcu1.value === "" ||
          hgbl1 !== null && hgbl1.value === "" ||
          hgbu1 !== null && hgbu1.value === "" ||
          hctl1 !== null && hctl1.value === "" ||
          hctl1 !== null && hctu1.value === "" ||
          mcvl1 !== null && mcvl1.value === "" ||
          mcvu1 !== null && mcvu1.value === "" ||
          mchl1 !== null && mchl1.value === "" ||
          mchu1 !== null && mchu1.value === "" ||
          mchcl1 !== null && mchcl1.value === "" ||
          mchcu1 !== null && mchcu1.value === "" ||
          pltl1 !== null && pltl1.value === "" ||
          pltu1 !== null && pltu1.value === "") {
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#myModal').modal('show');
        }
        else {
          adddatatodb();
          document.getElementById("error1").innerHTML = "Data Written!";
          $('#myModal').modal('show');
        }
      }
      else if (machineselect1.value.includes("MNCHIP V5")) {
        if (albl1 !== null && albl1.value === "" ||
          albu1 !== null && albu1.value === "" ||
          tpl1 !== null && tpl1.value === "" ||
          tpu1 !== null && tpu1.value === "" ||
          cal1 !== null && cal1.value === "" ||
          cau1 !== null && cau1.value === "" ||
          glul1 !== null && glul1.value === "" ||
          gluu1 !== null && gluu1.value === "" ||
          bunl1 !== null && bunl1.value === "" ||
          bunu1 !== null && bunu1.value === "" ||
          pl1 !== null && pl1.value === "" ||
          pu1 !== null && pu1.value === "" ||
          amyl1 !== null && amyl1.value === "" ||
          amyu1 !== null && amyu1.value === "" ||
          choll1 !== null && choll1.value === "" ||
          cholu1 !== null && cholu1.value === "" ||
          altl1 !== null && altl1.value === "" ||
          altu1 !== null && altu1.value === "" ||
          tbill1 !== null && tbill1.value === "" ||
          tbilu1 !== null && tbilu1.value === "" ||
          alpl1 !== null && alpl1.value === "" ||
          alpu1 !== null && alpu1.value === "" ||
          crel1 !== null && crel1.value === "" ||
          creu1 !== null && creu1.value === "" ||
          ckl1 !== null && ckl1.value === "" ||
          cku1 !== null && cku1.value === "") {
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#myModal').modal('show');
        }
        else {
          adddatatodb1();
          document.getElementById("error1").innerHTML = "Data Written!";
          $('#myModal').modal('show');
        }
      }
    })
  })
}); 
