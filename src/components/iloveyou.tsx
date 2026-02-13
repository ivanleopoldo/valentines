export default function ILY() {
  const iloveyous = [
    "사랑해",
    "Te amo",
    "Mahal kita",
    "だいすき",
    "I love you",
    "Je t'aime",
  ];
  return (
    <div className="flex opacity-40 flex-row px-8 flex-wrap items-center justify-center">
      {iloveyous.map((text, index) => (
        <>
          <h2 className="text-xl md:text-2xl">{text}</h2>
          {index !== iloveyous.length - 1 && (
            <span className="text-muted-foreground text-sm px-2 self-center">
              {" "}
              𑣲{" "}
            </span>
          )}
        </>
      ))}
    </div>
  );
}
