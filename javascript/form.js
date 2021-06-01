function buat_login() {
    let containerLogin = document.getElementsByClassName("kotak_login")[0]
    let tombol = document.getElementById("X")
    containerLogin.removeChild(tombol)
    
    //judul Login
    let p = document.createElement("p")
    p.innerHTML = "SILAHKAN MENDAFTAR"
    containerLogin.appendChild(p)

    //class judul login
    let classP = document.createAttribute("class")
    classP.value = "tulisan_login"
    p.attributes.setNamedItem(classP)
    containerLogin.appendChild(p)

    //form login
    let form = document.createElement("form")
    containerLogin.appendChild(form)

    //class form login
    let formClass = document.createAttribute("class")
    formClass.value = "form_login"
    form.attributes.setNamedItem(formClass)
    
    //labelNamaUser
    let labelNamaUser = document.createElement("label")
    let classLabel = document.createAttribute("class")
    labelNamaUser.innerHTML = "Nama User"
    classLabel.value = "label"
    labelNamaUser.attributes.setNamedItem(classLabel)
    containerLogin.appendChild(labelNamaUser)
    form.appendChild(labelNamaUser)

    //input Username
    let inputNamaUser = document.createElement("input")
    let classInput = document.createAttribute("class")
    classInput.value = "form_login"
    inputNamaUser.attributes.setNamedItem(classInput)
    inputNamaUser.type = "text"
    //placeholder
    inputNamaUser.setAttribute("placeholder","Nama User..")

    containerLogin.appendChild(inputNamaUser)
    form.appendChild(inputNamaUser)

    //label
    let nomorHandphone = document.createElement("label")
    nomorHandphone.innerHTML = "Nomor Handphone"
    containerLogin.appendChild(nomorHandphone)
    form.appendChild(nomorHandphone)
    
    //input Nomor Handphone
    let inputNomor = document.createElement("input")
    inputNomor.type = "number"
    //placeholder
    inputNomor.setAttribute("placeholder","Nomor Handphone.")

    containerLogin.appendChild(inputNomor)
    form.appendChild(inputNomor)
    inputNomor.className = "form_login"


    //label Username
    let labelUsername = document.createElement("label")
    labelUsername.innerHTML = "Username"
    containerLogin.appendChild(labelUsername)
    form.appendChild(labelUsername)
    
    //input Username
    let inputUsername = document.createElement("input")
    inputUsername.type = "text"
    inputUsername.className = "form_login"
    containerLogin.appendChild(inputUsername)
    form.appendChild(inputUsername)
    //placeholder
    inputUsername.setAttribute("placeholder","Username atau Email..")

    //label password
    let labelPassword = document.createElement("label")
    labelPassword.innerHTML = "Password"
    
    containerLogin.appendChild(labelPassword)
    form.appendChild(labelPassword)

    //input Password
    let inputPassword = document.createElement("input")
    inputPassword.type = "password"
    inputPassword.className = "form_login"

    containerLogin.appendChild(inputPassword)
    form.appendChild(inputPassword)
    //placeholder
    inputPassword.setAttribute("placeholder","Password..")

    //button
    let btn = document.createElement("input")
    btn.type = "button"
    btn.value = "DAFTAR SEKARANG"
    btn.className = "tombol_login"
    containerLogin.appendChild(btn)
    form.appendChild(btn)

}