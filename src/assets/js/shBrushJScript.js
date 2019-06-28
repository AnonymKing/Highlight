function fnSetBrush(dp) {
    dp.sh.Brushes.Brush = function () {
        var keywords = 'abstract boolean break byte case catch char class const continue debugger ' + 'default delete do double else enum export extends false final finally float ' + 'for function goto if implements import in instanceof int interface long native ' + 'new null package private protected public return short static super switch ' + 'synchronized this throw throws transient true try typeof var void volatile while with';
        this.regexList = [{
            regex: dp.sh.RegexLib.SingleLineCComments,
            css: 'comment'
        }, {
            regex: dp.sh.RegexLib.MultiLineCComments,
            css: 'comment'
        }, {
            regex: dp.sh.RegexLib.DoubleQuotedString,
            css: 'string'
        }, {
            regex: dp.sh.RegexLib.SingleQuotedString,
            css: 'string'
        }, {
            regex: new RegExp('^\\s*#.*', 'gm'),
            css: 'preprocessor'
        }, {
            regex: new RegExp(this.GetKeywords(keywords), 'gm'),
            css: 'keyword'
        }];
        this.CssClass = 'dp-c';
    }
    dp.sh.Brushes.Brush.prototype = new dp.sh.Highlighter();
    dp.sh.Brushes.Brush.Aliases = ['js', 'jscript', 'javascript'];
}

export default {
    fnSetBrush
}