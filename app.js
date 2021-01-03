var btntranslate=document.querySelector("#Click");
var txtinput=document.querySelector("#txt-input");
console.log(txtinput);
function translate()
{
    console.log("clicked");
    console.log("input",txtinput.value);
}
btntranslate.addEventListener("click",translate);