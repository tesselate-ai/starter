"use client";
import React, { useEffect, useState } from "react";

export const HelloWorld: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    fetch("/api/python")
      .then((response) => response.json())
      .then((data) => {
        setGreeting(data.message);
      });
  }, []);

  return (
    <div className="text-blue-300">
      <code>{greeting}</code>
    </div>
  );
};
