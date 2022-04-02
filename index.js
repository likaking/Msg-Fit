const express = require("express");
var favicon = require('serve-favicon');
const multer = require("multer")
const fs = require('fs');
const app = express();
const PORT = 3030;
const dotenv = require("dotenv");
var path = require('path');
var nodemailer = require('nodemailer');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
var process = require('process');
const router = express.Router();
const ejs = require('ejs');
const cors = require('cors');
const { EventEmitter } = require("events");

const firstEmitter = new EventEmitter();

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

app.use(favicon(path.join(__dirname, './public', '/images/msgFavicon.png')))
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({limit: '50mb',extended: true, parameterLimit:50000}));
app.use(express.json({limit: "50mb"}));

app.use(cookieParser('NotSoSecret'));
app.use(session({
  secret : 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


app.use("/", router);
app.use(cors())

// Variables for generating dates
    let noOfpeopleDate;
    let allDate ;
    let yourDate ;
    let dateArray = [];
    let keepDates = []
    let allDdates = " ";
    let fixdates = 10;
    let createDts = " ";

    //Generate dates
function processDate(){
    dateArray.push(allDate);
    let splitAllDate  = dateArray.toString().replace(/(,(?!\w+))/g, " ").split(",");
    let dlength = [...splitAllDate]
    let d;
   for (d = 0; d < splitAllDate.length; d++){
   allDdates = dlength.shift()
   for(let t = 0; t <noOfpeopleDate; t++){
    createDts = allDdates;
    keepDates.push(createDts)
   }
   }

   }

   //Check schema tags and data
    let splitSchemax;
let splitDaData;
let checkData;
let splitAllDataz;
let myDataArray = [];
let splitData;


//End of checking data and schema tags.
let dataArray = [];
let dataShemaArray = [];
let urData ;
let dataSHtags ;
let countMsg = 0;
let pageNo = 0;
let uniqueNumber = 0000;
let templateNum = 0;
let finalMessage = " "
let splitDataSHtags;  
let numberOfMailsSent = 0;
let lastEmail;
let logArray = [];
let loginfo;



app.post("/start-processing", async(req,res) => {
 

  splitSchemax = req.body.dataSchema.trim().toString().split(",");
  splitDaData = req.body.addData.trim().toString().split("\n");
  myDataArray.push(...splitDaData);
  checkData = myDataArray.shift();
  splitAllDataz = checkData.split(";")

  let getLastArray = [...splitDaData];
  lastEmail = getLastArray.pop().toString().split(";")




if(splitSchemax.length === splitAllDataz.length && splitSchemax.length >! 20 && splitSchemax.length > 0 && splitAllDataz.length > 0){
  templateNum++
    // Get title
    let msgTitle = req.body.title
    let myHost = req.body.host
    let Emailservice = req.body.emailHost.toLowerCase();
    let hostPort = req.body.port;
    let emailAD = req.body.username;
    let password = req.body.password;
    noOfpeopleDate = Number(req.body.numOfPplDay);
    allDate = req.body.addManyDates.trim();
    processDate()
    
    var transporter = nodemailer.createTransport({
      host : myHost,
      service: Emailservice,
      pool: true,
      port: hostPort,
      secure: true,
      ignoreTLS: true,
     // rateLimit: true, 
     // maxConnections: 1, 
     // maxMessages: 3, 
      auth: {
        user: emailAD,
        pass: password
      }
      
    });

    //Get the alphabet part of the unique number

    let alphabetUnikNum = req.body.unikAlphabet;


    // For time
    let beginAt = Number(req.body.startingTime);
    let endingTimeAt = Number(req.body.endingTime);
    let timeAlloc = Number(req.body.timeAllocated);
    let perSes = Number(req.body.perSession);
    let giveThemTime = " "
    let genAllTimes = [];

    //For locations
    let locationBox = req.body.diffLocations;

 

     
  //For generating time

let startingTime = beginAt - 1;
let endingTime = endingTimeAt;
let addTime = timeAlloc;
let startingTimeCont = beginAt;
let setDtime = 60 - addTime;
let sec = setDtime;
let updateSec = setDtime;

  //Know how many time the loop shpuld run

  let loopRunTime = Math.round(splitDaData.length / perSes ) + 1;
  
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

 timeEndsIn += 1;
}
if(timeEndsIn === 13){
timeEndsIn = 1;
}

let fixTime;
let yourTimeEnds;
if(startingTime >= 7 && startingTime !== 12 ){
fixTime = startingTime + ":"  + sec.toString().padStart(2, '0') + " AM";
}
else{
fixTime  = startingTime  + ":"  + sec.toString().padStart(2, '0') + " PM";
}
if(timeEndsIn >= 7 && timeEndsIn !== 12  ){
yourTimeEnds = timeEndsIn + ":" + timeEndsSec.toString().padStart(2, '0') + " AM";
}
else{
yourTimeEnds = timeEndsIn + ":" + timeEndsSec.toString().padStart(2, '0') + " PM";
}
let allocateTime = fixTime + " to " + yourTimeEnds;
for(let p = 0; p < perSes; p++ ){
  giveThemTime = allocateTime;
  genAllTimes.push(giveThemTime)
}
  }

  //Split location text box, then append them to an array
  allLocations = locationBox.toString().trim().replace(/(,(?!\w+))/g, " ").split(",");

 //Get the message from the Msg editor
let msgHTML = req.body.msgArea;

let fileName = msgTitle.trim().split(" ").join("-")+".html";

//Push the data and message into their respective arrays
splitData = req.body.addData.trim().split("\n");
dataArray.push(...splitData);
//End of data pushing data into data array

/// Convert < & > in the schema tags to HTML tags
const tag2HTML = {
    "<": "&lt;",
    ">": "&gt;",
  };
// Push the data schema into the dataShemaArray
splitDataSHtags = req.body.dataSchema.trim().replace(/<|>/g,(match) => tag2HTML[match]).split(",");
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

let findLastEmail = lastEmail[getEmailIndex];



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

let testCase = 0
 //Process all information; build and send mails 

for(let i = 0; i < dataCloned.length; i++){
  uniqueNumber++;
  numberOfMailsSent++
  pageNo++;
  getUrNum = alphabetUnikNum + '' + uniqueNumber.toString().padStart(5, '0');
  
  //Allocate date
  let urDate = keepDates.shift();
  //Allocate Location
  cutDLocation = allLocations.shift()
  allLocations.push(cutDLocation)
  let thisIsYourTime = genAllTimes.shift()

 cutData = dataArray.shift();
 splitDisData = cutData.toString().split(";");
 //Find the location of name,email and phone number in the splitDisData array
 myNameIs = splitDisData[getNameIndex];
 myEmailIs = splitDisData[getEmailIndex];
 myPhoneNoIs = splitDisData[getPnoIndex];
 let fixTittle = msgTitle.replace(/<name-T>/,myNameIs)
   giveNumber = msgHTML.replace(/&lt;number&gt;/gi,getUrNum);
   giveDate =   giveNumber.replace(/&lt;date&gt;/gi,urDate);
   giveLocation = giveDate.replace(/&lt;location&gt;/gi,cutDLocation);
   giveTime =  giveLocation.replace(/&lt;time&gt;/gi,thisIsYourTime);

   if(dataShemaArray.length > 0){
    msg1 = giveTime.replace(new RegExp(dataShemaArray[0], 'gi'),splitDisData[0]) ;
    finalMessage = msg1 ;
    }
    if(dataShemaArray.length > 1){
      msg2 =  msg1.replace(new RegExp(dataShemaArray[1], 'gi'),splitDisData[1]) ;
      finalMessage = msg2 ;
    }
    if(dataShemaArray.length > 2){
      msg3 =  msg2.replace(new RegExp(dataShemaArray[2], 'gi'),splitDisData[2]) ;
      finalMessage = msg3 ;
    }
    if(dataShemaArray.length > 3){
      msg4 =  msg3.replace(new RegExp(dataShemaArray[3], 'gi'),splitDisData[3]) ;
      finalMessage = msg4;
    }
    if(dataShemaArray.length > 4){
      msg5 =  msg4.replace(new RegExp(dataShemaArray[4], 'gi'),splitDisData[4]) ;
      finalMessage = msg5;
    }
    if(dataShemaArray.length > 5){
      msg6 =  msg5.replace(new RegExp(dataShemaArray[5], 'gi'),splitDisData[5]) ;
      finalMessage = msg6;
    }
    if(dataShemaArray.length > 6){
      msg7 =  msg6.replace(new RegExp(dataShemaArray[6], 'gi'),splitDisData[6]) ;
      finalMessage = msg7;
    }
    if(dataShemaArray.length > 7){
      msg8 =  msg7.replace(new RegExp(dataShemaArray[7], 'gi'),splitDisData[7]) ;
      finalMessage = msg8;
    }
    if(dataShemaArray.length > 8){
      msg9 =  msg8.replace(new RegExp(dataShemaArray[8], 'gi'),splitDisData[8]) ;
      finalMessage = msg9;
    }
    if(dataShemaArray.length > 9){
      msg10 =  msg9.replace(new RegExp(dataShemaArray[9], 'gi'),splitDisData[9]) ;
      finalMessage = msg10;
    }
    if(dataShemaArray.length > 10){
      msg11 =  msg10.replace(new RegExp(dataShemaArray[10], 'gi'),splitDisData[10]) ;
      finalMessage = msg11;
    }
    if(dataShemaArray.length > 11){
      msg12 =  msg11.replace(new RegExp(dataShemaArray[11], 'gi'),splitDisData[11]) ;
      finalMessage = msg12;
    }
    if(dataShemaArray.length > 12){
      msg13 =  msg12.replace(new RegExp(dataShemaArray[12], 'gi'),splitDisData[12]) ;
      finalMessage = msg13;
    }
    if(dataShemaArray.length > 13){
      msg14 =  msg13.replace(new RegExp(dataShemaArray[13], 'gi'),splitDisData[13]) ;
      finalMessage = msg14;
    }
    if(dataShemaArray.length >14){
      msg15 =  msg14.replace(new RegExp(dataShemaArray[14], 'gi'),splitDisData[14]) ;
      finalMessage = msg15;
    }
    if(dataShemaArray.length >15){
      msg16 =  msg15.replace(new RegExp(dataShemaArray[15], 'gi'),splitDisData[15]) ;
      finalMessage = msg16;
    }
    if(dataShemaArray.length >16){
      msg17 =  msg16.replace(new RegExp(dataShemaArray[16], 'gi'),splitDisData[16]) ;
      finalMessage = msg17;
    }
    if(dataShemaArray.length >17){
      msg18 =  msg17.replace(new RegExp(dataShemaArray[17], 'gi'),splitDisData[17]) ;
      finalMessage = msg18;
    }
    if(dataShemaArray.length >18){
      msg19 =  msg18.replace(new RegExp(dataShemaArray[18], 'gi'),splitDisData[18]) ;
      finalMessage = msg19;
    }
    if(dataShemaArray.length >19){
      msg20 =  msg19.replace(new RegExp(dataShemaArray[19], 'gi'),splitDisData[19]) ;
      finalMessage = msg20;
    }
    
var mailOptions = {
  from: emailAD,
  to: myEmailIs,
  subject: fixTittle,
 // text: ,
  html: finalMessage,
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    console.log("There is a big error");
  } else {
    loginfo = 'Email sent to: ' + info.accepted
   // logArray.push(loginfo)
    console.log(loginfo);
    //console.log(logArray.length);
   //console.log('Email was rejected: ' + info.rejected);
   //console.log('Email pending: ' + info.pending);
  }
});
}
 
} 
else{
 
  console.log("Error: The number of schema tags did not rhyme with the number of data on every row")
  return false
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
if(dataArray.length === 0){
  //console.log(numberOfMailsSent + " messages have been sent")
}
})

router.get("/", (req,res) => {
  res.render('pages/index',{
  })
});
router.get("/sms", (req,res) => {
res.render('pages/sms')
});
router.get("/demo", (req,res) => {
  res.render('pages/demo')
  })

console.log(numberOfMailsSent)
app.listen(PORT, (req,res) =>{
        console.log(`This website is running on port ${PORT}. Message Celeb - by LikeAKing Company`)
 
})

