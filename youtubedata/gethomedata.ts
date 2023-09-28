import { NextRequest, NextResponse } from "next/server"
const Youtube = async () => {
    try {
        const d = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&chart=mostPopular&maxResults=100`);
        const data = await d.json();
        return data;
    } catch (error) {
        return console.log(error);
        
    }
  };

  export default Youtube;