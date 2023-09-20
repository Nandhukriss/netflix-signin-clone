function showPrivacyTerms() {
    var hiddenPara = document.getElementById('hidden-para');
    hiddenPara.innerHTML = "The information collected by Google reCAPTCHA is <br> to the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of <br> Service</a>, and is used for providing, maintaining, and <br> improving the reCAPTCHA service and for general <br> security purposes (it is not used for personalised <br> advertising by Google).";
    document.getElementById('show').style.display='none'

}

var email=document.getElementById('email')
var pass=document.getElementById('pass')
var warning1=document.getElementById('alert_e')
var warning2=document.getElementById('alert_p')
var form =document.getElementById('form')
email.addEventListener('blur',function(){
    if(email.value.trim()!=""){

        warning1.style.visibility="hidden"
        email.style.boxShadow="none"
    }else{
    warning1.style.visibility="visible"
    email.style.boxShadow=" 0px 1.5px 1px  #e87c03"
}
    
})
pass.addEventListener('blur',function(){
    
    if (pass.value.length>=4 && pass.value.length<=60 && pass.value.trim()!=""){
    warning2.style.visibility="hidden"
    pass.style.boxShadow=" none"
    // pass.style.boxShadow="inset 0 0 5px 1px lightgreen"
    }else{
        
        warning2.style.visibility="visible"
        pass.style.boxShadow=" 0px 1.5px 1px  #e87c03"

   }


})




document.getElementById('show_pass').addEventListener('click', function () {
    
 
    if(pass.type=="password"){
        pass.type="text"
        document.getElementById('show_pass').innerHTML='HIDE'
    }else{
        
        document.getElementById('show_pass').innerHTML='HIDE'
        pass.type="password"
        document.getElementById('show_pass').innerHTML='SHOW'

    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission
    var isEmpty=false
    if (email.value.trim() == "") {
        warning1.style.visibility = "visible";
        email.style.boxShadow = "0px 1.5px 1px #e87c03";
        isEmpty=true
    }

    if (pass.value.trim() == "") {
        warning2.style.visibility = "visible";
        pass.style.boxShadow = "0px 1.5px 1px #e87c03";
        isEmpty=true
    }
    
    if(!isEmpty){

        form.submit();
    }
});
