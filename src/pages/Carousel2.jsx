import './Carousel2.css'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import image1 from '/carousel-2/portrait-1.png';
import image2 from '/carousel-2/portrait-2.png';
import image3 from '/carousel-2/portrait-3.png';
import image4 from '/carousel-2/portrait-4.png';
import image5 from '/carousel-2/portrait-5.png';
import image6 from '/carousel-2/portrait-6.png';
import image7 from '/carousel-2/portrait-7.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

const Carousel2 = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [])

  return (
    <section id='section5'>
      
      <div className='carouselTitle'>
        <h1><strong>Finalize suas entregas<br/>Em poucas horas</strong></h1>
        <p>Veja algumas das entregas Concluidas</p> 
      </div>

      <div className='carouselContent'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
          <motion.div   
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width}}
          >
            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt='Texto alt'/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="buttonContainer">
        <a href="https://pay.kiwify.com.br/FY5mlcB" target='_blank'>Quero me tornar um mestre das entregas</a>
      </div>

    </section>
  )
}

export default Carousel2