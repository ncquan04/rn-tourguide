import * as React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, Shape } from '../types';
export interface TourGuideZoneProps {
    zone: number;
    tourKey?: string;
    isTourGuide?: boolean;
    text?: string;
    shape?: Shape;
    maskOffset?: number;
    borderRadius?: number;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    borderRadiusObject?: BorderRadiusObject;
    imgSrc?: ImageSourcePropType;
}
export declare const TourGuideZone: ({ isTourGuide, tourKey, zone, children, shape, text, maskOffset, borderRadius, style, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, imgSrc, }: TourGuideZoneProps) => JSX.Element;
