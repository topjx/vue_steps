<template>
    <div>
        <h2>当前求和为：{{ sum }}</h2>
        <h3>当前求和放大10倍：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
        
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <!-- 注意：这里的方法需要把参数加进去increament(n)，然后mapActions、mapMutations中increament：'increament'才起作用 -->
        <button @click="increament(n)">+</button>
        <button @click="decreament">-</button>
        <button @click="increamentOdd">当前求和为奇数再加</button>
        <button @click="increamentWait">等一等再加</button>

    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'

export default {
    name: "CountView",
    data() {
        return {
            n: 1,//用户选择的数字
        }
    },
    computed: {
        //借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),
        //借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject','personList']),

        ...mapGetters(['bigSum']),
    },
    methods: {
        // ...mapActions(['jia','jian','jiaOdd','jiaWait']),
        // ...mapMutations(['JIA','JIAN','JIAODD','JIAWAIT']),

        // <!-- 注意：这里的方法需要把参数加进去increament(n)，然后mapActions、mapMutations中increament：'increament'才起作用 -->
        // ...mapActions({
        //     increament:'jia',
        //     jian:'jian',
        //     jiaOdd:'jiaOdd',
        //     jiaWait:'jiaWait',
        // }),
        ...mapMutations({
            increament:'JIA',
            JIAN:'JIAN',
            JIAODD:'JIAODD',
            JIAWAIT:'JIAWAIT',
        }),
        // increament() {
        //     //dispatch('action名称', 传递的数据) 调到了actions中的action,actions中的action再调到了mutations中的mutation
        //     this.$store.dispatch('jia', this.n);
        //     //commit('mutation名称', 传递的数据) 调到了mutations中的mutation
        //     // this.$store.commit('JIA', this.n);
        // },
        decreament() {
            // this.sum--;
        },
        increamentOdd() {
            // if (this.sum % 2) {
            //     this.sum++;
            // }
        },
        increamentWait() {
            // setTimeout(() => {
            //     this.sum++;
            // }, 1000);
        }

    }

}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>