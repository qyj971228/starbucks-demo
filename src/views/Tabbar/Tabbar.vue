<template>
    <div>
        <!-- list -->
        <div id='list' v-show='isShowList'>
            <router-link id='list-logo' to="/home"><img :src='logo'></router-link>
            <div id='list-hamburger' @click=showList>
                <img :src="isShowList?close:hamburger">
            </div>
            <div :style="{}">
                <div id='list-links'>
                    <router-link class='listLink' v-for='(item) in headLinks' :key='item.name' :to='item.path'>
                        <div>{{item.name}}</div>
                    </router-link>
                    <hr align=left width='80%'/>
                    <router-link class='listLink' v-for='(item) in listLinks' :target='item.target' :key='item.name' :to='item.path'>
                        <div>{{item.name}}</div>
                    </router-link>
                    <hr align=left width='80%'/>
                </div>
                <div id='list-buttons'>
                    <div id='list-login'>
                        <router-link to='/profile/login'><img :src='login'><span>登录</span></router-link>
                    </div>
                    <div id='list-register'>
                        <router-link to='/profile/register'><button>注册</button></router-link>
                    </div>
                </div>
                <div id='list-describes'>
                    <p id='list-describe'>English | 隐私政策 | 使用条款</p>
                </div>
            </div>
            
        </div>
        <!-- mini-tabbar -->
        <div id='mini-tabbar' v-show="clientWidth < 640 ">
        <!-- <div id='mini-tabbar' v-show="!(clientWidth < 640 && isShowList)"> -->
            <div id='mini-tabbar-items'>
                <div class='miniTabbarItem'  v-for='item,index in miniTabbarItems' :key='item.name' @click="setMiniTabbarCurrentIndex(index)">
                    <router-link style="text-decoration:none;" :to='item.path'>
                        <img :src='miniTabbarCurrentIndex == index ? item.activeImgUrl : item.imgUrl'>
                        <p :class="{'green' : miniTabbarCurrentIndex == index}">{{item.name}}</p>
                    </router-link>
                </div>
                <div class='miniTabbarItem' @click=showList>
                    <img :src="miniMore">
                    <p>更多</p>
                </div>
            </div>
        </div>
        <!-- tabbar -->
        <div id='tabbar'>
        <!-- <div id='tabbar' v-show='!(clientWidth<1200 && isShowList)'> -->
            <div id='head'>
                <router-link id='head-logo' to="/home"><img :src='logo'></router-link>
                <div id='head-bar'>
                    <router-link class='headBarText' v-for='(item) in headLinks' :key='item.name' :to='item.path'>
                        <div>{{item.name}}</div>
                    </router-link>
                </div>
                <div id='head-hamburger' @click=showList>
                    <img :src="isShowList?close:hamburger">
                </div>
            </div>

            <div id='body'>
                <div id='body-module'>
                <!-- <div id='body-module' v-show='!isShowList'> -->
                    <div id='body-last-title' v-show="list.isShowLastTitle">
                        <router-link :to='list.lastRoute'>
                            <img :src='menuBack'>
                            <span class='menuBack'>{{list.lastTitle}}</span>
                        </router-link>
                    </div>
                    <div id='body-title'>{{list.title}}</div>
                    <div id='body-tags-control-right' @click="rightMove" v-show="list.tags.length != 0 && clientWidth<1200 && $route.path.substring(0,'/menu'.length) == '/menu'">
                        <img :src='tagsControlRight' >
                    </div>
                    <div id='body-tags-control-left' style="transform:rotate(180deg);"  @click="leftMove" v-show="list.tags.length != 0 && clientWidth<1200 && $route.path.substring(0,'/menu'.length) == '/menu'">
                        <img :src='tagsControlRight' >
                    </div>
                    <div id='body-tags' :style='whereToMove()'>
                        <div id='body-tags-tag' v-for="item,index in list.tags" :key='index'>
                            <router-link class='bodyTagsTagOriginal' :to="item.route">
                                <span @click="getTagCurrentIndex(index)" :class="{'tagChosen' : tagCurrentIndex == index,'tagNotChosen' : tagCurrentIndex != index}">
                                    {{item.name}}
                                </span>
                            </router-link>
                        </div>
                    </div>
                    <div id='body-login' v-show='$route.path=="/home"'>
                        <router-link to='/profile/login'><img :src='login'><span>登录</span></router-link>
                    </div>
                    <div id='body-register' v-show='$route.path=="/home"'>
                        <router-link to='/profile/register'><button>注册</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <router-view :style='"background-color: rgba(200, 200, 200, 10%);"' v-show='!(clientWidth<1200 && isShowList)' id='pages'/> -->

        <div id='out-of-pages'>
            <transition :name='transitionName'>
                <router-view v-show='!(clientWidth<1200 && isShowList)' id='pages'/>
            </transition>
        </div>
        


    </div>
</template>

<script>
    import Tabbar from './Tabbar'
    export default Tabbar
</script>


<style lang='less' src="./Tabbar.less" type='text/less' scoped></style>