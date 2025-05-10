import { useState, ChangeEvent, FormEvent } from 'react';

// Definimos la interfaz para el producto
interface Product {
  id: string;
  products: string;
  price: string;
}

export const ProductForm = () => {
  const [product, setProduct] = useState<Product>({
    id: '',
    products: '',
    price: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3001/products/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
          // Convertimos a number los campos que lo requieren
          id: Number(product.id),
          price: Number(product.price)
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Producto creado:', data);
      setSuccess(true);
      setProduct({ id: '', products: '', price: '' });

    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Ocurrió un error desconocido');
    } finally {
      setIsLoading(false);
      window.location.reload()
    }
  };

  return (
    <div className="product-form-container">
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="products">Nombre del Producto:</label>
          <input
            type="text"
            id="products"
            name="products"
            value={product.products}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Crear Producto'}
        </button>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">¡Producto creado exitosamente!</div>}
      </form>
    </div>
  );
};
