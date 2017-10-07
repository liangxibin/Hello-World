//index.js
//获取应用实例
Page({
 data:{
imgUrls:[
  'http://img05.tooopen.com/images/20150201/sy_109945598299.jpg',
  'http://img06.tooopen.com/images/20160727/tooopen_sy_172597616844.jpg',
  'http://img06.tooopen.com/images/20160811/tooopen_sy_175176752439.jpg'
],
indicatorDots:false,
autoplay:true,
interval:5000,
duration:500,
defaultSize: 'mini',
disabled: false,
plain: false,
loading: false,
multiArray:[['苹果'],['三星'],['华为'],['vivo'],['系统安装'],['上门检修']],
objectMultiArray:[
['iPhone 6 Plus','iPhone 6','iPhone 6s','iPhone 6s Plus','iPhone 7 Plus','iPhone 7','iPhone 5','iPhone 5c','iPhone 5s','iPhone SE','iPad mini 1','iPad mini 2','iPad mini 3','iPad mini 4','iPad 2','iPad 3','iPad 4','iPad Air 1','iPad Air 2'],
['Galaxy Note4','Galaxy S6 EDGE+','Galaxy S7','Galaxy S6 EDGE'],
['HUAWEI P9','HUAWEI Mate 9','HUAWEI Mate 8','华为nova'],
['vivo X9','vivo X9Plus','vivo Y67','vivo X6Plus'],
['PC系统安装','Mac系统安装','Mac+PC安装'],
['上门检修']
],
 },
setDisabled: function (e) {
  this.setData({
    disabled: this.data.disabled
  })
},
 changeIndicatorDots:function(e){
   this.setData({
     indicatorDots:!this.data.indicatorDots
   })
 },
 changeAutoplay:function(e){
   this.setData({
     autoplay:this.data.autoplay
   })
 },
 intervalChange:function(e){
   this.setData({
     interval:e.detail.value
   })
 },
 durationChange:function(e){
   this.setData({
     duration:e.detail.value
   })
 }
})
