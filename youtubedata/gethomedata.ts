interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      maxres: {
        url: string;
      };
    };
    channelId: string;
  };
}

interface Channel {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
    statistics: {
      subscriberCount: string;
    };
  };
}

const API_KEY = process.env.API_KEY; // Replace with your YouTube Data API key

const fetchMostPopularVideos = async () => {
  try {
    // Make the request to fetch the most popular videos
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&chart=mostPopular&maxResults=10`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response JSON
    const data = await response.json();

    // Extract video details including maxres thumbnails
    const videoDetails = data.items as Video[];

    // Return the video data
    return videoDetails;
  } catch (error) {
    console.error('Error fetching most popular videos:', error);
    return [];
  }
};

export default fetchMostPopularVideos;