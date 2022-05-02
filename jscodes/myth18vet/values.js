           //--------------DATA----------------------//
           var DATEinput = document.getElementById('DATE'); 
           var TIMEinput = document.getElementById('timeinputs'); 
           var SIDinput = document.getElementById('SID'); 
                //-----------------WBC--------------------/
                const results1 = document.querySelector('#results');
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
                let th_pltnormal =document.getElementById('th_pltnormal')

                let petnameinputs = document.getElementById('petnameinputs'); 
                let ownernameinputs = document.getElementById('ownernameinputs');
                let genderinputs = document.getElementById('genderselect'); 
                let ageinputs = document.getElementById('ageinputs');
                let petvariable = petnameinputs.value; 
                let ownervariable = ownernameinputs.value; 
                let pinputs = document.getElementById('physicianinputs');
                var date2 = document.getElementById("date1");  
                var clock1 = document.getElementById("clock");  
                var machinename = document.getElementById("machinename"); 
                
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

               let db = firebase.firestore(); 
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

               var uid; 
               var username5; 
               var result1 = [];
               function printfunction() {
                window.print();
            }

             //--------------Reference Range Data---------------------//
             db.collection("Reference Ranges").where("Machine", "==", "Mythic 18 Vet")
             .get().then(querySnapshot => {
              querySnapshot.forEach(doc => result1.push(doc.id));
              result1.forEach(function (item1) {
                const optionObj1 = document.createElement("option");
                optionObj1.textContent = item1.replace("Mythic 18 Vet - ","");
                document.getElementById("specieselect").appendChild(optionObj1);
                
                $('#specieselect').selectpicker('refresh');
               
              });
            }) 


            firebase.auth().onAuthStateChanged(function (user) {
              document.getElementById("user1").innerHTML = user.uid
              document.getElementById("email2").innerHTML = user.email; 
              var uid5 = document.getElementById("user1").innerHTML; 
              db.collection("users").doc(uid5).get().then((doc) => {
                document.getElementById("user5").innerHTML = String(doc.data().Username); 
              })
            })

           function doc_withautoincrement(){
            var emailused = document.getElementById("email2"); 
            var doc = db.collection("Mythic 18 Vet").doc(PIDinput.innerHTML); 
            doc.get().then((docSnapshot) => {
              if (docSnapshot.exists) {
                document.getElementById("error1").innerHTML = "Data Exists in the Database: " + "SID: " + PIDinput.innerHTML;
                $('#errormodal').modal('show');
              } else {
                // document does not exist (only on online)
                db.collection("patientvalues2").doc("Mythic 18 Vet " + PIDinput.innerHTML).set(
                {
                /**WBC**/
                WBC : th_wbc.innerHTML,
                WBCUNIT : th_wbcunit.innerHTML,
                WBCNORMAL : th_wbcnormal.innerHTML,
        
                /**LYM**/
                LYM : th_lym.innerHTML,
                LYMUNIT  : th_lymunit.innerHTML,
                LYMNORMAL  : th_lymnormal.innerHTML,
      
                /**MON**/
                MON : th_mon.innerHTML,
                MONUNIT  : th_monunit.innerHTML,
                MONNORMAL: th_monnormal.innerHTML,

                //mythic 18 vet
                /**GRA**/
                GRA : th_gra.innerHTML,
                GRAUNIT  : th_graunit.innerHTML,
                GRANORMAL : th_granormal.innerHTML,
                
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
                PetName : petvariable, 
                OwnerName : ownervariable,
                Gender : genderinputs.value, 
                Age : ageinputs.value,
                DATE : DATEinput.innerText, 
                TIME : TIMEinput.innerHTML, 
                SID : SIDinput.innerText,
                Doctor: pinputs.value,
                Machine : "Mythic 18 Vet", 
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
                   console.dir(data);
                   } 
                 });     
                 var selectBox = document.getElementById("specieselect");
                 var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                db.collection("Reference Ranges").doc("Mythic 18 Vet - "+ String(selectedValue)).get()  
                .then((doc) => {
                      //SID DATA
                 socket.on('SID', function(SID) {
                   if (SID !== null ){
                     document.getElementById('SID').innerHTML = String(SID).substr(4);
                     
                   } 
                 });
                       //DATE DATA
                       socket.on('DATE', function(DATE) {
                         if (DATE !== null ){
                           document.getElementById('DATE').innerHTML = String(DATE).substr(5).replace("/", "-").replace("/", "-");
                         } 
                       });
                         //TIME DATA
                         socket.on('TIME', function(TIME) {
                           if (TIME !== null ){
                             document.getElementById('timeinputs').value = String(TIME).substr(5);
                           } 
                         });
                         socket.on('WBC', function(WBC) {
                          if (WBC !== null ){
                            th_wbcunit.innerHTML = "x10<sup>3</sup>/µL" ;     
                            var wbca = String(WBC).substr(3,5).replace(";", "").replace(";", ""); 
                           /*low */ var wbcb = String(doc.data().WBCLower) 
                           /* high */ var wbcc = String(doc.data().WBCUpper);    
                          
                             if (parseFloat(wbca) > parseFloat(wbcc))
                                 {
                                  th_wbc.innerHTML = "<b>" + wbca + "&nbsp↑</b>" 
                                 }
                                else if (parseFloat(wbca) < parseFloat(wbcb))
                                 {
                                  th_wbc.innerHTML = "<b>" + wbca + "&nbsp↓</b>" 
                                 }
                                 else 
                                 {
                                  th_wbc.innerHTML = "" + wbca + "" 
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
                                   }
                                  else if (parseFloat(lyma) < parseFloat(lymb))
                                   {
                                    th_lym.innerHTML = "<b>" + lyma + "&nbsp↓</b>" 
                                   }
                                   else 
                                   {
                                    th_lym.innerHTML = "" + lyma + "" 
                                   }
                                //LYML DATA
                                 th_lymnormal.innerHTML = lymb + " - " + lymc;
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
                                  }
                                 else if (parseFloat(mona) < parseFloat(monb))
                                  {
                                   th_mon.innerHTML = "<b>" + mona + "&nbsp↓</b>" 
                                  }
                                  else 
                                  {
                                   th_mon.innerHTML = "" + mona + "" 
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
                                  }
                                 else if (parseFloat(graa) < parseFloat(grab))
                                  {
                                   th_gra.innerHTML = "<b>" + graa + "&nbsp↓</b>" 
                                  }
                                  else 
                                  {
                                   th_gra.innerHTML = "" + graa + "" 
                                  }
                                  th_granormal.innerHTML = grab + " - " + grac
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
                                  }
                                 else if (parseFloat(rbca) < parseFloat(rbcb))
                                  {
                                   th_rbc.innerHTML = "<b>" + rbca + "&nbsp↓</b>" 
                                  }
                                  else 
                                  {
                                   th_rbc.innerHTML = "" + rbca + "" 
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
                                   }
                                  else if (parseFloat(hgba) < parseFloat(hgbb))
                                   {
                                    th_hgb.innerHTML = "<b>" + hgba + "&nbsp↓</b>" 
                                   }
                                   else 
                                   {
                                    th_hgb.innerHTML = "" + hgba + "" 
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
                                  }
                                 else if (parseFloat(hcta) < parseFloat(hctb))
                                  {
                                   th_hct.innerHTML = "<b>" + hcta + "&nbsp↓</b>" 
                                  }
                                  else 
                                  {
                                   th_hct.innerHTML = "" + hcta + "" 
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
                                   }
                                  else if (parseFloat(mcva) < parseFloat(mcvb))
                                   {
                                    th_mcv.innerHTML = "<b>" + mcva + "&nbsp↓</b>" 
                                   }
                                   else 
                                   {
                                    th_mcv.innerHTML = "" + mcva + "" 
                                   }
                                   th_mcvnormal.innerHTML = mcvb + " - " + mcvc
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
                             db.collection("Timestamp Mythic 18 Vet").doc("Counting").get().then((doc) => {
                               var count1 = doc.data().counting; 
                              if (count1 == "0") 
                             {
                              db.collection("Timestamp Mythic 18 Vet").doc("Constant").set(
                                {
                                  dateran : date2.innerText + " " + clock1.innerText,
                                  date : DATEinput.innerText,
                                  SID : SIDinput.innerText
                                })
                                db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
                                  {
                                    counting : "1"  
                                  })
                             }
                             else if (count1 == "1") 
                             {
                              db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
                                {
                                  counting : "0"  
                                })
                              db.collection("Timestamp Mythic 18 Vet").doc("Constant2").set(
                                {
                                  dateran : date2.innerText + " " + clock1.innerText,
                                  date : DATEinput.innerText,
                                  SID : SIDinput.innerText,
                                })
                             }
                             })
                             var emailused2 = document.getElementById("email2"); 
                             db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
                               {
                               id : emailused2.innerHTML,
                               SID : SIDinput.innerText,
                               Test_Run_Date : DATEinput.innerText,
                               Activity : "Run Sample",
                               Machine : "Mythic 18 Vet",
                               DateDid : date2.innerText + " " + clock1.innerText 
                               })
                            // setTimeout(function(){    
                            //    window.location.reload();  
                            
                            // }, 1500);
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
                                    }
                                   else if (parseFloat(mcha) < parseFloat(mchb))
                                    {
                                     th_mch.innerHTML = "<b>" + mcha + "&nbsp↓</b>" 
                                    }
                                    else 
                                    {
                                     th_mch.innerHTML = "" + mcha + "" 
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
                                    }
                                   else if (parseFloat(mchca) < parseFloat(mchcb))
                                    {
                                     th_mchc.innerHTML = "<b>" + mchca + "&nbsp↓</b>" 
                                    }
                                    else 
                                    {
                                     th_mchc.innerHTML = "" + mchca + "" 
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
                                  else{
                                    JsBarcode("#barcode1", (PIDinput.innerText), {
                                             format: "CODE39",
                                     flat : true,
                                   lineColor: "#0aa",
                                                   width: 1,
                                                   height: 50
                                   })
                                   doc_withautoincrement(); 
                                   window.print(); 
                                   db.collection("Timestamp Mythic 18 Vet").doc("Counting").get().then((doc) => {
                                     var count1 = doc.data().counting; 
                                    if (count1 == "0") 
                                   {
                                    db.collection("Timestamp Mythic 18 Vet").doc("Constant").set(
                                      {
                                        dateran : date2.innerText + " " + clock1.innerText,
                                        date : DATEinput.innerText,
                                        SID : SIDinput.innerText
                                      })
                                      db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
                                        {
                                          counting : "1"  
                                        })
                                   }
                                   else if (count1 == "1") 
                                   {
                                    db.collection("Timestamp Mythic 18 Vet").doc("Counting").set(
                                      {
                                        counting : "0"  
                                      })
                                    db.collection("Timestamp Mythic 18 Vet").doc("Constant2").set(
                                      {
                                        dateran : date2.innerText + " " + clock1.innerText,
                                        date : DATEinput.innerText,
                                        SID : SIDinput.innerText,
                                      })
                                   }
                                   })
                                   var emailused2 = document.getElementById("email2"); 
                                   db.collection("auditlog").doc(date2.innerText + " " + clock1.innerText).set(
                                     {
                                     id : emailused2.innerHTML,
                                     SID : SIDinput.innerText,
                                     Test_Run_Date : DATEinput.innerText,
                                     Activity : "Run Sample",
                                     Machine : "Mythic 18 Vet",
                                     DateDid : date2.innerText + " " + clock1.innerText 
                                     })
                                  // setTimeout(function(){    
                                  //    window.location.reload();  
                                  
                                  // }, 1500);
                                  }
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
                                   }
                                  else if (parseFloat(plta) < parseFloat(pltb))
                                   {
                                    th_plt.innerHTML = "<b>" + plta + "&nbsp↓</b>" 
                                   }
                                   else 
                                   {
                                    th_plt.innerHTML = "" + plta + "" 
                                   }
                                   th_pltnormal.innerHTML = pltb + " - " + pltc
                           } 
                          });
                        });
                      }
     
      