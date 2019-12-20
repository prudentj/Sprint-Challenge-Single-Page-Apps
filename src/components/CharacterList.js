import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect`
    // parameter: the dependancies array!
  }, []);

  return (
        <section className="character-list">
          <h2>TODO: `array.map()` over your state here!</h2>
        </section>
  );
}
