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
	@use "../../assets/styles/variables.scss" as *;
	.error {
		margin: 0;
		color: $color-error;
		font-weight: 300;
		font-size: 13px;

		&-container {
			display: flex;
			align-items: center;
			position: absolute;
			width: calc(100% - 8px);
			height: calc(30px - 4px);
			bottom: -30px;
			padding: 2px 4px;
		}
	}
</style>
