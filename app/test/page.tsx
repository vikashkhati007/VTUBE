const page = async () => {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=&part=snippet&chart=mostPopular&maxResults=10`
  );
  const d = await data.json();
  
  return <div></div>;
};

export default page;
