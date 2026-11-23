import { formatPret } from "../format.js";
import styles from "./Factura.module.css";

const ADRESA_CUMPARATOR = {
  nume: "Corbu Andrei-Iulian - SC Auto parts store - Magazin de piese auto SRL",
  adresa: "Str. Preciziei nr. 1, bl. B1, ap. 5",
  oras: "București",
  judet: "Sector 6",
};

export default function Factura({ factura, onClose }) {
  const total = factura.pret * factura.cantitate;
  const client = factura.client;
  const cumparator = factura.cumparator || ADRESA_CUMPARATOR;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Factură"
      data-testid="factura"
    >
      <div className={styles.factura}>
        <h2>Factură {factura.numar}</h2>
        <p className={styles.data}>Data: {factura.data}</p>

        <div
          className={styles.partiFacturare}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {cumparator && (
            <div className={styles.client} data-testid="factura-cumparator">
              <h3>Adresa expeditorului</h3>
              <p>{cumparator.nume}</p>
              <p>{cumparator.adresa}</p>
              <p>
                {cumparator.oras}, jud. {cumparator.judet}
              </p>
            </div>
          )}

          {client && (
            <div className={styles.client} data-testid="factura-client">
              <h3>Client și adresă de livrare</h3>
              <p>{client.nume}</p>
              <p>{client.adresa}</p>
              <p>
                {client.oras}, jud. {client.judet}
              </p>
            </div>
          )}
        </div>

        <table className={styles.tabel}>
          <thead>
            <tr>
              <th>Produs</th>
              <th>Cant.</th>
              <th>Preț unitar</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{factura.denumire}</td>
              <td>{factura.cantitate}</td>
              <td>{formatPret(factura.pret)}</td>
              <td>{formatPret(total)}</td>
            </tr>
          </tbody>
        </table>

        <p className={styles.total}>
          Total de plată: <strong>{formatPret(total)}</strong>
        </p>

        <div className={styles.butoane}>
          <button
            type="button"
            className={styles.print}
            onClick={() => window.print()}
          >
            Printează / Salvează PDF
          </button>
          <button type="button" className={styles.inchide} onClick={onClose}>
            Închide
          </button>
        </div>
      </div>
    </div>
  );
}