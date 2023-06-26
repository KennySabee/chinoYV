import dynamic from 'next/dynamic';

const DynamicCldVideoPlayer = dynamic(() => import('next-cloudinary').then(module => module.CldVideoPlayer), { ssr: false });

function TestimonioVideo() {
  return (
    <div className="w-96 h-96 m-auto mt-5 lg:w-[520px] lg:h-[520px]">
      <DynamicCldVideoPlayer
        id="video-testimonios"
        width="1920"
        height="1080"
        src="ChinoYV/TestimonioVideoChinoYV_lbgyik"
        showLogo={false}
      />
    </div>
  );
}

export default TestimonioVideo;
