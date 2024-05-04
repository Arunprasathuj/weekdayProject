// components/JobCard.js

import React, { useState } from 'react';
import './JobCard.css';
function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
    <p className="posted">{job.date}</p>
      <h2 className="title">{job.title}</h2>
      <p className="role">{job.role}</p>
      <p className="salary">{job.salary}</p>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="content">{expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.substring(0, 100)}</p>
      {job.jobDetailsFromCompany.length > 100 && (
        <button onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
      <p className="experience">{job.experience}</p>
      <button className="button1">Apply</button>
      <button className="button2">Apply</button>

    </div>
  );
}

export default JobCard;
