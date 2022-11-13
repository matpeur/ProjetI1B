
var a;
function change_coul(){
                       var coul=getComputedStyle(titre).color;
                       if(coul=="rgb(0, 0, 255)"){
                                                 document.getElementById('body').style.backgroundColor="#d861a6";
                                                 document.getElementById('titre').style.color="#ff0000";
                                                 a=0;}           
                       else if(coul=="rgb(255, 0, 0)"){document.getElementById('body').style.backgroundColor="#19e5fa";
                                                       document.getElementById('titre').style.color="#00ff00";
                                                       a=1;
                                                       }                            
                       else{a=2; 
                            document.getElementById('body').style.backgroundColor="#ffcc99";
                            document.getElementById('titre').style.color="#0000ff";
                            }
                       change_text(a);
                       }
function change_text(x){var mes;
                            var aide;
                            switch(x){
                              case 0 : mes='<img src="../image/chienamusant.jpg" alt="chien amusant" class="media1"><div id="para">';
                                       mes+="Voici l'une de ces magnifiques têtes. Elle est aussi très joueuse. Voilà une vidéo d'elle jouant avec un ballon.</div>";
                                       mes+='<video src="../video/chienjoue.mp4" controls class="media1" preload="auto"></video>';
                                      aide="Voici la deuxième page";
                                      break;
                              case 1 : mes='<video src="../video/chiencalme.mp4" controls class="media1" preload="auto"></video><div id="para">';
                                       mes+="Enfin elle n'est pas toujours aussi excitée, elle peut être calme parfois. Je suis content de vous avoir présenté mon chien, bien que cela fut court.</div>";
                                      aide="Voici la troisième page";
                                      break;
                              case 2 : mes='<img src="../image/chienfiere.jpg" alt="chien fière" class="media1"><div id="para">'+"J'ai décider de vous présenter mon animal de compagnie. Il s'agit d'un labrador femelle agée de 3ans. Elle s'appelle Lixy.Lixy est une chienne très sociable qui ne manque pas de nous faire rire avec des têtes parfois inattendus, vous en verrez d'ailleurs une dans les parties qui suivent.</div>";
                                       aide="Vous voila revenu à la première partie, ne vous inquiétez pas vous pouvez toujours continuer votre chemin en appuyant sur avancer";
                                       break;
	                                  }
	                          document.getElementById('paragraphe').innerHTML=mes;
	                          document.getElementById('aide').innerHTML=aide;
	                          }     






