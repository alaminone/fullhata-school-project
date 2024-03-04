

const Banner = () => {
  const ContactButton = () => (
    <button className="justify-center self-start px-9 py-4 mt-14 tracking-wide text-center whitespace-nowrap bg-sky-500 rounded max-md:px-5 max-md:mt-10">
      Contact us
    </button>
  );

  return (
    <div>
      <header  className="flex overflow-hidden relative flex-col justify-center
       items-start px-16 py-12 text-sm font-bold leading-5 text-white min-h-[650px] max-md:px-5">
        <div className="object-cover absolute inset-0 size-full  bg-black"></div>
        <img
          loading="lazy"
          src="https://i.ibb.co/YyNqMYJ/333326568-976413126662843-6209104490970125951-n.jpg"
          alt="Aerial view of SMP N 1 Cibadak"
          className="object-cover absolute inset-0 size-full opacity-50"
        />
        <div className="shadow-lg relative">
  <section className="flex flex-col mt-10 md:mt-28 ml-5 md:ml-28 max-w-full w-full md:w-[697px]">
    <h2 className="tracking-wide uppercase max-w-full">আমাদের স্কুলে আপনাকে স্বাগতম</h2>
    <p className="mt-5 md:mt-10 text-lg md:text-2xl tracking-wide leading-8 md:leading-10 text-white">
      স্বাগতম ফুলহাতা মাধ্যমিক বিদ্যালয় এ! আসুন সম্পূর্ণ আনন্দে শিক্ষার যাত্রায় যোগ দিন।
    </p>
    <ContactButton />
  </section>
</div>
      </header>
    </div>
  );
};

export default Banner;



