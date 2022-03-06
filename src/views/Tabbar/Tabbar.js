export default {
    name: 'Tabbar',
    data(){
        return{
            transitionName: '',

            list: {
                lastTitle:'',
                lastRoute: '',
                title: '',
                // isShowButton: '',
                tags: '',
                isShowLastTitle: false,
            },
            isShowList: false,
            // isNotFirst: false,

            tagCurrentIndex: 0,

            miniTabbarCurrentIndex: -1,

            bodyTagsMarginLeft: 50,

            clientWidth: 0,
  
            close: require('../../assets/tabbar/icon-close.png'),
            hamburger: require('../../assets/tabbar/icon-hamburger.svg'),
            menuBack: require('../../assets/tabbar/icon-chevron-left.svg'),
            login: require('../../assets/tabbar/icon-account.svg'),
            logo: require('../../assets/tabbar/logo.svg'),
            tagsControlRight: require('../../assets/tabbar/icon-chevron-left.svg'),
            tagsControlLeft: require('../../assets/tabbar/tags-control-left.png'),

            miniMore: require('../../assets/tabbar/icon-more.svg'),
            miniMoreActive: require('../../assets/tabbar/icon-more-active.svg'),
            
            miniTabbarItems:[
                {name: '主页', path: '/home', imgUrl: require('../../assets/tabbar/icon-home.svg'), activeImgUrl: require('../../assets/tabbar/icon-home-active.svg'),},
                {name: '门店', path: '', imgUrl: require('../../assets/tabbar/icon-stores.svg'), activeImgUrl: require('../../assets/tabbar/icon-stores-active.svg'),},
                {name: '我的账户', path: '/profile/login', imgUrl: require('../../assets/tabbar/icon-account.svg'), activeImgUrl: require('../../assets/tabbar/icon-account-active.svg'),},
                {name: '菜单', path: '/menu/allmenu', imgUrl: require('../../assets/tabbar/icon-menu.svg'), activeImgUrl: require('../../assets/tabbar/icon-menu-active.svg'),},
            ],
            
            headLinks:[
                {name: '门店', path: ''},
                {name: '俱乐部', path: '/profile/aboutclub'},
                {name: '菜单', path: '/menu/allmenu'},
            ],

            listLinks: [
                {name: '星巴克移动应用', path: '/apps/app', target: 'default'},
                {name: '星礼卡', path: '/gift-card/about', target: 'default'},
                {name: '关于星巴克臻选™', path: '/reserve', target: 'default'},
                {name: '啡快™ － 在线点 到店取', path: '/starbucks-now', target: 'default'},
                {name: '专星送™', path: '/starbucks-delivers-info', target: 'default'},
                {name: '咖啡星讲堂', path: '', target: '_blank'},
                // {name: '上海烘焙工坊', path: '', target: '_blank'},
                {name: '关于星巴克', path: '', target: 'default'},
                {name: '帮助中心', path: '', target: 'default'},
            ],

            ListMsg: {
                Home: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '心情惬意，来杯咖啡吧 ☕',
                    //   isShowButton : true, 
                    isShowLastTitle : false, 
                    tags : []
                },
                Profile: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '登录或创建一个新帐户 🌟',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : [
                        {name: '登录', route: '/profile/login'},
                        {name: '注册', route: '/profile/register'},
                        {name: '关于星享俱乐部', route: '/profile/aboutclub'}
                    ]
                },
                Menu: {
                    All: {
                        lastTitle: '',
                        lastRoute: '',
                        title: '菜单',
                        //   isShowButton : false, 
                        isShowLastTitle : false, 
                        tags : [
                            {name: '全部', route: '/menu/allmenu'},
                            {name: '饮料', route: '/menu/drink'},
                            {name: '美食', route: '/menu/food'},
                            {name: '咖啡产品', route: '/menu/coffee'},
                            {name: '商品', route: '/menu/product'}
                        ],
                    },
                    Drink: {
                        lastTitle : '菜单',
                        lastRoute : '/menu/allmenu',
                        title: '饮料',
                        //   isShowButton : false, 
                        isShowLastTitle : true,
                        tags : [
                            {name: '全部', route: '/menu/drink'},
                            {name: '星巴克玩味冰调™', route: '/menu/drink/modern-mixology'},
                            {name: '手工调制浓缩咖啡', route: '/menu/drink/espresso'},
                            {name: '星冰乐®', route: '/menu/drink/frappuccino-blended-beverage'},
                            {name: '茶瓦纳™', route: '/menu/drink/teavana'},
                            {name: '经典巧克力饮品', route: '/menu/drink/signature-chocolate-beverage'},
                            {name: '咖啡融合冰淇淋', route: '/menu/drink/coffee-plus-ice-cream'},
                            {name: '星巴克冷萃咖啡系列', route: '/menu/drink/cold-brew'},
                            {name: '气致™冷萃咖啡', route: '/menu/drink/nitro-cold-brew'},
                        ],
                        tagsChild:{
                            ModernMixology: {
                                lastTitle : '星巴克玩味冰调™', lastRoute : '/menu/drink/modern-mixology', title : '', isShowLastTitle : true, tags : [],
                            },
                            Espresso: {
                                lastTitle : '手工调制浓缩咖啡', lastRoute : '/menu/drink/espresso', title : '', isShowLastTitle : true, tags : [],
                            },
                            FrappuccinoBlendedBeverage: {
                                lastTitle : '星冰乐®', lastRoute : '/menu/drink/frappuccino-blended-beverage', title : '', isShowLastTitle : true, tags : [],
                            },
                            Teavana: {
                                lastTitle : '茶瓦纳™', lastRoute : '/menu/drink/teavana', title : '', isShowLastTitle : true, tags : [],
                            },
                            SignatureChocolateBeverage: {
                                lastTitle : '经典巧克力饮品', lastRoute : '/menu/drink/signature-chocolate-beverage', title : '', isShowLastTitle : true, tags : [],
                            },
                            
                        }
                    },
                    Food: {
                        lastTitle : '菜单',
                        lastRoute : '/menu/allmenu',
                        title : '美食',
                        //   isShowButton : false,
                        isShowLastTitle : true,
                        tags : [
                            {name: '全部',route: '/menu/food'},
                            {name: '烘焙',route: '/menu/food/bakery'},
                            {name: '蛋糕&甜品',route: '/menu/food/cake-dessert'},
                            {name: '三明治、帕尼尼、卷',route: '/menu/food/sandwich'},
                            {name: '酸奶',route: '/menu/food/yoghurt'},
                            {name: '其他美食',route: '/menu/food/package'},
                            {name: '早安新一天',route: '/menu/food/great-breakfast'}
                        ],
                        tagsChild:{
                            Bakery: {
                                lastTitle : '烘焙', lastRoute : '/menu/food/bakery', title : '', isShowLastTitle : true, tags : [],
                            },
                            CakeDessert: {
                                lastTitle : '蛋糕&甜品', lastRoute : '/menu/food/cake-dessert', title : '', isShowLastTitle : true, tags : [],
                            },
                            Sandwich: {
                                lastTitle : '三明治、帕尼尼、卷', lastRoute : '/menu/food/sandwich', title : '', isShowLastTitle : true, tags : [],
                            },
                            Yoghurt: {
                                lastTitle : '酸奶', lastRoute : '/menu/food/yoghurt', title : '', isShowLastTitle : true, tags : [],
                            },
                            Package: {
                                lastTitle : '其他美食', lastRoute : '/menu/food/package/', title : '', isShowLastTitle : true, tags : [],
                            }
                            
                        }
                    },
                    Coffee: {
                        All:{
                            lastTitle : '菜单',
                            lastRoute : '/menu/allmenu',
                            title : '咖啡产品',
                            //   isShowButton : false,
                            isShowLastTitle : true,
                            tags : [
                                {name: '全部', route: '/menu/coffee'},
                                {name: '咖啡豆', route: '/menu/coffee/whole-bean'},
                                {name: '星巴克VIA® 免煮咖啡', route: '/menu/coffee/starbucks-via'},
                                {name: '星巴克臻选™咖啡', route: '/menu/coffee/starbucks-reserve'},
                                {name: 'Origami™', route: '/menu/coffee/starbucks-origami'},
                            ],
                            tagsChild: {
                                StarbucksReserve: { 
                                    lastTitle : '星巴克臻选™咖啡', lastRoute : '/menu/coffee/starbucks-reserve', title : '', isShowLastTitle : true, tags : [],
                                },
                            }
                        },
                        WholeBean: {
                            lastTitle : '咖啡产品',
                            lastRoute : '/menu/coffee',
                            title : '咖啡豆',
                            //   isShowButton : false,
                            isShowLastTitle : true,
                            tags : [
                                {name: '全部', route: '/menu/coffee/whole-bean'},
                                {name: '中度烘焙咖啡豆', route: '/menu/coffee/whole-bean/medium-roast'},
                                {name: '深度烘焙咖啡豆', route: '/menu/coffee/whole-bean/dark-roast'},
                            ],
                            tagsChild: {
                                MediumRoast: { 
                                    lastTitle : '中度烘焙咖啡豆', lastRoute : '/menu/coffee/whole-bean/medium-roast', title : '', isShowLastTitle : true, tags : [],
                                },
                                DarkRoast: { 
                                    lastTitle : '深度烘焙咖啡豆', lastRoute : '/menu/coffee/whole-bean/dark-roast', title : '', isShowLastTitle : true, tags : [],
                                },
                            }
                        },
                        StarbucksVia: {
                            lastTitle : '咖啡产品',
                            lastRoute : '/menu/coffee',
                            title : '星巴克VIA® 免煮咖啡',
                            //   isShowButton : false,
                            isShowLastTitle : true,
                            tags : [
                                {name: '全部', route: '/menu/coffee/starbucks-via'},
                                {name: 'VIA® Dairy', route: '/menu/coffee/starbucks-via/via-dairy'},
                                {name: 'VIA® Black', route: '/menu/coffee/starbucks-via/via-black'},
                            ],
                            tagsChild: {
                                ViaDairy: { 
                                    lastTitle : 'VIA® Dairy', lastRoute : '/menu/coffee/starbucks-via/via-dairy', title : '', isShowLastTitle : true, tags : [],
                                },
                                ViaBlack: { 
                                    lastTitle : 'VIA® Black', lastRoute : '/menu/coffee/starbucks-via/via-black', title : '', isShowLastTitle : true, tags : [],
                                },
                            }
                        },
                        StarbucksOrigami: {
                            lastTitle : '咖啡产品',
                            lastRoute : '/menu/coffee',
                            title : 'Origami™',
                            //   isShowButton : false,
                            isShowLastTitle : true,
                            tags : [
                                {name: '全部', route: '/menu/coffee/starbucks-origami'},
                                {name: 'Origami™ 中度烘焙', route: '/menu/coffee/starbucks-origami/medium-roast'},
                                {name: 'Origami™ 深度烘焙', route: '/menu/coffee/starbucks-origami/dark-roast'},
                                {name: '关于Origami™', route: '/menu/coffee/starbucks-origami/about-origami'},
                            ],
                            tagsChild: {
                                MediumRoast: { 
                                    lastTitle : 'Origami™ 中度烘焙', lastRoute : '/menu/coffee/starbucks-origami/medium-roast', title : '', isShowLastTitle : true, tags : [],
                                },
                                DarkRoast: { 
                                    lastTitle : 'Origami™ 深度烘焙', lastRoute : '/menu/coffee/starbucks-origami/dark-roast', title : '', isShowLastTitle : true, tags : [],
                                },
                            }
                        }
                    },
                    Product:{
                        lastTitle : '菜单',
                        lastRoute : '/menu/allmenu',
                        title : '商品',
                        //   isShowButton : false,
                        isShowLastTitle : true,
                        tags : [
                            {name: '全部', route: '/menu/product'},
                            {name: '常规产品', route: '/menu/product/core-merchandise-2017'},
                            {name: '臻选产品', route: '/menu/product/reserve-store-merchandise'}],
                        tagsChild:{
                            CoreMerchandise2017: { 
                                lastTitle : '常规产品', lastRoute : '/menu/product/core-merchandise-2017', title : '', isShowLastTitle : true, tags : [],
                            },
                            ReserveStoreMerchandise: {
                                lastTitle : '臻选产品', lastRoute : '/menu/product/reserve-store-merchandise', title : '', isShowLastTitle : true, tags : [],
                            }
                        }
                        
                    },
                }, 
                Apps: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '星巴克移动应用',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : [
                        {name: '星巴克移动应用', route: '/apps/app'},
                        {name: '星巴克 Apple Watch', route: '/apps/watch'},
                    ]
                },
                GiftCard: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '星礼卡',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : [
                        {name: '关于星礼卡', route: '/gift-card/about'},
                        {name: '管理星礼卡', route: '/gift-card/query'},
                        {name: '发票处理进度查询', route: '/gift-card/invoice'},
                    ]
                },
                Reserve: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '关于星巴克臻选™',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : []
                },
                StarbucksNow: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '啡快™ － 在线点 到店取',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : []
                },
                StarbucksDeliversInfo: {
                    lastTitle: '',
                    lastRoute: '',
                    title: '专星送™',
                    //   isShowButton : false, 
                    isShowLastTitle : false, 
                    tags : []
                },
            },
        }
    },
    watch: {
      $route(to,from) {
            this.isShowList = false
            this.setClientWidth()
            this.tabbarDataSetByRoute()
            this.miniTabbarSetByRoute()
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      },
    },
    mounted(){
        window.onresize = () => {
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            localStorage.setItem('clientWidth', this.clientWidth)
        }
    },
    created(){
        this.setClientWidth()
        this.tabbarDataSetByRoute()
        this.miniTabbarSetByRoute()
    },
    methods: {
        rightMove(){
            this.bodyTagsMarginLeft += 200
        },
        leftMove(){
            this.bodyTagsMarginLeft -= 200
        },
        whereToMove(){
            if (this.clientWidth < 1200){
                return{
                    'margin-left' : this.bodyTagsMarginLeft + 'px',
                    'transition': 'all 0.2s'
                }
            }
        },
        setClientWidth(){
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            localStorage.setItem('clientWidth', this.clientWidth)
        },
        setList(Msg){
          this.list.lastTitle = Msg.lastTitle
          this.list.lastRoute = Msg.lastRoute
          this.list.title = Msg.title
        //   this.list.isShowButton = Msg.isShowButton
          this.list.tags = Msg.tags
          this.list.isShowLastTitle = Msg.isShowLastTitle
        },
        headPathCheck(checkHead){
            return this.$route.path.substring(0,checkHead.length) == checkHead
        },
        tagCurrentIndexSetByRoute(tags){
            for(let index = 0; index < tags.length; index++){
                if(this.$route.path == tags[index].route){
                    this.tagCurrentIndex = index
                }
            }
        },
        miniTabbarSetByRoute(){
            if(this.$route.path == '/home'){
                this.miniTabbarCurrentIndex = 0
            }else if(this.$route.path == ''){
                this.miniTabbarCurrentIndex = 1
            }else if(this.headPathCheck('/profile')){
                this.miniTabbarCurrentIndex = 2
            }else if(this.headPathCheck('/menu')){
                this.miniTabbarCurrentIndex = 3
            }
        },
        tabbarDataSetByRoute(){
            if(this.$route.path == '/home'){ 
                this.setList(this.ListMsg.Home)
            }else if(this.headPathCheck('/profile')){
                this.setList(this.ListMsg.Profile)
                this.tagCurrentIndexSetByRoute(this.ListMsg.Profile.tags)
            }else if(this.$route.path == '/menu/allmenu'){
                this.setList(this.ListMsg.Menu.All)
                this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.All.tags)
            }else if(this.headPathCheck('/menu/drink')){
                if(this.headPathCheck('/menu/drink/modern-mixology/')){
                    this.setList(this.ListMsg.Menu.Drink.tagsChild.ModernMixology)
                }else if(this.headPathCheck('/menu/drink/espresso/')){
                    this.setList(this.ListMsg.Menu.Drink.tagsChild.Espresso)
                }else if(this.headPathCheck('/menu/drink/frappuccino-blended-beverage/')){
                    this.setList(this.ListMsg.Menu.Drink.tagsChild.FrappuccinoBlendedBeverage)
                }else if(this.headPathCheck('/menu/drink/teavana/')){
                    this.setList(this.ListMsg.Menu.Drink.tagsChild.Teavana)
                }else if(this.headPathCheck('/menu/drink/signature-chocolate-beverage/')){
                    this.setList(this.ListMsg.Menu.Drink.tagsChild.SignatureChocolateBeverage)
                }else{
                    this.setList(this.ListMsg.Menu.Drink)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Drink.tags)
                }
            }else if(this.$route.path == '/menu/coffee'){
                this.setList(this.ListMsg.Menu.Coffee.All)
                this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Coffee.All.tags)
            }else if(this.$route.path == '/menu/coffee/starbucks-reserve'){
                if(this.headPathCheck('/menu/coffee/starbucks-reserve/')){
                    this.setList(this.ListMsg.Menu.Coffee.All.tagsChild.StarbucksReserve)
                }else{
                    this.setList(this.ListMsg.Menu.Coffee.All)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Coffee.All.tags)
                }
            }else if(this.headPathCheck('/menu/coffee/whole-bean')){
                if(this.headPathCheck('/menu/coffee/whole-bean/medium-roast/')){
                    this.setList(this.ListMsg.Menu.Coffee.WholeBean.tagsChild.MediumRoast)
                }else if(this.headPathCheck('/menu/coffee/whole-bean/dark-roast/')){
                    this.setList(this.ListMsg.Menu.Coffee.WholeBean.tagsChild.DarkRoast)
                }else{
                    this.setList(this.ListMsg.Menu.Coffee.WholeBean)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Coffee.WholeBean.tags)
                }
            }else if(this.headPathCheck('/menu/coffee/starbucks-via')){
                if(this.headPathCheck('/menu/coffee/starbucks-via/via-dairy/')){
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksVia.tagsChild.ViaDairy)
                }else if(this.headPathCheck('/menu/coffee/starbucks-via/via-black/')){
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksVia.tagsChild.ViaBlack)
                }else{
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksVia)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Coffee.StarbucksVia.tags)
                }
            }else if(this.headPathCheck('/menu/coffee/starbucks-origami')){
                if(this.headPathCheck('/menu/coffee/starbucks-origami/medium-roast-origami/')){
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksOrigami.tagsChild.MediumRoast)
                }else if(this.headPathCheck('/menu/coffee/starbucks-origami/dark-roast-origami/')){
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksOrigami.tagsChild.DarkRoast)
                }else{
                    this.setList(this.ListMsg.Menu.Coffee.StarbucksOrigami)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Coffee.StarbucksOrigami.tags)
                }
            }else if(this.headPathCheck('/menu/food')){
                if(this.headPathCheck('/menu/food/bakery/')){
                    this.setList(this.ListMsg.Menu.Food.tagsChild.Bakery)
                }else if(this.headPathCheck('/menu/food/cake-dessert/')){
                    this.setList(this.ListMsg.Menu.Food.tagsChild.CakeDessert)
                }else if(this.headPathCheck('/menu/food/sandwich/')){
                    this.setList(this.ListMsg.Menu.Food.tagsChild.Sandwich)
                }else if(this.headPathCheck('/menu/food/yoghurt/')){
                    this.setList(this.ListMsg.Menu.Food.tagsChild.Yoghurt)
                }else if(this.headPathCheck('/menu/food/package/')){
                    this.setList(this.ListMsg.Menu.Food.tagsChild.Package)
                }else{
                    this.setList(this.ListMsg.Menu.Food)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Food.tags)
                }
            }else if(this.headPathCheck('/menu/product')){
                if(this.headPathCheck('/menu/product/core-merchandise-2017/')){
                    this.setList(this.ListMsg.Menu.Product.tagsChild.CoreMerchandise2017)
                }else if(this.headPathCheck('/menu/product/reserve-store-merchandise/')){
                    this.setList(this.ListMsg.Menu.Product.tagsChild.ReserveStoreMerchandise)
                }else{
                    this.setList(this.ListMsg.Menu.Product)
                    this.tagCurrentIndexSetByRoute(this.ListMsg.Menu.Product.tags)
                }
            }else if(this.headPathCheck('/app')){
                this.setList(this.ListMsg.Apps)
                this.tagCurrentIndexSetByRoute(this.ListMsg.Apps.tags)
            }else if(this.headPathCheck('/gift-card')){
                this.setList(this.ListMsg.GiftCard)
                this.tagCurrentIndexSetByRoute(this.ListMsg.GiftCard.tags)
            }else if(this.headPathCheck('/reserve')){
                this.setList(this.ListMsg.Reserve)
                this.tagCurrentIndexSetByRoute(this.ListMsg.Reserve.tags)
            }else if(this.headPathCheck('/starbucks-now')){
                this.setList(this.ListMsg.StarbucksNow)
                this.tagCurrentIndexSetByRoute(this.ListMsg.StarbucksNow.tags)
            }else if(this.headPathCheck('/starbucks-delivers-info')){
                this.setList(this.ListMsg.StarbucksDeliversInfo)
                this.tagCurrentIndexSetByRoute(this.ListMsg.StarbucksDeliversInfo.tags)
            }
        },
        showList(){
            // this.isNotFirst = true
            this.isShowList = !this.isShowList
        },
        getTagCurrentIndex(index){
            this.tagCurrentIndex = index
        },
        setMiniTabbarCurrentIndex(index){
            this.miniTabbarCurrentIndex = index
        }
    }
}