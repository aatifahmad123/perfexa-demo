import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TeamMembers = () => {
  const members = [
    { name: 'Hasan Ayaz', designation: 'CEO', image: 'https://plus.unsplash.com/premium_photo-1720188548640-3c5602bb7832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { name: 'Virat Kohli', designation: 'CTO', image: 'https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' },
    { name: 'Hasan Fraz', designation: 'Lead Developer', image: 'https://images.unsplash.com/photo-1720366252332-a86c8a11d879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
    { name: 'Hasan Maaz', designation: 'Designer', image: 'https://images.unsplash.com/photo-1720370225485-386b9793c61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="hidden md:flex justify-center space-x-8">
        {members.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <div className="bg-white p-4 shadow-md rounded-lg hover:text-white hover:bg-slate-500">
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p>{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden mt-2">
        <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop>
          {members.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.designation}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TeamMembers;
