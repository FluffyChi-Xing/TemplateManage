import {$request} from "../request";

export function getCard1Info() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    return $request({ url })
}
export function getCard2Info() {
    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
    return $request({ url })
}

export function getCard3Info() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return $request({ url })
}
