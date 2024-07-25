<template>
  <div class="app">
    <img src="../assets/rj_logo.png" class="logo_style" />
    <div class="title_style">线下门店</div>
    <div style="border-bottom: 1px solid #dddddd">
      <div v-for="item in listStores">
        <div class="item_style">
          <!-- 门店名称 -->
          <span class="item_name">
            {{ item.name }}
          </span>
          <!-- 门店位置 -->
          <span class="item_address"> 门店位置：{{ item.address }} </span>
          <!-- 营业时间 -->
          <span class="item_address"> 营业时间：{{ item.businessHours }} </span>
          <!-- 门店人员&联系电话 -->
          <div class="item_address">
            联系信息：<span>{{ item.contact }}</span>
            <a :href="'tel:' + item.phone" style="flex: 1; margin-left: 10px">{{
              item.phone
            }}</a>
            <span
              style="font-weight: bold; color: #333333"
              @click="getLocation(item.address)"
              >前往门店</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 吐司 -->
    <div id="toast" class="toast">{{ toastMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      toastMessage: "",
      listStores: [
        {
          name: "苹果授权体验店（明润店）",
          address: "河北省廊坊市三河市燕顺路西侧、京贸金融商务中心",
          businessHours: "周一到周日 09:00-21:00",
          contact: "芮经理",
          phone: "17733655345",
        },
        {
          name: "荣耀授权体验店（明润店）",
          address: "河北省廊坊市三河市燕顺路西侧、京贸金融商务中心",
          businessHours: "周一到周日 09:30-21:25",
          contact: "张经理",
          phone: "18501962232",
        },
        {
          name: "荣耀授权体验店（鑫乐汇店）",
          address: "河北省廊坊市三河市神威北大街376号一楼鑫乐汇数码产品专区",
          businessHours: "周一到周五 10:00-21:30 ，周六到周日 09:30-22:00",
          contact: "刘经理",
          phone: "17743708889",
        },
        {
          name: "荣耀授权体验店（三河店）",
          address: "河北省廊坊市三河市金都乐汇城一层数码产品专区",
          businessHours: "周一到周五 09:30-21:00 ，周六到周日 09:30-20:30",
          contact: "芮经理",
          phone: "15032465666",
        },
      ],
    };
  },
  methods: {
    getLocation(address) {
      this.toastMessage = "";
      try {
        
        navigator.clipboard.writeText(address);
        this.toastMessage = "门店地址已复制到剪贴板，请打开导航App";
      } catch (err) {
        this.toastMessage = "复制失败";
      }
      var toast = document.getElementById("toast");
      //
      toast.style.visibility = "visible";
      setTimeout(function () {
        toast.style.visibility = "hidden";
      }, 3000); // 3 seconds
    },
  },
};
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  background: #ffffff;

  .container {
    width: 100%;
    height: 300px;
  }
  .logo_style {
    width: 100px;
  }

  .title_style {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 30px;
    color: #333333;
  }

  .item_style {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    line-height: 25px;
    padding: 10px 5px;
    border-top: 1px solid #dddddd;
    color: #333333;

    .item_name {
      font-weight: bold;
      font-size: 16px;
    }
    .item_address {
      display: flex;
      flex-direction: row;
      width: 100%;
      font-size: 12px;
      color: #5d5d5d;
    }
  }
  .toast {
    visibility: hidden;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -50px; 
    margin-left: -65px; 
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 130px;
    border-radius: 5px;
  }
}
</style>
