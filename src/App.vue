<script setup>
	import { ref, onMounted, onBeforeUnmount, provide } from "vue"
	// import { useRoute, useRouter } from "vue-router"

	// const route = useRoute()
	// const router = useRouter()

	// const search = computed({
	// 	get() {
	// 		return route.query.search ?? ""
	// 	},
	// 	set(search) {
	// 		router.replace({ query: { search } })
	// 	}
	// })

	const isMobile = ref(false)

	const checkMobile = () => {
		isMobile.value = window.innerWidth <= 892
	}

	const handleResize = () => checkMobile()

	onMounted(() => {
		checkMobile()
		window.addEventListener("resize", handleResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("resize", handleResize)
	})

	provide("isMobile", isMobile);
</script>


<template v-if="true">
	<RouterView />
	
</template>


<style lang="scss" scoped></style>
