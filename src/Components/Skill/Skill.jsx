import React, { useState, useEffect, useRef } from "react";

const AnimatedProgressBar = ({
  percentage = 0,
  fillerExtraStyles = {},
  progressBarExtraStyles = {},
  isVisible = false,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Only animate when the component becomes visible
    if (isVisible) {
      // Start with width at 0
      setWidth(0);

      // After a small delay, animate to the target percentage
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Reset width when not visible
      setWidth(0);
    }
  }, [percentage, isVisible]);

  const fillerStyles = {
    height: "100%",
    width: `${width}%`,
    transition: "width 1.5s ease-in-out",
    borderRadius: "inherit",
    ...fillerExtraStyles,
  };

  const progressBarStyles = {
    height: "20px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "50px",
    ...progressBarExtraStyles,
  };

  return (
    <div style={progressBarStyles}>
      <div style={fillerStyles}>
        <span className="text-gray-800 text-xs font-bold ml-4">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

const Skill = () => {
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection status changes
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    // Cleanup observer
    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c5349649-d6df-4bff-b45a-4923f8560b2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-gray-800" id="skill" ref={skillSectionRef}>
      <div className="grid lg:grid-cols-2 lg:mx-14 mx-7 pb-10 pt-28 lg:pt-16">
        <div className="max-w-xl mb-2">
          <div className="flex lg:justify-start justify-center pb-4">
            <h2 className="text-yellow-400 font-bold text-3xl">Skills</h2>
          </div>

          <div className="">
            <h2 className="lg:text-lg font-semibold mb-1 ">Poster Design</h2>
            <AnimatedProgressBar
              percentage={85}
              fillerExtraStyles={{ backgroundColor: "#facc15" }}
              progressBarExtraStyles={{
                backgroundColor: "#d1d5db",
                height: "25px",
                width: "100%",
              }}
              isVisible={isVisible}
            />
          </div>

          <div className="pt-3">
            <h2 className="lg:text-lg font-semibold mb-1">Print Design</h2>
            <AnimatedProgressBar
              percentage={85}
              fillerExtraStyles={{ backgroundColor: "#facc15" }}
              progressBarExtraStyles={{
                backgroundColor: "#d1d5db",
                height: "25px",
                width: "100%",
              }}
              isVisible={isVisible}
            />
          </div>

          <div className="pt-3">
            <h2 className="lg:text-lg font-semibold mb-1">Logo Design</h2>
            <AnimatedProgressBar
              percentage={85}
              fillerExtraStyles={{ backgroundColor: "#facc15" }}
              progressBarExtraStyles={{
                backgroundColor: "#d1d5db",
                height: "25px",
                width: "100%",
              }}
              isVisible={isVisible}
            />
          </div>

          <div className="pt-3">
            <h2 className="lg:text-lg font-semibold  mb-1">Brand Design</h2>
            <AnimatedProgressBar
              percentage={80}
              fillerExtraStyles={{ backgroundColor: "#facc15" }}
              progressBarExtraStyles={{
                backgroundColor: "#d1d5db",
                height: "25px",
                width: "100%",
              }}
              isVisible={isVisible}
            />
          </div>

          <div className="pt-3">
            <h2 className="lg:text-md font-semibold mb-1">Advertising</h2>
            <AnimatedProgressBar
              percentage={80}
              fillerExtraStyles={{ backgroundColor: "#facc15" }}
              progressBarExtraStyles={{
                backgroundColor: "#d1d5db",
                height: "25px",
                width: "100%",
              }}
              isVisible={isVisible}
            />
          </div>
        </div>

        <div className="w-full md:mx-2 p-6 border mt-9 mb-5 lg:mt-4 border-yellow-400 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-white font-bold rounded-md"
            >
              Submit
            </button>
          </form>
          <span className="text-green-300">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
