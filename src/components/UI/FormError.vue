<template>
    <div class="error-container">
		<p class="error">
			{{ errorMessage }}
		</p>
    </div>
</template>


<script setup>
	import { defineProps } from "vue"

	const props = defineProps({
		errorMessage: {
			type: String,
			default: () => "",
		},
	})
</script>
  

<style lang="scss" scoped>

</style>
