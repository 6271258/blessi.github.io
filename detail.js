// JavaScript source code
function fun() {
    var res = document.getElementById("name").value
    if (res.length == 0) {
        document.getElementById("msg").innerHTML = "Empty field...!!"
        return false
    }
    else if (res.length < 3) {
        document.getElementById("msg").innerHTML = "Name can't be less than three Character"
        return false
    }
    else if (res.length > 15) {
        document.getElementById("msg").innerHTML = "Name can't be greater than 15 Character"
        return false
    }

}
