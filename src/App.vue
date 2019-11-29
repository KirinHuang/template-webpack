<template>
    <div id="app">
        app

        <home></home>
    </div>
</template>

<script>
export default {
    name: 'App',

    components: {
        Home: () => import(/* webpackChunkName: "pages" */'@/pages/home.vue'),
    },
}
</script>

<style>
#app {
    color: red;
}
</style>