const controller = {};

controller.register = (req, res) => {
    res.render('register.ejs')
};
//
// controller.list = (req, res) => {
//     req.getConnection((err, connection) => {
//         connection.query('SELECT * FROM customer', (err, customer) => {
//             if(err) {
//                 res.json(err);
//             }
//             else{
//                 res.render('customer', {
//                     data: customer
//                 });
//             }
//         });
//     });
// };

// controller.save = (req, res) => {
//     const data = req.body;
//     console.log(req.body)
//     req.getConnection((err, connection) => {
//         const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
//             res.redirect('/');
//         })
//     })
// };

// controller.edit = (req, res) => {
//     const {id} = req.params;
//     req.getConnection((err,connection) => {
//         connection.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
//             res.render('customerEdit', {
//                 data: customer[0]
//             })
//         })
//     })
// };

// controller.delete = (req, res) => {
//     const {id} = req.params;
//     req.getConnection((err, connection) => {
        
//         connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
//             res.redirect('/');
//         })
//     })
// };

// controller.update = (req, res) => {
//     const {id} = req.params;
//     const newCustomer = req.body;
//     req.getConnection((err, connection) => {
//         connection.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
//             res.redirect('/');
//         })
//     });
// };

module.exports = controller;