const clientsQueries = {
  // Se muestran todos los clientes
  getAll: `SELECT * FROM clients WHERE is_active = 1`,

  // Se muestran los clientes por su RFC
  getByRfc: `SELECT * FROM clients WHERE rfc = ?`,

  // Muestra un cliente por su RFC o por su email (Para agregar o actualizar)
  getByRfcOrEmail: `SELECT * FROM clients WHERE rfc = ? OR email = ?`,

  // Crea un nuevo cliente
  create: `INSERT INTO clients (rfc, first_name, last_name, birth_date, gender, phone_number, email, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,

  // Actualiza un cliente existente dentro de la tabla
  update: `UPDATE clients SET first_name = ?, last_name = ?, birth_date = ?, gender = ?, phone_number = ?, email = ?, address = ? WHERE rfc = ?`,

  // Marcar un cliente como inactivo
  delete: `UPDATE clients SET is_active = 0 WHERE rfc = ?`
};

module.exports = { clientsQueries };