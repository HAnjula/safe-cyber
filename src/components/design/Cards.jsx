import Card from "./Card.jsx";

const Cards = () => {
  return (
    <div className="flex justify-center space-x-8 mt-10">
      <Card
        topic="Ransomware"
        imageSrc="/src/assets/ransomware.jpeg" // replace with your image path
        description="Ransomware is a type of malicious software that encrypts files on a victim's computer, demanding payment for their release."
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your YouTube link
      />
      <Card
        topic="Social Engineering"
        imageSrc="/src/assets/se.jpg" // replace with your image path
        description="Social engineering involves manipulating individuals into divulging confidential information or performing actions that compromise security."
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your YouTube link
      />
      <Card
        topic="Malware"
        imageSrc="/src/assets/Malware-Attacks.jpg" // replace with your image path
        description="Malware, short for malicious software, is designed to disrupt, damage, or gain unauthorized access to computer systems and data."
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your YouTube link
      />
      <Card
        topic="DDoS"
        imageSrc="/src/assets/ddos.jpg" // replace with your image path
        description="A Distributed Denial of Service (DDoS) attack floods a network or website with an overwhelming amount of traffic, rendering it inaccessible to users."
        link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your YouTube link
      />
    </div>
  );
};

export default Cards;
