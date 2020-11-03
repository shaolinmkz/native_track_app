import * as Location from 'expo-location';

const tenMetersWithDegres = 0.0001;


const getLocation = increment => {
  return {
    timestamp: new Date().toISOString(),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 3.3718272 + (increment * tenMetersWithDegres),
      latitude: 6.537216 + (increment * tenMetersWithDegres),
    }
  }
};

let counter = 0;

export const generateMockLocation = () => setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  })
  counter += 1;
}, 1000);
