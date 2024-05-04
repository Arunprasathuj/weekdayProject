import React from 'react';
import JobCard from './JobCard';
import './JobCard.css'

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;