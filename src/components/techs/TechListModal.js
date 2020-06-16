import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // pass in empty array, so it only runs once; no dependencies

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs"); // don't have to do 'http://localhost:5000/logs' b/c we added to package.json "proxy": "http://localhost:5000"
    const data = await res.json(); // format data as json

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
