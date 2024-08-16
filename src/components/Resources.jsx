export default function Resourses() {
  return (
    <div>
      <div className="relative w-full">
        {/* First Container */}
        <div
          className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center"
          style={{ backgroundImage: "url(src/assets/bgimg.jpg)" }}
        >
          <p className="font-manrope font-medium text-white text-center leading-[112px] text-[84px]">
            <span>
              Your Cybersecurity Toolkit
              <br />
            </span>
          </p>
          <p className="font-manrope font-medium text-white text-center leading-[112px] text-[64px]">
            <span>Explore Resources to Stay Secure Online</span>
          </p>
          <p className="w-[949px] h-[289px] font-manrope font-medium text-white text-center leading-[26px] text-[25px] mt-10">
            Learn Together, Stay Secure:
            <br />
            <span className="block mt-7">
              Access Resources to Build Your Defenses.
            </span>
            <br />
            <span className="block mt-7">
              This highlights the users role in learning and building security
              awareness
            </span>
          </p>
          <button className="absolute bottom-4 right-4 border-2 border-white text-white bg-transparent py-4 px-8 text-2xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
            Tips
          </button>
        </div>

        {/* Second Container */}
        <div className="flex flex-wrap justify-center gap-14 mt-0 p-4 bg-[#34204c]">
          {/* Second Container */}

          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="topic text-black font-bold text-2xl p-4">
              Social Engineering Resources:
            </p>
            <div className="content p-4 text-ash text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding Social Engineering:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.sans.org/white-papers/529/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        SANS Institute InfoSec Reading Room: Social Engineering
                        Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tresorit.com/blog/keeping-data-safe-in-social-engineering-attacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        CSO Online: What is Social Engineering?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://insights.sei.cmu.edu/documents/2457/2017_015_001_452233.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Carnegie Mellon University CERT in Social Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=5G-TzHELOkk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        TED Talk: Kevin Mitnick: The art of deception (18
                        minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Types of Social Engineering Attacks:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://blog.knowbe4.com/social-engineering-number-one-cybersecurity-problem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        KnowBe4: Top 10 Social Engineering Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.checkpoint.com/cyber-hub/threat-prevention/social-engineering-attacks/social-engineering-vs-phishing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Infosec Institute: Phishing vs. Social Engineering: The
                        Key Differences
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">
                    Identifying and Avoiding Social Engineering:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.austintexas.gov/sites/default/files/files/HR/NEO/social-engineering.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        US-CERT: Social Engineering Red Flags
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nist.gov/privacy-framework/nist-sp-800-61"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        National Institute of Standards and Technology
                        (NIST)—Special Publication 800-61 Revision 3—Digital
                        Identity Guidelines
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://staysafeonline.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        National Cyber Security Alliance: Stay Safe Online:
                        Social Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=lc7scxvKQOo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cybrary: Social Engineering Explained (10 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.infosecurity-magazine.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Security Magazine - Social Engineering
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="topic text-black font-bold text-2xl p-4">
              Ransomware Resources:
            </p>
            <div className="text-ash text-1.0em  text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding Ransomware:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.cisa.gov/stopransomware/ransomware-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cybersecurity & Infrastructure Security Agency (CISA) -
                        Stop Ransomware
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://searchsecurity.techtarget.com/definition/ransomware"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        TechTarget SearchSecurity - Ransomware Definition
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Types of Ransomware:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://blog.paloaltonetworks.com/2022/09/understanding-different-types-ransomware/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Palo Alto Networks - Understanding Different Types of
                        Ransomware
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://heimdalsecurity.com/blog/ransomware-101/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Heimdal Security Blog - Ransomware 101: Different Types,
                        Delivery Methods, and Prevention
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Protecting Yourself from Ransomware:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.nist.gov/cyberframework/ransomware"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        National Institute of Standards and Technology (NIST) -
                        Ransomware Protection and Response
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.forbes.com/sites/forbestechcouncil/2022/07/19/how-to-protect-yourself-from-ransomware-attacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Forbes - How to Protect Yourself From Ransomware Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.sans.org/white-papers/40475/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        SANS Institute InfoSec Reading Room - Ransomware
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=Gc7F-4Op4n4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cybrary - Ransomware Explained & How to Protect Yourself
                        (15 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.scmagazine.com/ransomware"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        SC Magazine - Ransomware
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nomoreransom.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Europol - No More Ransom Project
                      </a>{" "}
                      (Provides free decryption tools for some ransomware
                      variants)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="topic text-black font-bold text-2xl p-4">
              Phishing Resources:
            </p>
            <div className="content p-4 text-ash text-1.0em  text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding Phishing:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://docs.apwg.org/reports/apwg_report_august_2007.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Anti-Phishing Working Group (APWG) - Phishing Definition
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.knowbe4.com/what-is-phishing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        KnowBe4 - What is Phishing?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ftc.gov/phishing-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Federal Trade Commission (FTC) - Avoiding Phishing Scams
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=XBkzBrXlle0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        TED-Ed - How Phishing Works (3 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Types of Phishing Attacks:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://phished.io/phishing-types/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Phished - Types of Phishing Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cyberscoop.com/types-of-phishing-attacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cyberscoop - The Different Types of Phishing Attacks You
                        Need to Know About
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Identifying and Avoiding Phishing:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://owasp.org/www-community/attacks/Phishing_Attacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Open Web Application Security Project (OWASP) - Phishing
                        Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nist.gov/privacy-framework/nist-sp-800-61"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        National Institute of Standards and Technology (NIST) -
                        Special Publication 800-61 Revision 3 - Digital Identity
                        Guidelines: (See Section 5.3.1 - Security Awareness and
                        Training)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.us-cert.gov/sites/default/files/publications/Phishing_Red_Flags.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        US-CERT - Phishing Red Flags
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=lc7scxvKQOo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        KnowBe4 - How to Spot a Phishing Email (7 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.infosecurity-magazine.com/phishing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Security Magazine - Phishing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.opendns.com/phishing-quiz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        OpenDNS Phishing Test - Test Your Phishing IQ
                        (Interactive quiz to test your ability to identify
                        phishing emails)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="text-black font-bold text-center  text-2xl p-4">
              DDoS Attacks Resources:
            </p>
            <div className="content p-4 text-ash text-1.0em  text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding DDoS Attacks:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://developers.cloudflare.com/ddos-protection/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cloudflare - What is a DDoS Attack?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cisco.com/c/en/us/products/security/what-is-a-ddos-attack.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Cisco - What is a DDoS Attack?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=8ZxP-FA6kAs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Kaspersky - What is a DDoS Attack? (2 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Types of DDoS Attacks:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.incapsula.com/ddos/attack-glossary.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Incapsula - DDoS Attack Glossary
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.imperva.com/learn/ddos/types-of-ddos-attacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Imperva - Types of DDoS Attacks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.us-cert.gov/ncas/tips/ST04-015"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        US-CERT - Understanding Denial-of-Service Attacks
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Mitigating DDoS Attacks:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.paloaltonetworks.com/cyberpedia/what-is-a-ddos-attack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Palo Alto Networks - What is a DDoS Attack? (Mitigation
                        Strategies)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.arbornetworks.com/blog/asert/best-practices-ddos-defense/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Arbor Networks - Best Practices for DDoS Defense
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.zdnet.com/article/ddos-attacks-how-to-protect-your-business-from-digital-destruction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        ZDNet - DDoS Attacks: How to Protect Your Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=7KGSf5J8jVY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Fortinet - DDoS Attack Mitigation (4 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.digitalattackmap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Digital Attack Map - Live DDoS Attack Data Visualization
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.prolexic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Prolexic - DDoS Mitigation Solutions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="text-black font-bold text-center  text-2xl p-4">
              Secure Communication:
            </p>
            <div className="content p-4 text-ash text-1.0em  text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding Secure Communication:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.eff.org/pages/tools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Electronic Frontier Foundation (EFF) - Surveillance
                        Self-Defense Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://proton.me/blog/what-is-end-to-end-encryption"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Proton Mail - What is End-to-End Encryption?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=K01JJ7zOBd4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Kaspersky - Secure Communication (3 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Tools for Secure Communication:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://signal.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Signal - Private Messenger
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.whatsapp.com/security/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        WhatsApp - Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wire.com/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Wire - Secure Collaboration
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://element.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Element - Secure Messaging
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Practices for Secure Communication:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://ssd.eff.org/en/module/protecting-yourself-against-phishing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        EFF - Protecting Yourself Against Phishing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.us-cert.gov/ncas/tips/ST05-016"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        US-CERT - Using Caution with Email Attachments
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=G7G0IGDJZn0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        CrashCourse - Secure Communication Basics (10 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.privacytools.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        PrivacyTools - Encryption Against Global Mass
                        Surveillance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://proton.me/blog/guide-to-privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Proton Mail - Complete Guide to Online Privacy
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <p className="text-black font-bold text-center  text-2xl p-4">
              Incident Response:
            </p>
            <div className="content p-4 text-ash text-1.0em  text-gray-800">
              <ul className="list-disc pl-4">
                <li>
                  <p className="pl-4">Understanding Incident Response:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.sans.org/white-papers/incident-response-101/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        SANS Institute - Incident Response 101
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cisa.gov/incident-handling-overview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        CISA - Incident Handling Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=6pYTLysFEdw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        IBM - Incident Response Plan: What To Do After a Data
                        Breach (3 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Incident Response Plans:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.mitre.org/publications/technical-papers/incident-response-planning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        MITRE - Incident Response Planning
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.us-cert.gov/sites/default/files/publications/Incident_Response_Best_Practices.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        US-CERT - Incident Response Best Practices
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nist.gov/itl/special-publication-800-61"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        NIST - Special Publication 800-61 Revision 2: Computer
                        Security Incident Handling Guide
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Post-Incident Activities:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.sans.org/white-papers/post-incident-activities/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        SANS Institute - Post-Incident Activities
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.securitymagazine.com/articles/90989-the-importance-of-post-incident-reviews-and-what-they-should-cover"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Security Magazine - The Importance of Post-Incident
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=NQ9W5k4Oh4E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        CISCO - Conducting a Post-Incident Review (7 minutes)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="pl-4">Additional Resources:</p>
                  <ul className="list-disc pl-8">
                    <li>
                      <a
                        href="https://www.fireeye.com/services/incident-response.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        FireEye - Incident Response Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.paloaltonetworks.com/cyberpedia/what-is-incident-response"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-400 hover:underline"
                      >
                        Palo Alto Networks - What is Incident Response?
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
