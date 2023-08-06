<template>
    <div>
        <ul>
            <li :style="{ opacity }">认真学习Vue</li>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NewsView",
    data() {
        return {
            opacity: 1
        }
    },
    activated() {
        console.log('NewsView activated');

        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16)

    },
    deactivated() {
        console.log('NewsView deactivated');
        clearInterval(this.timer)
    },
    beforeDestroy() {
        console.log('NewsView beforeDestroy');
    },

}
</script>

<style></style>