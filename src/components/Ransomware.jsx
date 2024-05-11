import Section from "./Section";
import Heading from "./Heading";
import { RansomwareMethods } from "../constants";
import { useState } from "react";
import { heroBackground } from "../assets";
import { hacker } from "../assets";
import { laptop } from "../assets";

const Ransomware = () => {
  // State to track clicked item for each div
  const [clickedItem, setClickedItem] = useState(null);

  // State to track whether the separate div should be shown for each div
  const [showSeparateDiv, setShowSeparateDiv] = useState({});

  // Method to be triggered when clicking on an item
  const handleClick = (itemId) => {
    setShowSeparateDiv((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
    setClickedItem(itemId); // Set the clicked item
  };

  return (
    <Section id="how-to-use" crosses>
      <div className="container mb-10 relative">
        {/* HeroBackground image moved inside the container */}
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[134%] lg:-top-[50%] z-0">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
        </div>
        {/* Heading component */}
        <Heading
          title="What is Ransomware?"
          text="Ransomware is a type of malware that encrypts files and data on your computer, making them inaccessible. Once encrypted, the attacker demands a ransom to provide the decryption key. If you don't pay, your files are lost forever."
          className="z-10 relative"
        />
        <div className="relative flex flex-wrap gap-5 lg:flex lg:flex-row border-white mb-15">
          {/* Rendering Ransomware methods */}
          {RansomwareMethods.map((item) => (
            <div
              className="relative z-1 flex items-start justify-end w-full md:w-auto h-auto md:h-[20rem] lg:h-[15rem] lg:w-[15rem] mb-2 p-5 border border-n-1/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-150 ease-in"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col w-full md:w-[20rem] lg:w-[20rem] min-h-[10rem] md:min-h-[22rem] lg:min-h-[24rem] p-[1.1rem] pointer-events-none">
                <img
                  className="mb-2 lg:mb-5"
                  src={item.iconUrl}
                  width={30}
                  height={30}
                  alt={item.title}
                />
                <h6 className="h6">{item.title}</h6>
                <p className="body-2 mb-2 lg:mb-6 text-n-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Heading component for SpreadMethods */}

        <Heading
          title="Anatomy of a Ransomware Attack"
          className="z-10 relative"
        />
        <div className="relative gap-5 lg:flex lg:items-center lg:justify-between border-white mb-15">
          <p className="body-2 text-left text-n-3">
            01. In the initial phase of a ransomware attack, attackers typically
            seek out vulnerable targets through various means.
          </p>

          <img className="w-[180px] h-[180px]" src={hacker} alt="#hacker" />
          <div className="arrow-1"></div>
          <img
            className="mb-2 lg:mb-2 w-[180px] h-[180px]"
            src={laptop}
            alt="#hacker"
          />
        </div>

        <div className="relative flex items-center flex flex-col justify-center gap-5 lg:flex lg:flex-row border-white mb-15">
          {/* Rendering Ransomware methods */}
          {RansomwareMethods.map((item) => (
            <div
              className="relative z-1 flex items-center justify-center w-[20rem] h-[5rem] p-5 border border-n-1/10 rounded-2xl overflow-hidden"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <div className="relative z-2 flex items-center justify-center p-[1.1rem] pointer-events-none">
                <p className="body-2 text-center text-n-3">{item.ways}</p>
              </div>
            </div>
          ))}
        </div>

        {RansomwareMethods.map((item) => (
          <div key={item.id}>
            {showSeparateDiv[item.id] && clickedItem === item.id && (
              <div className="relative flex items-start justify-center w-[645px] left-1/4 h-[300px] p-4 rounded-2xl border border-n-1/10 shadow z-10">
                {item.id === 0 && (
                  <>
                    <p className="text-color-3">Pop-up content for ID 0</p>
                  </>
                )}
                {item.id === 1 && (
                  <>
                    <p>Pop-up content for ID 1</p>
                    {/* Add content specific to ID 1 */}
                  </>
                )}
                {item.id === 2 && (
                  <>
                    <p>Pop-up content for ID 2</p>
                    {/* Add content specific to ID 2 */}
                  </>
                )}
                {item.id === 3 && (
                  <>
                    <p>Pop-up content for ID 3</p>
                    {/* Add content specific to ID 3 */}
                  </>
                )}
                {item.id === 4 && (
                  <>
                    <p>Pop-up content for ID 4</p>
                    {/* Add content specific to ID 4 */}
                  </>
                )}
                <p className="text-color-3">Pop-up content for ID {item.id}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Ransomware;
