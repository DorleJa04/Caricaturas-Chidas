				var esposa=$("#select_esposa");
				var hijos=$("#hijos");
				var imagen=$("#imagen");

				esposa.change(()=>{
					let opcionHijo = "<option>Seleccione...</option>";

					if(esposa.val()=="1"){
						hijos.prop("disabled",false);
						opcionHijo += `
							<option value="1">kartman</option>
							<option value="2">kenny</option>
							<option value="3">Cheff</option>
							<option value="4">Butters</option>
							<option value="5">Kyle</option>
							<option value="6">Tweeak</option>
							`;
					}
					else if (esposa.val()=="2"){
						hijos.prop("disabled",false);
						opcionHijo += `
							<option value="7">Starfire</option>
							<option value="8">Chico Bestia</option>
							<option value="9">Raven</option>
							<option value="10">Robin</option>
							`;
					}
                    else{console.log(opcionHijo);}
					hijos.html(opcionHijo);
					console.log("opcionHijo");
					
					if (esposa.val()=="3"){
						hijos.prop("disabled",false);
						opcionHijo += `
						<option value="11">Bellota</option>
						<option value="12">Burbuja</option>
						<option value="13">Bombon</option>
						<option value="14">Mojojojo</option>
							`;
					}
                    else{console.log(opcionHijo);}
					hijos.html(opcionHijo);
					console.log("opcionHijo");
				 
					if (esposa.val()=="4"){
						hijos.prop("disabled",false);
						opcionHijo += `
						<option value="15">Mto.Rochi</option>
						<option value="16">Goku</option>
						<option value="17">Shen Long</option>
						<option value="18">Piccolo</option>
						<option value="19">Frezzer</option>
					
					
							`;
					}
                    else{console.log(opcionHijo);}
					hijos.html(opcionHijo);
					console.log("opcionHijo");

					if (esposa.val()=="5"){
						hijos.prop("disabled",false);
						opcionHijo += `
						<option value="20">Bob Esponja</option>
						<option value="21">Don Cangrejo</option>
						<option value="22">Patricio</option>
						<option value="23">Gary</option>
						<option value="24">Arenita</option>
						<option value="25">Calamardo</option>
							`;
					}

					if (esposa.val()=="6"){
						hijos.prop("disabled",false);
						opcionHijo += `
						<option value="26">Jake</option>
						<option value="27">Fin el humano</option>
						<option value="28">Dulce princesa</option>
						<option value="29">Bimo</option>
						<option value="30">Princesa grumosa</option>
						
							`;
					}



					
                    else{console.log(opcionHijo);}
					hijos.html(opcionHijo);
					console.log("opcionHijo");
					
				});
			
				hijos.change(() => {  
					switch (hijos.val()) {
					case "1":

					  document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/1.html"><img src="img/1.png" width="350px">';
					  break;

					  case "2":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/2.html"><img src="img/2.png" width="250px">';
						break;

						case "3":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/3.html"><img src="img/3.png" width="250px">';
							break;

						case "4":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/4.html"><img src="img/4.png" width="200px">';
							break;

						case "5":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/5.html"><img src="img/5.png" width="270px">';
							break;

					    case "6":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/6.html"><img src="img/6.png" width="300px">';
							break;

					    case "7":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/7.html"><img src="img/11.png" width="200px">';
							break;

						case "8":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/8.html"><img src="img/12.png" width="300px">';
							break;
						
						case "9":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/9.html"><img src="img/13.png" width="100px">';
							break;
						
						case "10":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/10.html"><img src="img/14.png" width="250px">';
								break;
						
						case "11":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/11.html"><img src="img/21.png" width="300px">';
								break;
						
						case "12":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/12.html"><img src="img/22.png" width="300px">';
								break;

						case "13":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/13.html"><img src="img/23.png" width="200px">';
								break;

						case "14":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/14.html"><img src="img/24.png" width="300px">';
								break;

						case "15":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/15.html"><img src="img/31.png" width="250px">';
								break;

						case "16":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/16.html"><img src="img/32.png" width="250px">';
								break;
					 
						
						case "17":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/17.html"><img src="img/33.png" width="350px">';
								break;
						
						case "18":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/18.html"><img src="img/34.png" width="300px">';
								break;

						case "19":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/19.html"><img src="img/35.png" width="300px">';
								break;

						case "20":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/20.html"><img src="img/41.png" width="250px">';
									break;
								
						case "21":

								document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/21.html"><img src="img/42.png" width="300px">';
											break;
						case "22":

					    document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/22.html"><img src="img/43.png" width="250px">';
					    break;

					   case "23":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/23.html"><img src="img/44.png" width="250px">';
						break;

						case "24":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/24.html"><img src="img/45.png" width="250px">';
							break;

						case "25":

						document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/25.html"><img src="img/46.png" width="200px">';
							break;

						case "26":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/26.html"><img src="img/61.png" width="200px">';
							break;

					    case "27":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/27.html"><img src="img/62.png" width="250px">';
							break;

					    case "28":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/28.html"><img src="img/63.png" width="250px">';
							break;

						case "29":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/29.html"><img src="img/64.png" width="200px">';
							break;
						
						case "30":

							document.getElementById("contenedor_imagenes").innerHTML='<a href="pages/30.html"><img src="img/65.png" width="250px">';
							break;
						
			
	
				  }

				});