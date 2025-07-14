import React, { useRef, useEffect } from "react"
import Tilt from "react-parallax-tilt"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const galleryImages = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/gallery11.jpg",
  "/gallery/gallery12.jpg",
  "/gallery/gallery13.jpg",
  "/gallery/gallery14.jpg",
]

const Gallery = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      .swiper-slide-prev .card-inner,
      .swiper-slide-next .card-inner {
        transform: perspective(1000px) rotateY(20deg) scale(0.9);
        opacity: 0.6;
        filter: blur(1px);
        transition: all 0.5s ease;
      }
      .swiper-slide-next .card-inner {
        transform: perspective(1000px) rotateY(-20deg) scale(0.9);
      }
      .swiper-slide-active .card-inner {
        transform: perspective(1000px) rotateY(0deg) scale(1);
        opacity: 1;
        filter: none;
        z-index: 10;
      }

      /* Custom pagination bullets */
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #22d3ee; /* cyan-400 */
        opacity: 0.5;
        transition: all 0.3s ease;
        margin: 0 5px;
        border-radius: 9999px;
      }

      .swiper-pagination-bullet-active {
        background-color: #67e8f9; /* cyan-300 */
        opacity: 1;
        transform: scale(1.2);
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="bg-gradient-to-br from-[#0a1636] to-[#14061f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-6">
          My Gallery
        </h2>
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore my creative and professional journey through this visual collection. From coding events to design explorations, these snapshots reflect the milestones, inspirations, and moments that define my passion for technology and innovation.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          breakpoints={{
            360: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="w-full max-w-5xl mx-auto"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                className="w-full max-w-sm sm:max-w-md"
              >
                <div
                  className="card-inner relative
                    h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px]
                    overflow-hidden rounded-3xl transition-all duration-500 shadow-xl"
                >
                  <img
                    src={src}
                    alt={`gallery-${index}`}
                    className="w-full h-full object-cover rounded-3xl"
                    loading="lazy"
                  />
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container (below carousel) */}
        <div className="custom-swiper-pagination flex justify-center mt-6" />

        <p className="text-center text-sm text-gray-400 mt-12">
          More visuals and updates will be added soon — thank you for being part of the journey!
        </p>
      </div>
    </section>
  )
}

export default Gallery
