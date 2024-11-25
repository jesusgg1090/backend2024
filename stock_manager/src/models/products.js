const productsQueries = {
  getAll: 'SELECT * FROM products', // Enseñar todos los productos
  getWithStock: 'SELECT * FROM products WHERE stock > 0', // Obtener productos con stock mayor a 0
  getById: 'SELECT * FROM products WHERE id = ?', // Obtener producto por ID
  create: 'INSERT INTO products (product, description, stock, measurement_unit, price, discount) VALUES (?, ?, ?, ?, ?, ?)', //Creación del producto
  update: 'UPDATE products SET product = ?, description = ?, stock = ?, measurement_unit = ?, price = ?, discount = ? WHERE id = ?', //Actualizar los productos
  delete: 'UPDATE products SET stock = 0 WHERE id = ?', // Vaciar producto (en lugar de eliminar)
};

module.exports = { productsQueries };