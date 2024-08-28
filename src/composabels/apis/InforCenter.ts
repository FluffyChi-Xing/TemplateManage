import {$request} from "../request";

const baseUrl = 'https://api.gumengya.com/Api'
export function getTiebaHot() {
    const url = `${baseUrl}/BaiduTieBaHot`
    return $request({url})
}
export function getWeiboHot() {
    const url = `${baseUrl}/WeiBoHot`
    return $request({url})
}

export function getMoreInfo(index: number) {
    const url = `${baseUrl}/HotComments?${index}`
    return $request({url})
}
export function getDetailMusic(id: number) {
    const url = `${baseUrl}/Netease?format=json&id=${id}`
    return $request({url})
}
