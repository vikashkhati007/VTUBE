interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
      url: string; // Change the type to string since it can hold either maxres or high URL
    };
  };
  statistics: {
    viewCount: string;
  };
}

const GetQueryResults = async ({ query }: any) => {
  try {
    // Make the search request
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&part=snippet&q=${query}&type=video`
    );

    if (!searchResponse.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response JSON
    const searchData = await searchResponse.json();

    // Extract video IDs from the search results
    const videoIds = searchData.items.map((item: any) => item.id.videoId);

    // Fetch video details including maxres thumbnails, viewCount, description, and channelTitle
    const videoDetailsPromises = videoIds.map(async (videoId: string) => {
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet,statistics&id=${videoId}`
      );
      if (!videoResponse.ok) {
        throw new Error(`Error fetching video details for video ID: ${videoId}`);
      }
      const videoData = await videoResponse.json();
      const snippet = videoData.items[0].snippet;
      const statistics = videoData.items[0].statistics;

      // Check if maxres thumbnails exist and use high-quality thumbnails as an alternative if not available
      const thumbnails = snippet.thumbnails;
      const maxresUrl = thumbnails.maxres ? thumbnails.maxres.url : '';
      const highUrl = thumbnails.high ? thumbnails.high.url : '';

      return {
        id: videoId,
        snippet: {
          title: snippet.title || '',
          description: snippet.description || '',
          channelId: snippet.channelId || '',
          channelTitle: snippet.channelTitle || '',
          thumbnails: {
            url: maxresUrl || highUrl || '', // Provide an empty string as a default value
          },
        },
        statistics: {
          viewCount: statistics.viewCount || '0',
        },
      } as Video;
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
