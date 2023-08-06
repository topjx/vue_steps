<template>
    <div>
        <h1>当前求和为:{{ this.$store.state.sum }}</h1>
        <h3>当前求和放大10倍：{{ this.$store.getters.bigSum }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="increament">+</button>
        <button @click="decreament">-</button>
        <button @click="increamentOdd">当前求和为奇数再加</button>
        <button @click="increamentWait">等一等再加</button>

    </div>
</template>

<script>
export default {
    name: "CountView",
    data() {
        return {
            n: 1,//用户选择的数字
        }
    },

    methods: {
        increament() {
            //dispatch('action名称', 传递的数据) 调到了actions中的action,actions中的action再调到了mutations中的mutation
            this.$store.dispatch('jia', this.n);
            //commit('mutation名称', 传递的数据) 调到了mutations中的mutation
            // this.$store.commit('JIA', this.n);
        },
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