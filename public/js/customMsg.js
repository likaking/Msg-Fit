var dis_year = new Date();
/*
var HTMLstring = '<div><p>Hello, world</p><p>Summernote can insert HTML string</p></div>'
function ccc(){
$('#myMessage').summernote('pasteHTML', HTMLstring);
}
ccc()
*/

var c_Year = dis_year.getFullYear();
document.getElementById("year").innerHTML = c_Year ;

 //Get the button
 var mybutton = document.getElementById("myBtn");
   
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 myMessage
 // insert a tag when the buttons are clicked

 let myName = document.getElementById("name");
 let myDate = document.getElementById("date");
 let myAddress = document.getElementById("address");
 let myNumber = document.getElementById("number");
 let myLocatiion = document.getElementById("location");
 let myCompany = document.getElementById("company");
 let myAccount = document.getElementById("account");
 let myPassword = document.getElementById("password");
 let myTime = document.getElementById("time");
 let myDepartment = document.getElementById("department");
 let myPhoneNumber = document.getElementById("phoneNumber");
 let myDob = document.getElementById("dob");
 let myEmail = document.getElementById("email");
 let mynxtOfKin = document.getElementById("nextOfkin");
 let myTribe = document.getElementById("tribe");
 let myskills = document.getElementById("skills");

 //Get the  quill editor

let allMessages = document.getElementById("quillEditor");
let urNumber = document.getElementById("genNum");
let alltextBox = document.getElementById("myMessage");

 myName.onclick = function insertName(){
let textName = '<name>';

 $('#myMessage').summernote('insertText', textName);
 }
 myDate.onclick = function insertDate(){
  let textDate = '<date>';
  $('#myMessage').summernote('insertText', textDate);
}
myNumber.onclick = function insertNumber(){
  let textNumber = '<number>';
  $('#myMessage').summernote('insertText', textNumber);
}
myAddress.onclick = function insertAddress(){
  let textAddress = '<address>';
  $('#myMessage').summernote('insertText', textAddress);
}

myLocatiion.onclick = function insertLocatiion(){
 let textLocatiion = '<location>';
  $('#myMessage').summernote('insertText', textLocatiion);
 
}
myCompany.onclick = function insertCompany(){
  let textCompany = '<company>';
  $('#myMessage').summernote('insertText', textCompany);
  
}
myAccount.onclick = function insertAccount(){
  let textAccount = '<account>';
  $('#myMessage').summernote('insertText', textAccount);
  
}
myPassword.onclick = function insertPassword(){
  let textPassword = '<password>';
  $('#myMessage').summernote('insertText', textPassword);  
}

myTime.onclick = function insertTime(){
  let textTime = '<time>';
  $('#myMessage').summernote('insertText', textTime);  
}

myDepartment.onclick = function insertDepartment(){
  let textDepartment = '<department>';
  $('#myMessage').summernote('insertText', textDepartment); 
}

myPhoneNumber.onclick = function insertphoneNumber(){
  let textphoneNumber = '<phone number>';
  $('#myMessage').summernote('insertText', textphoneNumber); 
   
}

myDob.onclick = function insertdOb(){
  let textdOb = '<date of birth>';
  $('#myMessage').summernote('insertText', textdOb);
   
}

myEmail.onclick = function insertemail(){
  let textEmail = '<Email>';
  $('#myMessage').summernote('insertText', textEmail);
}

mynxtOfKin.onclick = function insertnextOfkin(){
  let textnextOfkin = '<next of kin>';
  $('#myMessage').summernote('insertText', textnextOfkin);
}

myTribe.onclick = function inserttribe(){
  let textTribe = '<tribe>';
  $('#myMessage').summernote('insertText', textTribe);
   
}

myskills.onclick = function insertskills(){
  let textSkills = '<skills>';
  $('#myMessage').summernote('insertText', textSkills);
   
}




let theNumber;
let uniqueNumber = 0000;


//Generate unique numbers
function inc(){
  uniqueNumber++;
  console.log( urNumber.value + '' + uniqueNumber.toString().padStart(5, '0'));
}

//Generate the dates

let noOfpeopleDate = document.getElementById("sheduleDates");
let allDate = document.getElementById("addDates");
let yourDate ;
let dateArray = [];
let keepDates = []
let allDdates = " ";
let fixdates = 10;
let createDts = " ";

