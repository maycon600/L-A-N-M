/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

const CameraSection = () => {
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.8 }, "key1");

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      ),
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <section
      className=" relative z-[10000] min-h-screen w-full overflow-hidden bg-white "
      ref={sectionRef}
    >
      <video
        ref={videoRef1}
        className="absolute left-0 top-0 z-[2000] h-screen w-full bg-black object-cover"
        src={"../../video/video1.mp4"}
        autoPlay
        muted
        loop
      />
      <video
        className="absolute right-[40%]  top-0 z-[100] h-auto w-3/5"
        ref={videoRef2}
        src={"../../video/video2.mp4"}
        autoPlay
        muted
        loop
      />
      <div
        className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center"
        ref={titleRef}
      >
        <h1 className="z-20 text-6xl capitalize">Ready.</h1>
        <h1 className="z-20 ml-24 text-6xl capitalize">Steady.</h1>
        <h1 className="z-20 ml-48 text-6xl capitalize">Action.</h1>
      </div>
    </section>
  );
};

export default CameraSection;
