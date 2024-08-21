import { useState } from "react";

const BotnetSimulation = () => {
  const [stage, setStage] = useState(1);

  const handleNextStage = () => {
    if (stage < 4) setStage(stage + 1);
  };

  const handlePreviousStage = () => {
    if (stage > 1) setStage(stage - 1);
  };

  return (
    <div className="bg-gray-900 text-white h-screen p-4 relative">
      <h1 className="text-3xl text-center mb-8">Botnet Attack Simulation</h1>
      <div className="flex justify-center items-center h-full">
        {stage === 1 && (
          <div>
            <h2 className="text-2xl">Stage 1: Botnet Formation</h2>
            <p className="mt-4">
              Infected devices communicate with the C2 server.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-700 p-4 rounded-lg">Device 1</div>
                <div className="bg-blue-700 p-4 rounded-lg">Device 2</div>
                <div className="bg-blue-700 p-4 rounded-lg">Device 3</div>
              </div>
              <div className="mt-4">
                <div className="bg-red-600 p-4 rounded-lg">C2 Server</div>
              </div>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div>
            <h2 className="text-2xl">Stage 2: Command & Control</h2>
            <p className="mt-4">C2 server issues commands to bots.</p>
            <div className="mt-8">
              <div className="bg-red-600 p-4 rounded-lg">C2 Server</div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-700 p-4 rounded-lg">Bot 1</div>
                <div className="bg-blue-700 p-4 rounded-lg">Bot 2</div>
                <div className="bg-blue-700 p-4 rounded-lg">Bot 3</div>
              </div>
            </div>
          </div>
        )}

        {stage === 3 && (
          <div>
            <h2 className="text-2xl">Stage 3: Attack Execution</h2>
            <p className="mt-4">
              Bots launch a DDoS attack on the target server.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-700 p-4 rounded-lg">Bot 1</div>
                <div className="bg-blue-700 p-4 rounded-lg">Bot 2</div>
                <div className="bg-blue-700 p-4 rounded-lg">Bot 3</div>
              </div>
              <div className="mt-4">
                <div className="bg-green-600 p-4 rounded-lg">Target Server</div>
              </div>
            </div>
          </div>
        )}

        {stage === 4 && (
          <div>
            <h2 className="text-2xl">Stage 4: Mitigation Strategies</h2>
            <p className="mt-4">Apply strategies to mitigate the attack.</p>
            <div className="mt-8">
              <div className="bg-yellow-600 p-4 rounded-lg">Firewall</div>
              <div className="bg-green-600 p-4 rounded-lg mt-4">
                Target Server (Recovered)
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={handlePreviousStage}
          className="bg-blue-500 text-white p-2 rounded-lg"
          disabled={stage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextStage}
          className="bg-blue-500 text-white p-2 rounded-lg"
          disabled={stage === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BotnetSimulation;
