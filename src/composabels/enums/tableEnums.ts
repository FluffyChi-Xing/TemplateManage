export enum TableEnums {
    empty = '',
    large = 'large',
    small = 'small',
    default = 'default'
}
// TableEnums的类型断言
export function String2Table(item: string | null): '' | 'large' | 'small' | 'default' {
    if (item === null) {
        return ''
    }
    return item as TableEnums
}
export enum TableFixed {
    left = 'left',
    right = 'right',
}
export function String2Fixed(item: string | boolean | null): 'left' | 'right' | boolean {
    if (item === null) {
        return false
    }
    if (typeof item === 'boolean') {
        return item
    }
    return item as TableFixed
}
