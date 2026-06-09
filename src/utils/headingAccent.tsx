export function accentLastWords(text: string, wordCount = 2) {
  const words = text.trim().split(/\s+/);

  if (words.length <= wordCount) {
    return <span className="headingAccent">{text}</span>;
  }

  const accent = words.slice(-wordCount).join(" ");
  const lead = words.slice(0, -wordCount).join(" ");

  return (
    <>
      {lead} <span className="headingAccent">{accent}</span>
    </>
  );
}
