var btntranslate=document.querySelector("#Click");
var txtinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#txt-output");
var url="https://api.funtranslations.com/translate/minion.json";

function translateUrl(text)
{
    return url +"?"+"text="+text;
}

function translate()
{
    var inputtext=txtinput.value
    fetch(translateUrl(inputtext))
    .then(response=>response.json())
    .then(json=>{
    var TranslatedText=json.contents.translated;
    txtoutput.innerText=TranslatedText;

    })
}
function ErrorHandler(error)
{
    console.log("error occured",error)
    alert("Something went wrong")
}
btntranslate.addEventListener("click",translate);


