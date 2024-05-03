
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchJobs } from './api';
import JobList from './components/JobList';
import Filter from './components/Filter';

function App() {
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchJobs({ limit: 10, offset: 0 });
        console.log(data);
        setJobs(data.jdList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="app">
      <h1>Job Listings</h1>
      <Filter />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
}
export default App;
