import React from 'react';

interface experienceCard{
  role: string;
  jobType: string;
  startDate: string;
  endDate: string;
  company: string;
  location: {
    city: string;
    country: string;
  }
  description: string;
}

const ExperienceCard: React.FC<experienceCard>= ({role, jobType, startDate, endDate, company, location, description }) => {
  return (
    <div className='w-full h-[200px] border-gradient rounded-3xl p-6'>
        <div>
            <h1>{role}</h1>
            <p>{jobType}</p>
            <p>{startDate} <span className='text-purple-200'>●</span> {endDate}</p>
            <p>{location.city} - {location.country}</p>
        </div>
        <div>
            <h1>{company}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceCard;