const GetChannelTest = async (channelIDs:any) => {
    try {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const channelDetails = [];
  
      // Iterate through the array of channel IDs
      for (const channelID of channelIDs) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,statistics&id=${channelID}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        channelDetails.push(data);
      }
  
      return channelDetails;
    } catch (error) {
      console.error(error);
      return null; // Return null in case of an error
    }
  };
  
  export default GetChannelTest;
  