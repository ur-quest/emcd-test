<script>
import getUsers from '../api/getUsers'
import { defineAsyncComponent } from 'vue'

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
			import('Components/Card.vue')),
		Observer: defineAsyncComponent(() =>
			import('Components/Observer.vue')
		)
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

		onIntersect() {
			this.loadData(this.usersCount)
			this.usersCount += 30
		}
	},
}
</script>

<template>
    <div
		class="cards-feed"
		ref="rootElement"
	>
        <Card
            v-for="card of usersList"
            :key="card.id.value"
            v-bind="card"
        />

		<Observer
			@on-intersect="onIntersect"
		/>
    </div>

	<el-progress 
		v-if="isLoading" 
		:indeterminate="true" 
		:percentage="100"
		striped 
	/>
</template>

<style lang="scss">
.cards-feed {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
	min-height: 97vh
}
</style>
