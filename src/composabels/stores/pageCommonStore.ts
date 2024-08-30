import {defineStore} from "pinia";
import {ref} from "vue";

export const usePageCommon = defineStore('page', () => {
    const editDrawer = ref(false)
    const showCheckIn = ref(true)
    const layoutMode = ref('mode1')

    return { editDrawer, showCheckIn, layoutMode }
})
