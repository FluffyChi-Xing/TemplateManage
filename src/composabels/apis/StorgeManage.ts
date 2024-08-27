import {$request} from "../request";
const baseUrl = 'https://jsonplaceholder.typicode.com/'

export function getSampleData() {
    const url = `${baseUrl}posts`
    return $request({ url })
}

export function searchItem(itemId: number) {
    const url = `${baseUrl}posts?id=${itemId}`
    return $request({ url })
}
