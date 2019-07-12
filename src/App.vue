<template>
  <div id="app">
    <Motto motto="Syntax Highlight Code In Word Documents" tips="代码高亮 —— 让你的代码在WORD中有个更美的排版！" />

    <div class="func-wrapper">
      <textarea v-model="input_code" name="input" id="input" placeholder="Input..."></textarea>

      <div class="select-wrapper">
        <select v-model="selected" @change="select">
          <option v-for="item in choice" v-bind:key="item">{{ item }}</option>
        </select>
        <Button @click.native="fnTransform" title="转化" size="normal" type="primary" />
        <Button @click.native="fnSelectCode" title="代码全选" size="normal" type="primary" />
      </div>
    </div>

    <Show ref="Show" :select_class="select_class" :brush_url="brush_url" v-if="load" />
  </div>
</template>

<script>
import Motto from "./components/Motto.vue";
import Show from "./components/Show.vue";
import Button from "./components/Button.vue";
import Brush from "./assets/js/shBrushXml.js";
import Select from "./assets/js/selectCode.js";

export default {
  name: "app",
  components: {
    Motto,
    Show,
    Button
  },
  data() {
    return {
      load: false,
      code: "",
      selected: "C#",
      select_class: "c#",
      brush_url: "shBrushCSharp.js",
      input_code: "",
      choice: [
        "C#",
        "Cpp",
        "CSS",
        "Delphi",
        "Pascal",
        "HTML",
        "Java",
        "JavaScript",
        "Php",
        "Python",
        "Ruby",
        "SQL",
        "VB",
        "XML"
      ]
    };
  },
  methods: {
    select() {
      var choice = this.selected;
      var oChoiceMap = {
        "C#": { url: "shBrushCSharp.js", class: "c#" },
        Cpp: { url: "shBrushCpp.js", class: "c++" },
        CSS: { url: "shBrushCss.js", class: "css" },
        Delphi: { url: "shBrushDelphi.js", class: "delphi" },
        Pascal: { url: "shBrushDelphi.js", class: "delphi" },
        HTML: { url: "shBrushCSharp.js", class: "xml" },
        Java: { url: "shBrushJava.js", class: "java" },
        JavaScript: { url: "shBrushJScript.js", class: "javascript" },
        Php: { url: "shBrushPhp.js", class: "php" },
        Python: { url: "shBrushPython.js", class: "python" },
        Ruby: { url: "shBrushRuby.js", class: "ruby" },
        SQL: { url: "shBrushSql.js", class: "sql" },
        VB: { url: "shBrushVb.js", class: "vb" },
        XML: { url: "shBrushCSharp.js", class: "xml" }
      };

      if (choice in oChoiceMap) {
        this.brush_url = oChoiceMap[choice].url;
        this.select_class = oChoiceMap[choice].class;
      } else {
        alert("出错了，请重新选择！");
      }
    },

    fnTransform() {
      this.load = false;
      this.$nextTick(() => {
        this.load = true;
        this.$nextTick(() => {
          this.$refs.Show.fnTransform();
        });
      });
    },

    fnSelectCode() {
      Select.selectCode();
    }
  },
  mounted: function() {
    Brush.fnSetBrush(this.dp);
  }
};
</script>

<style>
@import "./assets/css/SyntaxHighlighter.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#input {
  border-radius: 5px;
  border: none;
  background: rgba(241, 241, 241, 0.98);
  padding: 10px;
}

/* pc */
@media only screen and (min-width: 1500px) {
  #input {
    width: 40vw;
    height: 14vw;
    max-width: 90vw;
    max-height: 60vh;
  }
}

/* pad */
@media only screen and (min-width: 900px) and (max-width: 1500px) {
  #input {
    width: 60vw;
    height: 20vw;
    max-width: 90vw;
    max-height: 60vh;
  }
}

/* phone */
@media only screen and (max-width: 900px) {
  #input {
    width: 80vw;
    height: 40vw;
    max-width: 90vw;
    max-height: 60vh;
  }
}

.func-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.select-wrapper select {
  font-size: 0.8rem;
  border: solid 1px #999;
  background: rgba(241, 241, 241, 0.98);
  border-radius: 0.2rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 2rem;
}
</style>
