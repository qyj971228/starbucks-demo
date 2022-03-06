export default {
    name: 'Home',
    data(){
      return{
        clientWidthApp: 1600,
        homeAd: require('../../assets/Home/home-ad.jpg'),
        homeAdMini: require('../../assets/Home/home-ad-mini.jpg'),
        pages:[
          {pageUrl: 'https://starbucks.tmall.com/', imgUrl: require('../../assets/Home/home-tmall.jpg')},
          {pageUrl: 'https://www.starbucks.com.cn/design-studio/', imgUrl: require('../../assets/Home/home-design-studio.jpg')},
          {pageUrl: '', imgUrl: require('../../assets/Home/home-career.jpg')},
        ],
        homeClub: require('../../assets/Home/home-club.svg'),
        tmallCards: [
          {pageUrl: 'https://starbucks.tmall.com/p/rd796757.htm', imgUrl: require('../../assets/Home/tmall-card-01-update.png'),head: '会员星礼包', p1: '星享卡新升级',p2: '更多心意好礼', p3: '了解更多>'},
          {pageUrl: 'https://starbucks.tmall.com/p/rd993825.htm?spm=a1z10.1-b-s.w5001-14489348230.6.MtuIoi', imgUrl: require('../../assets/Home/tmall-card-02.png'),head: '星礼卡', p1: '用一份心礼',p2: '让心意相随', p3: '了解更多>'},
          {pageUrl: 'https://starbucks.tmall.com/p/rd103766.htm?tbpm=1&spm=a1z10.1-b-s.w5001-14489348230.8.MtuIoi', imgUrl: require('../../assets/Home/tmall-eticket.png'),head: '电子产品券', p1: '心意',p2: '从这一杯开始', p3: '了解更多>'},
          {pageUrl: 'https://starbucks.tmall.com/category-1141443816.htm?spm=a1z10.1-b-s.w4006-14489348233.10.MtuIoi', imgUrl: require('../../assets/Home/tmall-reserve.png'),head: '咖啡生活', p1: '星巴克',p2: '用心制作', p3: '了解更多>'},
        ],
        // scrollLeft: require('../../assets/Home/icon-scroll-left.svg'),
        scrollLeft: require('../../assets/Home/icon-scroll-left.svg'),
        scrollRight: require('../../assets/Home/icon-scroll-right.svg'),
        cultures: [
          {title: '咖啡知识', text: '咖啡的起源与培植', imgUrl: require('../../assets/Home/culture-1.jpg')},
          {title: '咖啡品鉴', text: '咖啡调制', imgUrl: require('../../assets/Home/culture-2.jpg')},
          {title: '咖啡知识', text: '咖啡烘焙', imgUrl: require('../../assets/Home/culture-3.jpg')},
          {title: '咖啡品鉴', text: '手冲咖啡', imgUrl: require('../../assets/Home/culture-4.jpg')},
          // {title: 'more', text: 'more', imgUrl: require('../../assets/Home/icon-close.png')},
        ],
        whereCultureMove: 0
      }
    },
    created(){
      this.setClientWidthApp()
    },
    mounted(){
      setInterval(()=>{
        this.clientWidthApp = localStorage.getItem('clientWidth')
      },100)
    },
    methods:{
      setClientWidthApp(){
        this.clientWidthApp = localStorage.getItem('clientWidth')
      },
      whereToMove(){
        return {
          'margin-left': this.whereCultureMove + 'px',
          'transition': 'all 0.2s'
        }
      },
      setLeft(){
        if(this.whereCultureMove <= -271){
          this.whereCultureMove += 271
        }else if(this.whereCultureMove > -271){
          this.whereCultureMove = 0
        }
      },
      setRight(){
        if(this.whereCultureMove > -271){
          this.whereCultureMove -= 271
        }else if(this.whereCultureMove <= -271){
          this.whereCultureMove = -271*2
        }
      },
      isShowLeft(){
        if(this.whereCultureMove == 0){
          return {
            'display': 'none'
          }
        }
      },
      isShowRight(){
        if(this.whereCultureMove == -271*2){
          return {
            'display': 'none'
          }
        }
      }
    }
  }