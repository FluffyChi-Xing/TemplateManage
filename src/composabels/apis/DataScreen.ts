import {$request} from "../request";
const baseUrl = 'https://jsonplaceholder.typicode.com/'
const baseUrl2 = 'https://api.restful-api.dev/'

export function getCard1Info() {
    const url = `${baseUrl}posts/1/comments`
    return $request({ url })
}
export function getCard2Info() {
    const url = `${baseUrl}albums/1/photos`
    return $request({ url })
}

export function getCard3Info() {
    const url = `${baseUrl}posts`
    return $request({ url })
}
export function getNotices() {
    const url = `${baseUrl2}objects`
    return $request({ url })
}