function processDate(){
  
  dateArray.push(allDate.value);
  
  let splitAllDate  = dateArray.toString().split(",");
  let dlength = [...splitAllDate]

 for (let d = 0; d < splitAllDate.length; d++){
 allDdates = dlength.shift()
 
 for(let t = 0; t <noOfpeopleDate.value; t++){
  createDts = allDdates;
  keepDates.push(createDts);
  
 }
 }

 }
 




let locationBox = document.getElementById("addLocation");


let dataArray = [];
let dataShemaArray = [];
let urData = document.getElementById("dataDetails");
let dataSHtags = document.getElementById("dataSchBox");
let countMsg = 0;
let pageNo = 0;

//Make sure the data schema tags are equals to the data per row
let splitSchemax;
let splitDaData;
let checkData;
let splitAllDataz;
let myDataArray = [];
let splitData;

function checkSchemaTag(){
  splitSchemax = dataSHtags.value.trim().toString().split(",");
  splitDaData = urData.value.trim().toString().split("\n");
  myDataArray.push(...splitDaData);

  checkData = myDataArray.shift();
  splitAllDataz = checkData.split(";")
  if(splitSchemax.length != splitAllDataz.length){
    document.getElementById("errorMsg").innerHTML = "Error: The number of schema tags did not rhyme with the number of data on every row"
    return false;
  }
}



//Variables for allocating time
let beginAt = document.getElementById("sheduleTimeStart");
let endingTimeAt = document.getElementById("sheduleTimeEnd");
let timeAlloc = document.getElementById("timePerPerson");
let perSession = document.getElementById("perSesion");
let giveThemTime = " "
let genAllTimes = [];

function generateAllTime(){
  //For generating time
  let addTime = Number(timeAlloc.value);
  let startingTime = Number(beginAt.value - 1);
  let startingTimeCont = Number(beginAt.value);
  let endingTime = Number(endingTimeAt.value);
  let setDtime = 60 - addTime;
  let sec = setDtime;
  let updateSec = setDtime;
  let pplPerSes = Number(perSession.value)

    let dataArrLength = urData.value.trim().toString().split("\n");
    let lengtharray = [];
    lengtharray.push(...dataArrLength)
  //Know how many time the loop shpuld run
  let loopRunTime = Math.round(lengtharray.length/pplPerSes) + 1;

 for (let s = 0; s < loopRunTime; s++){ 
   //Generate time
sec += addTime;
updateSec += addTime;

if(sec > 59){
sec = updateSec - 60 ; 
updateSec = sec;
startingTime += 1;
}

if(startingTime === 13){
startingTime = 1;
}

if(startingTime === endingTime){
startingTime = startingTimeCont;
sec = 00;
}
let timeEndsIn = startingTime;
let timeEndsSec = Number(sec + addTime);
if(timeEndsSec > 59){
timeEndsSec = timeEndsSec - 60 ; 
//updateSec = sec;
 timeEndsIn += 1;
}
if(timeEndsIn === 13){
timeEndsIn = 1 ;
}
//console.log(timeEndsIn + ":" + timeEndsSec.toString().padStart(2, '0'))
let fixTime;
let yourTimeEnds;
if(startingTime >= 7 && startingTime !== 12 ){
fixTime = startingTime + ":"  + sec.toString().padStart(2, '0') + " AM";
}
else{
fixTime  = startingTime  + ":"  + sec.toString().padStart(2, '0') + " PM";
}
if(timeEndsIn >= 7 && timeEndsIn !== 12 ){
yourTimeEnds = timeEndsIn + ":" + timeEndsSec.toString().padStart(2, '0') + " AM";
}
else{
yourTimeEnds = timeEndsIn + ":" + timeEndsSec.toString().padStart(2, '0') + " PM";
}
let allocateTime = fixTime + " to " + yourTimeEnds;

for(let p = 0; p < pplPerSes; p++ ){

  giveThemTime = allocateTime;
  genAllTimes.push(giveThemTime)
  
}

 }

}

//Get the tittle
let myMsgTittle = document.getElementById("MessageHeader");
let msgAREA = document.getElementById("msgArea");
let dataField = document.getElementById("dataDetails");
let dataSchemaField = document.getElementById("dataSchBox");

