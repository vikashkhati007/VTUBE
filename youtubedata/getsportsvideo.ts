const getSportsVideos = async (result:any) => {
    try {
      // Calculate a timestamp for a reasonable time frame (e.g., 7 days ago)
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
      // Step 1: Fetch the most recent videos
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&q=sports&part=snippet&type=video&order=date&maxResults=${result}&publishedAfter=${oneWeekAgo.toISOString()}`
      );
  
      if (!videoResponse.ok) {
        throw new Error("Network response was not ok");
      }
  
      // Parse the video response JSON
      const videoData = await videoResponse.json();
  
      // Extract video details including maxres thumbnails
      const videoIds = videoData.items.map((item: any) => item.id.videoId);
      const videosPromises = videoIds.map(async (videoId: string) => {
        const videoDetailResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet,statistics&id=${videoId}`
        );
        if (!videoDetailResponse.ok) {
          throw new Error("Error fetching video details");
        }
        const videoDetailData = await videoDetailResponse.json();
        const videoDetail = videoDetailData.items[0];
        const snippet = videoDetail.snippet;
  
        // Check if maxres thumbnail is available, otherwise, use the high-quality thumbnail
        const thumbnails = snippet.thumbnails;
        const maxresUrl = thumbnails.maxres ? thumbnails.maxres.url : '';
        const highUrl = thumbnails.high ? thumbnails.high.url : '';
  
        // Step 2: Fetch channel details
        const channelDetailResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${process.env.API_KEY}&part=snippet&id=${snippet.channelId}`
        );
        if (!channelDetailResponse.ok) {
          throw new Error("Error fetching channel details");
        }
        const channelDetailData = await channelDetailResponse.json();
        const channelDetail = channelDetailData.items[0].snippet;
  
        return {
          id: videoId,
          snippet: {
            title: snippet.title,
            thumbnails: {
              url: maxresUrl || highUrl, // Use maxres thumbnail if available, otherwise, use high-quality thumbnail
            },
            channelId: snippet.channelId,
            channelName: channelDetail.title, // Add channel name
            channelAvatar: channelDetail.thumbnails.default.url, // Add channel avatar
            publishedAt: snippet.publishedAt, // Add video upload date
          },
          statistics: videoDetail.statistics,
        };
      });
  
      const videos = await Promise.all(videosPromises);
  
      // Return the video data
      return videos;
    } catch (error) {
      console.error("Error fetching most recent videos:", error);
      return [];
    }
  };
  
  export default getSportsVideos;
  