<template>
    <div>
        AboutView
    </div>
</template>

<script>
export default {
    name: "AboutView",
    beforeRouteEnter(to, from, next) {
        console.log('AboutView beforeRouteEnter');
        alert(`${to.meta.isAuth ? "需要" : "不需要"}权限，才能查看`);

        if (to.meta.isAuth) {
            if (localStorage.getItem("school") === "atguigu") {
                next();
            } else {
                alert("学校名不对，无权限查看！");
            }
        } else {
            next();
        }
    },
    beforeRouteLeave(to, from, next) {
        console.log('AboutView beforeRouteLeave');
        next()
    },
}
</script>

<style></style>