
function convert() {
    var text  = document.getElementById("textConvert").value;
    if (!text) {
        document.getElementById("textConvert").focus()
        document.getElementById("textConvert").style.border = "2px solid red"
        alert("Chưa nhập nội dung văn bản cần")
        return;
    }
    var langCode = document.getElementById("langCode").value;
    var format = document.getElementById("format").value;
     VoiceRSS.speech({
        key: '9eda9bfc85954b7892275958dd80bf1e',
        src: text,
        hl: langCode,
        r: 0, 
        c: format,
        f: '44khz_16bit_stereo',
        ssml: false
    });

}