function processData(){
  checkSchemaTag()
  document.getElementById("appendMsg").innerHTML = "";
  
  //Check if the length of the data schema tag is equall to the lenght of the data per role
  //Find the length of the data schema tag

  if(splitSchemax.length === splitAllDataz.length && myMsgTittle.value != "" && $('#myMessage').summernote('isEmpty') === false && dataField.value != "" && dataField.value.match(";") && dataSchemaField.value != ""){
    processDate()
    generateAllTime()

  //Split location text box, then append them to an array
  allLocations = locationBox.value.toString().split(",");

//Push the data and message into their respective arrays
splitData = urData.value.trim().split("\n");
dataArray.push(...splitData);
//End of data pushing data into data array

//The text editor
let msgHTML = $('#myMessage').summernote('code');

/// Convert < & > in the schema tags to HTML tags
const tag2HTML = {
  "<": "&lt;",
  ">": "&gt;",
};
// Push the data schema into the dataShemaArray
let splitDataSHtags = dataSHtags.value.trim().replace(/<|>/g,(match) => tag2HTML[match]).split(",");
dataShemaArray.push(...splitDataSHtags);

//Clone the data array
let dataCloned = [...dataArray];
let schemaTagCloned =  [...dataShemaArray]
let splitDisData;
let cutData;

//Find the index of Name, email, phone number in the shema tag array
let getNameIndex = dataShemaArray.indexOf("&lt;name&gt;");
let getEmailIndex = dataShemaArray.indexOf("&lt;email&gt;");
let getPnoIndex = dataShemaArray.indexOf("&lt;phone number&gt;");
let myNameIs;
let myEmailIs;
let myPhonerIs;

//End of Find the index of Name, email, phone number in the shema tag array

//Define some message replace variables
let msg1;let msg2;let msg3;let msg4;let msg5;let msg6;let msg7;let msg8;let msg9;let msg10;let msg11;let msg12;let msg13;let msg14;
let msg15;let msg16;let msg17;let msg18;let msg19;let msg20;

let giveNumber;
let giveDate;
let giveTime;
let giveLocation;
let getUrNum;
let cutDLocation;

  for(let i = 0; i < dataCloned.length; i++){
    //Cut out time
   let giveMeTime = genAllTimes.shift()
  //Alocate unique number
  uniqueNumber++;
  pageNo++;
  getUrNum = urNumber.value + '' + uniqueNumber.toString().padStart(5, '0');
  //Allocate date
  let urDate = keepDates.shift();

  //Allocate Location
  cutDLocation = allLocations.shift()
  allLocations.push(cutDLocation)

  cutData = dataArray.shift();
  splitDisData = cutData.toString().split(";");
  //Find the location of name,email and phone number in the splitDisData array
  myNameIs = splitDisData[getNameIndex];
  myEmailIs = splitDisData[getEmailIndex];
  myPhoneNoIs = splitDisData[getPnoIndex];
 
  let divHdr = document.createElement("div");
  let tittleHdr = document.createElement("div");
  let divbody = document.createElement("div");
  let allMsgs = document.createElement("div");
  let msgNo = document.createElement("div");
  divHdr.classList.add("finalMsgHeader");
  tittleHdr.classList.add("finalMsgHeader1");
  divbody.classList.add("finalMessageStyle");
  allMsgs.classList.add("allMsgs");
  msgNo.classList.add("msgNo");
  let to = document.createTextNode("To " + myNameIs + " | " +   myEmailIs);
  let msgNum = document.createTextNode(pageNo);
  let fixTittle = myMsgTittle.value.replace(/<name-T>/gi,myNameIs);
  let tittleFixed = document.createTextNode(fixTittle);
   giveNumber = msgHTML.replace(/&lt;number&gt;/gi,getUrNum);
   giveDate =   giveNumber.replace(/&lt;date&gt;/gi,urDate);
   giveLocation = giveDate.replace(/&lt;location&gt;/gi,cutDLocation);
   giveTime =  giveLocation.replace(/&lt;time&gt;/gi,giveMeTime);

   //Replace all tags
   if(dataShemaArray.length > 0){
    msg1 = giveTime.replace(new RegExp(dataShemaArray[0], 'gi'),splitDisData[0]) ;
    divbody.innerHTML = msg1 ;
    }
    if(dataShemaArray.length > 1){
      msg2 =  msg1.replace(new RegExp(dataShemaArray[1], 'gi'),splitDisData[1]) ;
      divbody.innerHTML = msg2 ;
    }
    if(dataShemaArray.length > 2){
      msg3 =  msg2.replace(new RegExp(dataShemaArray[2], 'gi'),splitDisData[2]) ;
      divbody.innerHTML = msg3 ;
    }
    if(dataShemaArray.length > 3){
      msg4 =  msg3.replace(new RegExp(dataShemaArray[3], 'gi'),splitDisData[3]) ;
      divbody.innerHTML = msg4;
    }
    if(dataShemaArray.length > 4){
      msg5 =  msg4.replace(new RegExp(dataShemaArray[4], 'gi'),splitDisData[4]) ;
      divbody.innerHTML = msg5;
    }
    if(dataShemaArray.length > 5){
      msg6 =  msg5.replace(new RegExp(dataShemaArray[5], 'gi'),splitDisData[5]) ;
      divbody.innerHTML = msg6;
    }
    if(dataShemaArray.length > 6){
      msg7 =  msg6.replace(new RegExp(dataShemaArray[6], 'gi'),splitDisData[6]) ;
      divbody.innerHTML = msg7;
    }
    if(dataShemaArray.length > 7){
      msg8 =  msg7.replace(new RegExp(dataShemaArray[7], 'gi'),splitDisData[7]) ;
      divbody.innerHTML = msg8;
    }
    if(dataShemaArray.length > 8){
      msg9 =  msg8.replace(new RegExp(dataShemaArray[8], 'gi'),splitDisData[8]) ;
      divbody.innerHTML = msg9;
    }
    if(dataShemaArray.length > 9){
      msg10 =  msg9.replace(new RegExp(dataShemaArray[9], 'gi'),splitDisData[9]) ;
      divbody.innerHTML = msg10;
    }
    if(dataShemaArray.length > 10){
      msg11 =  msg10.replace(new RegExp(dataShemaArray[10], 'gi'),splitDisData[10]) ;
      divbody.innerHTML = msg11;
    }
    if(dataShemaArray.length > 11){
      msg12 =  msg11.replace(new RegExp(dataShemaArray[11], 'gi'),splitDisData[11]) ;
      divbody.innerHTML = msg12;
    }
    if(dataShemaArray.length > 12){
      msg13 =  msg12.replace(new RegExp(dataShemaArray[12], 'gi'),splitDisData[12]) ;
      divbody.innerHTML = msg13;
    }
    if(dataShemaArray.length > 13){
      msg14 =  msg13.replace(new RegExp(dataShemaArray[13], 'gi'),splitDisData[13]) ;
      divbody.innerHTML = msg14;
    }
    if(dataShemaArray.length >14){
      msg15 =  msg14.replace(new RegExp(dataShemaArray[14], 'gi'),splitDisData[14]) ;
      divbody.innerHTML = msg15;
    }
    if(dataShemaArray.length >15){
      msg16 =  msg15.replace(new RegExp(dataShemaArray[15], 'gi'),splitDisData[15]) ;
      divbody.innerHTML = msg16;
    }
    if(dataShemaArray.length >16){
      msg17 =  msg16.replace(new RegExp(dataShemaArray[16], 'gi'),splitDisData[16]) ;
      divbody.innerHTML = msg17;
    }
    if(dataShemaArray.length >17){
      msg18 =  msg17.replace(new RegExp(dataShemaArray[17], 'gi'),splitDisData[17]) ;
      divbody.innerHTML = msg18;
    }
    if(dataShemaArray.length >18){
      msg19 =  msg18.replace(new RegExp(dataShemaArray[18], 'gi'),splitDisData[18]) ;
      divbody.innerHTML = msg19;
    }
    if(dataShemaArray.length >19){
      msg20 =  msg19.replace(new RegExp(dataShemaArray[19], 'gi'),splitDisData[19]) ;
      divbody.innerHTML = msg20;
    }
  tittleHdr.appendChild(tittleFixed);
  divHdr.appendChild(to);
  msgNo.appendChild(msgNum);
  tittleHdr.appendChild(msgNo);
  allMsgs.appendChild(tittleHdr);
  allMsgs.appendChild(divHdr);
  allMsgs.appendChild(divbody);
  document.getElementById("appendMsg").appendChild(allMsgs)
  countMsg++;

}
document.getElementById("created").innerHTML = "A total of " + countMsg + " preview messages were created"

  }
  
  else{
    alert("Please enter the relevant data into the data fields")
  }

countMsg = 0;
pageNo = 0;
uniqueNumber = 0
keepDates.length = 0;
dateArray.length = 0;
allLocations.length = 0;
splitSchemax.length = 0;
splitDaData.length = 0;
dataArray.length = 0;
myDataArray.length = 0;
checkData.length = 0;
splitAllDataz.length = 0;
splitData.length = 0;
splitDataSHtags.length = 0;
dataShemaArray.length = 0;
fixTime = " ";
yourTimeEnds = " ";


}
// insert tags into the schema box
let dBSchemaBox = document.getElementById("dataSchBox");
let dBmyName = document.getElementById("dBname");
let dBmyDate = document.getElementById("dBdate");
let dBmyAddress = document.getElementById("dBaddress");
let dBmyNumber = document.getElementById("dBnumber");
let dBmyLocatiion = document.getElementById("dBlocation");
let dBmyCompany = document.getElementById("dBcompany");
let dBmyAccount = document.getElementById("dBaccount");
let dBmyPassword = document.getElementById("dBpassword");
let dBmyTime = document.getElementById("dBtime");
let dBmyDepartment = document.getElementById("dBdepartment");
let dBmyPhoneNumber = document.getElementById("dBphoneNumber");
let dBmyDob = document.getElementById("dBdob");
let dBmyEmail = document.getElementById("dBemail");
let dBmynxtOfKin = document.getElementById("dBnextOfkin");
let dBmyTribe = document.getElementById("dBtribe");
let dBmyskills = document.getElementById("dBskills");


