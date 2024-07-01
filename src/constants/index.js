import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  AI,
  cloudcomputing,
  MITM,
  phishing,
  ransomware,
  social,
  supplychainattack,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  phishing1,
  MW,
  SV,
  RDP,
  FA,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Threats",
    url: "#threats",
  },
  {
    id: "1",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "2",
    title: "Resources",
    url: "#resources",
  },
  {
    id: "3",
    title: "About us",
    url: "#about-us",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const indicators = [
  {
    title: "Unusual file extensions",
    description: "File extensions such as .encrypted or .locked.",
    image: "path_to_image/encrypted_files.jpg", // Replace with your actual image path
  },
  {
    title: "Significant decrease in system performance",
    description: "Your system may slow down noticeably.",
    image: "path_to_image/system_performance.jpg", // Replace with your actual image path
  },
  {
    title: "Ransom notes appearing in file directories",
    description: "Ransom notes may appear in file directories.",
    image: "path_to_image/ransom_note.jpg", // Replace with your actual image path
  },
  {
    title: "Inability to access files or applications",
    description: "You may be unable to open certain files or applications.",
    image: "path_to_image/access_files.jpg", // Replace with your actual image path
  },
  {
    title: "Unexpected system restarts or crashes",
    description: "Your system may restart or crash unexpectedly.",
    image: "path_to_image/system_crash.jpg", // Replace with your actual image path
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Experience seamless integration of cutting-edge technology and robust security measures, tailored for teams seeking heightened efficiency and fortified protection against digital threats.";

export const collabContent = [
  {
    id: "0",
    title: "Empower Your Cyber Defense",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "AI",
    icon: AI,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Cloud-computing",
    icon: cloudcomputing,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "MITM",
    icon: MITM,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "phishing",
    icon: phishing,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "ransomware",
    icon: ransomware,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "social",
    icon: social,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "supplychainattack",
    icon: supplychainattack,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "supplychainattack",
    icon: supplychainattack,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Enhance cybersecurity for individuals & small businesses.",
    price: "0",
    features: [
      "Access to basic cybersecurity courses and resources.",
      "Limited access to the ransomware attack simulation.",
      "Email support.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Designed for professionals and organizations seeking comprehensive ",
    price: "9.99",
    features: [
      "Full access to all cybersecurity courses and resources.",
      "Unlimited access to the ransomware attack simulation with advanced scenarios.",
      "Priority email and chat support.",
      "Monthly cybersecurity newsletters and updates.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized cybersecurity for enterprises with complex needs.",
    price: null,
    features: [
      "Customizable training modules and content.",
      "Dedicated account manager and priority support.",
      "Access for multiple users with role-based permissions.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Curious about cyber threats? Click here to talk to our bright bot for fast, intelligent answers to any question about cybersecurity you might have!",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "Get Instant Updates on the Latest Security Trends and Emerging Attacks to Strengthen Your Defenses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const RansomwareMethods = [
  {
    id: "0",
    title: "Encrypt files",
    text: "Makes files unreadable",
    ways: "Software Vulnerabilities",
    description:
      "Software vulnerabilities are weaknesses in software that attackers exploit to gain unauthorized access. To avoid them, regularly update your software, use strong passwords, and stay informed about security threats.",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Targets organizations",
    text: "Goes after businesses",
    iconUrl: benefitIcon2,
    ways: "Phishing Attacks",
    description:
      "Phishing attacks, by deceiving users into interacting with malicious content, serve as the gateway for ransomware intrusion. These attacks exploit vulnerabilities in system security, encrypting files and demanding ransom for decryption. Hence, combating phishing is vital to thwart ransomware incidents.",
    light: true,
  },
  {
    id: "2",
    title: "Attacks servers",
    text: "Hits network systems",
    ways: "Weak Passwords",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "Infects personal devices",
    text: "Affects phones and tablets",
    ways: "Drive-by Downloads",
    iconUrl: benefitIcon4,
  },
  {
    id: "4",
    title: "Ransoms vary",
    text: "Ransom amounts differ",
    ways: "Malvertising",
    iconUrl: benefitIcon2,
  },
];

export const SpreadMethods = [
  {
    id: "0",
    title: "Phishing",
    text: "Tricks users into downloading malware",
    iconUrl: phishing1,
  },
  {
    id: "1",
    title: "Malicious websites",
    text: "Infects visitors with drive-by downloads",
    iconUrl: MW,
  },
  {
    id: "2",
    title: "Software vulnerabilities",
    text: "Exploits unpatched application and OS",
    iconUrl: SV,
  },
  {
    id: "3",
    title: "Remote desktop protocol",
    text: "Allows attackers to brute force login",
    iconUrl: RDP,
  },
  {
    id: "4",
    title: "Fileless attacks",
    text: "Runs malwawre in memory without a file",
    iconUrl: FA,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
