// 1. Implement a retry mechanism for API calls with exponential backoff.

//async function fetchWithRetry(apiFn, retries, delay)


const fetchWithRetry = async (apiFn, retries, delay) => {
    for (let i = 0; i <= retries; i++) {
        try {
            return await apiFn();
        } catch (error) {
            if (i === retries) {
                throw error;
            }
            await new Promise(res => setTimeout(res, delay * Math.pow(2, i))); // Exponential backoff
        }
    }
};

fetchWithRetry(fetchData, 5, 1000)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
