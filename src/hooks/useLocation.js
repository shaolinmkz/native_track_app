import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import env from '../utils/environment';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState("");
  const [mockLocalRef, setMockLocalref] = useState(null);
  const [subscriber, setSubcriber] = useState(null);

  const isDevelopment = env.NODE_ENV === "development";

  const handleUnsubscribe = () => {
    if (subscriber) {
      subscriber.remove();
      setSubcriber(null);
      if (mockLocalRef && isDevelopment) {
        clearInterval(mockLocalRef);
        setMockLocalref(null);
      }
    }
  };

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      } else if (!mockLocalRef) {
        if (isDevelopment) {
          const { generateMockLocation } = require('../utils/__mocks__/mockLocation');
          const ref = generateMockLocation();
          setMockLocalref(ref);
        }
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10, // metres
          },
          (data) => {
            callback?.(data);
          }
        );

        setSubcriber(sub);
      }
    } catch (e) {
      setErr(e?.message);
    }
  };

  useEffect(() => {
    if (shouldTrack && !mockLocalRef) {
      startWatching();
    } else if (!shouldTrack && mockLocalRef) {
      handleUnsubscribe();
    }

    return handleUnsubscribe;
  }, [shouldTrack]);

  return [err, { handleUnsubscribe, startWatching }];
};
