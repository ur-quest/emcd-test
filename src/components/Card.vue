<script>
/**
* @vue-prop {{ title: string, first: string,last: string }} name - User Name
* @vue-prop {String} email - User email
* @vue-prop {String} picture - User photo
* @vue-computed {String} fullName - Computed property for configuring the user's full name
*/
export default {
	name: 'Card',

	props: {
		name: {
			type: Object,
			default: null,
		},
		email: {
			type: String,
			default: '',
		},
		picture: {
			type: Object,
			default: null,
		},
	},

	computed: {
		fullName() {
			return `${this.name.title} ${this.name.first} ${this.name.last}`
		}
	}
}
</script>

<template>
    <el-card
      shadow="always"
      body-class="card"
    >
      <el-avatar
        :size="150"
        :src="picture.large"
        :alt="fullName"
        fit="fill"
      />

      <div>
        <el-text
          tag="b"
          size="large"
        >{{ fullName }}</el-text>

        <div>
          <el-text
            class="mx-1"
            type="info">
          {{ email }}</el-text>
        </div>
      </div>
    </el-card>
</template>
