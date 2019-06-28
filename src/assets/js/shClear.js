function clear() {
    var div = document.getElementById("code_wrapper");
    var len = div.childNodes.length;
    if (len > 1) {
        for (let i = 0; i < len - 1; i++) {
            div.removeChild(div.childNodes[0])
        }
    }
}

export default {
    clear
}