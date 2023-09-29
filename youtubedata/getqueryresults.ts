interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      maxres: {
        url: string;
      };
    };
  };
}


const GetQueryResults = async ({query}:any) => {
  try {
    // Make the search request
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&part=snippet&q=${encodeURIComponent(query)}`
    );

    if (!searchResponse.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response JSON
    const searchData = await searchResponse.json();

    // Extract video IDs from the search results
    const videoIds = searchData.items.map((item: any) => item.id.videoId);

    // Fetch video details including maxres thumbnails
    const videoDetailsPromises = videoIds.map(async (videoId: string) => {
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&id=${videoId}`
      );
      const videoData = await videoResponse.json();
      return videoData.items[0] as Video;
    });

    const videoDetails = await Promise.all(videoDetailsPromises);

    // Return the video data
    return videoDetails;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default GetQueryResults;