// components/JobCard.js

import React, { useState } from 'react';

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.substring(0, 100)}</p>
      {job.jobDetailsFromCompany.length > 100 && (
        <button onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
      <p>{job.experience}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;
