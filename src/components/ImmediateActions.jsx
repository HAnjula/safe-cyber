// Immediate Actions Component
const ImmediateActions = () => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Immediate Actions</h3>
    <ul className="list-disc list-inside text-gray-700">
      <li>Disconnect the infected device from the network immediately.</li>
      <li>
        Do not pay the ransom. Paying does not guarantee data recovery and
        supports criminal activity.
      </li>
      <li>Document the ransom note and any communication with the attacker.</li>
      <li>Notify your IT department or security team as soon as possible.</li>
      <li>Run a full system scan using reliable antivirus software.</li>
    </ul>
  </div>
);

// Incident Reporting Component
const IncidentReporting = () => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Incident Reporting</h3>
    <p className="text-gray-700">
      Report the ransomware incident to your organization's IT department or
      security team. Provide detailed information about the attack, including
      how it occurred and the steps taken so far. Additionally, report the
      incident to relevant authorities such as local law enforcement and
      national cybersecurity agencies.
    </p>
  </div>
);

// Recovery Process Component
const RecoveryProcess = () => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Recovery Process</h3>
    <p className="text-gray-700">
      Follow these steps to restore your systems and data from backups:
    </p>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        Ensure the ransomware has been completely removed from the system.
      </li>
      <li>
        Verify the integrity of your backups before starting the recovery
        process.
      </li>
      <li>Restore systems and data from the most recent clean backup.</li>
      <li>
        Test the restored systems and data to ensure they are functioning
        correctly.
      </li>
      <li>Implement additional security measures to prevent future attacks.</li>
    </ul>
  </div>
);

// Main Response to Ransomware Attack Component
const ResponseToRansomwareAttack = () => (
  <section className="max-w-4xl mx-auto my-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
      Response to a Ransomware Attack
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      <ImmediateActions />
      <IncidentReporting />
      <RecoveryProcess />
    </div>
  </section>
);

export default ResponseToRansomwareAttack;
