// Best Practices Component
const BestPractices = () => (
  <div className="border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Best Practices</h3>
    <ul className="list-disc list-inside text-gray-500">
      <li>Use strong, unique passwords for different accounts.</li>
      <li>Enable two-factor authentication where possible.</li>
      <li>Be cautious of unsolicited emails and verify sources.</li>
      <li>Avoid clicking on suspicious links or downloading attachments.</li>
      <li>Regularly clear your browser cache and history.</li>
    </ul>
  </div>
);

// Software Updates Component
const SoftwareUpdates = () => (
  <div className="border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Software Updates</h3>
    <p className="text-gray-500">
      Keeping your operating system and applications up to date is crucial to
      protect against known vulnerabilities. Enable automatic updates to ensure
      you always have the latest security patches.
    </p>
  </div>
);

// Security Tools Component
const SecurityTools = () => (
  <div className="border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Security Tools</h3>
    <p className="text-gray-500">
      Utilize reputable antivirus software, firewalls, and other security tools
      to protect your devices. Regularly scan your system for malware and
      configure your firewall to block unauthorized access.
    </p>
  </div>
);

// Backups Component
const Backups = () => (
  <div className="border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Backups</h3>
    <p className="text-gray-500">
      Regular data backups are essential for recovering from ransomware attacks.
      Use both local and cloud backups to ensure your data is safe and can be
      restored in case of an attack. Schedule automatic backups for convenience.
    </p>
  </div>
);

// Main Prevention Strategies Component
const PreventionStrategies = () => (
  <section className="relative flex flex-wrap justify-center gap-5 lg:flex lg:flex-row border-white mb-15">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-500">
      Prevention Strategies
    </h2>
    <div className="flex flex-row justify-center gap-6">
      <BestPractices />
      <SoftwareUpdates />
      <SecurityTools />
      <Backups />
    </div>
  </section>
);

export default PreventionStrategies;
