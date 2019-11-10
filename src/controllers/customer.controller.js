const _customerController = {};

_customerController.getCustomers = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM Customer', (err, customers)=>{
            if(err){
                res.json(err);
            }
            
            res.render('customers', {
                data: customers
            });
        });
    });
};

_customerController.createCustomer = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query(
            'INSERT INTO Customer set ?', [data], (err, customers)=>{
                res.redirect('/');
            });
    });
};

_customerController.updateCustomer = (req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM Customer Where Id = ?', [id], (err,customers)=>{
            res.render('customer_edit', {
                data: customers[0]
            });
        });
    });
};

_customerController.updateDataReal = (req,res)=>{
    const{id}= req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE Customer SET ? WHERE Id=?', [newCustomer, id],(err,customers)=>{
            res.redirect('/');
        })
    });
};

_customerController.deleteCustomer = (req,res)=>{
    const {id} = req.params
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM Customer WHERE Id=?', [id], (err,customers)=>{
            res.redirect('/');
        });
    })
};

module.exports = _customerController;