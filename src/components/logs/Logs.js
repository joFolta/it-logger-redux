import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []); // pass in empty array, so it only runs once; no dependencies

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs"); // don't have to do 'http://localhost:5000/logs' b/c we added to package.json "proxy": "http://localhost:5000"
    // TODO REMOVE LOG
    console.log("res not formatted to json", res);
    const data = await res.json(); // format data as json

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>...Loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <li>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
