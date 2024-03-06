import React, { useEffect, useRef } from "react";

type Props = {};

const Myslider = (props: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const cardWidth = 320; // Adjust the card width as needed
  const intervalDuration = 2000;

  useEffect(() => {
    const sliderContainer = container.current;

    if (sliderContainer) {
      let intervalId: NodeJS.Timeout;

      const slide = () => {
        let newScroll = sliderContainer.scrollLeft + cardWidth;
        if (newScroll >= sliderContainer.scrollWidth) {
          newScroll = 0;
        }

        sliderContainer.scrollTo({
          left: newScroll,
          behavior: "smooth",
        });
      };

      // Set interval for automatic sliding
      intervalId = setInterval(slide, intervalDuration);

      // Pause sliding on mouseover, resume on mouseout
      const handleMouseOver = () => clearInterval(intervalId);
      const handleMouseOut = () =>
        (intervalId = setInterval(slide, intervalDuration));

      sliderContainer.addEventListener("mouseover", handleMouseOver);
      sliderContainer.addEventListener("mouseout", handleMouseOut);

      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, []);
  const slide = (direction: string) => {
    const totalCards = 3;
    const cardWidth = 320;
    if (container.current) {
      const currentScroll = container.current.scrollLeft;
      let newScroll;

      if (direction === "left") {
        newScroll = currentScroll - 300 + 12;
        console.log(newScroll);
        if (newScroll < 0) {
          newScroll = cardWidth * (totalCards - 1);
        }
        container.current.scrollTo({
          left: newScroll,
          behavior: "smooth", // Optional: Adds a smooth scrolling effect
        });
      } else if (direction === "right") {
        newScroll = currentScroll + 300 + 12;
        if (newScroll >= cardWidth * totalCards) {
          newScroll = 0;
        }
      }
    }
  };
  const Card = () => (
    <div className="min-w-[300px] h-[400px] rounded-[20px] bg-[url('/roadview.jpg')] bg-center bg-cover flex">
      <div className="w-full flex flex-col items-center justify-center slidertextbg mt-auto text-white min-h-[100px]">
        <p>Aba to PH</p>
        <button className="bg-secondary rounded-md font-[500] text-white px-3 py-2">
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => slide("left")} className="">
        left
      </button>
      <button onClick={() => slide("right")}>right</button>
      <div ref={container} className="flex gap-3 w-[600px] overflow-hidden">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Myslider;
