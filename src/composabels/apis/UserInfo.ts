import {$request} from "../request";

export function getUserInfo() {
    const url = 'https://jsonplaceholder.typicode.com/users/5'
    return $request({ url }, { method: 'get'})
}

export function getUserAvatar() {
    const url = 'https://jsonplaceholder.typicode.com/photos/5'
    return $request({ url })
}
