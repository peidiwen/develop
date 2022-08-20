<template>
        <div class="cpage" >
        <h3>个人简介</h3>
        <div class="first_page">
            <ul>
                <li v-for="p in ps">
                    <p>{{p.title}}：</p>    &nbsp;<p>{{p.info}}</p>
                </li>
            </ul>
        </div>
        </div>
</template>
<script>
export default{
    name:'introduction',
    data() {
        return {
            ps:[
                {title:'昵称',info:'小文同学'},
                {title:'学校',info:'广州城市理工学院'},
                {title:'邮箱',info:'2428015329@qq.com'},
                {title:'来自',info:'广东汕尾'}
                ]
        };
    },
}
</script>
<style>
h3{
    position: relative;
    left: 10px;
    width: 85px;
    height: 25px;
    background-color: aquamarine;
    text-align: center;
    padding-top: 10px;
}
.first_page{
    display: inline-block;
    position: relative;
    height: 250px;
    width: 300px;
    top: 50px;
    left: 28%;;
    border:1px solid #cee3e9;background:#f1f7f9;
    border-radius: 30px;
}
p{
    display: inline-block;
    font-size: large;
}
li{
    list-style: none;
}
.cpage{
    position: relative;
    width: 100%;
    height: 110%;
    top: -20px;
    background-image: url(../img/thumb_1680_0_20210924104714650.jpg);
}
</style>