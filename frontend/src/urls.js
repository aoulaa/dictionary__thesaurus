export const SIGNIN = '/users/sign-in'
export const SIGNUP = '/users/sign-up'
export const SIGNOUT = '/users/sign-out'
export const USER_SETTINGS = '/users/user_settings'
export const CHANGE_PASSWORD = '/users/change_password'
export const CONFIRM = '/users/confirm'
export const RESET_PASSWORD = '/users/reset_password'
export const RESET_LINK = '/users/reset_link'

export const USERS_LIST = '/users/user'
export const REFRESH = '/users/refresh'

export const WORDS_LIST = '/board/words'
export const WORD_DETAIL = '/board/word/{id}'


const backendUrl = process.env.REACT_APP_BASE_URL || `${window.location.protocol}//${window.location.hostname}`
export const domain = backendUrl.endsWith('/') ? backendUrl.substr(0, backendUrl.length - 1) : backendUrl
