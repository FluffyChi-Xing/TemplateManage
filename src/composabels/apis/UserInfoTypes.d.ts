declare namespace UserInfoTypes {
    export interface UserAddress {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }
    interface Geo {
        lat: string;
        lng: string;
    }
    export interface UserCompany {
        bs: string;
        name: string;
        catchPhrase: string;
    }
}

