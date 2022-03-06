<template>
    <div>
        <div class='progress' v-for="item,index in progress" :key='index'>
            <div class='title'>{{item.title}}</div>
            <div class='out'>
                <div :class='{"fill-short":item.fill == "short","fill-medium":item.fill == "medium","fill-long":item.fill == "long"}'>
                    <img :src="fill">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CommodyProgress',
    props: {
        progress:{
            type: Array
        }
    },
    data(){
        return{
            fill: require('../../assets/CommodyProgress/menu-bg-apron.png')
        }
    }
}
</script>
<style lang='less' type='text/less' scoped>
.progress{
    margin-top: 20px;;
    margin-bottom: 12px;
    .title{
        font-weight: lighter;
        margin-bottom: 12px;
    }
    .out{
        width:100%;
        height:8px
        ;background-color:rgb(214, 214, 214);
        border-radius: 5px;
    }
    .fill-short, .fill-medium, .fill-long{
        height:8px;
        border-radius: 5px;
        overflow: hidden;
    }
    .fill-short{
        width:25%;
    }
    .fill-medium{
        width:50%;
    }
    .fill-long{
        width:75%;
    }
}
</style>
