//Ausgabe der Uhrzeit:
function uhrzeit() {
    var jetzt = new Date(),
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();
    m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    document.getElementById('uhr').innerHTML = h + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
  }
  
  function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? '0' : '' )+ zahl;  
    return zahl;
  }



function myFunction() {
    document.getElementById("id-einkommen2").style.display="unset"
 }
 function myFunction2() {
    document.getElementById("id-einkommen2").style.display="none"
 }

function Berechnen() {

    var jahr = document.getElementById("liste").value;
    jahr = Number(jahr);
    var einkommen1 = document.getElementById("einkommen1").value;
    einkommen1 = Number(einkommen1);
    var einkommen2 = document.getElementById("einkommen2").value;
    einkommen2 = Number(einkommen2);
    var EinPerson = document.getElementById("einperson");
    var Zweiperson = document.getElementById("zweiperson");
    var result = document.getElementById("result");
    var tax;

    if(EinPerson.checked) {
        var zvE = einkommen1;     
    }else {
        var zvE = (einkommen1 + einkommen2)/2;  
    }

    
//JAHR 2020

    if(jahr === 2020) {
           if(zvE <= 9408) {
               Est = 0;
               result.innerHTML = Est + ' Euro';

           } else if(zvE >= 9409 && zvE<= 14532) {
               y = ( zvE - 9408 ) / 10000;
               Est = ( 972.87 * y + 1400 ) * y;
               Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           } else if(zvE>= 14533 && zvE<= 57051) {
               z =( zvE - 14532 ) / 10000 ;
               Est = ( 212.02 * z  + 2397 ) * z + 972.79;
               Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           } else if( zvE >= 57052 && zvE<= 270500 ) {
            Est = 0.42 * zvE - 8963.74;
            Est = tax.toFixed(2);
                result.innerHTML = Est + ' Euro';
           } else if(270501 <= zvE ){
            Est = 0.45 * zvE - 17078.74;
            Est = Est.toFixed(2);
               result.innerHTML = Est + ' Euro';
           }  
   } 


   // JAHR 2019
   
   else if(jahr === 2019) {
    console.log("we are in 2019");

        if(zvE <= 9168) {
            Est = 0;
            result.innerHTML = Est + ' Euro';

        } else if ( zvE >= 9169 && zvE <= 14254 ) {
            y = (zvE - 9168)/10000;
            Est = ( 980.14 * y + 1400 ) * y;
            Est = Est.toFixed(2);
            result.innerHTML = Est + ' Euro';
        } else if( zvE >= 14255 && zvE <= 55960) {
            tax =( zvE - 14532 ) / 10000;
            tax = ( 212.02 * tax  + 2397 ) * tax + 972.79;
            tax = tax.toFixed(2);
            result.innerHTML = tax + ' Euro';
        } else if( zvE >= 57052 && zvE <= 270500 ) {
             tax = 0.42 * zvE - 8963.74;
             tax = tax.toFixed(2);
             result.innerHTML = tax + ' Euro';
        } else if(265.327<= zvE ) {
            tax = 0.45 * zvE - 17078.74;
            tax = tax.toFixed(2);
            result.innerHTML = tax + ' Euro';
        }  
   }
   

   // JAHR 2018
   else {
    if(zvE <= 9000) {
        tax =0;
        result.innerHTML = tax + ' Euro';

    } else if( zvE >= 9001 && zvE <= 13996) {
        tax = (zvE - 9000)/10000;
        tax = (997.80*tax +1400)* tax;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    } else if(zvE>= 13997 && zvE<= 54949) {
        tax =(zvE - 13996)/10000;
        tax = (220.13 *tax  + 2397) * tax + 948.49;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    } else if(zvE>= 54950 && zvE<= 260532 ) {
         tax = 0.42 * zvE - 8621.75;
         tax = tax.toFixed(2);
         result.innerHTML = tax + ' Euro';
    } else if(260.533<= zvE ) {
        tax = 0.45 * zvE - 16437.70;
        tax = tax.toFixed(2);
        result.innerHTML = tax + ' Euro';
    }
       
   }
    
}



    
    
 
