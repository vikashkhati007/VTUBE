const getUserProfileData = async (channelIds:any) => {
  try {
    const promises = channelIds.map(async (channelId:any) => {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${process.env.API_KEY}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    });

    const userData = await Promise.all(promises);
    return userData;
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
};

export default getUserProfileData;
