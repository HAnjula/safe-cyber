const botnets = () => {
  return (
    <div className="spyware-container bg-[#070114] text-gray-400 p-3 border border-gray-500">
      <h2 className="text-center text-[#cec1d7]  text-7xl mb-4">BOTNETS</h2>
      <div className="spyware-content flex">
        <div className="left-container w-1/2 p-4">
          <img
            src="/src/assets/botnets.jpg"
            alt="Spyware"
            className="w-full h-3/4"
          />
        </div>
        <div className="right-container  text-1xl w-1/2 p-4">
          <p>
            A botnet, short for "robot network," is a collection of
            internet-connected devices, such as computers, smartphones, or IoT
            devices, that have been compromised and are controlled by a
            malicious actor known as the "botmaster." These devices are infected
            with malware, allowing the botmaster to remotely control them
            without the owner's knowledge. Botnets can vary in size, from a few
            hundred devices to millions, and are often used for malicious
            activities such as launching distributed denial-of-service (DDoS)
            attacks, sending spam, stealing sensitive information, and spreading
            other malware. The power of a botnet lies in its ability to
            coordinate a large number of devices to perform actions
            simultaneously, making it a potent tool for cybercriminals.
          </p>
          <br></br>
          <p>
            The impact of botnets on both individual users and organizations can
            be significant. For individuals, being part of a botnet can lead to
            a decrease in device performance, increased internet usage, and
            potential exposure to further malware infections. For organizations,
            botnets pose a severe threat as they can be used to launch DDoS
            attacks that can cripple websites, disrupt services, and cause
            financial losses. Additionally, botnets can be leveraged to conduct
            espionage, steal intellectual property, and execute fraudulent
            activities. Detecting and mitigating botnet activity can be
            challenging, as the malicious traffic often blends in with
            legitimate network traffic. To combat the threat of botnets, it is
            crucial to implement robust cybersecurity measures, regularly update
            software, and educate users about safe online practices.
          </p>
          <br></br>
          <p>Explore more about botnets:</p>
          <ul>
            <li>
              <a
                href="https://www.akamai.com/glossary/what-is-a-botnet"
                className="text-gray-400 hover:text-white"
              >
                akamai.com
              </a>
            </li>
            <li>
              <a
                href="https://www.fortinet.com/resources/cyberglossary/what-is-botnet"
                className="text-gray-400 hover:text-white"
              >
                fortinet.com
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Botnet"
                className="text-gray-400 hover:text-white"
              >
                wikipedia.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default botnets;
