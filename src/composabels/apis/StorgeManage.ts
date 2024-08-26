import {$request} from "../request";

export function getSampleData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return $request({ url })
}

export function searchItem(itemId: number) {
    const url = `https://jsonplaceholder.typicode.com/posts?id=${itemId}`
    return $request({ url })
}
