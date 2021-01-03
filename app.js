var btntranslate=document.querySelector("#Click");
var txtinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#txt-output");

function translate()
{

    txtoutput.innerText="asjjfkkfoskfkflsdsmv  " +txtinput.value;
}
btntranslate.addEventListener("click",translate);


/** ways in which we can define query selector
 * for html tag= eg(textarea=document.querySelector("textarea");)
 *for html id= eg(textarea=document.querySelector("#txt-input");)
 for html class= eg(textarea=document.querySelector(".textarea");)
eg(textarea=document.querySelector(input[name="textarea"]);)
 */