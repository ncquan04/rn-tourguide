import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from './Button';
import styles from './style';
export const Tooltip = ({ isFirstStep, isLastStep, handleNext, handlePrev, handleStop, currentStep, labels, imgSrc, }) => (React.createElement(View, { style: {
        borderRadius: 16,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 16,
        width: '80%',
        backgroundColor: '#ffffffef',
    } },
    React.createElement(View, { style: styles.tooltipContainer },
        imgSrc && (React.createElement(Image, { source: imgSrc, style: {
                width: 60,
                height: 60,
                marginBottom: 12,
                borderRadius: 8
            }, resizeMode: "cover" })),
        React.createElement(Text, { testID: 'stepDescription', style: styles.tooltipText }, currentStep && currentStep.text)),
    React.createElement(View, { style: [styles.bottomBar] },
        !isLastStep ? (React.createElement(TouchableOpacity, { onPress: handleStop },
            React.createElement(Button, null, (labels === null || labels === void 0 ? void 0 : labels.skip) || 'Skip'))) : null,
        !isFirstStep ? (React.createElement(TouchableOpacity, { onPress: handlePrev },
            React.createElement(Button, null, (labels === null || labels === void 0 ? void 0 : labels.previous) || 'Previous'))) : null,
        !isLastStep ? (React.createElement(TouchableOpacity, { onPress: handleNext },
            React.createElement(Button, null, (labels === null || labels === void 0 ? void 0 : labels.next) || 'Next'))) : (React.createElement(TouchableOpacity, { onPress: handleStop },
            React.createElement(Button, null, (labels === null || labels === void 0 ? void 0 : labels.finish) || 'Finish'))))));
