import React, { useState, useEffect } from "react";

export default function CookieBanner({ lang = "ro" }) {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem("aigo_cookie_accepted") === "true";
  });

  const acceptCookies = () => {
    localStorage.setItem("aigo_cookie_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white text-sm p-4 flex flex-col sm:flex-row sm:justify-between items-center z-50">
      <span className="mb-2 sm:mb-0">
        {lang === "ro"
          ? "Folosim cookies pentru a îmbunătăți experiența pe site. Continuarea navigării implică acceptul tău."
          : "We use cookies to improve your experience. By continuing, you accept this."}
      </span>
      <button
        onClick={acceptCookies}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        {lang === "ro" ? "Accept" : "Accept"}
      </button>
    </div>
  );
}