dBmyName.onclick = function insertNameTag(){
  dBSchemaBox.value += ",<name>";  
  removeComma()  
}

dBmyDate.onclick = function insertDateTag(){
 dBSchemaBox.value += ",<date>";  
 removeComma()
}
dBmyNumber.onclick = function insertNumberTag(){
 dBSchemaBox.value += ",<number>"; 
 removeComma()
}
dBmyAddress.onclick = function insertAddressTag(){
  dBSchemaBox.value += ",<address>"; 
  removeComma()
}

dBmyLocatiion.onclick = function insertLocatiionTag(){
  dBSchemaBox.value += ",<location>"; 
  removeComma()
}
dBmyCompany.onclick = function insertCompanyTag(){
  dBSchemaBox.value += ",<company>"; 
  removeComma()
}
dBmyAccount.onclick = function insertAccountTag(){
  dBSchemaBox.value += ",<account>"; 
  removeComma()
}
dBmyPassword.onclick = function insertpasswordTag(){
  dBSchemaBox.value += ",<password>"; 
  removeComma()  
}

dBmyTime.onclick = function inserttimeTag(){
  dBSchemaBox.value += ",<time>";  
  removeComma()
}

dBmyDepartment.onclick = function insertdepartmentTag(){
  dBSchemaBox.value += ",<department>";  
  removeComma() 
}

