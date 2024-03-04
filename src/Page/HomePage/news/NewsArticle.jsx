import { useEffect, useState } from "react";
import NewsarticalCard from "./NewsarticalCard";


const NewsArticle = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
 
        fetch("newsarticle.json")
          .then((response) => response.json())
          .then((json) => setdata(json))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    return (
        <section className="container mx-auto my-20">
   
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center
      gap-5 mx-auto">
        {data.map((news) => (
          <NewsarticalCard 
          key={news.id}
          news={news}
          ></NewsarticalCard>
        ))}
      </div>
    </section>
    );
};

export default NewsArticle;