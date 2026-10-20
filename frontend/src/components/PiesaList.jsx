import PiesaCard from "./PiesaCard.jsx";

export default function PiesaList({ piese }) {
  if (piese.length === 0) {
    return <p className="empty">Nu există nicio piesă.</p>;
  }

  return (
    <ul className="item-list">
      {piese.map((piesa) => (
        <PiesaCard key={piesa.id} piesa={piesa} />
      ))}
    </ul>
  );
}