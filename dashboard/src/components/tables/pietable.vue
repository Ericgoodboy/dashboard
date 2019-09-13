<template>
  <div class="v-pie">
    <div class="t-name" >{{ tname }}</div>
    <div class="t-body">
     <canvas width="400px" ref="pietable" height="300px" ></canvas>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "v-pie",
  props: {
    tname: {
      type: String,
      default: "图表名"
    }
  },
  data() {
    return { orgOptions: {} ,
    pieChart:{}
    };
  },
  methods: {
    init() {
      // this.$refs["chart1"].style.width = "400px"
      
      this.orgOptions = {
        calculable: true,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      let pieChart = echarts.init(this.$refs["pietable"])
      pieChart.setOption(this.orgOptions);
      
      this.pieChart = pieChart
      // this.$echarts.init(this.$refs["chart1"],this.orgOptions)
    },
    
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.v-pie {
  width: 400px;
  height: 300px;
  background: #222;
  opacity: 0.9;
  margin: 0 auto;
}
.t-name {
  height: 40px;
  width: 100%;
  text-align: center;
  background: #2d3035;
  line-height: 40px;
}
chart{
  width: 100%;
  height:100%;
}
</style>