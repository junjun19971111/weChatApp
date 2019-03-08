// pages/play/play.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      isoff:true
  },

  /**
   * 组件的方法列表
   */

    change_tab:function(event){
      if (event) {
          this.setData({
            isoff: true
          });
        
      }
    },
    change_it:function(event){
      if (event) {
          console.log(this.data);
          this.setData({
            isoff: false
          });
      
      }
    },
 
  
})
