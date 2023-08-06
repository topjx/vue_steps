<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <select>
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
            sum: 0//当前和
        }
    },

    methods: {
        increament() {
            this.sum++;
        },
        decreament() {
            this.sum--;
        },
        increamentOdd() {
            if (this.sum % 2) {
                this.sum++;
            }
        },
        increamentWait() {
            setTimeout(() => {
                this.sum++;
            }, 1000);
        }

    }

}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>