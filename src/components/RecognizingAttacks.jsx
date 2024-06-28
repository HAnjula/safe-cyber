import { indicators } from "../constants";

// Indicators of Compromise Component
const IndicatorsOfCompromise = () => (
  <div className="flex flex-wrap justify-center gap-6 ">
    {indicators.map((indicator, index) => (
      <div
        key={index}
        className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-gray-100 duration-300 w-72 h-48 m-3"
      >
        <h3 className="text-xl font-bold mb-2 text-blue-600">
          {indicator.title}
        </h3>
        <p className="text-gray-700">{indicator.description}</p>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-75 rounded-lg">
          <img
            src={indicator.image}
            alt={indicator.title}
            className="max-h-full max-w-full"
          />
        </div>
      </div>
    ))}
  </div>
);

// Real-World Examples Component
const RealWorldExamples = () => (
  <div className=" p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-2xl font-bold mb-4 text-blue-600">
      Real-World Examples
    </h3>
    <div className="space-y-4">
      <div className="p-4 rounded-md">
        <h4 className="font-semibold">WannaCry Ransomware</h4>
        <p>
          In 2017, WannaCry affected thousands of organizations worldwide by
          exploiting a Windows vulnerability. It encrypted files and demanded
          Bitcoin payments.
        </p>
      </div>
      <div className="p-4  rounded-md">
        <h4 className="font-semibold">Petya/NotPetya</h4>
        <p>
          Initially disguised as ransomware, Petya/NotPetya was a destructive
          cyber attack that caused significant data loss and operational
          disruption in 2016.
        </p>
      </div>
      <div className="p-4  rounded-md">
        <h4 className="font-semibold">Ryuk Ransomware</h4>
        <p>
          Targeting large enterprises, Ryuk ransomware has caused massive
          financial and data losses since its emergence in 2018, often demanding
          high ransom payments.
        </p>
      </div>
    </div>
  </div>
);

// Main Recognizing Attacks Component
const RecognizingAttacks = () => (
  <section className="max-w-4xl mx-auto my-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
      Recognizing Signs of a Ransomware Attack
    </h2>
    <IndicatorsOfCompromise />
    <RealWorldExamples />
  </section>
);

export default RecognizingAttacks;
