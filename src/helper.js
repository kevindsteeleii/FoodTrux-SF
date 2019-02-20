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

export const kmToMi = (km) => {
  const MI = km * 0.621371;
  return MI;
}

export const miToKM = (mi) => {
  const KM = mi * 1.60934;
  return KM;
}
