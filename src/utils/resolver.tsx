import { deviceBreakPoint } from "../../constants"

export function detectDevice(size) {
  if (size < deviceBreakPoint.mobile) return "mobile"
  else if (size < deviceBreakPoint.tablet) return "tablet"
  return "desktop"
}
