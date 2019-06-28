<template>
  <div class="show">
    <div id="code_wrapper">
      <div name="code" id="code" :class="select_class">{{code}}</div>
    </div>
  </div>
</template>


<script>
import Clear from "../assets/js/shClear.js";

export default {
  name: "Show",
  props: {
    brush_url: String,
    select_class: String
  },
  components: {},
  data() {
    return {
      code: ""
    };
  },
  methods: {
    fnTransform() {
      // 获取父组件中Textarea中的输入
      this.code = this.$parent.input_code;

      // 清除原有的
      Clear.clear();

      // 等待DOM更新后再进行操作
      this.$nextTick(function(that = this) {
        that.dp.SyntaxHighlighter.HighlightAll("code", true, false);
        that.code = "";
      });
    }
  },
  mounted: function() {
    // 设置高亮规则
    var Brush = require("../assets/js/" + this.brush_url).default;
    Brush.fnSetBrush(this.dp);
  }
};
</script>
