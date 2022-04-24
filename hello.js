document.getElementById("change_color").onclick = () => {
    changeBackgroundColor();
}

function changeBackgroundColor() {
    var body = document.getElementById("popup_body");
    body.style.backgroundColor = "#219ddd";
    console.log("背景変更")
}