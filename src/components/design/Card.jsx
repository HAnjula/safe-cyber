const Card = ({ topic, imageSrc, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-80 h-96 bg-shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-transparent hover:border-blue-500">
        <img className="w-full h-40 object-cover" src={imageSrc} alt={topic} />
        <div className="p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">{topic}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
