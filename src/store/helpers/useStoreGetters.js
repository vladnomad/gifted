import { useStore } from "vuex"
import { computed } from "vue"

const useStoreGetters = () => {
    const store = useStore()

    if (!store.getters) return {}

    return Object.fromEntries(
        Object.keys(store.getters).map(
            getter => [getter, computed(() => store.getters[getter])]
        )
    )
}

export { useStoreGetters }
