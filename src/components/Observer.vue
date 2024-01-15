<script>

/**
* @vue-prop {{ root: string, rootMargin: string, threshold: string }} options - Intersection observer options
* @vue-data {IntersectionObserver} observer - Intersection observer instance
*/

export default {
    name: 'Observer',

    props: {
        options: {
            type: Object,
            default: null
        }
    },

    data: () => ({
        observer: null,
    }),

    mounted() {
        const options = this.options || {}
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('on-intersect')
            }
        }, options)

        this.observer.observe(this.$el)
    },

    beforeUnmount() {
        this.observer.disconnect()
    }
}
</script>

<template>
    <div class="observer"/>
</template>

<style lang="scss">
// .observer {
//     height: 20px;
// }
</style>