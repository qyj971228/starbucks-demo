<template>
  <div>
    <div id='contain'>
      <div id='banner'><img :src="banner" alt=""></div>
      <div class='lines'>
        <div class='line'></div>
        <div class='line'></div>
      </div>
      <div id='menu'>
        <div class='icon'><img src="" alt=""></div>
      </div>
      <div id='show'>
        <div id='buttons'>
          <div id='left'><img :src="left" alt=""></div>
          <div id='right'><img :src="right" alt=""></div>
        </div>
        <div id='play'><img :src="play" alt=""></div>
        <div id='points'>
          <div class='point'></div>
        </div>
        <div id='videos'>
          <div id='video'><video src=""></video></div>
        </div>
      </div>
      <div id='deliver-places'><img src="" alt=""></div>
      <div id='app'>
        <div id='download'>
          <div id='describe'></div>
          <div id='QR'><img src="" alt=""></div>
          <div id='IOS'><img src="" alt=""></div>
          <div id='android'><img src="" alt=""></div>
        </div>
        <div id='people'><img src="" alt=""></div>
      </div>
      <div class='lines'>
        <div class='line'></div>
        <div class='line'></div>
      </div>
      <div class='help'>
        <div id='girl'><img src="" alt=""></div>
        <div id='faq'><img src="" alt=""></div>
        <div id='faq-btn'><img src="" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StarbucksDeliversInfo',
  data(){
    // return{
    //   banner: require('../../assets/StarbucksDeliversInfo/banner.png'),
    //   menus:[
    //     {
    //       menu: require('../../assets/StarbucksDeliversInfo/menu-1.png'),
    //       desceibe: '不妥协的态度，对每一个细节都精益求精，直到我们可以骄傲地为你提供专星送™服务',
    //       list: [
    //         {icon:'不送卡布奇诺', question:'为什么我们坚持在专星送的菜单中，不提供卡布奇诺？'},
    //         {icon:'30分钟承诺', question:'为什么专星送还是坚持30分钟的承诺？'},
    //         {icon:'星级咖啡师', question:'是谁为你做了这杯专星送的咖啡？'},
    //         {icon:'封口贴', question:'如何让客人更安心的体验专星送服务？'},
    //       ]
    //     },
    //     {
    //       menu: require('../../assets/StarbucksDeliversInfo/menu-2.png'),
    //       desceibe: '用心传递一份咖啡温度，特别设计的防洒防漏杯盖, 坚持使用冷/热分离外送箱及专业高效的配送团队, 从第三空间到第四空间，咖啡热情继续升温',
    //       list: [
    //         {icon:'冷盖', question: '外送时，如何防止冷饮撒漏？'},
    //         {icon:'热盖', question: '外送时，如何防止热饮撒漏？'},
    //         {icon:'冷热分离箱', question: '如何做到在外送时提供对的温度？'}
    //       ],
    //     },
    //     {
    //       menu: require('../../assets/StarbucksDeliversInfo/menu-3.png'),
    //       desceibe: '全新智能平台，提供个性化饮品定制，深度连接彼此，为你找到心有灵犀的那一杯',
    //       list: [
    //         {icon: '客制化', question: '你的咖啡还是你爱的那一杯'}
    //       ]
    //     },
    //     {
    //       menu: require('../../assets/StarbucksDeliversInfo/menu-4.png'),
    //       desceibe: '47年来的咖啡初心和承诺，浓缩于这一杯热爱，送达你手中。我们的专星送™服务已经启程，很快将覆盖更多城市，更多门店，将一杯热爱的浓度传递给更多顾客',
    //       list: [
    //         {icon: '浓度', question: '47年来的咖啡初心和承诺，浓缩于这一杯热爱'}
    //         ]
    //     },
    //   ],
    //   play: require('../../assets/StarbucksDeliversInfo/play.png'),
    //   left: require('../../assets/StarbucksDeliversInfo/carousel-backward.png'),
    //   right: require('../../assets/StarbucksDeliversInfo/carousel-forward.png'),
    //   videos:{
    //     video1_1: require('../../assets/StarbucksDeliversInfo/1-1.mp4'),
    //     video1_2: require('../../assets/StarbucksDeliversInfo/1-2.mp4'),
    //     video1_3: require('../../assets/StarbucksDeliversInfo/1-3.mp4'),
    //     video1_4: require('../../assets/StarbucksDeliversInfo/1-4.mp4'),
    //     video2_1: require('../../assets/StarbucksDeliversInfo/2-1.mp4'),
    //     video2_2: require('../../assets/StarbucksDeliversInfo/2-2.mp4'),
    //     video2_3: require('../../assets/StarbucksDeliversInfo/2-3.mp4'),
    //     video3_1: require('../../assets/StarbucksDeliversInfo/3-1.mp4'),
    //     video4_1: require('../../assets/StarbucksDeliversInfo/4-1.mp4'),
    //   },
    //   delivery: require('../../assets/StarbucksDeliversInfo/delivery_city.png'),
    //   QR: require('../../assets/StarbucksDeliversInfo/qrcode.png'),
    //   IOS: require('../../assets/StarbucksDeliversInfo/ios_download_btn.png'),
    //   android: require('../../assets/StarbucksDeliversInfo/android_download_btn.png'),
    //   people: require('../../assets/StarbucksDeliversInfo/people.png'),
    //   girl: require('../../assets/StarbucksDeliversInfo/chatgirl.gif'),
    //   faq: require('../../assets/StarbucksDeliversInfo/faq.png'),
    //   faqBtn: require('../../assets/StarbucksDeliversInfo/faq-btn.png'),
    // }
  }
}
</script>
