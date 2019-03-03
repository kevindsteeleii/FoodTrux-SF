/* Helper methods, to decrease bloat and to house general purpose stuff */

/* Haversine Formula: Gets the 'as the crow flies' distance b/n two points on Earth */
export const distanceInMiles = ([centerLat, centerLng], [localLat, localLng]) => {
  /* Distance b/n latitudes and longitudes */
  const PI = Math.PI;
  const rad = PI/180;
  // distance needs to be in radians or the calculation is invalid!!
  const dLng = (localLng - centerLng)*rad;
  const dLat = (localLat - centerLat)*rad;

  const a = (Math.sin(dLat/2) * Math.sin(dLat/2)) 
    +  Math.cos(centerLat*rad) * Math.cos(localLat*rad) 
    * (Math.sin(dLng/2) * Math.sin(dLng/2));

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = 3959 * c;
  return distance;
}

/* SET of length measure converters */
// kilometers to miles
export const kmToMi = (km) => {
  const MI = km * 0.621371;
  return MI;
}
// miles to kilometers
export const miToKM = (mi) => {
  const KM = mi * 1.60934;
  return KM.toFixed(4);
}
// miles to meters
export const miToMeters = (mi) => {
  const M = miToKM(mi) * 1000;
  return M;
}
// feet to meters
export const ftToMeters = (ft) => {
  const M = ft * 0.3048;
  return M;
}
// meters to feet
export const metersToFt = (m) => {
  const FT = m * 3.28084;
  return FT;
}

// calculates distance of available trucks and returns the ones within radius
export const getCloseTrucks = ({lat, lng, radius, filteredTrucks}) => {
   // eslint-disable-next-line 
  const filterTrucks = filteredTrucks.filter(truck => {
    /* NOTE: Culls the trucks by location data, it got a bit complicated. Will revisit on later refactors. */
    let truckLat = parseFloat(truck.latitude);
    let truckLng = parseFloat(truck.longitude);
    let dist = distanceInMiles([lat, lng], [truckLat, truckLng]);
    if (dist !== undefined && dist <= radius) {
      return truck
    }
  })
  return filterTrucks;
}
// calculates distance b/n truck and marker coords and returns true if w/n range false if not
export const isTruckClose = ({latitude, longitude, radius}, lat, lng) => {
   // eslint-disable-next-line 

    let truckLat = parseFloat(lat);
    let truckLng = parseFloat(lng);
    let dist = distanceInMiles([latitude, longitude], [truckLat, truckLng]);
    // debugger;
    if (dist !== undefined && dist <= radius) {
      return true;
    } else {
      return false;
    }
}
