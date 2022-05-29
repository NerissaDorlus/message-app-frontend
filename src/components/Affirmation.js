import React, { useEffect } from "react";
import { useState } from "react";

const Affirmations = () => {
  const [affirmations, setAffirmations] = useState("");

  useEffect(() => {
    fetch("https://affirmation-project2-nd.web.app/affirmations")
      .then((response) => response.json())
      .then((data) => setAffirmations(data))
      .catch(console.error);
  }, [affirmations]);
  return (
    <>
      <h1>Help us build a girls' self-esteem with some positive messages 💕</h1>
      {!affirmations ? (
        <h2>One moment as content loads...</h2>
      ) : (
        <>
          <h2>Affirmations</h2>
          {affirmations.map((affirmation) => {
            return <p key={affirmation.id}>{affirmation.message}</p>;
          })}
        </>
      )}
    </>
  );
};

export default Affirmations;
