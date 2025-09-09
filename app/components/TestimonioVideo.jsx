// app/components/TestimonioVideo.jsx
'use client'

import dynamic from 'next/dynamic';

const DynamicCldVideoPlayer = dynamic(() => import('next-cloudinary').then(module => module.CldVideoPlayer), { ssr: false });

function TestimonioVideo() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-lg shadow-xl w-full">
        <DynamicCldVideoPlayer
          id="video-testimonios"
          width="100%"
          height="500"
          src="ChinoYV/TestimonioVideoChinoYV_lbgyik"
          showLogo={false}
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false} // Oculta los controles del reproductor
          className="w-full h-full object-cover"
          style={{ 
            aspectRatio: '16/9', // Asegura proporciones correctas
            maxHeight: '500px' 
          }}
        />
      </div>
    </div>
  );
}

export default TestimonioVideo;