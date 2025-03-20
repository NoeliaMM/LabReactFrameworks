import React from "react";
// import { useCart } from "../context/CartContext";

const images = [
  { id: 1, src: "https://via.placeholder.com/150" },
  { id: 2, src: "https://via.placeholder.com/150" },
  { id: 3, src: "https://via.placeholder.com/150" },
];

export const KittyScene: React.FC = () => {
  // const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Imágenes Página 1</h2>
      {/* <div style={{ display: "flex", gap: "10px" }}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={`Imagen ${image.id}`} />
            <input
              type="checkbox"
              checked={cart.has(image.id)}
              onChange={() => (cart.has(image.id) ? removeFromCart(image.id) : addToCart(image.id))}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
