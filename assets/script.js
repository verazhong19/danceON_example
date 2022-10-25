function copyText() {
    let copyText = document.getElementById("copytext");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    console.log(copyText.value);
}