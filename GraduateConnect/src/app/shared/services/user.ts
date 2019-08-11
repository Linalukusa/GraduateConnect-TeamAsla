
 export interface Roles {
    student?: boolean;
    admin?: boolean;
}
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    roles: Roles;
 }