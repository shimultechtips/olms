function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "shimul@srms.com" && password == "527501") {
        alert("Successfully Logged In.");
        window.open("admin.html");
        window.close();
        return false;
    }
    else {
        alert("Login Failed : Email Or Password Incorrect.");
    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}