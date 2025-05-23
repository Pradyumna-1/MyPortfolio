import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import AOS from "aos";
import "aos/dist/aos.css";
const Work = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 400,
      easing:"ease",
      once: true,
    });
  }, []);

  return (
    <>
      <div id="work">
        <h2>Projects</h2>
        <section>
          <article>
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={2000}
              infiniteLoop={true}
              autoPlay={true}
            >
              {data.projects.map((i) => (
                <div key={i.title} className="workItem" data-aos="zoom-in-down">
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target={"blank"} href={i.url}>
                      View Demo
                    </a>
                  </aside>
                </div>
              ))}
            </Carousel>
          </article>
        </section>
      </div>
    </>
  );
};

export default Work;