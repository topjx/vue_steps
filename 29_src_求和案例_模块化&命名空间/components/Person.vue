<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red;">Count组件的求和为：{{ sum }}</h3>
        <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name" />
        <button @click="addPerson">添加</button>
        <button @click="addPersonWang">添加姓王的</button>
        <button @click="addPersonServer">添加随机人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name: "PersonView",
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList;
        },
        sum() {
            return this.$store.state.countAbout.sum;
        },
        firstPersonName() {
            return this.$store.getters['personAbout/firstPersonName'];
        }
    },

    methods: {
        addPerson() {
            console.log('addPerson');
            // const personObj = { id: Date.now(), name: this.name };
            const personObj = { id: nanoid(), name: this.name };
            console.log(personObj);
            this.$store.commit('personAbout/ADD_PERSON', personObj);
            this.name = '';
        },
        addPersonWang() {
            console.log('addPersonWang');
            // const personObj = { id: Date.now(), name: this.name };
            const personObj = { id: nanoid(), name: this.name };
            console.log(personObj);
            this.$store.dispatch('personAbout/addPersonWang', personObj);
            this.name = '';
        },
        addPersonServer() {
            this.$store.dispatch('personAbout/addPersonServer');
        }
    }
}
</script>

<style>

</style>