
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
var auto_inc; 
firebase.auth().onAuthStateChanged(function (user) {
 

  var myimg = document.getElementById("signatories1"); 
  var myimg2 = document.getElementById("logo1"); 
  var myimg3 = document.getElementById("header1"); 
  //Automatic Image Data (Signatories)!!
  var docRef = db2.collection("Images").doc("signatories.png");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg.src = doc.data().ImageURL; 
       console.log("Signatories Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//Automatic Image Data (Logo)!!
var docRef = db2.collection("Images").doc("logo.png");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg2.src = doc.data().ImageURL; 
       console.log("Logo Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//Automatic Image Data (Header)!!
var docRef = db2.collection("Images").doc("header.png");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg3.src = doc.data().ImageURL; 
       console.log("Header Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


var logresultstable = document.getElementById("logresults");
  function AddItemToTable(pid,petname, ownername, gender, 
    age,date,time,doctor,machine,barcode,user,
    //mnchip v5
    alb,albunit,albnormal,
    tp,tpunit,tpnormal,
    ca,caunit,canormal, 
    glu,gluunit,glunormal,
    bun,bununit,bunnormal,
    p,punit,pnormal,
    amy,amyunit,amynormal,
    chol,cholunit,cholnormal,
    alp,alpunit,alpnormal,
    cre,creunit,crenormal,
    ck,ckunit,cknormal,
    wbc,wbcunit,wbcnormal,
    lym,lymunit,lymnormal,
    mon,monunit,monnormal,
    gra,graunit,granormal,
    rbc,rbcunit,rbcnormal,
    hgb,hgbunit,hgbnormal,
    hct,hctunit,hctnormal,
    mcv,mcvunit,mcvnormal,
    mch,mchunit,mchnormal,
    mchc,mchcunit,mchcnormal,
    plt,pltunit,pltnormal,
    tbil,tbilunit,tbilnormal,
    alt,altunit,altnormal,specie) {


    let tr_data = document.createElement('tr');
    let td0 = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');
    let td11 = document.createElement('td');
    let td12 = document.createElement('td');
    let td13 = document.createElement('td');
    let td14 = document.createElement('td');
    let td15 = document.createElement('td');
    let td16 = document.createElement('td');
    let td17 = document.createElement('td');
    let td18 = document.createElement('td');
    let td19 = document.createElement('td');
    let td20 = document.createElement('td');
    let td21 = document.createElement('td');
    let td22 = document.createElement('td');
    let td23 = document.createElement('td');
    let td24 = document.createElement('td');
    let td25 = document.createElement('td');
    let td26 = document.createElement('td');
    let td27 = document.createElement('td');
    let td28 = document.createElement('td');
    let td29 = document.createElement('td');
    let td30 = document.createElement('td');
    let td31 = document.createElement('td');
    let td32 = document.createElement('td');
    let td33 = document.createElement('td');
    let td34 = document.createElement('td');
    let td35 = document.createElement('td');
    let td36 = document.createElement('td');
    let td37 = document.createElement('td');
    let td38 = document.createElement('td');
    let td39 = document.createElement('td');
    let td40 = document.createElement('td');
    let td41 = document.createElement('td');
    let td42 = document.createElement('td');
    let td43 = document.createElement('td');
    let td44 = document.createElement('td');
    let td45 = document.createElement('td');
    let td46 = document.createElement('td');
    let td47 = document.createElement('td');
    let td48 = document.createElement('td');
    let td49 = document.createElement('td');
    let td50 = document.createElement('td');
    let td51 = document.createElement('td');
    let td52 = document.createElement('td');
    let td53 = document.createElement('td');
    let td54 = document.createElement('td');
    let td55 = document.createElement('td');
    let td56 = document.createElement('td');
    let td57 = document.createElement('td');
    let td58 = document.createElement('td');
    let td59 = document.createElement('td');
    let td60 = document.createElement('td');
    let td61 = document.createElement('td');
    let td62 = document.createElement('td');
    let td63 = document.createElement('td');
    let td64 = document.createElement('td');
    let td65 = document.createElement('td');
    let td66 = document.createElement('td');
    let td67 = document.createElement('td');
    let td68 = document.createElement('td');
    let td69 = document.createElement('td');
    let td70 = document.createElement('td');
    let td71 = document.createElement('td');
    let td72 = document.createElement('td');
    let td73 = document.createElement('td');
    let td74 = document.createElement('td');
    let td75 = document.createElement('td');
    let td76 = document.createElement('td');
    let td77 = document.createElement('td');
    let td78 = document.createElement('td');
    let td79 = document.createElement('td');
    let td80 = document.createElement('td');
    let td81 = document.createElement('td');
    let td82 = document.createElement('td');
    let td83 = document.createElement('td');
    

    td0.innerHTML = pid;
    td1.innerHTML = petname;
    td2.innerHTML = ownername;
    td3.innerHTML = gender;
    td4.innerHTML = age;
    td5.innerHTML = date;
    td6.innerHTML = time;
    td7.innerHTML = doctor;
    td8.innerHTML = machine;
    td9.innerHTML = barcode;
    td10.innerHTML = user;

    td11.innerHTML = alb;
    td12.innerHTML = albunit;
    td13.innerHTML = albnormal;

    td14.innerHTML = tp;
    td15.innerHTML = tpunit;
    td16.innerHTML = tpnormal;

    td17.innerHTML = ca;
    td18.innerHTML = caunit;
    td19.innerHTML = canormal;

    td20.innerHTML = glu;
    td21.innerHTML = gluunit;
    td22.innerHTML = glunormal;

    td23.innerHTML = bun;
    td24.innerHTML = bununit;
    td25.innerHTML = bunnormal;

    td26.innerHTML = p;
    td27.innerHTML = punit;
    td28.innerHTML = pnormal;

    td29.innerHTML = amy;
    td30.innerHTML = amyunit;
    td31.innerHTML = amynormal;

    td32.innerHTML = chol;
    td33.innerHTML = cholunit;
    td34.innerHTML = cholnormal;

    td35.innerHTML = alp;
    td36.innerHTML = alpunit;
    td37.innerHTML = alpnormal;

    td38.innerHTML = cre;
    td39.innerHTML = creunit;
    td40.innerHTML = crenormal;

    td41.innerHTML = ck;
    td42.innerHTML = ckunit;
    td43.innerHTML = cknormal;

    td44.innerHTML = wbc;
    td45.innerHTML = wbcunit;
    td46.innerHTML = wbcnormal;

    td47.innerHTML = lym;
    td48.innerHTML = lymunit;
    td49.innerHTML = lymnormal;
    
    td50.innerHTML = mon;
    td51.innerHTML = monunit;
    td52.innerHTML = monnormal;

    td53.innerHTML = gra;
    td54.innerHTML = graunit;
    td55.innerHTML = granormal;

    td56.innerHTML = rbc;
    td57.innerHTML = rbcunit;
    td58.innerHTML = rbcnormal;

    td59.innerHTML = hgb;
    td60.innerHTML = hgbunit;
    td61.innerHTML = hgbnormal;

    td62.innerHTML = hct;
    td63.innerHTML = hctunit;
    td64.innerHTML = hctnormal;

    td65.innerHTML = mcv;
    td66.innerHTML = mcvunit;
    td67.innerHTML = mcvnormal;

    td68.innerHTML = mch;
    td69.innerHTML = mchunit;
    td70.innerHTML = mchnormal;

    td71.innerHTML = mchc;
    td72.innerHTML = mchcunit;
    td73.innerHTML = mchcnormal;

    td74.innerHTML = plt;
    td75.innerHTML = pltunit;
    td76.innerHTML = pltnormal;

    td77.innerHTML = tbil;
    td78.innerHTML = tbilunit;
    td79.innerHTML = tbilnormal;

    td80.innerHTML = alt;
    td81.innerHTML = altunit;
    td82.innerHTML = altnormal;

    td83.innerHTML = specie;

    tr_data.appendChild(td0);
    tr_data.appendChild(td1);
    tr_data.appendChild(td2);
    tr_data.appendChild(td3);
    tr_data.appendChild(td4);
    tr_data.appendChild(td5);
    tr_data.appendChild(td6);
    tr_data.appendChild(td7);
    tr_data.appendChild(td8); 
    tr_data.appendChild(td9);
    tr_data.appendChild(td10);
    tr_data.appendChild(td11);
    tr_data.appendChild(td12);
    tr_data.appendChild(td13);
    tr_data.appendChild(td14);
    tr_data.appendChild(td15);
    tr_data.appendChild(td16);
    tr_data.appendChild(td17);
    tr_data.appendChild(td18);
    tr_data.appendChild(td19);
    tr_data.appendChild(td20);
    tr_data.appendChild(td21);
    tr_data.appendChild(td22);
    tr_data.appendChild(td23);
    tr_data.appendChild(td24);
    tr_data.appendChild(td25);
    tr_data.appendChild(td26);
    tr_data.appendChild(td27);
    tr_data.appendChild(td28);
    tr_data.appendChild(td29);
    tr_data.appendChild(td30);
    tr_data.appendChild(td31);
    tr_data.appendChild(td32);
    tr_data.appendChild(td33);
    tr_data.appendChild(td34);
    tr_data.appendChild(td35);
    tr_data.appendChild(td36);
    tr_data.appendChild(td37);
    tr_data.appendChild(td38);
    tr_data.appendChild(td39);
    tr_data.appendChild(td40);
    tr_data.appendChild(td41);
    tr_data.appendChild(td42);
    tr_data.appendChild(td43);
    tr_data.appendChild(td44);
    tr_data.appendChild(td45);
    tr_data.appendChild(td46);
    tr_data.appendChild(td47);
    tr_data.appendChild(td48);
    tr_data.appendChild(td49);
    tr_data.appendChild(td50);
    tr_data.appendChild(td51);
    tr_data.appendChild(td52);
    tr_data.appendChild(td53);
    tr_data.appendChild(td54);
    tr_data.appendChild(td55);
    tr_data.appendChild(td56);
    tr_data.appendChild(td57);
    tr_data.appendChild(td58);
    tr_data.appendChild(td59);
    tr_data.appendChild(td60);
    tr_data.appendChild(td61);
    tr_data.appendChild(td62);
    tr_data.appendChild(td63);
    tr_data.appendChild(td64);
    tr_data.appendChild(td65);
    tr_data.appendChild(td66);
    tr_data.appendChild(td67);
    tr_data.appendChild(td68);
    tr_data.appendChild(td69);
    tr_data.appendChild(td70);
    tr_data.appendChild(td71);
    tr_data.appendChild(td72);
    tr_data.appendChild(td73);
    tr_data.appendChild(td74);
    tr_data.appendChild(td75);
    tr_data.appendChild(td76);
    tr_data.appendChild(td77);
    tr_data.appendChild(td78);
    tr_data.appendChild(td79);
    tr_data.appendChild(td80);
    tr_data.appendChild(td81);
    tr_data.appendChild(td82);

    tr_data.appendChild(td83);
    logresultstable.appendChild(tr_data);
  } 

  function AddAllItemsToTable(patientdata) {
    logresultstable.innerHTML = "";
    patientdata.forEach(element => {
      AddItemToTable(element.PID, 
        element.PetName, element.OwnerName, 
        element.Gender, element.Age, 
        element.DATE,element.TIME, element.Doctor,element.Machine, element.barcode, element.User,
        //mnchip v5
        element.ALB,element.ALBUNIT,element.ALBNORMAL,
        element.TP,element.TPUNIT,element.TPNORMAL,
        element.CA,element.CAUNIT,element.CANORMAL,
        element.GLU,element.GLUUNIT,element.GLUNORMAL,
        element.BUN,element.BUNUNIT,element.BUNNORMAL,
        element.P,element.PUNIT,element.PNORMAL,
        element.AMY,element.AMYUNIT,element.AMYNORMAL,
        element.CHOL,element.CHOLUNIT,element.CHOLNORMAL,
        element.ALP,element.ALPUNIT,element.ALPNORMAL,
        element.CRE,element.CREUNIT,element.CRENORMAL,
        element.CK,element.CKUNIT,element.CKNORMAL,
        element.WBC,element.WBCUNIT,element.WBCNORMAL,
        element.LYM,element.LYMUNIT,element.LYMNORMAL,
        element.MON,element.MONUNIT,element.MONNORMAL,
        element.GRA,element.GRAUNIT,element.GRANORMAL,
        element.RBC,element.RBCUNIT,element.RBCNORMAL,
        element.HGB,element.HGBUNIT,element.HGBNORMAL,
        element.HCT,element.HCTUNIT,element.HCTNORMAL,
        element.MCV,element.MCVUNIT,element.MCVNORMAL,
        element.MCH,element.MCHUNIT,element.MCHNORMAL,
        element.MCHC,element.MCHCUNIT,element.MCHCNORMAL,
        element.PLT,element.PLTUNIT,element.PLTNORMAL,
        element.TBIL,element.TBILUNIT,element.TBILNORMAL,
        element.ALT,element.ALTUNIT,element.ALTNORMAL,
        element.Specie);
    });
  }
  async function GetAllDataOnce() {
    const q = query(collection(db, "patientvalues2"));
    const querySnapshot = await getDocs(q);
    var datalog = [];
    querySnapshot.forEach(doc => {
      datalog.push(doc.data());
    });

    AddAllItemsToTable(datalog);
  }

  async function RealTimeData() {

    const dbRef = collection(db, "patientvalues2");
    onSnapshot(dbRef, (querySnapshot) => {
      var datalog = [];
      querySnapshot.forEach(doc => {
        datalog.push(doc.data());
      });

      AddAllItemsToTable(datalog);

    })
  }
  GetAllDataOnce();
  setTimeout(function (wews) {
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
            "targets": [5],
            "visible": true,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [10],
            "visible": false,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [3,4,6,7,8,9,11,12,13,14,15,
              16,17,18,19,20,21,22,23,24,25,26,27,28,29,
              30,31,32,33,34,35,36,37,38,39,40,41,42,43,
              44,45,46,47,48,49,50,51,52,53,54,55,56,57,
              58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,
              73,74,75,76,77,78,79,80,81,82,83],
            "visible": false,
            "searchable": true,
            orderable: true,
          },
          { width: "10px", targets: 0 },
          { width: "500px", targets: 1 },
          { width: "500px", targets: 2 },
          { width: "500px", targets: 5 },
          { width: "500px", targets: 10 },
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
        $("#pidinfo").html(table.row(this).data()[0]);
        $("#petname").html(table.row(this).data()[1]);
        $("#ownername").html(table.row(this).data()[2]);    
        $("#gender").html(table.row(this).data()[3]);
        $("#age").html(table.row(this).data()[4]);
        $("#date5").html(table.row(this).data()[5]);
        $("#timeinputs").html(table.row(this).data()[6]);
        $("#doctor").html(table.row(this).data()[7]);
        $("#machine1").html(table.row(this).data()[8]);
        $("#species").html(table.row(this).data()[83]);
        $("#last-barcode").html(table.row(this).data()[9]);
        var barcode5 = document.getElementById("last-barcode").innerText; 
          //barcode
    JsBarcode("#barcode3", barcode5, {
      format: "CODE39",
      flat : true,
    lineColor: "#0aa",
                    width: 1,
                    height: 50,
                    displayValue: true
                  })

        $("#user5").html(table.row(this).data()[10]);
        
        $("#th_alb").html(table.row(this).data()[11]); 
        $("#th_albunit").html(table.row(this).data()[12]);
        $("#th_albnormal").html(table.row(this).data()[13]);
        
        $("#th_tp").html(table.row(this).data()[14]);
        $("#th_tpunit").html(table.row(this).data()[15]);
        $("#th_tpnormal").html(table.row(this).data()[16]);
        
        $("#th_ca").html(table.row(this).data()[17]);
        $("#th_caunit").html(table.row(this).data()[18]);
        $("#th_canormal").html(table.row(this).data()[19]);
        
        $("#th_glu").html(table.row(this).data()[20]);
        $("#th_gluunit").html(table.row(this).data()[21]);
        $("#th_glunormal").html(table.row(this).data()[22]);

        $("#th_bun").html(table.row(this).data()[23]);
        $("#th_bununit").html(table.row(this).data()[24]);
        $("#th_bunnormal").html(table.row(this).data()[25]);
        
        $("#th_p").html(table.row(this).data()[26]);
        $("#th_punit").html(table.row(this).data()[27]);
        $("#th_pnormal").html(table.row(this).data()[28]);

        $("#th_amy").html(table.row(this).data()[29]);
        $("#th_amyunit").html(table.row(this).data()[30]);
        $("#th_amynormal").html(table.row(this).data()[31]);
        
        $("#th_chol").html(table.row(this).data()[32]);
        $("#th_cholunit").html(table.row(this).data()[33]);
        $("#th_cholnormal").html(table.row(this).data()[34]);
        
        $("#th_alp").html(table.row(this).data()[35]);
        $("#th_alpunit").html(table.row(this).data()[36]);
        $("#th_alpnormal").html(table.row(this).data()[37]);

        $("#th_cre").html(table.row(this).data()[38]);
        $("#th_creunit").html(table.row(this).data()[39]);
        $("#th_crenormal").html(table.row(this).data()[40]);
        
        $("#th_ck").html(table.row(this).data()[41]);
        $("#th_ckunit").html(table.row(this).data()[42]);
        $("#th_cknormal").html(table.row(this).data()[43]);

        $("#th_wbc").html(table.row(this).data()[44]);
        $("#th_wbcunit").html(table.row(this).data()[45]);
        $("#th_wbcnormal").html(table.row(this).data()[46]);
        
        $("#th_lym").html(table.row(this).data()[47]);
        $("#th_lymunit").html(table.row(this).data()[48]);
        $("#th_lymnormal").html(table.row(this).data()[49]);

        $("#th_mon").html(table.row(this).data()[50]);
        $("#th_monunit").html(table.row(this).data()[51]);
        $("#th_monnormal").html(table.row(this).data()[52]);

        $("#th_gra").html(table.row(this).data()[53]);
        $("#th_graunit").html(table.row(this).data()[54]);
        $("#th_granormal").html(table.row(this).data()[55]);
        
        $("#th_rbc").html(table.row(this).data()[56]);
        $("#th_rbcunit").html(table.row(this).data()[57]);
        $("#th_rbcnormal").html(table.row(this).data()[58]);

        $("#th_hgb").html(table.row(this).data()[59]);
        $("#th_hgbunit").html(table.row(this).data()[60]);
        $("#th_hgbnormal").html(table.row(this).data()[61]);
        
        $("#th_hct").html(table.row(this).data()[62]);
        $("#th_hctunit").html(table.row(this).data()[63]);
        $("#th_hctnormal").html(table.row(this).data()[64]);
        
        $("#th_mcv").html(table.row(this).data()[65]);
        $("#th_mcvunit").html(table.row(this).data()[66]);
        $("#th_mcvnormal").html(table.row(this).data()[67]);
        
        $("#th_mch").html(table.row(this).data()[68]);
        $("#th_mchunit").html(table.row(this).data()[69]);
        $("#th_mchnormal").html(table.row(this).data()[70]);
        
        $("#th_mchc").html(table.row(this).data()[71]);
        $("#th_mchcunit").html(table.row(this).data()[72]);
        $("#th_mchcnormal").html(table.row(this).data()[73]);
        
        $("#th_plt").html(table.row(this).data()[74]);
        $("#th_pltunit").html(table.row(this).data()[75]);
        $("#th_pltnormal").html(table.row(this).data()[76]);

        $("#th_tbil").html(table.row(this).data()[77]);
        $("#th_tbilunit").html(table.row(this).data()[78]);
        $("#th_tbilnormal").html(table.row(this).data()[79]);

        $("#th_alt").html(table.row(this).data()[80]);
        $("#th_altunit").html(table.row(this).data()[81]);
        $("#th_altnormal").html(table.row(this).data()[82]);

        $("#messagemodal").modal("show");
      });
    });
  }, 2000);
})