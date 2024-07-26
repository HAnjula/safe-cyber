import TipsButton from "./design/TipsButton.jsx";
import Cards from "./design/Cards.jsx";

export default function Threats() {
  return (
    <div className="relative w-full">
      {/* First Container */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/src/assets/threatsbg.mp4" // replace with your video path
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10">
          <p className="font-manrope font-medium text-white text-center leading-[112px] text-[104px] mt-20">
            <span>
              THREATS
              <br />
            </span>
            <span className="text-[54px]">
              To understand, manage, and mitigate cybersecurity risks. <br />
            </span>
          </p>
          <p className="font-manrope font-medium text-white text-center leading-[52px] text-[34px] mt-8">
            <span>
              {" "}
              Todays cyber threats remind us that in the digital age, vigilance
              is the price of security.{" "}
            </span>
          </p>
          <div className="flex justify-center items-center w-full mt-10">
            <p className="w-[949px] h-[289px] font-manrope font-medium text-white text-center leading-[26px] text-[25px]">
              Learn Together, Stay Secure:
              <br />
              <span className="block mt-7">
                Access Solutions to Build Your Defenses.
              </span>
              <br />
            </p>
          </div>
          <TipsButton /> {/* Use the TipsButton component */}
        </div>
      </div>

      {/* Second Container */}

      {/* Second Container */}
      <div className="min-h-screen bg-[#110a19] flex flex-col items-center justify-center">
        <h1 className="font-manrope font-medium text-white text-center leading-[112px] text-[84px] mt-0">
          Threats : Learn Cybersecurity Awareness
        </h1>

        <Cards />
      </div>
    </div>
  );
}
