           //--------------DATA----------------------//
           var DATEinput = document.getElementById('DATE'); 
           var TIMEinput = document.getElementById("clock"); 
           var timeinputs = document.getElementById("timeinputs"); 
           var PIDinput = document.getElementById('PID'); 
           var SIDinput = document.getElementById('SID'); 
           var navdate = document.getElementById("date1"); 
           var specie = document.getElementById("specieselect"); 
                //-----------------ALB--------------------/
                const results1 = document.querySelector('#results');
                let tr_alb = document.getElementById('alb');
                let th_alb = document.getElementById('th_alb');
                let th_albunit = document.getElementById('th_albunit');
                let th_albnormal = document.getElementById('th_albnormal');
                 //-----------------TP--------------------/
                let tr_tp = document.getElementById('tp');
                let th_tp = document.getElementById('th_tp');
                let th_tpunit = document.getElementById('th_tpunit');
                let th_tpnormal =document.getElementById('th_tpnormal');
                    //-----------------Ca--------------------/
                let tr_ca = document.getElementById('ca');
                let th_ca = document.getElementById('th_ca');
                let th_caunit = document.getElementById('th_caunit');
                let th_canormal =document.getElementById('th_canormal');
                 //-----------------GLU--------------------/
                let tr_glu = document.getElementById('glu');
                let th_glu = document.getElementById('th_glu');
                let th_gluunit = document.getElementById('th_gluunit');
                let th_glunormal =document.getElementById('th_glunormal');
                 //-----------------bun--------------------/
                let tr_bun = document.getElementById('bun');
                let th_bun = document.getElementById('th_bun');
                let th_bununit = document.getElementById('th_bununit');
                let th_bunnormal =document.getElementById('th_bunnormal');
                 //-----------------p--------------------/
                let tr_p = document.getElementById('p');
                let th_p = document.getElementById('th_p');
                let th_punit = document.getElementById('th_punit');
                let th_pnormal =document.getElementById('th_pnormal');
                  //-----------------amy--------------------/
                let tr_amy = document.getElementById('amy');
                let th_amy = document.getElementById('th_amy');
                let th_amyunit = document.getElementById('th_amyunit');
                let th_amynormal =document.getElementById('th_amynormal');
                //-----------------alt--------------------/
                let tr_alt = document.getElementById('alt');
                let th_alt = document.getElementById('th_alt');
                let th_altunit = document.getElementById('th_altunit');
                let th_altnormal =document.getElementById('th_altnormal');  
                //-----------------tbil--------------------/
                let tr_tbil = document.getElementById('tbil');
                let th_tbil = document.getElementById('th_tbil');
                let th_tbilunit = document.getElementById('th_tbilunit');
                let th_tbilnormal =document.getElementById('th_tbilnormal');                 
                 //-----------------alp--------------------/
                let tr_alp = document.getElementById('alp');
                let th_alp = document.getElementById('th_alp');
                let th_alpunit = document.getElementById('th_alpunit');
                let th_alpnormal =document.getElementById('th_alpnormal');
                //-----------------cre--------------------/
                let tr_cre = document.getElementById('cre');
                let th_cre = document.getElementById('th_cre');
                let th_creunit = document.getElementById('th_creunit');
                let th_crenormal =document.getElementById('th_crenormal');
                //-----------------ck--------------------/
                let tr_ck = document.getElementById('ck');
                let th_ck = document.getElementById('th_ck');
                let th_ckunit = document.getElementById('th_ckunit');
                let th_cknormal =document.getElementById('th_cknormal');
             
                 //Mythic 18 Vet
                  //-----------------WBC--------------------/
                  let tr_wbc = document.getElementById('wbc');
                  let th_wbc = document.getElementById('th_wbc');
                  let th_wbcunit = document.getElementById('th_wbcunit');
                  let th_wbcnormal =document.getElementById('th_wbcnormal');
                      //-----------------LYM--------------------/
                  let tr_lym = document.getElementById('lym');
                  let th_lym = document.getElementById('th_lym');
                  let th_lymunit = document.getElementById('th_lymunit');
                  let th_lymnormal =document.getElementById('th_lymnormal');
                   //-----------------MON--------------------/
                  let tr_mon = document.getElementById('mon');
                  let th_mon = document.getElementById('th_mon');
                  let th_monunit = document.getElementById('th_monunit');
                  let th_monnormal =document.getElementById('th_monnormal');
                   //-----------------GRA--------------------/
                  let tr_gra = document.getElementById('gra');
                  let th_gra = document.getElementById('th_gra');
                  let th_graunit = document.getElementById('th_graunit');
                  let th_granormal =document.getElementById('th_granormal');
                  //-----------------LYM%--------------------/
                  let tr_lymn = document.getElementById('lymn');
                  let th_lymn = document.getElementById('th_lymn');
                  let th_lymunitn = document.getElementById('th_lymunitn');
                  let th_lymnormaln =document.getElementById('th_lymnormaln');
                   //-----------------MON%--------------------/
                  let tr_monn = document.getElementById('monn');
                  let th_monn = document.getElementById('th_monn');
                  let th_monunitn = document.getElementById('th_monunitn');
                  let th_monnormaln =document.getElementById('th_monnormaln');
                   //-----------------GRA%--------------------/
                  let tr_gran = document.getElementById('gran');
                  let th_gran = document.getElementById('th_gran');
                  let th_graunitn = document.getElementById('th_graunitn');
                  let th_granormaln =document.getElementById('th_granormaln');        
                    //-----------------RBC--------------------/
                  let tr_rbc = document.getElementById('rbc');
                  let th_rbc = document.getElementById('th_rbc');
                  let th_rbcunit = document.getElementById('th_rbcunit');
                  let th_rbcnormal =document.getElementById('th_rbcnormal');
                  //-----------------HGB--------------------/
                  let tr_hgb = document.getElementById('hgb');
                  let th_hgb = document.getElementById('th_hgb');
                  let th_hgbunit = document.getElementById('th_hgbunit');
                  let th_hgbnormal =document.getElementById('th_hgbnormal');
                   //-----------------HCT--------------------/
                  let tr_hct = document.getElementById('hct');
                  let th_hct = document.getElementById('th_hct');
                  let th_hctunit = document.getElementById('th_hctunit');
                  let th_hctnormal =document.getElementById('th_hctnormal');
                  //-----------------MCV--------------------/
                  let tr_mcv = document.getElementById('mcv');
                  let th_mcv = document.getElementById('th_mcv');
                  let th_mcvunit = document.getElementById('th_mcvunit');
                  let th_mcvnormal =document.getElementById('th_mcvnormal');
                  //-----------------MCH--------------------/
                  let tr_mch = document.getElementById('mch');
                  let th_mch = document.getElementById('th_mch');
                  let th_mchunit = document.getElementById('th_mchunit');
                  let th_mchnormal =document.getElementById('th_mchnormal');
                  //-----------------MCHC--------------------/
                  let tr_mchc = document.getElementById('mchc');
                  let th_mchc = document.getElementById('th_mchc');
                  let th_mchcunit = document.getElementById('th_mchcunit');
                  let th_mchcnormal = document.getElementById('th_mchcnormal');
                   //-----------------PLT--------------------/
                  let tr_plt = document.getElementById('plt');
                  let th_plt = document.getElementById('th_plt');
                  let th_pltunit = document.getElementById('th_pltunit');
                  let th_pltnormal =document.getElementById('th_pltnormal');

                let petnameinputs = document.getElementById('petnameinputs'); 
                let ownernameinputs = document.getElementById('ownernameinputs');
                let genderinputs = document.getElementById('genderselect'); 
                let ageinputs = document.getElementById('ageinputs');
                let breedinputs = document.getElementById('breedinputs');
                let pinputs = document.getElementById('physicianinputs');
                var date2 = document.getElementById("date1");  
                var clock1 = document.getElementById("clock");  
                var machinename = document.getElementById("machinename"); 
                var remarks = document.getElementById("remarks-textarea"); 
                var result1 = [] ; 
                
                var firebaseConfig = {
                 apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
                 authDomain: "analyzerdb.firebaseapp.com",
                 databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
                 projectId: "analyzerdb",
                 storageBucket: "analyzerdb.appspot.com",
                 messagingSenderId: "326480477399",
                 appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
                 measurementId: "G-NHM4EMZ8HS"
               };
               // Initialize Firebase
               firebase.initializeApp(firebaseConfig);
              //  firebase.firestore().enablePersistence()
              //  .catch((err) => {
              //      if (err.code == 'failed-precondition') {
              //          // Multiple tabs open, persistence can only be enabled
              //          // in one tab at a a time.
              //          console.log(err)
              //          // ...
              //      } else if (err.code == 'unimplemented') {
              //          // The current browser does not support all of the
              //          // features required to enable persistence
              //          // ...
              //          console.log(err)
              //      }
              //      else{
              //        console.log("Error")
              //      }
           
              //      firebase.firestore().settings({
              //        cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
              //    });
              //  });
               let db = firebase.firestore(); 
             //-----------------------------------------String to Date Function-------------------------------//
               //--------------writing data---------------------//
               db.collection("Reference Ranges").where("Machine", "==", "MNCHIP V5")
               .get().then(querySnapshot => {
                querySnapshot.forEach(doc => result1.push(doc.id));
                result1.forEach(function (item1) {
                  const optionObj1 = document.createElement("option");
                  optionObj1.textContent = item1.replace("MNCHIP V5 - ","");
                  document.getElementById("specieselect").appendChild(optionObj1);
                  
                  $('#specieselect').selectpicker('refresh');
                 
                });
              }) 
                  var uid; 
                  var username5; 
            function printfunction() {
              window.print();
          }
          firebase.auth().onAuthStateChanged(function (user) {
            document.getElementById("user1").innerHTML = user.uid
            document.getElementById("email2").innerHTML = user.email; 
            var uid5 = document.getElementById("user1").innerHTML; 
            db.collection("users").doc(uid5).get().then((doc) => {
              var email10 = doc.data().Username; 
              var userlevel10 = doc.data().UserLevel; 
              document.getElementById("user5").innerHTML = String(doc.data().Username); 
              document.getElementById("usernamelevel").innerHTML = String(email10) + " | " + String(userlevel10)
            })
          })
             function dataonload() {
              var myimg = document.getElementById("signatories1"); 
              var myimg2 = document.getElementById("logo1"); 
              var myimg3 = document.getElementById("header1"); 
              //Automatic Image Data (Signatories)!!
              var docRef = db.collection("Images").doc("signatories.png");
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
            var docRef = db.collection("Images").doc("logo.png");
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
            var docRef = db.collection("Images").doc("header.png");
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
            }

            function doc_withautoincrement(){
              var emailused = document.getElementById("email2"); 
              var doc = db.collection("patientvalues2").doc(PIDinput.innerHTML + SIDinput.innerHTML); 
              doc.get().then((docSnapshot) => {
                if (docSnapshot.exists) {
                  document.getElementById("error1").innerHTML = "Data Exists in the Database: " + "PID: " + PIDinput.innerHTML + SIDinput.innerHTML;
                  $('#errormodal').modal('show');
                } else {
                  // document does not exist (only on online)
                  db.collection("patientvalues2").doc(PIDinput.innerHTML + SIDinput.innerHTML).set(
                  {
                  //mnchip v5
                  /**ALB**/
                  ALB : th_alb.innerHTML,
                  ALBUNIT : th_albunit.innerHTML,
                  ALBNORMAL : th_albnormal.innerHTML,
          
                  /**TP**/
                  TP : th_tp.innerHTML,
                  TPUNIT  : th_tpunit.innerHTML,
                  TPNORMAL  : th_tpnormal.innerHTML,
        
                  /**CA**/
                  CA : th_ca.innerHTML,
                  CAUNIT  : th_caunit.innerHTML,
                  CANORMAL: th_canormal.innerHTML,
                  
                  /**GLU**/
                  GLU : th_glu.innerHTML,
                  GLUUNIT  : th_gluunit.innerHTML,
                  GLUNORMAL : th_glunormal.innerHTML,
                  
                  /**BUN**/
                  BUN : th_bun.innerHTML,
                  BUNUNIT : th_bununit.innerHTML,
                  BUNNORMAL  : th_bunnormal.innerHTML,
        
                  /**P**/
                  P : th_p.innerHTML,
                  PUNIT : th_punit.innerHTML,
                  PNORMAL   : th_pnormal.innerHTML, 
        
                  /**AMY**/
                  AMY : th_amy.innerHTML,
                  AMYUNIT : th_amyunit.innerHTML,
                  AMYNORMAL  : th_amynormal.innerHTML,
        
                  /**CHOL**/
                  CHOL : th_chol.innerHTML,
                  CHOLUNIT   : th_cholunit.innerHTML,
                  CHOLNORMAL : th_cholnormal.innerHTML,

                  /**ALT**/
                  ALT : th_alt.innerHTML,
                  ALTUNIT   : th_altunit.innerHTML,
                  ALTNORMAL : th_altnormal.innerHTML,
                  
                  /**TBIL**/
                  TBIL : th_tbil.innerHTML,
                  TBILUNIT   : th_tbilunit.innerHTML,
                  TBILNORMAL : th_tbilnormal.innerHTML,        
                  
                  /**ALP**/
                  ALP : th_alp.innerHTML,
                  ALPUNIT: th_alpunit.innerHTML,
                  ALPNORMAL  : th_alpnormal.innerHTML,
        
                  /**CRE**/
                  CRE : th_cre.innerHTML,
                  CREUNIT : th_creunit.innerHTML,
                  CRENORMAL  : th_crenormal.innerHTML,
        
                  /**CK**/
                  CK : th_ck.innerHTML,
                  CKUNIT: th_ckunit.innerHTML,
                  CKNORMAL: th_cknormal.innerHTML,
                  //mythic 18 vet
                  /**WBC**/
                  WBC : th_wbc.innerHTML,
                  WBCUNIT : th_wbcunit.innerHTML,
                  WBCNORMAL : th_wbcnormal.innerHTML,
          
                  /**LYM**/
                  LYM : th_lym.innerHTML,
                  LYMUNIT  : th_lymunit.innerHTML,
                  LYMNORMAL  : th_lymnormal.innerHTML,
                  
                  LYMN : th_lymn.innerHTML,
                  LYMUNITN  : th_lymunitn.innerHTML,
                  LYMNORMALN  : th_lymnormaln.innerHTML,  
        
                  /**MON**/
                  MON : th_mon.innerHTML,
                  MONUNIT  : th_monunit.innerHTML,
                  MONNORMAL: th_monnormal.innerHTML,

                  MONN : th_monn.innerHTML,
                  MONUNITN  : th_monunitn.innerHTML,
                  MONNORMALN: th_monnormaln.innerHTML,    

                  /**GRA**/
                  GRA : th_gra.innerHTML,
                  GRAUNIT  : th_graunit.innerHTML,
                  GRANORMAL : th_granormal.innerHTML,

                  GRAN : th_gran.innerHTML,
                  GRAUNITN  : th_graunitn.innerHTML,
                  GRANORMALN : th_granormaln.innerHTML,
                  
                  /**RBC**/
                  RBC : th_rbc.innerHTML,
                  RBCUNIT : th_rbcunit.innerHTML,
                  RBCNORMAL  : th_rbcnormal.innerHTML,
        
                  /**HGB**/
                  HGB : th_hgb.innerHTML,
                  HGBUNIT : th_hgbunit.innerHTML,
                  HGBNORMAL   : th_hgbnormal.innerHTML, 
                  
                  /**HCT**/
                  HCT : th_hct.innerHTML,
                  HCTUNIT : th_hctunit.innerHTML,
                  HCTNORMAL  : th_hctnormal.innerHTML,
        
                  /**MCV**/
                  MCV : th_mcv.innerHTML,
                  MCVUNIT   : th_mcvunit.innerHTML,
                  MCVNORMAL : th_mcvnormal.innerHTML,
                  
                  /**MCH**/
                  MCH : th_mch.innerHTML,
                   MCHUNIT: th_mchunit.innerHTML,
                   MCHNORMAL  : th_mchnormal.innerHTML,
        
                  /**MCHC**/
                  MCHC : th_mchc.innerHTML,
                  MCHCUNIT : th_mchcunit.innerHTML,
                  MCHCNORMAL  : th_mchcnormal.innerHTML,
        
                  /**PLT**/
                  PLT : th_plt.innerHTML,
                  PLTUNIT: th_pltunit.innerHTML,
                  PLTNORMAL   : th_pltnormal.innerHTML,  
                  
                  /**DATA**/
                  PetName : petnameinputs.value, 
                  OwnerName : ownernameinputs.value,
                  Gender : genderinputs.value, 
                  Age : ageinputs.value,
                  DATE : DATEinput.innerText, 
                  TIME : TIMEinput.innerHTML, 
                  PID : PIDinput.innerHTML + SIDinput.innerHTML,
                  Doctor: pinputs.value,
                  Machine : "MNCHIP V5 | Mythic 18 Vet", 
                  barcode : PIDinput.innerText + SIDinput.innerHTML,
                  User : emailused.innerHTML, 
                  Specie : specie.value,
                  Remarks : remarks.value,
                  Breed : breedinputs.value
                
                 }).then(function (){
                   document.getElementById("error1").innerHTML = "Data Written! " + "PID: " + PIDinput.innerHTML + SIDinput.innerHTML;
                   $('#errormodal').modal('show');
               }).catch(function(error)
               {
                document.getElementById("error1").innerHTML = "Error Writing Document: " + error;
                $('#errormodal').modal('show');
               }); 
             } 
             }).catch((fail) => {
             });
         
           }
             function changeFunc() {
                           var socket = io();
              //SID DATA
                 socket.on('data', function(data) {
                   if (data !== null ){
                    //  console.log(data); 
                   } 
                 });   
                 var selectBox = document.getElementById("specieselect");
                 var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                db.collection("Reference Ranges").doc("MNCHIP V5 - "+ String(selectedValue)).get()  
                .then((doc) => {
                      //SID DATA
                 socket.on('OBR', function(OBR) {
                   if (OBR !== null ){
                     document.getElementById('PID').innerHTML = String(OBR).substring(14,28); 
                     document.getElementById('DATE').innerHTML = date2.innerHTML; 
                     timeinputs.value = TIMEinput.innerHTML 
                  // document.getElementById('UniqueID').innerHTML = (navdate.innerText.replace("-","").replace("-","") 
                  // + TIMEinput.innerText.replace(":","")).replace(":","") ; 
                    document.getElementById("submitbtn").style.display = "block"; 
                    } 
                 });
           //ALB DATA
           socket.on('ALB', function(ALB) {
             if (ALB !== null ){
               th_albunit.innerHTML = "g/dL" ;     
               var alba0 = String(ALB).split(",");
               var alba = alba0[1]; 
              /*low */ var albb = String(doc.data().ALBLower);
              /* high */ var albc = String(doc.data().ALBUpper);    
            
                if (parseFloat(alba) > parseFloat(albc) || alba.includes(">"))
                    {
                     th_alb.innerHTML = "<b>" + alba + "&nbsp↑</b>" 
                     th_alb.style.color = "red"
                     document.getElementById("th_alb2").style.color = "red"; 
                    }
                   else if (parseFloat(alba) < parseFloat(albb))
                    {
                     th_alb.innerHTML = "<b>" + alba + "&nbsp↓</b>" 
                     th_alb.style.color = "red"
                     document.getElementById("th_alb2").style.color = "red"; 
                    }
                    else 
                    {
                     th_alb.innerHTML = "" + alba + "" 
                     document.getElementById("th_alb").style.color = "black"; 
                     document.getElementById("th_alb2").style.color = "black"; 
                    }
                        //ALB Limit DATA
              th_albnormal.innerHTML =  albb + " - " + albc ;
             } 
           });
          //TP DATA
            socket.on('TP', function(TP) {
             if (TP !== null ){
                th_tpunit.innerHTML = "g/dL" ;
                var tpa0 = String(TP).split(",");
                var tpa = tpa0[1]; //14.3
                /*low */ var tpb = String(doc.data().TPLower); //5.2
                /* high */ var tpc = String(doc.data().TPUpper); //8.2
              
                  if (parseFloat(tpa) > parseFloat(tpc) || tpa.includes(">"))
                      {
                       th_tp.innerHTML = "<b>" + tpa + "&nbsp↑</b>" 
                       th_tp.style.color = "red"
                       document.getElementById("th_tp2").style.color = "red"; 
                      }
                     else if (parseFloat(tpa) < parseFloat(tpb))
                      {
                       th_tp.innerHTML = "<b>" + tpa + "&nbsp↓</b>"
                       th_tp.style.color = "red"
                       document.getElementById("th_tp2").style.color = "red";  
                      }
                      else 
                      {
                       th_tp.innerHTML = "" + tpa + "" 
                       document.getElementById("th_tp").style.color = "black"; 
                       document.getElementById("th_tp2").style.color = "black"; 
                      }
                  //ALB Limit DATA
                  th_tpnormal.innerHTML =  tpb + " - " + tpc ;
                 }
             });
         
    
          //CA DATA
            socket.on('CA', function(CA) {   
             if (CA !== null ){
               th_caunit.innerHTML = "mg/dL" ;
               var ca0 = String(CA).split(",");
               var caa = ca0[1]; 
               /*low */ var cab = String(doc.data().CaLower); 
               /* high */ var cac = String(doc.data().CaUpper);     
             
                 if (parseFloat(caa) > parseFloat(cac) || caa.includes(">"))
                     {
                      th_ca.innerHTML = "<b>" + caa + "&nbsp↑</b>" 
                      th_ca.style.color = "red"
                      document.getElementById("th_ca2").style.color = "red"; 
                     }
                    else if (parseFloat(caa) < parseFloat(cab))
                     {
                      th_ca.innerHTML = "<b>" + caa + "&nbsp↓</b>" 
                      th_ca.style.color = "red"
                      document.getElementById("th_ca2").style.color = "red"; 
                     }
                     else 
                     {
                      th_ca.innerHTML = "" + caa + "" 
                      document.getElementById("th_ca").style.color = "black"; 
                      document.getElementById("th_ca2").style.color = "black"; 
                     }
                      //Ca DATA
                      th_canormal.innerHTML =  cab + " - " + cac ;
              }
            });
          //GLU DATA
            socket.on('GLU', function(GLU) {
            if (GLU !== null ){
               th_gluunit.innerHTML = "mg/dL" ;
               var glu0 = String(GLU).split(",");
               var glua = glu0[1]; 
               /*low */ var glub = String(doc.data().GLULower); 
               /* high */ var gluc = String(doc.data().GLUUpper); 
                 if (parseFloat(glua) > parseFloat(gluc) || glua.includes(">"))
                     {
                      th_glu.innerHTML = "<b>" + glua + "&nbsp↑</b>" 
                      th_glu.style.color = "red"
                      document.getElementById("th_glu2").style.color = "red"; 
                     }
                    else if (parseFloat(glua) < parseFloat(glub))
                     {
                      th_glu.innerHTML = "<b>" + glua + "&nbsp↓</b>" 
                      th_glu.style.color = "red"
                      document.getElementById("th_glu2").style.color = "red"; 
                     }
                     else 
                     {
                      th_glu.innerHTML = "" + glua + "" 
                      document.getElementById("th_glu").style.color = "black"; 
                      document.getElementById("th_glu2").style.color = "black"; 
                     }
                          //GLU DATA
                          th_glunormal.innerHTML =  glub + " - " + gluc ;
              }   
            }); 
           //BUN DATA
             socket.on('BUN', function(BUN) {
             if (BUN !== null ) {
               th_bununit.innerHTML = "mg/dL" ;
               var bun0 = String(BUN).split(",");
               var buna = bun0[1];  
               /*low */ var bunb = String(doc.data().BUNLower)
               /* high */ var bunc =  String(doc.data().BUNUpper)
             
                 if (parseFloat(buna) > parseFloat(bunc) || buna.includes(">"))
                     {
                      th_bun.innerHTML = "<b>" + buna + "&nbsp↑</b>" 
                      th_bun.style.color = "red"
                      document.getElementById("th_bun2").style.color = "red"; 
                     }
                    else if (parseFloat(buna) < parseFloat(bunb))
                     {
                      th_bun.innerHTML = "<b>" + buna + "&nbsp↓</b>" 
                      th_bun.style.color = "red"
                      document.getElementById("th_bun2").style.color = "red"; 
                     }
                     else 
                     {
                      th_bun.innerHTML = "" + buna + "" 
                      document.getElementById("th_bun").style.color = "black"; 
                      document.getElementById("th_bun2").style.color = "black"; 
                     }
                       //BUN DATA
                       th_bunnormal.innerHTML =  bunb + " - " + bunc ;
             } 
           });
          //P DATA
            socket.on('P', function(P) {
              if (P !== null ){
                th_punit.innerHTML = "mg/dL" ;
                var p0 = String(P).split(",");
                var pa = p0[1];  
                /*low */ var pb =  String(doc.data().PLower)
                /* high */ var pc =  String(doc.data().PUpper)  
              
                  if (parseFloat(pa) > parseFloat(pc) || pa.includes(">"))
                      {
                       th_p.innerHTML = "<b>" + pa + "&nbsp↑</b>" 
                       th_p.style.color = "red"
                       document.getElementById("th_p2").style.color = "red"; 
                      }
                     else if (parseFloat(pa) < parseFloat(pb))
                      {
                       th_p.innerHTML = "<b>" + pa + "&nbsp↓</b>" 
                       th_p.style.color = "red"
                       document.getElementById("th_p2").style.color = "red"; 
                      }
                      else 
                      {
                       th_p.innerHTML = "" + pa + "" 
                       document.getElementById("th_p").style.color = "black"; 
                       document.getElementById("th_p2").style.color = "black"; 
                      }
                      //P DATA
                      th_pnormal.innerHTML =  pb + " - " + pc ;
               } 
             });
          //AMY DATA
            socket.on('AMY', function(AMY) {
             if (AMY !== null ){
                th_amyunit.innerHTML = "U/L" ;
                var amy0 = String(AMY).split(",");
                var amya = amy0[1];  
               /*low */ var amyb = String(doc.data().AMYLower); 
               /* high */ var amyc = String(doc.data().AMYUpper);   
             
                 if (parseFloat(amya) > parseFloat(amyc) || amya.includes(">"))
                     {
                      th_amy.innerHTML = "<b>" + amya + "&nbsp↑</b>" 
                      th_amy.style.color = "red"
                      document.getElementById("th_amy2").style.color = "red"; 
                     }
                    else if (parseFloat(amya) < parseFloat(amyb))
                     {
                      th_amy.innerHTML = "<b>" + amya + "&nbsp↓</b>" 
                      th_amy.style.color = "red"
                      document.getElementById("th_amy2").style.color = "red"; 
                     }
                     else 
                     {
                      th_amy.innerHTML = "" + amya + "" 
                      document.getElementById("th_amy").style.color = "black"; 
                      document.getElementById("th_amy2").style.color = "black"; 
                     }
                      //AMY DATA
                      th_amynormal.innerHTML =  amyb + " - " + amyc ;
               } 
             });
    
          //CHOL DATA
            socket.on('CHOL', function(CHOL) {
            if (CHOL !== null ){
                th_cholunit.innerHTML = "mg/dL" ;
                var chol0 = String(CHOL).split(",");
                var chola = chol0[1]; 
                /*low */ var cholb =  String(doc.data().CholLower)
                /* high */ var cholc =  String(doc.data().CholUpper)  
              
                  if (parseFloat(chola) > parseFloat(cholc) || chola.includes(">"))
                      {
                       th_chol.innerHTML = "<b>" + chola + "&nbsp↑</b>" 
                       th_chol.style.color = "red"
                       document.getElementById("th_chol2").style.color = "red"; 
                      }
                     else if (parseFloat(chola) < parseFloat(cholb))
                      {
                       th_chol.innerHTML = "<b>" + chola + "&nbsp↓</b>" 
                       th_chol.style.color = "red"
                       document.getElementById("th_chol2").style.color = "red"; 
                      }
                      else 
                      {
                       th_chol.innerHTML = "" + chola + "" 
                       document.getElementById("th_chol").style.color = "black"; 
                       document.getElementById("th_chol2").style.color = "black"; 
                      }
                           //CHOL DATA
                           th_cholnormal.innerHTML =  cholb + " - " + cholc ;
              } 
            });

          //ALT DATA
             socket.on('ALT', function(ALT) {
              if (ALT !== null ){
                 th_altunit.innerHTML = "U/L" ;
                 var alt0 = String(ALT).split(",");
                 var alta = alt0[1]; 
                 /*low */ var altb = String(doc.data().AltLower)
                 /* high */ var altc = String(doc.data().AltUpper)   
                   if (parseFloat(alta) > parseFloat(altc) || alta.includes(">"))
                       {
                        th_alt.innerHTML = "<b>" + alta + "&nbsp↑</b>" 
                        th_alt.style.color = "red"
                        document.getElementById("th_alt2").style.color = "red"; 
                       }
                      else if (parseFloat(alta) < parseFloat(altb))
                       {
                        th_alt.innerHTML = "<b>" + alta + "&nbsp↓</b>" 
                        th_alt.style.color = "red"
                        document.getElementById("th_alt2").style.color = "red"; 
                       }
                       else 
                       {
                        th_alt.innerHTML = "" + alta + "" 
                        document.getElementById("th_alt").style.color = "black"; 
                        document.getElementById("th_alt2").style.color = "black"; 
                       }
                        //ALT DATA
                        th_altnormal.innerHTML =  altb + " - " + altc ;
                } 
              });
          //TBIL DATA
            socket.on('TBIL', function(TBIL) {
              if (TBIL !== null ){
                  th_tbilunit.innerHTML = "mg/dL" ;
                  var tbil0 = String(TBIL).split(",");
                  var tbila = tbil0[1]; 
                 /*low */ var tbilb = String(doc.data().TbilLower)
                 /* high */ var tbilc = String(doc.data().TbilUpper)  
               
                   if (parseFloat(tbila) > parseFloat(tbilc) || tbila.includes(">"))
                       {
                        th_tbil.innerHTML = "<b>" + tbila + "&nbsp↑</b>" 
                        th_tbil.style.color = "red"
                        document.getElementById("th_tbil2").style.color = "red"; 
                       }
                      else if (parseFloat(tbila) < parseFloat(tbilb))
                       {
                        th_tbil.innerHTML = "<b>" + tbila + "&nbsp↓</b>" 
                        th_tbil.style.color = "red"
                        document.getElementById("th_tbil2").style.color = "red"; 
                       }
                       else 
                       {
                        th_tbil.innerHTML = "" + tbila + "" 
                        document.getElementById("th_tbil").style.color = "black"; 
                        document.getElementById("th_tbil2").style.color = "black"; 
                       } 
                             //ALT DATA
                             th_tbilnormal.innerHTML =  tbilb + " - " + tbilc ;
                 } 
               });

       
         
          //ALP DATA
            socket.on('ALP', function(ALP) {
            if (ALP !== null ){
                th_alpunit.innerHTML = "U/L" ;
                var alp0 = String(ALP).split(",");
                  var alpa = alp0[1]; 
                /*low */ var alpb =  String(doc.data().AlpLower)
                /* high */ var alpc =  String(doc.data().AlpUpper)   
                  if (parseFloat(alpa) > parseFloat(alpc) || alpa.includes(">"))
                      {
                       th_alp.innerHTML = "<b>" + alpa + "&nbsp↑</b>" 
                       th_alp.style.color = "red"
                       document.getElementById("th_alp2").style.color = "red"; 
                      }
                     else if (parseFloat(alpa) < parseFloat(alpb))
                      {
                       th_alp.innerHTML = "<b>" + alpa + "&nbsp↓</b>" 
                       th_alp.style.color = "red"
                       document.getElementById("th_alp2").style.color = "red"; 
                      }
                      else 
                      {
                       th_alp.innerHTML = "" + alpa + "" 
                       document.getElementById("th_alp").style.color = "black"; 
                       document.getElementById("th_alp2").style.color = "black"; 
                      }
                                  //ALP DATA
                                  th_alpnormal.innerHTML =  alpb + " - " + alpc ;
              } 
            });
         
      
           

      //CRE DATA
      socket.on('CRE', function(CRE) {
        if (CRE !== null ){
           th_creunit.innerHTML = "mg/dL" ;
           var cre0 = String(CRE).split(",");
           var crea = cre0[1]; 
           /*low */ var creb = String(doc.data().CreLower)
           /* high */ var crec = String(doc.data().CreUpper)
         
             if (parseFloat(crea) > parseFloat(crec) || crea.includes(">"))
                 {
                  th_cre.innerHTML = "<b>" + crea + "&nbsp↑</b>" 
                  th_cre.style.color = "red"
                  document.getElementById("th_cre2").style.color = "red"; 
                 }
                else if (parseFloat(crea) < parseFloat(creb))
                 {
                  th_cre.innerHTML = "<b>" + crea + "&nbsp↓</b>" 
                  th_cre.style.color = "red"
                  document.getElementById("th_cre2").style.color = "red"; 
                 }
                 else 
                 {
                  th_cre.innerHTML = "" + crea + "" 
                  document.getElementById("th_cre").style.color = "black"; 
                  document.getElementById("th_cre2").style.color = "black"; 
                 }
                   //CRE DATA
                   th_crenormal.innerHTML =  creb + " - " + crec ;
          } 
        }); 
        document.getElementById("submitbtn").addEventListener("click", function(event) {
          var fn = document.getElementById("petnameinputs");
          var ln = document.getElementById("ownernameinputs");
          let gn = document.getElementById('genderselect'); 
          let an = document.getElementById('ageinputs');
          let pn = document.getElementById('physicianinputs');
          if (fn !== null && fn.value === "" || ln !== null && ln.value === "" || an !== null && an.value === "" || gn !== null && gn.value === "" || pn !== null && pn.value === "")
          {    
            document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
            $('#errormodal').modal('show');
          }
          else{
            JsBarcode("#barcode1", (PIDinput.innerText + SIDinput.innerText), {
                     format: "CODE39",
             flat : true,
           lineColor: "#0aa",
                           width: 1,
                           height: 50
           })
           doc_withautoincrement(); 
           window.print(); 
           db.collection("Timestamp MNCHIP V5").doc("Counting").get().then((doc) => {
             var count1 = doc.data().counting; 
            if (count1 == "0") 
           {
            db.collection("Timestamp MNCHIP V5").doc("Constant").set(
              {
                dateran : date2.innerText + " " + clock1.innerText,
                date : DATEinput.innerText,
                PID : PIDinput.innerText + SIDinput.innerHTML
              })
              db.collection("Timestamp MNCHIP V5").doc("Counting").set(
                {
                  counting : "1"  
                })
           }
           else if (count1 == "1") 
           {
            db.collection("Timestamp MNCHIP V5").doc("Counting").set(
              {
                counting : "0"  
              })
            db.collection("Timestamp MNCHIP V5").doc("Constant2").set(
              {
                dateran : date2.innerText + " " + clock1.innerText,
                date : DATEinput.innerText,
                PID : PIDinput.innerText + SIDinput.innerHTML,
              })
           }
           })
           var emailused2 = document.getElementById("email2"); 
           db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
             {
             id : emailused2.innerHTML,
             PID : PIDinput.innerText + SIDinput.innerHTML,
             Test_Run_Date : DATEinput.innerText,
             Activity : "Run Sample",
             Machine : machinename.innerHTML,
             DateDid : date2.innerText + " " + clock1.innerText 
             })
          // setTimeout(function(){    
          //    window.location.reload();  
          
          // }, 1500);
     
          }
        }); 

   //CK DATA
   socket.on('CK', function(CK) {
    if (CK !== null ){
       th_ckunit.innerHTML = "U/L" ;
       var ck0 = String(CK).split(",");
       var cka = ck0[1]; 
       /*low */ var ckb = String(doc.data().CkLower)
       /* high */ var ckc = String(doc.data().CkUpper)
     
         if (parseFloat(cka) > parseFloat(ckc))
             {
              th_ck.innerHTML = "<b>" + cka + "&nbsp↑</b>" 
              th_ck.style.color = "red"
              document.getElementById("th_ck2").style.color = "red"; 
             }
            else if (parseFloat(cka) < parseFloat(ckb))
             {
              th_ck.innerHTML = "<b>" + cka + "&nbsp↓</b>" 
              th_ck.style.color = "red"
              document.getElementById("th_ck2").style.color = "red"; 
             }
             else 
             {
              th_ck.innerHTML = "" + cka + "" 
              document.getElementById("th_ck").style.color = "black"; 
              document.getElementById("th_ck2").style.color = "black"; 
             }
               //CK DATA
               th_cknormal.innerHTML =  ckb + " - " + ckc ;
      } 
      if (! $('#th_cknormal').children().length > 0 ) 
      {
        var fn = document.getElementById("petnameinputs");
        var ln = document.getElementById("ownernameinputs");
        let gn = document.getElementById('genderselect'); 
        let an = document.getElementById('ageinputs');
        let pn = document.getElementById('physicianinputs');
        if (fn !== null && fn.value === "" 
        || ln !== null && ln.value === "" 
        || an !== null && an.value === "" 
        || gn !== null && gn.value === "" 
        || pn !== null && pn.value === "")
        {
       
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#errormodal').modal('show');
        }
        else{
         
          document.getElementById("error1").innerHTML = "Blood Chemistry Test Done";
          $('#errormodal').modal('show');
          setTimeout(() => {
            $('#errormodal').modal('show');
          }, 500);
        }
} 
    }); 
    socket.on('data', function(data) {
      if (data !== null ){
        // console.log(data); 
      } 
    });     
    var selectBox = document.getElementById("specieselect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
   db.collection("Reference Ranges").doc("Mythic 18 Vet - "+ String(selectedValue)).get()  
   .then((doc) => {

          //DATE DATA
          socket.on('DATE', function(DATE) {
            // if (DATE !== null ){
            //   document.getElementById('DATE').innerHTML = String(DATE).substr(5).replace("/", "-").replace("/", "-");
            // } 
          });
            //TIME DATA
            socket.on('TIME', function(TIME) {
              if (TIME !== null ){
                document.getElementById('timeinputs').value = String(TIME).substr(5);
              } 
            });
//WBC DATA
      //SID DATA
      socket.on('SID', function(SID) {
        if (SID !== null ){
          SIDinput.innerHTML = String(SID).substr(4);
        } 
      });
socket.on('WBC', function(WBC) {
if (WBC !== null ){
  th_wbcunit.innerHTML = "x10<sup>3</sup>/µL" ;     
  var wbca = String(WBC).substr(3,5).replace(";", "").replace(";", ""); 
 /*low */ var wbcb = String(doc.data().WBCLower); 
 /* high */ var wbcc = String(doc.data().WBCUpper);    
   if (parseFloat(wbca) > parseFloat(wbcc))
       {
        th_wbc.innerHTML = "<b>" + wbca + "&nbsp↑</b>"
        th_wbc.style.color = "red"
        document.getElementById("th_wbc2").style.color = "red"; 
       }
      else if (parseFloat(wbca) < parseFloat(wbcb))
       {
        th_wbc.innerHTML = "<b>" + wbca + "&nbsp↓</b>" 
        th_wbc.style.color = "red"
        document.getElementById("th_wbc2").style.color = "red"; 
       }
       else 
       {
        th_wbc.innerHTML = "" + wbca + ""
        document.getElementById("th_wbc").style.color = "black"; 
        document.getElementById("th_wbc2").style.color = "black"; 
       }
       //WBCL DATA
       th_wbcnormal.innerHTML = wbcb + " - " + wbcc;
} 
});
//LYM DATA
socket.on('LYM', function(LYM) {
if (LYM !== null ){
   th_lymunit.innerHTML = "%" ;
   var lyma =  String(LYM).substr(5,4); 
   /*low */ var lymb = String(doc.data().LymLower); 
   /* high */ var lymc = String(doc.data().LymUpper); ;    
 
     if (parseFloat(lyma) > parseFloat(lymc))
         {
          th_lym.innerHTML = "<b>" + lyma + "&nbsp↑</b>" 
          th_lym.style.color = "red"
          document.getElementById("th_lym2").style.color = "red"; 
         }
        else if (parseFloat(lyma) < parseFloat(lymb))
         {
          th_lym.innerHTML = "<b>" + lyma + "&nbsp↓</b>" 
          th_lym.style.color = "red"
          document.getElementById("th_lym2").style.color = "red"; 
         }
         else 
         {
          th_lym.innerHTML = "" + lyma + "" 
          document.getElementById("th_lym").style.color = "black"; 
          document.getElementById("th_lym2").style.color = "black"; 
         }
      //LYML DATA
       th_lymnormal.innerHTML = lymb + " - " + lymc;
    }
});

//LYM DATA
socket.on('LYMN', function(LYMN) {
  if (LYMN !== null ){
     th_lymunitn.innerHTML = "x10<sup>9</sup>/L" ;
     var lymNa =  String(LYMN).substr(4,4); 
     /*low */ var lymNb = String(doc.data().LymNLower); 
     /* high */ var lymNc = String(doc.data().LymNUpper); ;    
   
       if (parseFloat(lymNa) > parseFloat(lymNc))
           {
            th_lymn.innerHTML = "<b>" + lymNa + "&nbsp↑</b>" 
            th_lymn.style.color = "red"
            document.getElementById("th_lym2n").style.color = "red"; 
           }
          else if (parseFloat(lymNa) < parseFloat(lymNb))
           {
            th_lymn.innerHTML = "<b>" + lymNa + "&nbsp↓</b>" 
            th_lymn.style.color = "red"
            document.getElementById("th_lym2n").style.color = "red"; 
           }
           else 
           {
            th_lymn.innerHTML = "" + lymNa + "" 
            document.getElementById("th_lymn").style.color = "black"; 
            document.getElementById("th_lym2n").style.color = "black"; 
           }
        //LYML DATA
         th_lymnormaln.innerHTML = lymNb + " - " + lymNc;
      }
  });

//MON DATA
socket.on('MONN', function(MONN) {   
  if (MONN !== null ){
    th_monunitn.innerHTML = "x10<sup>9</sup>/L" ;
    var monNa =  String(MONN).substr(4,4); 
    /*low */ var monNb = String(doc.data().MonNLower); 
    /* high */ var monNc = String(doc.data().MonNUpper);    
  
      if (parseFloat(monNa) > parseFloat(monNc))
          {
           th_monn.innerHTML = "<b>" + monNa + "&nbsp↑</b>"
           th_monn.style.color = "red"
           document.getElementById("th_mon2n").style.color = "red";  
          }
         else if (parseFloat(monNa) < parseFloat(monNb))
          {
           th_monn.innerHTML = "<b>" + monNa + "&nbsp↓</b>" 
           th_monn.style.color = "red"
           document.getElementById("th_mon2n").style.color = "red";  
          }
          else 
          {
           th_monn.innerHTML = "" + monNa + "" 
           document.getElementById("th_mon").style.color = "black"; 
           document.getElementById("th_mon2n").style.color = "black";
          }
          th_monnormaln.innerHTML = monNb + " - " + monNc 
   }
  });


//MON DATA
socket.on('MON', function(MON) {   
if (MON !== null ){
  th_monunit.innerHTML = "%" ;
  var mona =  String(MON).substr(5,4); 
  /*low */ var monb = String(doc.data().MonLower); 
  /* high */ var monc = String(doc.data().MonUpper);    

    if (parseFloat(mona) > parseFloat(monc))
        {
         th_mon.innerHTML = "<b>" + mona + "&nbsp↑</b>" 
         th_mon.style.color = "red"
         document.getElementById("th_mon2").style.color = "red"; 
        }
       else if (parseFloat(mona) < parseFloat(monb))
        {
         th_mon.innerHTML = "<b>" + mona + "&nbsp↓</b>" 
         th_mon.style.color = "red"
         document.getElementById("th_mon2").style.color = "red"; 
        }
        else 
        {
         th_mon.innerHTML = "" + mona + "" 
         document.getElementById("th_mon").style.color = "black"; 
         document.getElementById("th_mon2").style.color = "black"; 
        }
        th_monnormal.innerHTML = monb + " - " + monc 
 }
});

//GRA DATA
socket.on('GRA', function(GRA) {
if (GRA !== null ){
  th_graunit.innerHTML = "%" ;
  var graa =  String(GRA).substr(5,4); 
  /*low */ var grab = String(doc.data().GraLower); 
  /* high */ var grac = String(doc.data().GraUpper);    

    if (parseFloat(graa) > parseFloat(grac))
        {
         th_gra.innerHTML = "<b>" + graa + "&nbsp↑</b>" 
         th_gra.style.color = "red"
         document.getElementById("th_gra2").style.color = "red"; 
        }
       else if (parseFloat(graa) < parseFloat(grab))
        {
         th_gra.innerHTML = "<b>" + graa + "&nbsp↓</b>" 
         th_gra.style.color = "red"
         document.getElementById("th_gra2").style.color = "red"; 
        }
        else 
        {
         th_gra.innerHTML = "" + graa + "" 
         document.getElementById("th_gra").style.color = "black"; 
         document.getElementById("th_gra2").style.color = "black"; 
        }
        th_granormal.innerHTML = grab + " - " + grac
 }   
});

//GRAN DATA
socket.on('GRAN', function(GRAN) {
  if (GRAN !== null ){
    th_graunitn.innerHTML = "x10<sup>9</sup>/L" ;
    var graNa =  String(GRAN).substr(4,4); 
    /*low */ var graNb = String(doc.data().GraNLower); 
    /* high */ var graNc = String(doc.data().GraNUpper);    
  
      if (parseFloat(graNa) > parseFloat(graNc))
          {
           th_gran.innerHTML = "<b>" + graNa + "&nbsp↑</b>" 
           th_gran.style.color = "red"
           document.getElementById("th_gra2n").style.color = "red"; 
          }
         else if (parseFloat(graNa) < parseFloat(graNb))
          {
           th_gran.innerHTML = "<b>" + graNa + "&nbsp↓</b>" 
           th_gran.style.color = "red"
           document.getElementById("th_gra2n").style.color = "red"; 
          }
          else 
          {
           th_gran.innerHTML = "" + graNa + "" 
           document.getElementById("th_gran").style.color = "black"; 
           document.getElementById("th_gra2n").style.color = "black"; 
          }
          th_granormaln.innerHTML = graNb + " - " + graNc
   }   
  });

//RBC DATA
socket.on('RBC', function(RBC) {
if (RBC !== null ) {
  th_rbcunit.innerHTML = "x10<sup>6</sup>/µL" ;
  var rbca =  String(RBC).substr(4,4); 
  /*low */ var rbcb = String(doc.data().RBCLower); 
  /* high */ var rbcc =  String(doc.data().RBCUpper); 

    if (parseFloat(rbca) > parseFloat(rbcc))
        {
         th_rbc.innerHTML = "<b>" + rbca + "&nbsp↑</b>" 
         th_rbc.style.color = "red"
         document.getElementById("th_rbc2").style.color = "red"; 
        }
       else if (parseFloat(rbca) < parseFloat(rbcb))
        {
         th_rbc.innerHTML = "<b>" + rbca + "&nbsp↓</b>" 
         th_rbc.style.color = "red"
         document.getElementById("th_rbc2").style.color = "red"; 
        }
        else 
        {
         th_rbc.innerHTML = "" + rbca + "" 
         document.getElementById("th_rbc").style.color = "black"; 
         document.getElementById("th_rbc2").style.color = "black"; 
        }
        th_rbcnormal.innerHTML = rbcb + " - " + rbcc
} 
});

  
//HGB DATA
socket.on('HGB', function(HGB) {
 if (HGB !== null ){
   th_hgbunit.innerHTML = "g/dL" ;
   var hgba =   String(HGB).substr(4,4).replace(";", ""); 
   /*low */ var hgbb =  String(doc.data().HGBLower); 
   /* high */ var hgbc =  String(doc.data().HGBUpper); 
 
     if (parseFloat(hgba) > parseFloat(hgbc))
         {
          th_hgb.innerHTML = "<b>" + hgba + "&nbsp↑</b>" 
          th_hgb.style.color = "red"
          document.getElementById("th_hgb2").style.color = "red"; 
         }
        else if (parseFloat(hgba) < parseFloat(hgbb))
         {
          th_hgb.innerHTML = "<b>" + hgba + "&nbsp↓</b>" 
          th_hgb.style.color = "red"
          document.getElementById("th_hgb2").style.color = "red"; 
         }
         else 
         {
          th_hgb.innerHTML = "" + hgba + "" 
          document.getElementById("th_hgb").style.color = "black"; 
          document.getElementById("th_hgb2").style.color = "black"; 
         }
         th_hgbnormal.innerHTML = hgbb + " - " + hgbc
  } 
});


//HCT DATA
socket.on('HCT', function(HCT) {
if (HCT !== null ){
   th_hctunit.innerHTML = "L/L" ;
  var hcta =  String(HCT).substr(4,5).replace(";", ""); 
  /*low */ var hctb = String(doc.data().HCTLower); 
  /* high */ var hctc = String(doc.data().HCTUpper); 

    if (parseFloat(hcta) > parseFloat(hctc))
        {
         th_hct.innerHTML = "<b>" + hcta + "&nbsp↑</b>" 
         th_hct.style.color = "red"
         document.getElementById("th_hct2").style.color = "red"; 
        }
       else if (parseFloat(hcta) < parseFloat(hctb))
        {
         th_hct.innerHTML = "<b>" + hcta + "&nbsp↓</b>" 
         th_hct.style.color = "red"
         document.getElementById("th_hct2").style.color = "red"; 
        }
        else 
        {
         th_hct.innerHTML = "" + hcta + "" 
         document.getElementById("th_hct").style.color = "black"; 
         document.getElementById("th_hct2").style.color = "black"; 
        }
        th_hctnormal.innerHTML = hctb + " - " + hctc
  } 
});
      

//MCV DATA
socket.on('MCV', function(MCV) {
if (MCV !== null ){
   th_mcvunit.innerHTML = "fL" ;
   var mcva = String(MCV).substr(4,6).replace(";", ""); 
   /*low */ var mcvb =  String(doc.data().MCVLower); 
   /* high */ var mcvc =  String(doc.data().MCVUpper); 
 
     if (parseFloat(mcva) > parseFloat(mcvc))
         {
          th_mcv.innerHTML = "<b>" + mcva + "&nbsp↑</b>" 
          th_mcv.style.color = "red"
          document.getElementById("th_mcv2").style.color = "red"; 
         }
        else if (parseFloat(mcva) < parseFloat(mcvb))
         {
          th_mcv.innerHTML = "<b>" + mcva + "&nbsp↓</b>" 
          th_mcv.style.color = "red"
          document.getElementById("th_mcv2").style.color = "red";
         }
         else 
         {
          th_mcv.innerHTML = "" + mcva + "" 
          document.getElementById("th_mcv").style.color = "black"; 
          document.getElementById("th_mcv2").style.color = "black"; 
         }
         th_mcvnormal.innerHTML = mcvb + " - " + mcvc
 } 
});


//MCH DATA
socket.on('MCH', function(MCH) {
 if (MCH !== null ){
    th_mchunit.innerHTML = "Pg" ;
    var mcha =  String(MCH).substr(4,4); 
    /*low */ var mchb = String(doc.data().MCHLower); 
    /* high */ var mchc = String(doc.data().MCHUpper); 
  
      if (parseFloat(mcha) > parseFloat(mchc))
          {
           th_mch.innerHTML = "<b>" + mcha + "&nbsp↑</b>" 
           th_mch.style.color = "red"
           document.getElementById("th_mch2").style.color = "red"; 
          }
         else if (parseFloat(mcha) < parseFloat(mchb))
          {
           th_mch.innerHTML = "<b>" + mcha + "&nbsp↓</b>" 
           th_mch.style.color = "red"
           document.getElementById("th_mch2").style.color = "red"; 
          }
          else 
          {
           th_mch.innerHTML = "" + mcha + "" 
           document.getElementById("th_mch").style.color = "black"; 
           document.getElementById("th_mch2").style.color = "black"; 
          }
          th_mchnormal.innerHTML = mchb + " - " + mchc
   } 
 });

//MCHC DATA
socket.on('MCHC', function(MCHC) {
 if (MCHC !== null ){
     th_mchcunit.innerHTML = "g/dL" ;
     var mchca =  String(MCHC).substr(5,4); 
    /*low */ var mchcb = String(doc.data().MCHCLower); 
    /* high */ var mchcc = String(doc.data().MCHCUpper); 
  
      if (parseFloat(mchca) > parseFloat(mchcc))
          {
           th_mchc.innerHTML = "<b>" + mchca + "&nbsp↑</b>" 
           th_mchc.style.color = "red"
           document.getElementById("th_mchc2").style.color = "red"; 
          }
         else if (parseFloat(mchca) < parseFloat(mchcb))
          {
           th_mchc.innerHTML = "<b>" + mchca + "&nbsp↓</b>" 
           th_mchc.style.color = "red"
           document.getElementById("th_mchc2").style.color = "red"; 
          }
          else 
          {
           th_mchc.innerHTML = "" + mchca + "" 
           document.getElementById("th_mchc").style.color = "black"; 
           document.getElementById("th_mchc2").style.color = "black"; 
          } 
          th_mchcnormal.innerHTML = mchcb + " - " + mchcc
    } 
    if (! $('#th_mchcnormal').children().length > 0 ) 
      {
        var fn = document.getElementById("petnameinputs");
        var ln = document.getElementById("ownernameinputs");
        let gn = document.getElementById('genderselect'); 
        let an = document.getElementById('ageinputs');
        let pn = document.getElementById('physicianinputs');
        
        if (fn !== null && fn.value === "" 
        || ln !== null && ln.value === "" 
        || an !== null && an.value === "" 
        || gn !== null && gn.value === "" 
        || pn !== null && pn.value === "" 
        || th_mchcnormal !== null && th_mchcnormal.innerHTML)
        {
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#errormodal').modal('show');
        }
        // else{
        //   JsBarcode("#barcode1", (PIDinput.innerText + SIDinput.innerHTML), {
        //            format: "CODE39",
        //    flat : true,
        //  lineColor: "#0aa",
        //                  width: 1,
        //                  height: 50
        //  })
        //  window.print(); 
        //  doc_withautoincrement(); 
        //  db.collection("Timestamp Mythic 18 Vet").doc("Counting").get().then((doc) => {
        //    var count1 = doc.data().counting; 
        //   if (count1 == "0") 
        //  {
        //   db.collection("Timestamp Mythic 18 Vet").doc("Constant").set(
        //     {
        //       dateran : date2.innerText + " " + clock1.innerText,
        //       date : DATEinput.innerText,
        //       SID : SIDinput.innerText
        //     })
        //     db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
        //       {
        //         counting : "1"  
        //       })
        //  }
        //  else if (count1 == "1") 
        //  {
        //   db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
        //     {
        //       counting : "0"  
        //     })
        //   db.collection("Timestamp Mythic 18 Vet").doc("Constant2").set(
        //     {
        //       dateran : date2.innerText + " " + clock1.innerText,
        //       date : DATEinput.innerText,
        //       SID : SIDinput.innerText,
        //     })
        //  }
        //  })
        //  var emailused2 = document.getElementById("email2"); 
        //  db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
        //    {
        //    id : emailused2.innerHTML,
        //    SID : SIDinput.innerText,
        //    Test_Run_Date : DATEinput.innerText,
        //    Activity : "Run Sample",
        //    Machine : "MNCHIP V5 | Mythic 18 Vet",
        //    DateDid : date2.innerText + " " + clock1.innerText 
        //    })
        // // setTimeout(function(){    
        // //    window.location.reload();  
        
        // // }, 1500);
        // }
      }
  });


//PLT DATA
socket.on('PLT', function(PLT) {
if (PLT !== null ){
   th_pltunit.innerHTML = "x10<sup>3</sup>/µL" ;
   var plta = String(PLT).substr(4,4); 
   /*low */ var pltb =  String(doc.data().PLTLower); 
   /* high */ var pltc =  String(doc.data().PLTUpper); 
 
     if (parseFloat(plta) > parseFloat(pltc))
         {
          th_plt.innerHTML = "<b>" + plta + "&nbsp↑</b>" 
          th_plt.style.color = "red"
          document.getElementById("th_plt2").style.color = "red"; 
         }
        else if (parseFloat(plta) < parseFloat(pltb))
         {
          th_plt.innerHTML = "<b>" + plta + "&nbsp↓</b>" 
          th_plt.style.color = "red"
          document.getElementById("th_plt2").style.color = "red"; 
         }
         else 
         {
          th_plt.innerHTML = "" + plta + "" 
          document.getElementById("th_plt").style.color = "black"; 
          document.getElementById("th_plt2").style.color = "black"; 
         }
         th_pltnormal.innerHTML = pltb + " - " + pltc
 } 
});
   }); 
  })
}

function passvalues() {
  var name = document.getElementById("textvalue").value; 
  localStorage.setItem("textvalue",name); 
  return false; 
  }