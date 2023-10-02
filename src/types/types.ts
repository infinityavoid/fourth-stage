export interface buttonProps {
  text: string,
  type: 'small' | 'default' | 'large' | 'small-dark' | 'small-light'
  onClick: ()=> void
}
export interface inputProps {
  placeholder:string,
  password?:boolean,
  key: 'email' | 'password' | 'fullname' | 'username'
}
export type Filter = 'News' | 'Video' | 'Artists' | 'Podcasts'

export interface navItemProps {
  src: string,
  path: string,
  activeImg:string
}

export interface album {
  albumPic: string,
  artist?: string,
  name:string,
  options?:{
    fontSize?:Number,
    containerHeigth?:Number,
    textAlign?: 'center' | 'start'
  }
}

export interface headerNav {
  options: {
    logo?: boolean,
    leftContent?:{
      content: 'magnify' | 'back'
      onClick: ()=> void
      type?:'default' | 'filled'
    },
    rightContent?:{
      content:'menu',
      onClick: ()=> void
    },
    text?: string
  }
}
export interface playlists {
  tracks: Array<track>
}
interface track {
  trackImg:string,
  name:String
}
export type sliderPerView = number

export type lyricsOpen = boolean

export type trackname = string | undefined

export type mode = 'light' | 'dark'