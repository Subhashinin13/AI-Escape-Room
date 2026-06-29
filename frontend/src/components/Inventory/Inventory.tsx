import "./Inventory.css";

interface InventoryProps {
  items: string[];
}

const Inventory = ({ items }: InventoryProps) => {
  return (
    <div className="inventory">
      <h2>🎒 Inventory</h2>

      <div className="inventory-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="inventory-slot">
            {items[index] || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;