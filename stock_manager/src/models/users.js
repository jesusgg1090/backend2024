const usersQueries={
    getAll: 'SELECT * FROM users',
    getById: 'SELECT * FROM users WHERE id = ?',
    getByUsername: 'SELECT * FROM users WHERE username = ?',
    create: 'INSERT INTO users (username, password, email) VALUES (?,?,?)',
};

module.exports = {usersQueries};