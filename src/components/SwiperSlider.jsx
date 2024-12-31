import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IconComponent from "./Icons";

const SwiperSlider = ({ skills }) => {
  return (
    <div className="skills-slider mt-8">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={20} 
        slidesPerView={4}
        loop={true} 
        navigation
        autoplay={{ delay: 3000 }} 
        className="swiper-container"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name} className="skill-slide">
            <div className="skill-tile p-4 w-max rounded-md transform hover:scale-105 transition duration-300 ease-in-out">
             <IconComponent skill={skill.name}/>
              <p className="text-center text-sm text-gray-800 dark:text-white mt-2">
                {skill.label}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
