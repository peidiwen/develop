
<template>
    <div calss="container_word">
        <span >{{message}}</span>
    </div>
</template>
<script>
const word=['不积跬步，无以至千里。','积土而为山，积水而为海。','业精于勤，荒于嬉。','千里之行，始于足下。','读万卷书，行万里路。','工欲善其事，必先利其器。','人生在勤，不索何获。','阴影后面是阳光'];
const i=Math.ceil(Math.random()*10);
const msg=word[i];
export default {
    name:'warmwords',
    data() {
        return {
            message:msg
        };
    },
}


</script>
<style>
span{
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    top: 6.5px;
}


</style>