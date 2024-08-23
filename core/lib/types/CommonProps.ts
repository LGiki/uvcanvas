import { Color } from "ogl"


export interface CommonProps {
  onReady?: () => void
}

export interface TimeProps {
  time?: number
  speed?: number
}

export interface ControlProps {
  paused?: boolean
}

export interface ColorProps {
  color?: Color
}