export default function GetStarted() {
  return (
    <div id="get-started" className="get-started">
      <div className="get-started-container relative py-12 flex flex-col justify-center items-center min-h-100 overflow-hidden">
        <div className="text-3xl text-center font-bold max-w-[90%] mb-8 md:text-4xl md:max-w-[70%] lg:max-w-[60%] z-10">
          Get Started With The Best Travel Insurance Finder
        </div>
        <button className="btn z-10">Get Started Now!</button>
        <div className="get-started-circle absolute -top-[30%] left-1/2 -translate-x-1/2 h-70 w-70 rounded-full md:h-100 md:w-100"></div>
        <div className="get-started-circle absolute -bottom-[20%] -left-[10%]  h-60 w-60 rounded-full "></div>
        <div className="get-started-line absolute bottom-30 left-1/2 h-2 w-90 -rotate-45"></div>
      </div>
    </div>
  );
}
