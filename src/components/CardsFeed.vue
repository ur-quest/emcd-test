<script>
import getUsers from '../api/getUsers'
import { defineAsyncComponent } from 'vue'
import throttle from '@/utils/throttle'

/** 
* @vue-data {Number} usersCount - Number of items in server response
* @vue-data {User} usersList - List of users from server
* @vue-data {Boolean} isLoading - Loading page condition variable
*
* @vue-event {number} loadData - Function for loading users from server and setting usersList
*
* @vue-event handleScroll - Function for watching scroll position and getting more users
*/


export default {
	name: 'CardsFeed',

	components: {
		Card: defineAsyncComponent(() =>
			import('Components/Card.vue'))
	},

	data() {
		return {
			usersCount: 30,
			usersList: [],
			isLoading: false
		}
	},

	methods: {
		async loadData(count) {
			this.isLoading = true

			try {
				const response = await getUsers(count)
				this.usersList = response.results
			} catch(e) {
				//
			} finally {
				this.isLoading = false
			}
		},

		handleScroll() {
			const documentHeight = document.body.offsetHeight
			const screenHeight = window.innerHeight
			const scrolled = window.scrollY
			const threshold = documentHeight - screenHeight / 5

			const position = scrolled + screenHeight

			if (position >= threshold) {
				this.usersCount += 30
				this.loadData(this.usersCount)
			}
		}
	},

	mounted() {
		window.addEventListener('scroll', throttle(this.handleScroll, 300))
		window.addEventListener('resize', throttle(this.handleScroll, 300))
		this.loadData(this.usersCount)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', throttle(this.handleScroll, 300))
		window.removeEventListener('resize', throttle(this.handleScroll, 300))
	}
}
</script>

<template>
    <div
		v-loading="isLoading"
		class="cards-feed"
		ref="scrollComponent"
	>
        <Card
            v-for="card of usersList"
            :key="card.id.value"
            v-bind="card"
        />
    </div>
</template>

<style lang="scss">
.cards-feed {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
	min-height: 100vh
}
</style>
