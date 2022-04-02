//Create a new tag when ever the create a custom tag button is pressed
let createTagBtn = document.getElementById("createCTags");
let createTagTxt = document.getElementById("customTagBx");

function createTag(){
if(customTagBx.value.length > 0 && customTagBx.value != " " ){
  let createtagText1 = document.createTextNode(createTagTxt.value);
  let createtagText2 = document.createTextNode(createTagTxt.value);
  let createTagBtn1 = document.createElement("button");
  let createTagBtn2 = document.createElement("button");
  createTagBtn1.classList.add("tags");
  createTagBtn2.classList.add("datatags");
  createTagBtn1.type="button";
  createTagBtn2.type="button";
  createTagBtn1.appendChild(createtagText1);
  createTagBtn2.appendChild(createtagText2);
  document.getElementById("links").appendChild(createTagBtn1);
  document.getElementById("datalinks").appendChild(createTagBtn2);
  customTagBx.value = " ";

  createTagBtn1.onclick = function addTagMe(){
  let theTag1 = "<"+this.innerHTML+">";
  $('#myMessage').summernote('insertText', theTag1 );  
  }

  createTagBtn2.onclick = function schemaTagMe(){
    dBSchemaBox.value += "," + "<" + this.innerHTML + ">";
    removeComma();  
  }
}

else{
    alert("Please type a tag in the text box")
}
}