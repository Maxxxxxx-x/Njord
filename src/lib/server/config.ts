export const CONFIG : Config = {
    $DATE: 0,
};

export interface Config {
    $DATE : number;
    TOKEN_SECRET? : string;
    DEFAULT_TTL? : number;
    CHECK_TOKEN_EXISTS? : boolean;
}