import { ImageSourcePropType } from 'react-native';
import { IStep, Labels } from '../types';
export interface TooltipProps {
    isFirstStep?: boolean;
    isLastStep?: boolean;
    currentStep: IStep;
    labels?: Labels;
    handleNext?: () => void;
    handlePrev?: () => void;
    handleStop?: () => void;
    imgSrc?: ImageSourcePropType;
}
export declare const Tooltip: ({ isFirstStep, isLastStep, handleNext, handlePrev, handleStop, currentStep, labels, imgSrc, }: TooltipProps) => JSX.Element;
