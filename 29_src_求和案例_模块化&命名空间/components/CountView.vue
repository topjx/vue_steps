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
        <button @click="decreament(n)">-</button>
        <button @click="increamentOdd(n)">当前求和为奇数再加</button>
        <button @click="increamentWait(n)">等一等再加</button>

    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'

export default {
    name: "CountView",
    data() {
        return {
            n: 1,//用户选择的数字
        }
    },
    computed: {
        ...mapState("countAbout",['sum','school','subject']),
        ...mapState("personAbout",['personList']),
        ...mapGetters("countAbout",['bigSum']),
    },
    methods: {
        ...mapMutations("countAbout",{
            increament:'JIA',
            decreament:'JIAN',
        }),
        ...mapActions("countAbout",{
            increamentOdd:'addOdd',
            increamentWait:'addWait',
        }),
    }

}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>