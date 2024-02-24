const hex = document.querySelector(".hex");
const btn = document.querySelector(".btn");


const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);


const btn2 = document.getElementById("cp_btn")
function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    navigator.clipboard.writeText(textArea.value)
    textArea.remove();
    alert('Copied to clipboard ' + textArea.value)
}
