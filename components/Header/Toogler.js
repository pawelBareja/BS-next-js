import { useState, useEffect } from "react";

const Toogler = () => {

  const [originalTitle, setOriginalTitle] = useState(null);

  useEffect(() => {
    setOriginalTitle(document.title)
  }, [])

  const handleTabChange = () => {
    if (document.hidden) {
      document.title = "Hey, come back! ;)";
    } else {
      document.title = "It is cool you're back!";
      setTimeout(() => {
        document.title = originalTitle;
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  });

  return <div></div>;
};

export default Toogler;