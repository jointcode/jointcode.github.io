function sendMail(){
        let params = {
            message : document.getElementById("denuncia").value,
            name : document.getElementById("name").value,
            //email : document.getElementById("email").value 
        }

        emailjs.send("service_813fq8k","template_043biwp",params).then(alert("Denuncia enviada!!"))
}