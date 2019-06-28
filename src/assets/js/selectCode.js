// 参考 https://www.cnblogs.com/sjns/p/7259722.html

function selectCode() {
    var selection, range, text;

    text = document.getElementsByClassName("dp-highlighter")[0];
    if (text) {
        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
            /*if(selection.setBaseAndExtent){
                selection.setBaseAndExtent(text, 0, text, 1);
            }*/
        } else {
            alert("none");
        }
    }
}

export default {
    selectCode
}