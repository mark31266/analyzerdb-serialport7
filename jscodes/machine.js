var socket1 = io();
var machinename = document.getElementById("machinename").innerHTML; 
socket1.on('status', function(status) {
  console.log(status);
  if (String(status).includes("COM6") ){
   machinename = "MNCHIP V5"; 
     //SelectPicker Nav
   const navobj = document.createElement("li");
   const navobj2 = document.createElement("a");
   navobj2.textContent = "MNCHIP V5";
   navobj2.href = "/mnchipv5/run"; 
   navobj.appendChild(navobj2)
   document.getElementById("homeSubmenu1").appendChild(navobj);

  }
  if (String(status).includes("COM5") ){
      machinename = "Orphee Mythic 18 Vet"; 
      const navobj = document.createElement("li");
      const navobj2 = document.createElement("a");
      navobj2.textContent = "Orphee Mythic 18 Vet";
      navobj2.href = "/myth18vet/run"; 
      navobj.appendChild(navobj2)
      document.getElementById("homeSubmenu1").appendChild(navobj);
     }  
}); 
socket1.off(); 