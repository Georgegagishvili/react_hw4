import { useEffect, useState } from "react";

import ResourceTable from "../../components/tables/resource-table";

import "./resourcepage.css";

function ResourcesPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResources(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error has occured... {error}</div>;
  } else {
    return (
      <div className="resources-wrapper">
        <ResourceTable resources={resources}></ResourceTable>
      </div>
    );
  }
}

export default ResourcesPage;
