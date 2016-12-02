document.addEventListener('DOMContentLoaded', function(){

var newNote = document.querySelector('#new');
var addNew = document.querySelector('.addNew');
var cancel = document.querySelector('#cancel');
var add = document.querySelector('#add');
var main = document.querySelector('#main');
var buttons = document.querySelector('#buttons');
var ok_btn = document.querySelector('.ok_btn');

newNote.addEventListener('click', function(){

          addNew.style.display = "flex";
          this.style.display = "none";
          buttons.style.display = "flex";



        });

cancel.addEventListener('click', function(){
          //newNote.style.display = "flex";
          addNew.style.display = "none";
          buttons.style.display = "none";

        });

add.addEventListener('click', function(){
         newNote.style.display = "flex";
         addNew.style.display = "none";
         buttons.style.display = "none";

         		var titleValue = document.querySelector(".title").value;
         		var textValue = document.querySelector(".text").value;

          		var div = document.createElement("DIV"); 
          		var h1 = document.createElement("H1"); 
          		var p = document.createElement("P");         
				var title = document.createTextNode(titleValue);  
				var text = document.createTextNode(textValue);
				var divButtons = document.createElement("DIV"); 

				var btnEdit = document.createElement("BUTTON");      
				var btnRemove = document.createElement("BUTTON");   
				var editText = document.createTextNode("Edytuj"); 
				var removeText = document.createTextNode("Usuń"); 

				main.appendChild(div);
				div.appendChild(h1);
				h1.appendChild(title);
				div.appendChild(p); 
				p.appendChild(text); 
				div.appendChild(divButtons); 

				divButtons.appendChild(btnEdit); 
				btnEdit.appendChild(editText);  
				divButtons.appendChild(btnRemove);  
				btnRemove.appendChild(removeText);   

				btnRemove.className = "btnRemove"; 
				btnEdit.className = "btnEdit"; 
				div.className = "div";
				divButtons.className = "buttons";



				var btnRemoveId = document.querySelector('.btnRemove');
				var btnEditId = document.querySelectorAll('.btnEdit');



				btnRemoveId.addEventListener('click', function(){

						div.removeChild(div.childNodes[0]); 

					});   

				for (var i = btnEditId.length - 1; i >= 0; i--) {
					btnEditId[i].addEventListener('click', function(){
						
						

						addNew.setAttribute('style', 'display:flex !important');
						ok_btn.setAttribute('style', 'display:flex !important');
						this.setAttribute('style', 'display:none !important');

						
						var thisBtn = this;
						console.log(btnEditId[i]);

						var OK = document.querySelectorAll('.ok_btn');

							for (var i = OK.length - 1; i >= 0; i--) {
								OK[i].addEventListener('click', function(){
								ok_btn.style.display = "none";
								addNew.setAttribute('style', 'display:none !important');
								btnEdit.setAttribute('style', 'display:flex !important');

								var titleValue2 = document.querySelector(".title").value;
         						var textValue2 = document.querySelector(".text").value;

         						var h1This = thisBtn.previousElementSibling.previousElementSibling;
         						var h1This2 = h1This.value;
         						var pThis = thisBtn.previousElementSibling;
         						var pThis2 = h1This.value;
         					


								h1This.innerHTML = titleValue2;
								pThis.innerHTML = textValue2;


								

							})
							};

							



				});                        
				
				};
				


        });


});