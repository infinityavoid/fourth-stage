export interface authResponse {
    accessToken:string,
    refreshToken:string,
    user:IUser
}
export interface IUser {
    email:string,
    username:string,
    fullname?:string,
    password:string,
    profilePic?:string,
    followers?:IUser[],
    liked?:ITrack[]
}
export interface ITrack {
    name:string,
    artist:IArtist[],
    url:string,
    trackPicture:string
}
export interface IArtist {
    name:string,
    user:IUser,
    artistPic?:string
}
export type trackId = Number

