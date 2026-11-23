import PiesaCard from "./PiesaCard.jsx";
import styles from "./PiesaList.module.css";

export default function PiesaList({ piese, onToggle, onDelete, onBuy }) {
  if (piese.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio piesă.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {piese.map((piesa) => (
        <PiesaCard
          key={piesa.id}
          piesa={piesa}
          onToggle={onToggle}
          onDelete={onDelete}
          onBuy={onBuy}
        />
      ))}
    </ul>
  );
}