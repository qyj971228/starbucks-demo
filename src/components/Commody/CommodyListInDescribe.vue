<template>
    <div>
        <div class='text-list' v-for="item,index in describeList" :key='index'>
            <div class='text-list-title'>{{item.title}}</div>
            <div class='text-list-describe'>{{item.content}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CommodyListInDescribe',
    props: {
        describeList:{
            type: Array,
        }
    }
}
</script>
<style lang='less' type='text/less' scoped>
.text-list{
    border-bottom: 1px solid rgba(0, 0, 0, 10%);
    .text-list-title{
        opacity: 0.6;
        font-weight: bolder;
        vertical-align: middle;
        display:inline-block;width:20%;
        padding: 12px 0;
    }
    .text-list-describe{
        font-weight: lighter;
        vertical-align: middle;
        display:inline-block;width:80%;
        padding: 12px 0;
    }
}
</style>
