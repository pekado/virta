import { ProgressCircle, VMCheck, VMError } from "@virtahealth/components";
import * as React from "react";
import { Animated, Image, View } from "react-native";
import CardFlip from "react-native-card-flip";
const vmMeter = require("./meter.png");
const vmMeterBack = require("./meter_back.png");

interface VMCircleProps {
  percentDone: number;
  statusIcon?: "check" | "error";
  flipMeter: boolean;
  circleWidth: number;
}

export const VMCircle: React.FC<VMCircleProps> = ({
  percentDone,
  statusIcon,
  flipMeter,
  circleWidth,
}) => {
  const animatedCheck: Animated.Value = React.useRef(
    new Animated.Value(0)
  ).current;
  const animatedError: Animated.Value = React.useRef(
    new Animated.Value(0)
  ).current;
  const meterRef: any = React.useRef(null);
  const firstRender: { current: boolean } = React.useRef(true);

  React.useEffect(() => {
    // on first render, only flip the card if the back is showing initially
    if (firstRender.current) {
      firstRender.current = false;
      if (!flipMeter) {
        return;
      }
    }
    // whenever the flipMeter value changes, flip the card so it matches
    meterRef.current?.flip();
  }, [flipMeter]);

  React.useEffect(() => {
    // slide the white box off the checkmark to show it "drawing" in
    if (statusIcon === "check") {
      Animated.timing(animatedCheck, {
        toValue: 100,
        duration: 1200,
        useNativeDriver: true,
      }).start();
    } else if (statusIcon === "error") {
      Animated.spring(animatedError, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    }
  }, [statusIcon]);

  return (
    <View>
      {statusIcon === "check" && (
        <VMCheck
          style={{
            elevation: -1,
            zIndex: -1,
            position: "absolute",
            left: circleWidth - 23,
            top: -22,
          }}
        />
      )}
      {statusIcon === "error" && (
        <Animated.View
          style={{
            elevation: 1,
            zIndex: 1,
            height: 64,
            width: 64,
            position: "absolute",
            left: circleWidth - 18,
            top: -27,
            transform: [
              {
                scale: animatedError,
              },
            ],
            overflow: "hidden",
          }}
        >
          <VMError />
        </Animated.View>
      )}
      <Animated.View
        style={{
          elevation: 0,
          zIndex: 0,
          width: 100,
          height: 100,
          backgroundColor: "white",
          position: "absolute",
          left: circleWidth - 23,
          top: -22,
          transform: [
            {
              translateX: animatedCheck,
            },
          ],
        }}
      />
      <ProgressCircle
        percent={percentDone}
        borderWidth={8}
        radius={circleWidth / 2}
        color="#009C7A"
        shadowColor="#E6E8EB"
      >
        <CardFlip
          ref={meterRef}
          flipDirection="y"
          duration={800}
          style={{
            height: circleWidth / 1.6,
            width: circleWidth / 1.6,
          }}
        >
          <Image
            source={vmMeter}
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
          />

          <Image
            source={vmMeterBack}
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
          />
        </CardFlip>
      </ProgressCircle>
    </View>
  );
};
