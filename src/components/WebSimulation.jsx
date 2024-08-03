import { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const WebSimulation = () => {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [serverStatus, setServerStatus] = useState("Running");
  const [requestCount, setRequestCount] = useState(0);
  const requestInterval = useRef(null);

  const openSimulationModal = () => setIsSimulationOpen(true);
  const closeSimulationModal = () => {
    setIsSimulationOpen(false);
    setRequests([]);
    setServerStatus("Running");
    setRequestCount(0);
    clearInterval(requestInterval.current);
  };

  const startAttack = () => {
    requestInterval.current = setInterval(() => {
      setRequests((prev) => [
        ...prev,
        { id: prev.length + 1, timestamp: new Date().toISOString() },
      ]);
      setRequestCount((prev) => prev + 1);
    }, 100);
  };

  useEffect(() => {
    if (requestCount > 100) {
      setServerStatus("Overloaded");
      clearInterval(requestInterval.current);
    }
  }, [requestCount]);

  return (
    <section className="max-w-6xl mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Understanding DDoS Attacks
      </h2>
      <div
        className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center"
        onClick={openSimulationModal}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-blue-600">
            Start DDoS Simulation
          </h3>
          <p className="text-gray-600">
            Learn how DDoS attacks overload servers.
          </p>
        </div>
      </div>

      <Transition appear show={isSimulationOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeSimulationModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    DDoS Attack Simulation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This simulation shows how DDoS attacks overload a server.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col items-center space-y-4">
                    <div className="w-full flex justify-center">
                      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                          Server Status: {serverStatus}
                        </h4>
                        <p className="text-gray-600">
                          Total Requests: {requestCount}
                        </p>
                        <div className="mt-4 w-full h-64 bg-gray-50 rounded-lg overflow-auto">
                          {requests.map((req) => (
                            <div
                              key={req.id}
                              className="p-2 text-xs text-gray-500 border-b border-gray-200"
                            >
                              Request ID: {req.id} - Time: {req.timestamp}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {serverStatus === "Running" && (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={startAttack}
                      >
                        Start DDoS Attack
                      </button>
                    )}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      Case Studies
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      <li>
                        <strong>GitHub (2018):</strong> One of the largest DDoS
                        attacks in history, with traffic peaking at 1.35
                        terabits per second.
                      </li>
                      <li>
                        <strong>Dyn (2016):</strong> An attack that affected
                        major websites like Twitter, Netflix, and Reddit.
                      </li>
                      <li>
                        <strong>Spamhaus (2013):</strong> A 300 Gbps attack on
                        the anti-spam organization, affecting global internet
                        infrastructure.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      How to Prevent DDoS Attacks
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      <li>
                        Use a Content Delivery Network (CDN) to distribute
                        traffic.
                      </li>
                      <li>
                        Implement rate limiting to control the number of
                        requests from a single IP.
                      </li>
                      <li>
                        Deploy Web Application Firewalls (WAF) to filter
                        malicious traffic.
                      </li>
                      <li>
                        Use DDoS mitigation services provided by companies like
                        Cloudflare, Akamai, and AWS Shield.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeSimulationModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default WebSimulation;
