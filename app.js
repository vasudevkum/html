let key="14c2678827524e2980fff0349edcb9c2";
let cardData=document.querySelector(".cardData");
let searchBtn=document.getElementById("searchBtn");
let searchType=document.getElementById("Type");
let inputData=document.getElementById("inputData")
const getData = async(input)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData=await res.json();
    console.log(jsonData.articles);
    searchType.innerText="Search:"+input;
    inputData.value=""
    cardData.innerHTML="";
    jsonData.articles.forEach(function(article)
  {
    console.log(article)
    let divs=document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);
    divs.innerHTML=` <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>`
    divs.addEventListener("click",function()
{
    window.open(article.url);
})

})
    }
window.addEventListener("load",function()
{
    getData("India")
})
// window.add
searchBtn.addEventListener("click",function(){
let inputText=inputData.value
getData(inputText);
})
function navclick(navName)
{  

    if(navName == "politics")
    {
        document.getElementById("politics").style.color="rgb(0,140,255)";
        document.getElementById("sports").style.color="white";
         document.getElementById("technology").style.color="white";
    }
    if(navName == "sports")
        {
            document.getElementById("politics").style.color="white";
            document.getElementById("sports").style.color="rgb(0,140,255)";
             document.getElementById("technology").style.color="white";
        }
        if(navName == "technology")
            {
                document.getElementById("politics").style.color="white";
                document.getElementById("sports").style.color="white";
                 document.getElementById("technology").style.color="rgb(0,140,255)"
            }
    getData(navName)

}
