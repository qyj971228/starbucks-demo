<template>
    <div style="display:inline-block;">
        <div :class='{commodySearchButton: !isOpenSearch, commodySearchButtonOpen: isOpenSearch}' >
            <p v-show='!isOpenSearch' @click="setOpen()">&lt;搜索菜单</p>
            <p v-show='isOpenSearch' @click="setOpen()">搜索菜单&gt;</p>
            <input v-show='isOpenSearch' class='searchFile' style="" type="text" v-model="searchCondition">
            <p v-show='isOpenSearch' style="left: auto;right:30px;" @click="doSearch()">搜索</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CommodySearchButton',
    props:['search'],
    data(){
        return{
            isOpenSearch: false,
            searchCondition: '',
            result: [
                {
                    name: '搜索结果',
                    list:[]
                }
            ],
        }
    },
    methods:{
        doSearch(){
            for(let i = 0; i < this.search.length; i++){
                for(let j = 0; j < this.search[i].list.length; j++){
                    if(this.search[i].list[j].text.search(this.searchCondition) != -1){
                        this.result[0].list.push(this.search[i].list[j])
                    }
                }
            }
            this.$emit('result',this.result)
            this.result = [{name: '搜索结果',list:[]}]
        },
        setNames(){
            for(let i = 0; i < this.search.length; i++){
                for(let j = 0; j < this.search[i].list.length; j++){
                    this.names.push(this.search[i].list[j].text)
                }
            }
        },
        setOpen(){
            this.isOpenSearch = !this.isOpenSearch
        },
    }
}
</script>
<style lang='less' type='text/less' scoped>

.commodySearchButton{
    margin-top: 3px;
    margin-bottom: 3px;
    height: 52px;
    width: 125px;
    color: white;
    background-color: #00A862;
    border-radius: 50px;
    font-size: 105%;
    text-align: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,38%);
    position: relative;
    transition: all 0.2s;
    animation-name: show;
    animation-duration: 0.1s;
    @keyframes show {
        from{
            transform: scale(0.2,0.2);
        }
        to{
            transform: scale(1,1);
        }
    }
    p{
        cursor: pointer;
        position: absolute;
        top: -2px;
        left: 22px;
        font-weight: bolder;
        &:hover{
            font-weight: lighter;
        }
    }
    &:hover{
        background-color: #11B973;
    }
    &:active{
        margin-top: 6px;
        margin-bottom: 0px;
        transition: all 0.1s;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,20%);
    }
}
.commodySearchButtonOpen{
    margin-top: 3px;
    margin-bottom: 3px;
    height: 52px;
    width: 300px;
    color: white;
    background-color: #00A862;
    border-radius: 50px;
    font-size: 105%;
    text-align: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,38%);
    position: relative;
    transition: all 0.2s;
    animation-name: show;
    animation-duration: 0.1s;
    @keyframes show {
        from{
            transform: scale(0.2,0.2);
        }
        to{
            transform: scale(1,1);
        }
    }
    p{
        cursor: pointer;
        position: absolute;
        top: -2px;
        left: 22px;
        font-weight: bolder;
        &:hover{
            font-weight: lighter;
        }
    }
    &:hover{
        background-color: #11B973;
    }
    &:active{
        margin-top: 6px;
        margin-bottom: 0px;
        transition: all 0.1s;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,20%);
    }
    
}
.searchFile{
    width: 100px;
    height: 30px;
    margin-top: 10px;
    margin-left: 30px;
    border-radius: 5px;
    border: 0;
}
</style>
