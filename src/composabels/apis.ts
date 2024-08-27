// File: apis.ts
import * as UserInfo from './apis/UserInfo'
import * as Storage from './apis/StorgeManage'
import * as DataScreen from './apis/DataScreen'
import * as InforCenter from './apis/InforCenter'
export const $apis = {
    ...UserInfo,
    ...Storage,
    ...DataScreen,
    ...InforCenter
}
