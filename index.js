import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleScan = () => {
    const input = userInput.toLowerCase();
    if (input.includes("linear") && input.includes("team")) {
      setResponse("Warning: You may be in a workspace you didn't create. Check if you're an admin. Confirm workspace ownership and integration permissions.");
    } else if (input.includes("telegram") || input.includes("whatsapp")) {
      setResponse("Caution: Rapid shifts between platforms can indicate social engineering. Always verify identity and purpose across channels.");
    } else if (input.includes("group call") || input.includes("google meet")) {
      setResponse("Tip: Calls with low camera visibility and minimal transparency often signal false authority. Trust your intuition and ask for verifiable links.");
    } else {
      setResponse("Input received. No immediate red flags detected. Stay alert and verify any team or platform access you accept.");
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1>Linear Safety Sentinel</h1>
      <p>Paste a message, invite, or situation you're unsure about. The Sentinel will assess the risk instantly.</p>
      <textarea
        rows={5}
        style={{ width: '100%', marginTop: 12, padding: 8 }}
        placeholder="Paste your scenario here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button style={{ marginTop: 12, padding: '8px 16px' }} onClick={handleScan}>Scan</button>
      {response && (
        <div style={{ marginTop: 24, padding: 12, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
          {response}
        </div>
      )}
    </div>
  );
}
