// App.js
import React from "react";
import Card from "./Card";

const App = () => {
  const cardData = [
    {
      version: "3.3.0",
      date: "14/05/2018",
      status: "New",
      author: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization",
      bgColor: "green",
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "Fix",
      author: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes",
      bgColor: "blue",
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "Improvement",
      author: "Kevin Joe",
      description:
        "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      bgColor: "purple",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cardData.map((data, index) => (
        <Card
          key={index}
          version={data.version}
          date={data.date}
          status={data.status}
          author={data.author}
          description={data.description}
          bgColor={data.bgColor}
        />
      ))}
    </div>
  );
};

export default App;
