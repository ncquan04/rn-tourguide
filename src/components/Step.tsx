import * as React from 'react'
import { BorderRadiusObject, Shape } from '../types'
import { ConnectedStep } from './ConnectedStep'
import { TourGuideContext } from './TourGuideContext'
import { ImageSourcePropType } from 'react-native'

interface Props {
  name: string
  order: number
  text: string
  tourKey: string
  shape?: Shape
  active?: boolean
  maskOffset?: number
  borderRadius?: number
  children: React.ReactNode
  keepTooltipPosition?: boolean
  tooltipBottomOffset?: number
  borderRadiusObject?: BorderRadiusObject,
  imgSrc?: ImageSourcePropType
}

export const Step = (props: Props) => {
  const context = React.useContext(TourGuideContext)
  return <ConnectedStep {...{ ...props, context }} />
}
