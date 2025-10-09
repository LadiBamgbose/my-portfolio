import { SiLinkedin } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

const AboutHero = () => {
  const cards = [
    { id: 1, text: 'I Code', gradient: 'from-blue-500 to-cyan-400' },
    { id: 2, text: 'I Create', gradient: 'from-purple-500 to-pink-400' },
    { id: 3, text: 'I Explore', gradient: 'from-orange-500 to-yellow-400' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Small header - Outside main content */}
        <p className="text-gray-400 text-sm tracking-[0.3em] uppercase  mt-15 mb-16">MORE ABOUT ME</p>

        <div className="flex items-start gap-24">
          {/* Left Side - Content */}
          <div className="flex-1 max-w-2xl">
            {/* Large heading */}
            <h1 className="text-7xl font-light text-white mb-12 leading-tight">
              I'm Ladi, a<br />
              creative <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">engineer</span>
            </h1>

            {/* Paragraphs */}
            <div className="space-y-8 text-white/80 text-lg leading-relaxed mb-16">
              <p>
                I'm Ladi Bamgbose, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
              </p>
              
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
              </p>
              
              <p>
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Right Side - Stacked Carousel */}
          <div className="flex-shrink-0 w-[450px] h-[550px]">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${card.gradient} flex items-end justify-end p-8`}>
                    <p className="text-white text-3xl font-light">{card.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

