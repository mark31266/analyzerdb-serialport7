           //--------------DATA----------------------//
           var DATEinput = document.getElementById('DATE'); 
           var TIMEinput = document.getElementById("clock"); 
           var timeinputs = document.getElementById("timeinputs"); 
           var PIDinput = document.getElementById('PID'); 
           var navdate = document.getElementById("date1"); 

                  //MNCHIP V5
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
                //-----------------chol--------------------/
                let tr_chol = document.getElementById('chol');
                let th_chol = document.getElementById('th_chol');
                let th_cholunit = document.getElementById('th_cholunit');
                let th_cholnormal =document.getElementById('th_cholnormal');
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
                   //-----------------NEU--------------------/
                  let tr_neu = document.getElementById('neu');
                  let th_neu = document.getElementById('th_neu');
                  let th_neuunit = document.getElementById('th_neuunit');
                  let th_neunormal =document.getElementById('th_neunormal');
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
                   //-----------------EOS--------------------/
                  let tr_eos = document.getElementById('eos');
                  let th_eos = document.getElementById('th_eos');
                  let th_eosunit = document.getElementById('th_eosunit');
                  let th_eosnormal =document.getElementById('th_eosnormal');
                   //-----------------GRA--------------------/
                  let tr_gra = document.getElementById('gra');
                  let th_gra = document.getElementById('th_gra');
                  let th_graunit = document.getElementById('th_graunit');
                  let th_granormal =document.getElementById('th_granormal');
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
                let bloodinputs = document.getElementById('bloodselect');
                let petvariable = petnameinputs.value; 
                let ownervariable = ownernameinputs.value; 
                let pinputs = document.getElementById('physicianinputs');
                var date2 = document.getElementById("date1");  
                var clock1 = document.getElementById("clock");  
                var machinename = document.getElementById("machinename"); 
                var result1 = [] ; 
                
                function Update(val,type) 
                {
                  if(type=='Pet') petvariable=val; 
                  else if(type=='Owner') ownervariable=val; 
                }
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
               //--------------Reference Range Data---------------------//
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
              document.getElementById("user5").innerHTML = String(doc.data().Username); 
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
              var doc = db.collection("MNCHIPV5").doc(PIDinput.innerHTML); 
              doc.get().then((docSnapshot) => {
                if (docSnapshot.exists) {
                  document.getElementById("error1").innerHTML = "Data Exists in the Database: " + "PID: " + PIDinput.innerHTML;
                  $('#errormodal').modal('show');
                } else {
                  // document does not exist (only on online)
                  db.collection("patientvalues2").doc("MNCHIP V5 " + PIDinput.innerHTML).set(
                  {
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
                  
                  /**DATA**/
                  PetName : petvariable, 
                  OwnerName : ownervariable,
                  Gender : genderinputs.value, 
                  Age : ageinputs.value,
                  BLOOD: bloodinputs.value,
                  DATE : DATEinput.innerText, 
                  TIME : TIMEinput.innerHTML, 
                  PID : PIDinput.innerText,
                  Doctor: pinputs.value,
                  Machine : "MNCHIP V5", 
                  barcode : PIDinput.innerText, 
                  User : emailused.innerHTML
                 
                 }).then(function (){
                   console.log(); 
                   document.getElementById("error1").innerHTML = "Data Written! " + "PID: " + PIDinput.innerText;
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


             function changeFunc(selectedValue) {
            
                           var socket = io();
              //SID DATA
                 socket.on('data', function(data) {
                   if (data !== null ){
                  
                   } 
                   console.log(data);
                 });   
                 var selectBox = document.getElementById("specieselect");
                 selectedValue = selectBox.options[selectBox.selectedIndex].value;
                db.collection("Reference Ranges").doc("MNCHIP V5 - "+ String(selectedValue)).get()  
                .then((doc) => {
                      //SID DATA
                 socket.on('OBR', function(OBR) {
                   if (OBR !== null ){
                     document.getElementById('PID').innerHTML = String(OBR).substring(14,28); 
                     document.getElementById('DATE').innerHTML = date2.innerHTML; 
                     timeinputs.value = TIMEinput.innerHTML 
                  document.getElementById('UniqueID').innerHTML = (navdate.innerText.replace("-","").replace("-","") 
                  + TIMEinput.innerText.replace(":","")).replace(":","") ; 
                    document.getElementById("submitbtn").style.display = "block"; 
                    } 
                 });
           //ALB DATA
           socket.on('ALB', function(ALB) {
             if (ALB !== null ){
               th_albunit.innerHTML = "g/L" ;     
               var alba0 = String(ALB).split(",");
               var alba = alba0[1]; 
              /*low */ var albb = String(doc.data().ALBLower);
              /* high */ var albc = String(doc.data().ALBUpper);    
            
                if (parseFloat(alba) > parseFloat(albc) || alba.includes(">"))
                    {
                     th_alb.innerHTML = "<b>" + alba + "&nbsp↑</b>" 
                    }
                   else if (parseFloat(alba) < parseFloat(albb))
                    {
                     th_alb.innerHTML = "<b>" + alba + "&nbsp↓</b>" 
                    }
                    else 
                    {
                     th_alb.innerHTML = "" + alba + "" 
                    }
                        //ALB Limit DATA
              th_albnormal.innerHTML =  albb + " - " + albc ;
             } 
           });
          //TP DATA
            socket.on('TP', function(TP) {
             if (TP !== null ){
                th_tpunit.innerHTML = "g/L" ;
                var tpa0 = String(TP).split(",");
                var tpa = tpa0[1]; 
                /*low */ var tpb = String(doc.data().TPLower); 
                /* high */ var tpc = String(doc.data().TPUpper);    
              
                  if (parseFloat(tpa) > parseFloat(tpc) || tpa.includes(">"))
                      {
                       th_tp.innerHTML = "<b>" + tpa + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(tpa) < parseFloat(tpb))
                      {
                       th_tp.innerHTML = "<b>" + tpa + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_tp.innerHTML = "" + tpa + "" 
                      }
                  //ALB Limit DATA
                  th_tpnormal.innerHTML =  tpb + " - " + tpc ;
                 }
             });
         
    
          //CA DATA
            socket.on('CA', function(CA) {   
             if (CA !== null ){
               th_caunit.innerHTML = "mmol/L" ;
               var ca0 = String(CA).split(",");
               var caa = ca0[1]; 
               /*low */ var cab = String(doc.data().CaLower); 
               /* high */ var cac = String(doc.data().CaUpper);     
             
                 if (parseFloat(caa) > parseFloat(cac) || caa.includes(">"))
                     {
                      th_ca.innerHTML = "<b>" + caa + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(caa) < parseFloat(cab))
                     {
                      th_ca.innerHTML = "<b>" + caa + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_ca.innerHTML = "" + caa + "" 
                     }
                      //Ca DATA
                      th_canormal.innerHTML =  cab + " - " + cac ;
              }
            });
          //GLU DATA
            socket.on('GLU', function(GLU) {
            if (GLU !== null ){
               th_gluunit.innerHTML = "mmol/L" ;
               var glu0 = String(GLU).split(",");
               var glua = glu0[1]; 
               /*low */ var glub = String(doc.data().GLULower); 
               /* high */ var gluc = String(doc.data().GLUUpper); 
             
                 if (parseFloat(glua) > parseFloat(gluc) || glua.includes(">"))
                     {
                      th_glu.innerHTML = "<b>" + glua + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(glua) < parseFloat(glub))
                     {
                      th_glu.innerHTML = "<b>" + glua + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_glu.innerHTML = "" + glua + "" 
                     }
                          //GLU DATA
                          th_glunormal.innerHTML =  glub + " - " + gluc ;
              }   
            }); 
           //BUN DATA
             socket.on('BUN', function(BUN) {
             if (BUN !== null ) {
               th_bununit.innerHTML = "mmol/L" ;
               var bun0 = String(BUN).split(",");
               var buna = bun0[1];  
               /*low */ var bunb = String(doc.data().BUNLower)
               /* high */ var bunc =  String(doc.data().BUNUpper)
             
                 if (parseFloat(buna) > parseFloat(bunc) || buna.includes(">"))
                     {
                      th_bun.innerHTML = "<b>" + buna + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(buna) < parseFloat(bunb))
                     {
                      th_bun.innerHTML = "<b>" + buna + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_bun.innerHTML = "" + buna + "" 
                     }
                       //BUN DATA
                       th_bunnormal.innerHTML =  bunb + " - " + bunc ;
             } 
           });
          //P DATA
            socket.on('P', function(P) {
              if (P !== null ){
                th_punit.innerHTML = "mmol/L" ;
                var p0 = String(P).split(",");
                var pa = p0[1];  
                /*low */ var pb =  String(doc.data().PLower)
                /* high */ var pc =  String(doc.data().PUpper)  
              
                  if (parseFloat(pa) > parseFloat(pc) || pa.includes(">"))
                      {
                       th_p.innerHTML = "<b>" + pa + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(pa) < parseFloat(pb))
                      {
                       th_p.innerHTML = "<b>" + pa + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_p.innerHTML = "" + pa + "" 
                      }
                      //P DATA
                      th_pnormal.innerHTML =  pb + " - " + pc ;
               } 
             });
          //AMY DATA
            socket.on('AMY', function(AMY) {
             if (AMY !== null ){
                th_amyunit.innerHTML = "μ/L" ;
                var amy0 = String(AMY).split(",");
                var amya = amy0[1];  
               /*low */ var amyb = String(doc.data().AMYLower); 
               /* high */ var amyc = String(doc.data().AMYUpper);   
             
                 if (parseFloat(amya) > parseFloat(amyc) || amya.includes(">"))
                     {
                      th_amy.innerHTML = "<b>" + amya + "&nbsp↑</b>" 
                     }
                    else if (parseFloat(amya) < parseFloat(amyb))
                     {
                      th_amy.innerHTML = "<b>" + amya + "&nbsp↓</b>" 
                     }
                     else 
                     {
                      th_amy.innerHTML = "" + amya + "" 
                     }
                      //AMY DATA
                      th_amynormal.innerHTML =  amyb + " - " + amyc ;
               } 
             });
    
          //CHOL DATA
            socket.on('CHOL', function(CHOL) {
            if (CHOL !== null ){
                th_cholunit.innerHTML = "mmol/L" ;
                var chol0 = String(CHOL).split(",");
                var chola = chol0[1]; 
                /*low */ var cholb =  String(doc.data().CholLower)
                /* high */ var cholc =  String(doc.data().CholUpper)  
              
                  if (parseFloat(chola) > parseFloat(cholc) || chola.includes(">"))
                      {
                       th_chol.innerHTML = "<b>" + chola + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(chola) < parseFloat(cholb))
                      {
                       th_chol.innerHTML = "<b>" + chola + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_chol.innerHTML = "" + chola + "" 
                      }
                           //CHOL DATA
                           th_cholnormal.innerHTML =  cholb + " - " + cholc ;
              } 
            });

          //ALT DATA
             socket.on('ALT', function(ALT) {
              if (ALT !== null ){
                 th_altunit.innerHTML = "μ/L" ;
                 var alt0 = String(ALT).split(",");
                 var alta = alt0[1]; 
                 /*low */ var altb = String(doc.data().AltLower)
                 /* high */ var altc = String(doc.data().AltUpper)   
                   if (parseFloat(alta) > parseFloat(altc) || alta.includes(">"))
                       {
                        th_alt.innerHTML = "<b>" + alta + "&nbsp↑</b>" 
                       }
                      else if (parseFloat(alta) < parseFloat(altb))
                       {
                        th_alt.innerHTML = "<b>" + alta + "&nbsp↓</b>" 
                       }
                       else 
                       {
                        th_alt.innerHTML = "" + alta + "" 
                       }
                        //ALT DATA
                        th_altnormal.innerHTML =  altb + " - " + altc ;
                } 
              });
          //TBIL DATA
            socket.on('TBIL', function(TBIL) {
              if (TBIL !== null ){
                  th_tbilunit.innerHTML = "μmol/L" ;
                  var tbil0 = String(TBIL).split(",");
                  var tbila = tbil0[1]; 
                 /*low */ var tbilb = String(doc.data().TbilLower)
                 /* high */ var tbilc = String(doc.data().TbilUpper)  
               
                   if (parseFloat(tbila) > parseFloat(tbilc) || tbila.includes(">"))
                       {
                        th_tbil.innerHTML = "<b>" + tbila + "&nbsp↑</b>" 
                       }
                      else if (parseFloat(tbila) < parseFloat(tbilb))
                       {
                        th_tbil.innerHTML = "<b>" + tbila + "&nbsp↓</b>" 
                       }
                       else 
                       {
                        th_tbil.innerHTML = "" + tbila + "" 
                       } 
                             //ALT DATA
                             th_tbilnormal.innerHTML =  tbilb + " - " + tbilc ;
                 } 
               });

       
         
          //ALP DATA
            socket.on('ALP', function(ALP) {
            if (ALP !== null ){
                th_alpunit.innerHTML = "μ/L" ;
                var alp0 = String(ALP).split(",");
                  var alpa = alp0[1]; 
                /*low */ var alpb =  String(doc.data().AlpLower)
                /* high */ var alpc =  String(doc.data().AlpUpper)   
                  if (parseFloat(alpa) > parseFloat(alpc) || alpa.includes(">"))
                      {
                       th_alp.innerHTML = "<b>" + alpa + "&nbsp↑</b>" 
                      }
                     else if (parseFloat(alpa) < parseFloat(alpb))
                      {
                       th_alp.innerHTML = "<b>" + alpa + "&nbsp↓</b>" 
                      }
                      else 
                      {
                       th_alp.innerHTML = "" + alpa + "" 
                      }
                                  //ALP DATA
                                  th_alpnormal.innerHTML =  alpb + " - " + alpc ;
              } 
            });
         
      
           

      //CRE DATA
      socket.on('CRE', function(CRE) {
        if (CRE !== null ){
           th_creunit.innerHTML = "μmol/L" ;
           var cre0 = String(CRE).split(",");
           var crea = cre0[1]; 
           /*low */ var creb = String(doc.data().CreLower)
           /* high */ var crec = String(doc.data().CreUpper)
         
             if (parseFloat(crea) > parseFloat(crec) || crea.includes(">"))
                 {
                  th_cre.innerHTML = "<b>" + crea + "&nbsp↑</b>" 
                 }
                else if (parseFloat(crea) < parseFloat(creb))
                 {
                  th_cre.innerHTML = "<b>" + crea + "&nbsp↓</b>" 
                 }
                 else 
                 {
                  th_cre.innerHTML = "" + crea + "" 
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
            bnn2.innerHTML = "<b>" + bnn1.value + "</b>"; 
          
            JsBarcode("#barcode1", (PIDinput.innerText), {
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
                PID : PIDinput.innerText
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
                PID : PIDinput.innerText,
              })
           }
           })
           var emailused2 = document.getElementById("email2"); 
           db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
             {
             id : emailused2.innerHTML,
             PID : PIDinput.innerText,
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
       th_ckunit.innerHTML = "μ/L" ;
       var ck0 = String(CK).split(",");
       var cka = ck0[1]; 
       /*low */ var ckb = String(doc.data().CkLower)
       /* high */ var ckc = String(doc.data().CkUpper)
     
         if (parseFloat(cka) > parseFloat(ckc))
             {
              th_ck.innerHTML = "<b>" + cka + "&nbsp↑</b>" 
             }
            else if (parseFloat(cka) < parseFloat(ckb))
             {
              th_ck.innerHTML = "<b>" + cka + "&nbsp↓</b>" 
             }
             else 
             {
              th_ck.innerHTML = "" + cka + "" 
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
        let bn = document.getElementById('bloodselect');
        let bnn1 = document.getElementById('bloodselect'); 
        let bnn2 = document.getElementById('th_blood'); 
        if (fn !== null && fn.value === "" || ln !== null && ln.value === "" || an !== null && an.value === "" || gn !== null && gn.value === "" || pn !== null && pn.value === "" || bn !== null && bn.value === ""  )
        {
       
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#errormodal').modal('show');
        }
        else{
        
          bnn2.innerHTML = "<b>" + bnn1.value + "</b>"; 
        
          doc_withautoincrement(); 
         window.print();
          
         JsBarcode("#barcode1", (PIDinput.innerText), {
           format: "CODE39",
           flat : true,
         lineColor: "#0aa",
                         width: 1,
                         height: 50,
                         displayValue: true
         })
         db.collection("Timestamp").doc("Counting").get().then((doc) => {
          var count1 = doc.data().counting; 
         if (count1 == "0") 
        {
         db.collection("Timestamp").doc("Constant").set(
           {
             dateran : date2.innerText + " " + clock1.innerText,
             date : DATEinput.innerText,
             PID : PIDinput.innerText
           })
           db.collection("Timestamp").doc("Counting").set(
             {
               counting : "1"  
             })
        }
        else if (count1 == "1") 
        {
         db.collection("Timestamp").doc("Counting").set(
           {
             counting : "0"  
           })
         db.collection("Timestamp").doc("Constant2").set(
           {
             dateran : date2.innerText + " " + clock1.innerText,
             date : DATEinput.innerText,
             PID : PIDinput.innerText,
           })
        }
        })
        var emailused3 = document.getElementById("email2"); 
         db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
           {
           id : emailused3.innerHTML,
           PID : PIDinput.innerText,
           Test_Run_Date : DATEinput.innerText,
           Activity : "Run Sample",
           Machine : machinename,
           DateDid : date2.innerText + " " + clock1.innerText 
           })
        // setTimeout(function(){    
        //   //  window.location.reload();  
        // }, 1000);
        }
} 
    }); 
    });
  }
  