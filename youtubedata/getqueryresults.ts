const GetQueryResults = async ({query}:any) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&part=snippet&q=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Optionally rethrow the error to propagate it
    }
  };
  
  export default GetQueryResults;
  