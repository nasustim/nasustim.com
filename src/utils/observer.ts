import store from '../flux/store'
import Store from '../flux/store'
import { updateDeviceCategory } from '../flux/actions'

// ToDo: feature/add-layout ここにobserver入れてuaとsize抜く

window.onload = () => {
  Store.dispatch(updateDeviceCategory({ deviceType: isMobile() ? 'mobile' : 'desktop' }))
}

const ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
const isMobile = () => !!['iPhone', 'iPad', 'iPod', 'Android'].find(v => ua.indexOf(v) > 0)

console.log(ua)
