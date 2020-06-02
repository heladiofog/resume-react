// custom hook for importing data form API
import { useEffect, useState } from 'react';
const API_URL = 'https://us-central1-gndx-cv.cloudfunctions.net/me';
// Function to expose the required information

/**
 * Convention Name
 */
const useGetData = () => {
  // State & function to update the state = Initial state (seState)
  const [myData, SetData] = useState([]);
  // sample API url: 'https://us-central1-gndx-cv.cloudfunctions.net/me'
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => SetData(data))
  }, []); // TODO: check tho other useEffect options

  return myData;
}

export default useGetData;