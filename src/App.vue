<template>
    <div id="app">
        <el-container>
            <el-header></el-header>
            <el-main>
asd
            </el-main>
            <el-footer></el-footer>
        </el-container>
<!--        <header class="header">-->
<!--            <Header></Header>-->
<!--        </header>-->
<!--        <router-view class="content"></router-view>-->
<!--        <footer class="footer">-->
<!--            <Footer></Footer>-->
<!--        </footer>-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Header from "@/component/header.vue";
    import Footer from "@/component/footer.vue";

    @Component({components: {Header, Footer}})
    export default class App extends Vue {

    }
</script>
<style lang="scss">
    #app {
        height: 100%;
        width: 100%;

        > .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 15%;
            background-color: blue;
        }

        > .content {
            position: fixed;
            top: 15%;
            width: 100%;
            height: 70%;

        }

        > .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 15%;
            background-color: blue;
        }
    }
</style>
