const GetVideoURL = async (videoID:any) => {
  try {
    
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=player&id=${videoID}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
};

export default GetVideoURL;
