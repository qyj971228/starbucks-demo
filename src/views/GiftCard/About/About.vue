<template>
    <div>
        <div id='top'>
            <div id='top-box'>
                <div id='top-text'>
                    <p id='top-text-tittle-s'>星巴克星礼卡</p>
                    <h2 id='top-text-tittle-l'>心意相随</h2>
                    <p class='top-text-describe'>将星礼卡绑定至星享俱乐部帐户，使用星巴克App移动支付，即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。</p>
                    <br>
                    <p class='top-text-describe'>50元/100元/200元/300元/500元 （全国通用）</p>
                    <button id='top-text-btn'>常见问题</button>
                </div>
                <div id='top-img'>
                    <img :src="topImg">
                </div>
            </div>
        </div>
        <div id='img-between'>
            <img :src="imgBetween">
        </div>
        <div id='mid'>
            <div id='mid-left'>
                <div id='mid-left-title'><p>天猫商城</p></div>
                <div id='mid-left-describe'><p>浓浓心意，送给特别的TA</p></div>
                <div id='mid-left-img-up'><img :src="midLeftImgUp"></div>
                <div id='mid-left-button'><button>前往天猫购买</button></div>
                <div id='mid-left-img-down'><img :src="midLeftImgDown"></div>
            </div>
            <div id='mid-center'>
                <div id='mid-center-title'><p>扫码赠送星礼卡</p></div>
                <div id='mid-center-img-up'><img :src="midCenterImgUp"></div>
                <div id='mid-center-img-down'><img :src="midCenterImgDown"></div>
                <div id='mid-center-describe'><p>“用星说” 全新社交礼品平台，一个简单的小行动，即刻用心说出真情实意</p></div>
            </div>
            <div id='mid-right'>
                <div id='mid-right-title'><p>公司购买</p></div>
                <div id='mid-right-describe'>
                    <p>一张星礼卡，将您的浓浓心意送给最重要的人。这份体贴而便捷的礼物替您在人际沟通中增进彼此的情感连接。</p>
                    <p>如您有公司采购需求，请拨打星巴克服务热线： <a href="">400-820-6998</a> , 将有专人为您提供服务。</p>
                </div>
                <div id='mid-right-button'><button>查看星礼卡章程</button></div>
                <div id='mid-right-img'><img :src="midLeftImg"></div>
            </div>
        </div>
        <div id='bottom'>
            <div id='bottom-head'>
                <h2>星巴克星礼卡系列</h2>
                <p>50元/100元/200元/300元/500元 （全国通用）</p>
            </div>
            <div id='bottom-items'>
                <div id='bottom-items-box' v-show='clientWidthApp > 640' >
                    <div id='bottom-items-item-box' v-for='item,index in items' :key='index'>
                        <theme id='theme' :item='item'></theme>
                    </div>
                </div>
                <div v-show='clientWidthApp <= 640'>
                    <div id='bottom-items-item' v-for='item,index in items' :key='index'>
                        <div id='bottom-items-item-title'><p>{{item.title}}</p></div>
                        <div id='bottom-items-item-img'><img :src="item.img"></div>
                        <div id='bottom-items-item-describe'>
                            <div v-for="describe,index in item.describe" :key='index'>{{describe}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='bottom-foot'>
                <button>前往天猫购买</button>
            </div>
        </div>
    </div>
</template>

<script>

import Theme from '../../../components/GiftCard/Theme.vue'

export default {
    name: 'About',
    data(){
        return{
            clientWidthApp: 0,
            topImg: require('../../../assets/GiftCard/svc-cards.png'),
            imgBetween: require('../../../assets/GiftCard/svc-wave.svg'),
            midLeftImgUp: require('../../../assets/GiftCard/svc-tmall-1.png'),
            midLeftImgDown: require('../../../assets/GiftCard/svc-tmall-2.png'),
            midCenterImgUp: require('../../../assets/GiftCard/svc-say-1.png'),
            midCenterImgDown: require('../../../assets/GiftCard/svc-say-2.png'),
            midLeftImg: require('../../../assets/GiftCard/svc-company.png'),
            items:[
                {title: '品牌主题', describe: ['香醇祝福','一直在身边'], img: require('../../../assets/GiftCard/svc-series-1.png')},
                {title: '生日快乐主题', describe: ['生日祝福送给TA','香椿快乐一起分享'], img: require('../../../assets/GiftCard/svc-series-2.png')},
                {title: '感谢主题', describe: ['一声谢谢一杯咖啡','让真挚的心意相随','让真挚的心意相随'], img: require('../../../assets/GiftCard/svc-series-3.png')},
                {title: '美人鱼主题', describe: ['在一个萦绕香醇的惬意午后','让充满灵气的曼妙鱼尾','带TA追溯美人鱼的恣意踪迹'], img: require('../../../assets/GiftCard/svc-series-4.png')},
                {title: '咖啡主题', describe: ['谢谢你送的咖啡','失落时为我打气','成功时为我开心'], img: require('../../../assets/GiftCard/svc-series-5.png')},
                {title: '爱情主题', describe: ['也许挚爱的模样很简单','你在闹我在笑,相看两不厌','深情藏心间'], img: require('../../../assets/GiftCard/svc-series-6.png')},
            ]
        }
    },
    components:{
        Theme,
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
    }
}
</script>
<style lang='less' scoped>
    #top{
        background-color: #00a862;
        position: relative;
        #top-box{
            margin: auto;
            padding-top: 50px;
            padding-bottom: 30px;
            width: 80%;
            #top-text{
                vertical-align: top;
                display: inline-block;
                width: 50%;
                p,h2,button{
                    color: white;
                }
                #top-text-tittle-s{
                    font-weight: bolder;
                    opacity: 0.5;
                }
                #top-text-tittle-l{
                    font-size: 200%;
                    font-weight: normal;
                }
                .top-text-describe{
                    line-height: 150%;
                }
                #top-text-btn{
                    height: 40px;
                    width: 104px;
                    border: 1px solid white;
                    background-color: #00A862;
                    font-size: 15px;
                    color: white;
                    border-radius: 20px;
                    cursor:pointer;
                }
                
            }
            #top-img{
                vertical-align: top;
                margin-left: 50px;
                width: 30%;
                display: inline-block;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
        
        
    }
    #img-between{
        width: 100%;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }
    #mid{
        text-align: center;
        width: 100%;
        display: flex;
        margin-top: -50px;
        position: relative;
        img{
            height: 100%;
            width: 100%;
        }
        #mid-left{
            width: 33%;
            display: inline-block;
            background-color: #C7BC87;
            vertical-align: top;
            padding-top: 72px;
            position: relative;
            #mid-left-title{
                color: #AA744a;
                opacity: 0.7;
                font-weight: bolder;
                font-size: 80%;
                margin-bottom: 20px;
            }
            #mid-left-describe{
                width: 90%;
                display: inline-block;
                font-weight: bolder;
                color: white;
                font-size: 120%;
                margin-bottom: 20px;
            }
            #mid-left-button{
                margin-top: 50px;
                button{
                    height: 40px;
                    width: 124px;
                    border: 1px solid white;
                    background-color: #C7BC87;
                    font-size: 15px;
                    color: white;
                    border-radius: 20px;
                    cursor:pointer;
                }
            }
            #mid-left-img-up{
                width: 90%;
                display: inline-block;
            }
            #mid-left-img-down{
                position: absolute;
                transform: translateX(-50%);
                bottom: 0;
                width: 90%;
                display: inline-block;
            }
        }
        #mid-center{
            width: 34%;
            display: inline-block;
            background-image: linear-gradient(-180deg, #36B35F 3%, #00A862 98%);
            vertical-align: top;
            padding-top: 72px;
            #mid-center-title{
                color: white;
                opacity: 0.7;
                font-weight: bolder;
                font-size: 80%;
            }
            #mid-center-describe{
                display: inline-block;
                width: 90%;
                color: white;
                line-height: 150%;
            }
            #mid-center-img-up{
                width: 50%;
                display: inline-block;
                margin-bottom: 20px;
            }
            #mid-center-img-down{
                width: 90%;
                display: inline-block;
                margin-bottom: 20px;
            }
        }
        #mid-right{
            width: 33%;
            display: inline-block;
            background-color: #EDEBE9;
            vertical-align: top;
            padding-top: 72px;
            #mid-right-title{
                color: black;
                opacity: 0.7;
                font-weight: bolder;
                font-size: 80%;
            }
            #mid-right-describe{
                display: inline-block;
                width: 90%;
                color: black;
                line-height: 200%;
                opacity: 0.5;
                a{
                    color: #00A862;
                    text-decoration: none;
                }
            }
            #mid-right-button{
                button{ 
                    height: 40px;
                    width: 144px;
                    border: 1px solid #00A862;
                    background-color: #EDEBE9;
                    font-size: 15px;
                    color: #00A862;
                    border-radius: 20px;
                    cursor:pointer;
                }
            }
            #mid-right-img{
                width: 90%;
                display: inline-block;
            }
        }
    }
    #bottom{
        #bottom-head{
            margin-top: 40px;
            text-align: center;
            h2{
                font-weight: normal;
            }
            p{
                font-weight: bolder;
                opacity: 0.6;
                font-size: 80%;
            }
        }
        #bottom-items{
            width: 100%;
            #bottom-items-box{
                width: 720px;
                margin: auto;
                // border: 1px solid red;
                #bottom-items-item-box{
                    margin: 20px 10px;
                    height: 340px;
                    display: inline-block;
                    width: 30%;
                }
            }
        }
        #bottom-foot{
            text-align: center;
            margin-bottom: 80px;
            button{
                height: 40px;
                width: 124px;
                border: 1px solid #00a862;
                background-color: white;
                font-size: 15px;
                color: #00a862;
                border-radius: 20px;
                cursor:pointer;
            }
        }
    }
    @media only screen and (min-width: 640px) and (max-width: 1200px){
        #bottom{
            #bottom-items{
                width: 100%;
                #bottom-items-box{
                    width: 640px;
                    margin: auto;
                    margin-bottom: 50px;
                    // border: 1px solid red;
                    #bottom-items-item-box{
                        margin: 20px 10px;
                        height: 340px;
                        display: inline-block;
                        width: 300px;
                        
                        // border: 1px solid green;
                    }
                }
            }
        }
    }
    @media only screen and (max-width:640px) {
        #top{
            #top-box{
                #top-text{
                    width: 100%;
                    display: block;
                }
                #top-img{
                    width: 50%;
                    display: block;
                }
            }
            
        }
        #mid{
            display: block;
            #mid-left{
                width: 100%;
                #mid-left-img-down{
                    transform: none;
                    position: relative;
                    margin: auto;
                    width: 50%;
                    display: inline-block;
                }
            }
            #mid-center{
                width: 100%;
                padding-top: 20px;
                #mid-center-img-up,#mid-center-img-down{
                    width: 50%;
                    display: block;
                    margin: auto;
                }
            }
            #mid-right{
                width: 100%;
                padding-top: 20px;
                #mid-right-img{
                    width: 50%;
                }
            }
        }
        #bottom{
            #bottom-items{
                margin: auto;
                width: 90%;
                // border: 1px solid red;
                #bottom-items-item{
                    overflow: hidden;
                    border-radius: 3px;
                    position: relative;
                    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 20%);
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    // border: 1px solid green;
                    &:hover{
                        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 30%);
                    }
                    #bottom-items-item-title{
                        color: white;
                        position: absolute;
                        background-color: #C2A661;
                        padding: 5px 10px;
                        height: 25px;
                        top: 10px;
                        p{
                            margin: 0;
                        }
                    }
                    #bottom-items-item-describe{
                        margin-top: 10px;
                        margin-left: 20px;
                        opacity: 0.7;
                        line-height: 150%;
                    }
                    #bottom-items-item-img{
                        height: 168px;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }
</style>