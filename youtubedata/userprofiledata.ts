
const UserProfileData = async ( channelId : any) => {
//channelid get

    try {
        const d = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId[0]}&key=${process.env.API_KEY}`);
        const data = await d.json();
        return data;
      }
    catch (error) {
      console.error(error);
      return []; // Return an empty array in case of an error
    }
  };
  
  export default UserProfileData;
  