let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    let message=document.getElementById("message").value;
    let output=document.getElementById("output");
    output.textContent=message
    document.getElementById("message").value=""
})