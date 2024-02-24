// const UserModel = {
//     findOne: (connection, username, callback) => {
//         connection.query( 'SELECT * FROM users WHERE username = ?', [username],
//             (error, results) => {
//                 if (error) {
//                     return callback(error, null);
//                 }
//                 return callback(null, results.length > 0 ? results[0] : null);
//             }
//         )
//     },

//     findByEmail: (connection, email, callback) => {
//         connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
//             if (error) {
//                 return callback(error, null);
//             }
//             return callback(null, results.length > 0 ? results[0] : null);
//         });
//     },

//     create: (connection, { username, email, password_hash }, callback) => {
//         connection.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', 
//             [username, email, password_hash], (error, results) => {
//                 if (error) {
//                     return callback(error, null);
//                 }
//                 return callback(null, results.insertId);
//         });
//     },
// }

// module.exports = UserModel;