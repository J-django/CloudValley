import { defineStore } from "_pinia@2.0.9@pinia";

/**
1、定义并导出容器
参数：容器ID，必须唯一，将来pinia会把所有的容器挂载到根容器
参数2：选项对象
返回值：一个函数，调用得到容器实例
*/
export const useMainStore = defineStore("main", {
  /**
   * 类似于组件的data，用来存储全局状态的
   * 1、必须是函数，这样是为了在服务器渲染的时候避免交叉请求导致的数据状态污染
   * 2、必须是箭头函数，这是为了更好的TS类型推导
   * @returns
   */
  state: () => {
    return {
      count: 100,
      foo: "bar",
    };
  },
  /**
   * 类似于组建的computed，用来封装计算属性，有缓存的功能
   */
  getters: {},
  /**
   * 类似于组件的methods，封装业务逻辑，修改state
   */
  actions: {},
});
