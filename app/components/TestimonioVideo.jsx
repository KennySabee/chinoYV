function TestimonioVideo() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-lg shadow-xl w-full">
        <video
          id="video-testimonios"
          width="100%"
          height="500"
          src="https://res.cloudinary.com/kennysabee/video/upload/f_auto:video,q_auto/v1/ChinoYV/TestimonioVideoChinoYV_lbyik"
          autoPlay={false}
          loop={true}
          muted={true}
          controls={false}
          className="w-full h-full object-cover"
          style={{
            aspectRatio: '16/9',
            maxHeight: '500px'
          }}
        />
      </div>
    </div>
  );
}