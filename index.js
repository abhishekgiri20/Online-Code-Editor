// Lock button
const lockButton = document.getElementById("lock-code");
lockButton.addEventListener("click", function () {
    this.classList.toggle("locked");
    if (this.classList.contains("locked")) {
        this.innerText = "Unlock";
        document.getElementById("html-code").disabled = true;
        document.getElementById("css-code").disabled = true;
        document.getElementById("js-code").disabled = true;
    } else {
        this.innerText = "Lock";
        document.getElementById("html-code").disabled = false;
        document.getElementById("css-code").disabled = false;
        document.getElementById("js-code").disabled = false;
    }
});

// Save button
const saveButton = document.getElementById("save-code");
saveButton.addEventListener("click", function () {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    // Implement your code-saving logic here
});

// Copy buttons
const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const codeType = this.id.replace("copy-", "");
        const codeToCopy = document.getElementById(codeType + "-code").value;
        copyToClipboard(codeToCopy);
    });
});

// Copy to clipboard function
function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode + "<style>" + cssCode + "</style>");
    output.contentWindow.eval(jsCode); // Corrected line
    output.contentDocument.close();
}
