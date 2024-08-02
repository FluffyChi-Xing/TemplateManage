export enum tagEnums {
    HOME = '/',
    NOTICE = '/notice',
    LOGIN = '/login',
    ALLCOMPONENTS = '/allCom',
    TABLE = '/table',
}
export function route2tag(item: string) {
    return tagEnums[item as keyof typeof tagEnums];
}
