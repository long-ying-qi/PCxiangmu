<template>
    <div id="app">
        <div id="big-box">
            <div id="box">
            <h1>商城后台管理系统<span>单店版</span></h1>
        </div>
        <div id="box1">
            <input type="text" placeholder="账号:test" v-model="username"><br>
            <input type="text" placeholder="密码:123456" v-model="password"><br>
            <el-button class="buttonVal" type="primary" @click="dl">登录</el-button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
         
            username:'',
            password:'',
            username01:'test',
            password01:'123456'
       
        
        }
    },
    methods:{
        dl(){
            if(this.username==""||this.password==""){
                this.$message({
                    showClose: true,
                    message: "账号或密码不能为空！",
                    type: "warning"
                });
            }else if(this.username==this.username01&&this.password==this.password01){
                // console.log('login')
                sessionStorage.setItem('login',this.password)
                this.$router.push({
                    path: "/home01"
                }); 
            }
        }
    }
}
</script>
<style scoped>
    #app{
        background-color:#1ab394;
        position: absolute;
        width: 1520px;
        height: 715px;
        /* padding: 7px; */
    }
    #big-box{
        /* border: 1px solid red; */
        height: 300px;
        width: 100%;
        position: absolute;
        top: 200px;
        right: -5;
        background-color: white;
    }
    h1{
        color: black;
        margin-left: 550px;
        cursor: pointer;
    }
    #box1{
        margin-left: 550px;
    }
    #box1>input{
        width: 260px;
        margin-left: 25px;
        height: 30px;
        margin-top: 10px;
        padding-left: 5px;
        border: 1px solid #acaaaa;
        border-radius: 5px;
    }
    .buttonVal {
        width: 260px;
        height: 40px;
        background-color: #1ab394;
        border: 1px solid #1ab394;
        margin-left: 30px;
        margin-top: 8px;
        outline: none;
        cursor: pointer;
        border-radius: 4px;
        color: white;
    }
    h1>span{
        /* border: 1px solid red; */
        font-weight: 600;
        font-size: 10px;
        margin-left: 15px;
        padding: 7px;
        border-radius: 8px;
        background-color: rgb(60, 122, 238);
        color: white;
    }
</style>