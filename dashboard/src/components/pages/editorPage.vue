<template>
  <div class="wraper">
    <div class="title">
      <input placeholder="输入标题" v-model="title" type="text" />
    </div>
    <mavon-editor
      :value="value"
      @save="save"
      ref="editor"
      v-model="value"
      codeStyle="atelier-cave-dark"
      @imgAdd="$imgAdd"
    />
    <div class="form">
      <div class="select">
        <select v-model="d_type" name="类别">
          <option v-for="(k,v) in mapDtype" :value="v" :key="k.id">{{ k }}</option>
          <option value="-1">其他</option>
        </select>
      </div>

      <textarea id="hidden" name="content" v-model="editorContent" cols="30" rows="10"></textarea>
      <button @click="mysave()">保存</button>
      <button @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
// import E from "wangeditor";
import axios from "axios";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      txt: "",
      title: "Got a title",
      d_type: 1,
      id: "",
      value: "",
      mapDtype: {}
    };
  },
  methods: {
    getContent: function() {
      window.console.log(this.editorContent);
    },
    $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: '/file/upload',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((res) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
              window.console.log(res.data)
               this.$refs.editor.$img2Url(pos, res.data);
           }).catch(function(err){
             window.console.log(err)
           });
        },
    getCode() {
      let that = this;
      axios({
        method: "post",
        url: "/editor/getCode",
        data: {}
      }).then(function(res) {
        that.id = res.data.code;
        // window.console.log(that.id)
        that.$router.push("/editor/" + that.id);
      });
    },
    init() {
      let aid = this.$route.params.id;
      this.id = aid
      this.getTagMap();
      // if (aid == 0) {
      //   this.getCode();
      // } else {
      //   let that = this;
      //   axios({
      //     method: "post",
      //     url: "/editor/getInit",
      //     data: {
      //       id:aid
      //     }
      //   }).then(function(res) {
      //     that.value = res.data.value
      //     that.title = res.data.title
      //     that.d_type = res.data.type
      //   });
      // }
      // window.console.log("editorssss",aid)
    },
    mysave(){
      window.console.dir(this.$refs["editor"])
      this.save(this.$refs["editor"].d_value,this.$refs["editor"].d_render)
    },
    getTagMap(){
      let that = this;
      // window.console.log("post");
      axios({
        method: "post",
        url: "/get/tags ",
      }).then(function(res){
          window.console.log(res.data)
          this.mapDtype = res.data
      }).catch(function(){
        that.$toast({
            text: "获取taget失败",
            type: "danger",
            duration: 3000
          });
      });
    }
    ,
    save(value, render) {
      let that = this;
      window.console.log("post");
      axios({
        method: "post",
        url: "/editor/save",
        data: {
          title: this.title,
          d_type: this.d_type,
          editorContent: render,
          value: value,
          user: "mayeye",
          id: this.id
        }
      })
        .then(function() {
          that.$toast({
            text: "保存成功",
            type: "success"
            // duration: 3000
          });
        })
        .catch(function() {
          that.$toast({
            text: "保存失败",
            type: "danger"
            // duration: 3000
          });
        });
    },
    submit() {
      // this.save();
      this.$router.push("/");
    }
  },
  watch: {
    $route(to, from) {
      if (from != 0) {
        this.init();
      }
    }
  },
  mounted() {
    this.init();
    // window.Vpoc = 1
  }
};
</script>

<style scoped>
.wraper {
  width: 80%;
  margin: 20px auto;
}
#hidden {
  display: none;
}
.form {
  margin-top: 30px;
  float: right;
  margin-right: 50px;
}
.form button {
  margin-left: 12px;
  margin-top: 10px;
}
.select {
  display: inline-block;
  width: 300px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  z-index: 2;
}
.select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.select:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}
.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select:focus {
  outline: none;
}

button {
  /* 按钮美化 */
  width: 270px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
}
button:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #5599ff;
}

.title {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
}
.title input {
  width: 100%;
  height: 40px;
  display: block;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.title:before {
  content: "";
  width: 100px;
  position: absolute;
  left: 50%;
  top: 100%;
  height: 5px;
  background: #1e90ff;
  z-index: inherit;
  transform: translate(-50%, 0);
  transition: 1.5s;
}
.title:hover::before {
  width: 80%;
  height: 1px;
}
</style>