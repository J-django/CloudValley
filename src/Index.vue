<template>
  <!-- <p>{{mainstore.count}}</p>
  <p>{{mainstore.foo}}</p>

  <hr>

  <p>{{count}}</p>
  <p>{{foo}}</p>

  <hr>

  <p><button @click="handleChangeState">修改数据</button></p>

  <hr> -->

  <hr>
  <el-button @click="Submit">点击</el-button>
</template>
<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const Submit = () => {
      proxy.$axios.get(`/api/Login/LoginCheck`, { name: "aaa" }).then((res) => {
        console.log(res);
      });
    };
    return {
      Submit,
    };
  },
};
// import { useMainStore } from "./store";
// const mainstore = useMainStore();
// console.log(mainstore.count);
/**这样是有问题的，因为这样拿到的数据不是响应式的，是一次性的 */
// const { count, foo } = mainstore;

// const handleChangeState = () => {
//   console.log(mainstore.count++);
// };
// import { reactive, watch, watchEffect, ref } from "vue";
// import _ from "lodash";
// export default {
//   setup() {
//     const data = reactive({
//       name: "",
//     });
//     watch(() => data.name, Debounce(aa, 2000));

//     function aa() {
//       console.log("aa");
//     }
//     function Debounce(func, delay) {
//       let timer = null;
//       return function () {
//         let context = this;
//         let args = arguments;
//         if (timer) {
//           clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//           func.apply(context, args);
//         }, delay);
//       };
//     }
//     return {
//       data,
//       /*右键菜单不显示*/
//     };
//   },

