import Section from "./Section";
import Heading from "./Heading";
import { RansomwareMethods } from "../constants";
import { SpreadMethods } from "../constants";
import { heroBackground } from "../assets";
import { hacker } from "../assets";
import { laptop } from "../assets";
import { bug } from "../assets";
import { ransomware2 } from "../assets";
import { cloud1 } from "../assets";
import { key } from "../assets";
import { server } from "../assets";
import { bitcoin } from "../assets";

const Ransomware = () => {
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
          title="How does ransomware spread?"
          text="Ransomware can infect your computer through a variety of methods. It often infiltrates systems via phishing emails, malicious websites, or software vulnerabilities. Once inside, it can quickly spread across networks, leaving a trail of destruction."
          className="z-10 relative"
        />
        <div className="lg:flex lg:flex-row flex items-center justify-center">
          <div className="relative flex flex-col lg:flex-row gap-5">
            {/* Rendering SpreadMethods */}
            {SpreadMethods.map((item) => (
              <div className="flex flex-col lg:flex-col" key={item.id}>
                <div
                  className="relative z-1 w-[20rem] md:w-[20rem] flex flex-row h-[15rem] md:h-[20rem] lg:h-[15rem] lg:w-[15rem] mb-2 p-5 border border-n-1/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-150 ease-in bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.iconUrl})`,
                  }}
                ></div>
                <div className="relative z-1 flex flex-col w-full md:w-auto h-[10rem] md:h-[20rem] lg:h-[15rem] lg:w-[15rem] mb-2 p-5 overflow-hidden bg-cover bg-center">
                  <h6 className="h6">{item.title}</h6>
                  <p className="body-2 mb-2 lg:mb-6 text-n-3 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Heading
          title="Anatomy of a Ransomware Attack"
          className="z-10 relative"
        />
        <div className="relative flex flex-wrap gap-5 lg:flex lg:items-center lg:justify-between border-white mb-15">
          <img className="w-[180px] h-[180px]" src={hacker} alt="#hacker" />
          <div className="arrow-1"></div>
          <img
            className="mb-2 lg:mb-2 w-[180px] h-[180px]"
            src={laptop}
            alt="#hacker"
          />
        </div>
      </div>
    </Section>
  );
};

export default Ransomware;
