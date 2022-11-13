

function cacher() {if (document.forms["frm1"].visible.checked==true){
                                                       	             document.forms["frm1"].nom.type="password";
                                                       	            }
                    else {document.forms["frm1"].nom.type="text";}
                 }
function jour() {var date=new Date
                 var txt="";
                 txt+=date.getFullYear()+"-"
                 if (date.getMonth()<10) {txt+="0"+(date.getMonth()+1);
                                         }
                 else {txt+=date.getMonth();
                      }
                 if (date.getDate()<10) {txt+="-0"+date.getDate();
                                        }
                 else {txt+="-"+date.getDate();
                      }
                 if (date.getHours()<10) {txt+="T0"+(date.getHours());
                                         }
                 else {txt+="T"+date.getHours();
                      }
                 if (date.getMinutes()<10) {txt+=":0"+(date.getMinutes());
                                           }
                 else {txt+=":"+date.getMinutes();    
                      }
                 document.forms["frm1"].heure.value=txt;}
function envoyer() {if ((document.forms["frm1"].nom.value!="")&&(document.forms["frm1"].heure.value!="")&&(document.forms["frm1"].messag.value!="")) 
                               { document.getElementById("commentaires").style.display="block";
                                 var dat=document.forms["frm1"].heure.value;
                               	var tdat=dat.split('-');
                               	var b=tdat[2]
                               	tdat[2]=b.substring(0,2);
                               	tdat[3]=dat.substring(dat.indexOf('T')+1,dat.indexOf(':'));
                               	tdat[4]=dat.substring(dat.indexOf(':')+1);
                               	txt="<div>";
                                 txt+='<span class="pseudo" >'+document.forms["frm1"].nom.value+"</span></br>";
                                 txt+='<span class="moment">à '+tdat[3]+"h"+tdat[4]+", le "+tdat[2]+"/"+tdat[1]+"/"+tdat[0]+"</span><br/><br/>";
                                 txt+='<div class="txt">'+document.forms["frm1"].messag.value+"</div></div><br/>";
                                 document.getElementById("commentaires").innerHTML+=txt;
                                 var tab=document.getElementsByClassName("pseudo");      
                                 var r=tab.length-1;
                                 tab[r].style.color=document.forms["frm1"].color.value;
                                 var tab=document.getElementsByClassName("txt");      
                                 var r=tab.length-1;
                                 tab[r].style.color=document.forms["frm1"].color.value;                                                                                                              
                               }
                   }
function affiche() {document.getElementById("aide2").style.display="block";}
function disparait() {document.getElementById("aide2").style.display="none";}
                                                  