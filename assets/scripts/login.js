const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    
    const emailAddress = document.getElementById("email").value;
    const passWord = document.getElementById("password").value;

    const Email = localStorage.getItem("email");
    const Password = localStorage.getItem("password");

    if (emailAddress == "" || passWord =="") {
        alert("Vui lòng không để trống mật khẩu và tài khoản")
    } else {
        if (emailAddress == Email && passWord == Password) {
            alert("Đăng nhập thành công")
            window.location.href = "../../trangChu.html";
        }
        else {
            alert("Mật khẩu hoặc tài khoản không chính xác")
        }
    }
}
