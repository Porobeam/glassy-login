const controller = {};
const UserModel = require('../models/userModel');

controller.showLogin = (req, res) => {
    res.render('login.ejs')
};

controller.showRegister = (req, res) => {
    res.render('register.ejs')
};

// controller.register = (req, res) => {
//     const { username, email, password } = req.body;
    
//     req.getConnection((err, connection) => {
//         if (err) throw err;

//         // Primero, verifica si el email ya está registrado
//         UserModel.findByEmail(connection, email, (err, user) => {
//             if (err) {
//                 // Manejar error
//                 return res.status(500).send('Server error');
//             }
//             if (user) {
//                 // Usuario ya existe con ese email
//                 return res.status(400).send('Email already in use');
//             }

//             // Si no hay usuario con ese email, continua con el registro
//             // Hashea la contraseña antes de guardarla
//             const salt = bcrypt.genSaltSync(10);
//             const password_hash = bcrypt.hashSync(password, salt);

//             // Crea el nuevo usuario
//             UserModel.create(connection, { username, email, password_hash }, (err, userId) => {
//                 if (err) {
//                     // Manejar error
//                     return res.status(500).send('Server error');
//                 }
//                 // Usuario registrado exitosamente, tal vez iniciar sesión o enviar a la página de login
//                 res.status(201).send('User registered');
//             });
//         });
//     });
// };

module.exports = controller;