function DonnezDate() {var d=new Date;
	                    var semaine= d.getDay();
                       var date;
                       
                       switch(semaine) {case 1: date="lundi";break;
                                        case 2: date="mardi";break;
                                        case 3: date="mercredi";break;
                                        case 4: date="jeudi";break;
                                        case 5: date="vendredi";break;
                                        case 6: date="samedi";break;
                                        case 0: date="dimanche";break;
                                        }
                       date+=" "+d.getDate();
                       var mois=d.getMonth();
                       switch(mois) {case 0: date+=" janvier";break;
                                     case 1: date+=" février";break;
                                     case 2: date+=" mars";break;
                                     case 3: date+=" avril";break;
                                     case 4: date+=" mai";break;
                                     case 5: date+=" juin";break;
                                     case 6: date+=" juillet";break;
                                     case 7: date+=" août";break;
                                     case 8: date+=" septembre";break;
                                     case 9: date+=" octobre";break;
                                     case 10: date+=" novembre";break;
                                     case 11: date+=" décembre";break;
                                     }
                       date+=" "+d.getFullYear();
                       document.getElementById("p").innerHTML+="Nous sommes le "+date;
                    }
function aller(x) {switch(x) {case 0:window.location.href = "../index.html";break;
	                           case 1:window.location.href = "presentation.xhtml";break;
                              case 2:window.location.href = "volley.xhtml";break;
                              case 3:window.location.href = "article_musique.html";break;
                              case 4:window.location.href = "artiste.xhtml";break;
                              case 5:window.location.href = "article_couleur.html";break;
                              case 6:window.location.href = "livre.html";break;
                              case 7:window.location.href = "contact.html";break;
                           }
                    }