dBmyPhoneNumber.onclick = function insertphoneNumberTag(){
  dBSchemaBox.value += ",<phone number>"; 
  removeComma()   
}

dBmyDob.onclick = function insertdobTag(){
  dBSchemaBox.value += ",<date of birth>"; 
  removeComma()    
}

dBmyEmail.onclick = function insertemailTag(){
  dBSchemaBox.value += ",<email>";    
  removeComma()
}

dBmynxtOfKin.onclick = function insertnextOfkinTag(){
  dBSchemaBox.value += ",<next of kin>";  
  removeComma()
}

dBmyTribe.onclick = function inserttribeTag(){
  dBSchemaBox.value += ",<tribe>";
  removeComma()
  removeComma()  
}

dBmyskills.onclick = function insertskillsTag(){
  dBSchemaBox.value += ",<skills>";  
  removeComma()
 
}


let firstComma;
//This function will remove the last comma from every data schema

function removeComma(){
  firstComma = dBSchemaBox.value.toString().replace(/^(,)/,"");
  dBSchemaBox.value = firstComma; 
}

//Add name to the tittle
let addNeme2tittle = document.getElementById("addName");
addNeme2tittle.onclick = function insertemailTag(){
  myMsgTittle.value += "<name-T>";    
}

//Stop the browser
function stopNav(){
setTimeout(() => {
window.stop()
},10000)
}
//Validation
let myHostComp = document.getElementById("whoHost")

/*
//Abort the sending process
$('#abort').click(function(){
  $.post('/abort-process');
});
*/


document.getElementById("processMsgs").addEventListener("click", stopNav);
