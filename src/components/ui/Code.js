"use client";

import { useState } from "react";

export default function Code({ children, language = "bash" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-[#1a1a1a] hover:bg-[#262626] text-[#a3a3a3] text-sm rounded border border-[#333333] transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-[#0a0a0a] border border-[#262626] rounded-lg p-4 overflow-x-auto">
        <code className="text-[#22c55e] text-sm font-mono">{children}</code>
      </pre>
    </div>
  );
}
