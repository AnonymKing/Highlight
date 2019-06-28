function fnSetBrush(dp) {
    dp.sh.Brushes.Brush = function () {
        var keywords = 'abs addr and ansichar ansistring array as asm begin boolean byte cardinal ' + 'case char class comp const constructor currency destructor div do double ' + 'downto else end except exports extended false file finalization finally ' + 'for function goto if implementation in inherited int64 initialization ' + 'integer interface is label library longint longword mod nil not object ' + 'of on or packed pansichar pansistring pchar pcurrency pdatetime pextended ' + 'pint64 pointer private procedure program property pshortstring pstring ' + 'pvariant pwidechar pwidestring protected public published raise real real48 ' + 'record repeat set shl shortint shortstring shr single smallint string then ' + 'threadvar to true try type unit until uses val var varirnt while widechar ' + 'widestring with word write writeln xor';
        this.regexList = [{
            regex: new RegExp('\\(\\*[\\s\\S]*?\\*\\)', 'gm'),
            css: 'comment'
        }, {
            regex: new RegExp('{(?!\\$)[\\s\\S]*?}', 'gm'),
            css: 'comment'
        }, {
            regex: dp.sh.RegexLib.SingleLineCComments,
            css: 'comment'
        }, {
            regex: dp.sh.RegexLib.SingleQuotedString,
            css: 'string'
        }, {
            regex: new RegExp('\\{\\$[a-zA-Z]+ .+\\}', 'g'),
            css: 'directive'
        }, {
            regex: new RegExp('\\b[\\d\\.]+\\b', 'g'),
            css: 'number'
        }, {
            regex: new RegExp('\\$[a-zA-Z0-9]+\\b', 'g'),
            css: 'number'
        }, {
            regex: new RegExp(this.GetKeywords(keywords), 'gm'),
            css: 'keyword'
        }];
        this.CssClass = 'dp-delphi';
        this.Style = '.dp-delphi .number { color: blue; }' + '.dp-delphi .directive { color: #008284; }' + '.dp-delphi .vars { color: #000; }';
    }
    dp.sh.Brushes.Brush.prototype = new dp.sh.Highlighter();
    dp.sh.Brushes.Brush.Aliases = ['delphi', 'pascal'];
}

export default {
    fnSetBrush
}