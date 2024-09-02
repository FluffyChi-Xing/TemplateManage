import {defineStore} from "pinia";
import {ref} from "vue";


// interface weappItem {
//     id: number;
//     title: string;
//     content: string;
//     imgUrl: string;
//     date: string;
// }

export const weappStore = defineStore('weapp', () => {
    const weappContent = ref<WeappTypes.weappItem>()
    return {
        weappContent
    }
})
