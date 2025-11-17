"use client";
import { useState } from "react";

export default function ChipInput({ limit = 15 }) {
  const [chips, setChips] = useState([]);  
  const [inputValue, setInputValue] = useState("");

  const addChip = () => {
    const value = inputValue.trim();

    if (!value) return;
    if (chips.includes(value)) return;
    if (chips.length >= limit) return;

    setChips([...chips, value]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "," || e.key === "Tab") {
      e.preventDefault();
      addChip();
    }

    if (e.key === "Backspace" && inputValue === "") {
      setChips((prev) => prev.slice(0, -1));
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <div className="chips_input">
      <div className="inner">
        {chips.map((chip, i) => (
          <span className="chip" key={i}>
            {chip}
            <button onClick={() => removeChip(i)} aria-label="remove chip">
              ✕
            </button>
          </span>
        ))}

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
