export default function ProductVideo() {
  return (
    <div className="product-video py-24">
      <div className="product-video-top mb-4">Explanation video</div>
      <h2 className="section-title">Explain The Product With Video</h2>
      <div className="section-note">
        Supply chain assets vesting period mass market graphical user interface.
        Advisor traction seed money.
      </div>
      <div className="product-video-content shadow-md">
        <video
          className="mx-auto w-full"
          src="assets/videos/product-video.mp4"
          loop
          playsInline
          controls
        ></video>
      </div>
    </div>
  );
}
