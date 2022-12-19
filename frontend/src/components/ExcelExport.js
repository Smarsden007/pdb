import React from 'react'

export const ExcelExport = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const { data, isLoading, error } = useQuery(
      ['excel', startDate, endDate], // The query key is an array that includes the string 'excel' and the startDate and endDate values
      fetchExcelFile, // The function to fetch the data
      {
        refetchOnWindowFocus: false, // Don't refetch the data when the window regains focus
        refetchOnMount: false, // Don't refetch the data when the component mounts
        refetchOnReconnect: false // Don't refetch the data when the connection is restored
      }
    );
  
    // Handle the loading, error, and data states
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data</p>;
  
    // Create a URL for the Excel file and a link to download it
    const url = window.URL.createObjectURL(new Blob([data]));
    return (
      <a href={url} download="receipts.xlsx">Download Excel File</a>
    );
  };
