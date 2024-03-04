import NewsArticle from "../HomePage/news/NewsArticle";


const NewsPage = () => {
    return (
 
 <section>
       <div className="hero min-h-[528px] "
     style={{backgroundImage: 'url(https://i.ibb.co/K6c6dBj/118794911-3305977719457954-4450503044961911299-n.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="  text-neutral-content">
    <div className="text-center w-8/12 mx-auto">
      <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">ফুলহাতা মাধ্যমিক বিদ্যালয় নিউজপেজ</h1>
      <p className="mb-5 text-sm md:text-sm lg:text-base">আমাদের স্কুলের সংবাদ পেজে আপনাকে স্বাগতম! এখানে প্রতিদিনের নতুন ঘটনার প্রত্যাশা রয়েছে। আমাদের ছাত্র-ছাত্রীদের সাফল্য, কর্মসূচি, উত্সব, এবং আরো অনেক কিছু সংবাদ আপনি এখানে পাবেন। আমরা সত্যিকারের গর্বিত এবং আমাদের স্কুলের সম্প্রদায়ের জন্য প্রেরিত যেসব নতুন উদ্যোগ নিয়েছি তা আপনি এখানে প্রথম দেখতে পাবেন। সাথে থাকুন এবং সব সময়ে আমাদের সংবাদ পাঠ করুন</p>
      
    </div>
  </div>
</div>

<NewsArticle></NewsArticle>
 </section>
    );
};

export default NewsPage;