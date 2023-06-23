const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);

    if (email=="" || password=="" || confirmPassword=="") {
        alert("Vui lòng điền đủ thông tin")
    } else {
        if(password!== confirmPassword) {
            alert("Vui lòng điền đúng mật khẩu")
    }else{
        alert("Đăng ký thành công")
        
    }
}
}