export const getSunSet = async () => {
  const url = 'https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
