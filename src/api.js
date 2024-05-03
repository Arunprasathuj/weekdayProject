export async function fetchJobs({ limit, offset }) {
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ limit, offset })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch jobs");
    }
  }