
if(window.innerWidth <= 425){
    document.getElementById("image").src = "assets/images/illustration-sign-up-mobile.svg"
}

const Check = (address) =>{
    let tld = [".co.za", ".com", ".gov"]
    let valid = true
    let look = address.slice(address.indexOf("@"), address.length)
    
    if(look.length > 1){
        for(var i = 0; i < tld.length; i++){
            if(look.indexOf(tld[i]) != -1){
                valid = true
                break
            }
            else valid = false
        }
    }else valid = false

    if(!valid){
        document.getElementById("email").style.borderColor = "hsl(4, 100%, 67%)"
        document.getElementById("error").style.display = "block"
        document.getElementById("email").style.color =  "hsl(4, 100%, 67%)"
        document.getElementById("email").style.fontWeight = 700
        document.getElementById("email").style.borderWidth = 2
        return false
    }else{
        document.getElementById("email").style.borderColor = "hsl(231, 7%, 60%)"
        document.getElementById("error").style.display = "none"
        document.getElementById("email").style.color =  "black"
        document.getElementById("email").style.fontWeight = 400
        document.getElementById("email").style.borderWidth = 0.5
        return true
    }
}

const Run = () =>{
    let address = document.getElementById("email").value
    let state = Check(address)

    if(state){
        document.getElementById("subscribe").style.display = "none"
        document.getElementById("thank_you").style.display = "block"

        document.getElementById("paste").innerHTML = address
    }else null
}

const Dissmis = () =>{
    document.getElementById("thank_you").style.display = "none"
    document.getElementById("subscribe").style.display = "flex"
}

// Tester code: Check("yomzi123@gmail.com")