// name: "Home",
// mounted() {
//   window.addEventListener("scroll", this.betterDebounce(this.scroll, 2000));
//   window.addEventListener("scroll", this.scroll);
// },
// destroyed() {
//   window.addEventListener("scroll", this.scroll);
// },
// methods: {
//   throttle(fn, interval) {
//     let last = 0;
//     return function () {
//       let context = this;
//       let args = arguments;
//       let now = +new Date();
//       if (now - last > interval) {
//         last = now;
//         fn.apply(context, args);
//       }
//     };
//   },
//   debounce(fn, delay) {
//     let timer = null;
//     return function (params) {
//       let context = this;
//       let args = arguments;
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, delay);
//     };
//   },
//   betterDebounce(fn, delay) {
//     let last = 0;
//     let timer = null;
//     return function () {
//       let context = this;
//       let args = arguments;
//       let now = +new Date();
//       if (now - last < delay) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//           fn.apply(context, args);
//           last = now;
//         }, delay);
//       } else {
//         last = now;
//         fn.apply(context, args);
//       }
//     };
//   },
//   scroll: _.debounce(() => {
//     console.log("页面滚动了");
//   }, 2000),
// },
// setup() {
//   let a = +new Date();
//   //数据结构
//   const Data = {
//     http: {
//       url: "http://tencent/",
//       methods: {
//         getUid: "getUid",
//         getBaseInfo: "getBaseInfo",
//         getPayInfo: "getPayInfo",
//       },
//     },
//     UserInfo: reactive({
//       staging: {
//         qq: undefined,
//       },
//       qq: 123456,
//       uid: null,
//       baseInfo: {},
//       payInfo: {},
//     }),
//   };
//   //监听qq号的数据改变
//   watch(
//     () => Data.UserInfo.qq,
//     () => {
//       GetUserInfo();
//     }
//   );
//   //请求方法
//   // ----------------------------------------------------------
//   function Request(methodName, paramObj) {
//     return new Promise((resolve, reject) => {
//       let url = `${Data.http.url}/${methodName}`;
//       let params = "";
//       for (var key in paramObj) {
//         params += key + "=" + paramObj[key] + "&";
//       }
//       url = url + (url.includes("?") ? "&" : "?") + params;
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function (e) {
//         resolve(e.target.response);
//       };
//       xhr.onerror = function (e) {
//         reject(e.target.response);
//       };
//       xhr.open("GET", url);
//       xhr.send();
//     }).then(
//       (res) => JSON.parse(res),
//       (err) => {
//         throw err;
//       }
//     );
//   }
//   // //获取Uid
//   // // ----------------------------------------------------------
//   async function getUid(qq) {
//     const result = await Request(Data.http.methods.getUid, {
//       qq: qq,
//     });
//     return (Data.UserInfo.uid =
//       (result && result.ret) === 0 ? result.uid : null);
//   }
//   // //获取BaseInfo
//   // // ----------------------------------------------------------
//   async function getBaseInfo(uid) {
//     const result =
//       (await Request(Data.http.methods.getBaseInfo), { uid: uid });
//     Data.UserInfo.baseInfo = (result && result.ret) === 0 ? result.info : {};
//   }
//   // //获取PayInfo
//   // // ----------------------------------------------------------
//   async function getPayInfo(uid) {
//     const result = await Request(Data.http.methods.getPayInfo, { uid: uid });
//     Data.UserInfo.payInfo = (result && result.ret) === 0 ? result.info : {};
//   }
//   // //调用代码
//   // // ----------------------------------------------------------
//   async function GetUserInfo() {
//     const data = await getUid(Data.UserInfo.qq);
//     if (data != null) {
//       await getBaseInfo(data);
//       await getPayInfo(data);
//       return Object.assign({}, Data.UserInfo);
//     } else {
//       throw new Error("获取用户ID失败");
//     }
//   }
//   return {
//     Data,
//   };
// },
//};
// // -----------------------------------------------案例一--------------------------------------------------
// // //数据结构
// // // ----------------------------------------------------------
// var Data = {
//   http: {
//     url: "http://tencent/",
//     methods: {
//       getUid: "getUid",
//       getBaseInfo: "getBaseInfo",
//       getPayInfo: "getPayInfo",
//     },
//   },
//   UserInfo: reactive({
//     qq: 123456,
//     uid: null,
//     baseInfo: {},
//     payInfo: {},
//   }),
// };
// // //获取Uid
// // // ----------------------------------------------------------
// async function getUid(qq) {
//   const result = await Request(Data.http.methods.getUid, {
//     qq: qq,
//   });
//   return (Data.UserInfo.uid = (result && result.ret) === 0 ? result.uid : null);
// }
// // //获取BaseInfo
// // // ----------------------------------------------------------
// async function getBaseInfo(uid) {
//   const result = (await Request(Data.http.methods.getBaseInfo), { uid: uid });
//   Data.UserInfo.baseInfo = (result && result.ret) === 0 ? result.info : {};
// }
// // //获取PayInfo
// // // ----------------------------------------------------------
// async function getPayInfo(uid) {
//   const result = await Request(Data.http.methods.getPayInfo, { uid: uid });
//   Data.UserInfo.payInfo = (result && result.ret) === 0 ? result.info : {};
// }
// // //调用代码
// // // ----------------------------------------------------------
// async function GetUserInfo() {
//   const data = await getUid(Data.UserInfo.qq);
//   if (data != null) {
//     await getBaseInfo(data);
//     await getPayInfo(data);
//     return Object.assign({}, Data.UserInfo);
//   } else {
//     throw new Error("获取用户ID失败");
//   }
// }
// -----------------------------------------------案例二--------------------------------------------------
// function isSymmetryNumber(...num) {
//   if (num.length > 0) {
//     //方法一
//     // ----------------------------------------------------------
//     let _num_old = String(num);
//     let _num_new = "";
//     for (let i = _num_old.length - 1; i >= 0; i--) {
//       _num_new += _num_old[i];
//     }
//     if (_num_old == _num_new) {
//       return true;
//     } else {
//       return false;
//     }
//     // ----------------------------------------------------------
//     // 方法二
//     // ----------------------------------------------------------
//     var _num_new = String(num);
//     console.log(_num_new);
//     for (let i = 0; i < _num_new.length / 2; i++) {
//       if (_num_new[i] != _num_new[_num_new.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//     // ----------------------------------------------------------
//     //方法三
//     // ----------------------------------------------------------
//     return (
//       String(num) ===
//       String(num).replaceAll(" ", "").split("").reverse().join("")
//     );
//     // ----------------------------------------------------------
//   }
// }
//调用方法
// isSymmetryNumber("qqq", 111, "qqq");
// -----------------------------------------------案例三--------------------------------------------------
</script>

<style>
</style>