//Show and hide the expalanation part when ever a user clicks on the question mark sign

let what = document.getElementsByClassName("question");

function hideOrShow(){
    for (let i = 0; i < what.length; i++){
      what[i].addEventListener("click",toggle);
    function toggle(){
    if(this.parentElement.getElementsByTagName("div")[6].style.display === "none"){
    this.parentElement.getElementsByTagName("div")[6].style.display = "block"
    }
    else
    {
      this.parentElement.getElementsByTagName("div")[6].style.display = "none"
    }
    }
      
    }
  }
  hideOrShow()

  let whatQ = document.getElementsByClassName("questionX");

function hideOrShowQ(){
    for (let i = 0; i < whatQ.length; i++){
      whatQ[i].addEventListener("click",toggle);
    function toggle(){
    if(this.parentElement.getElementsByTagName("div")[4].style.display === "none"){
    this.parentElement.getElementsByTagName("div")[4].style.display = "block"
    }
    else
    {
      this.parentElement.getElementsByTagName("div")[4].style.display = "none"
    }
    }
      
    }
  }
  hideOrShowQ()
  