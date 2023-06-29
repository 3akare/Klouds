export const validLocation = async (value) => {
  const url = `https://api.geoapify.com/v1/geocode/search?text=${value}&format=json&apiKey=d7a47ed9295f471db076228d2988a236
`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.length > 1;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
