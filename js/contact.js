function Valid(){var a=document.forms["mail"];
                 var ok=true;
	              
                 
                 var i=0;
                 do {if ((i<8||i>10) && a.elements[i].value=="") {ok=false;
                                                                  a.elements[i].focus();}
                     else{if (i==8 && a.elements[i].selectedIndex==0){ok=false;}
                          else {if (a.elements[9].checked==false && a.elements[10].checked==false) {ok=false;}}
                       }
                     i++;
                    }while (i<13&&ok);
                    if (ok) {a.elements[14].type="submit";
                             a.elements[14].value="Envoyer";
                             a.elements[14].style.backgroundColor="#00ff00";
                          }
                    else {a.elements[14].style.backgroundColor="#ff0000";}
                    
                 }
function init() {document.forms["mail"].elements[14].type="button";
                 document.forms["mail"].elements[14].value="Vérifier";
                 document.forms["mail"].elements[14].style.backgroundColor="#0000ff";
              }