<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red;">Count组件的求和为：{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name" />
        <button @click="addPerson">添加</button>
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
        sum() {
            return this.$store.state.sum;
        },
        personList() {
            return this.$store.state.personList;
        }
    },

    methods: {
        addPerson() {
            console.log('addPerson');
            // const personObj = { id: Date.now(), name: this.name };
            const personObj = { id: nanoid(), name: this.name };
            console.log(personObj);
            this.$store.commit('ADD_PERSON', personObj);
            this.name = '';
        }
    }
}
</script>

<style>

</style>