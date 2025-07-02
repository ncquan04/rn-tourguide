import * as React from 'react'
import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native'

import { Button } from './Button'
import styles from './style'
import { IStep, Labels } from '../types'

export interface TooltipProps {
  isFirstStep?: boolean
  isLastStep?: boolean
  currentStep: IStep
  labels?: Labels
  handleNext?: () => void
  handlePrev?: () => void
  handleStop?: () => void
  imgSrc?: ImageSourcePropType
}

export const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
  imgSrc,
}: TooltipProps) => (
  <View
    style={{
      borderRadius: 16,
      paddingTop: 24,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 16,
      width: '80%',
      backgroundColor: '#ffffffef',
    }}
  >
    <View style={styles.tooltipContainer}>
      {imgSrc && (
        <Image 
          source={imgSrc} 
          style={{ 
            width: 60, 
            height: 60, 
            marginBottom: 12,
            borderRadius: 8 
          }} 
          resizeMode="cover"
        />
      )}
      <Text testID='stepDescription' style={styles.tooltipText}>
        {currentStep && currentStep.text}
      </Text>
    </View>
    <View style={[styles.bottomBar]}>
      {!isLastStep ? (
        <TouchableOpacity onPress={handleStop}>
          <Button>{labels?.skip || 'Skip'}</Button>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <Button>{labels?.previous || 'Previous'}</Button>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <Button>{labels?.next || 'Next'}</Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <Button>{labels?.finish || 'Finish'}</Button>
        </TouchableOpacity>
      )}
    </View>
  </View>
)
