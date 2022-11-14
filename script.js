//To create div tag
    var div=document.createElement("div");
    div.setAttribute("class","sai")

    let formgroup=document.createElement("div");
    formgroup.setAttribute("class","form-group");
//To create input box  
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","form-control");
    input.setAttribute("id","main");
    input.setAttribute("placeholder","TYPE YOUR NAME HERE");
    input.style.width="520px";
//To create search button  
    let button=document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","bton");
    button.classList.add("btn","btn-secondary");
    button.innerHTML="Search";
    button.style.marginLeft="200px";
    button.style.marginTop="30px";
    button.addEventListener("click",okay);
//To create element

    // let c=document.createElement("div");
    // c.innerHTML= "TOP COUNTRIES";

    let c1=document.createElement("div");
    c1.setAttribute("id","country1");

    let p1=document.createElement("div");
    p1.setAttribute("id","prob1");

    let c2=document.createElement("div");
    c2.setAttribute("id","country2");

    let p2=document.createElement("div");
    p2.setAttribute("id","prob2");
//To append the element
    formgroup.append(input,button,c1,p1,c2,p2);
    div.append(formgroup);
    document.body.append(div);
//function creation
   async function okay(){
    try{
let person=document.getElementById("main").value;
console.log(person);
//fetch API
let res=await fetch(`https://api.nationalize.io/?name=${person}`);
let res1=await res.json();
console.log(res1);
//find top 2 countries in API
    console.log(res1.country[0]);
    var firstcoun=res1.country[0];
    console.log(res1.country[1]);
    var secondcoun=res1.country[1];
//find top 2 countries id and prop
    var top1=firstcoun.country_id
    console.log(top1);
    var prob1=firstcoun.probability;
    console.log(prob1);

    var top2=secondcoun.country_id;
    console.log(top2);
    var prob2=secondcoun.probability;
    console.log(prob2);

    c1.innerHTML=`FIRST COUNTRY name:${top1}`
    p1.innerHTML=`FIRST COUNTRY probability:${prob1}`

    c2.innerHTML=`SECOND COUNTRY name:${top2}`
    p2.innerHTML=`SECOND COUNTRY probability:${prob2}`

    }
//error handler
catch(error){
return error;
}

    }  