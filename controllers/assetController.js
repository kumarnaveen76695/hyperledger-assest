const connection = require('../db');

// Create a new asset

exports.createAsset = (req, res) => {
    const { dealerID, msisdn, mpin, balance, status, transAmount, transType, remarks } = req.body;

    const sql = `INSERT INTO assets (DEALERID, MSISDN, MPIN, BALANCE, STATUS, TRANSAMOUNT, TRANSTYPE, REMARKS) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    
    console.log('POST /assets - Create Asset:', {
        dealerID,
        msisdn,
        mpin,
        balance,
        status,
        transAmount,
        transType,
        remarks
    });

    connection.query(sql, [dealerID, msisdn, mpin, balance, status, transAmount, transType, remarks], (err, result) => {
        if (err) {
            return res.status(500).send('Error creating asset: ' + err);
        }
        
        
        console.log('Asset created successfully with ID:', result.insertId);
        res.status(201).send('Asset created successfully!');
    });
};

// Get all assets

exports.getAllAssets = (req, res) => {
    const sql = 'SELECT * FROM assets';

    console.log('GET /assets - Retrieve All Assets');

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving assets: ' + err);
        }
        
        console.log('Retrieved assets:', results);
        res.status(200).json(results);
    });
};

// Get an asset by ID

exports.getAssetById = (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM assets WHERE id = ?';

    console.log(`GET /assets/${id} - Retrieve Asset by ID`);

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving asset: ' + err);
        }
        if (results.length === 0) {
            console.log('Asset with ID:', id, 'not found!');
            return res.status(404).send('Asset not found!');
        }
        
        console.log('Retrieved asset details for ID:', id, results[0]);
        res.status(200).json(results[0]); 
    });
};

// Update an asset by ID

exports.updateAsset = (req, res) => {
    const { dealerID, msisdn, mpin, balance, status, transAmount, transType, remarks } = req.body;
    const { id } = req.params;

    
    console.log('PUT /assets/:id - Update Asset with ID:', id, {
        dealerID,
        msisdn,
        mpin,
        balance,
        status,
        transAmount,
        transType,
        remarks
    });

    const sql = `UPDATE assets SET DEALERID = ?, MSISDN = ?, MPIN = ?, BALANCE = ?, STATUS = ?, TRANSAMOUNT = ?, TRANSTYPE = ?, REMARKS = ?
                 WHERE id = ?`;

    connection.query(sql, [dealerID, msisdn, mpin, balance, status, transAmount, transType, remarks, id], (err, result) => {
        if (err) {
            return res.status(500).send('Error updating asset: ' + err);
        }
        
        console.log('Asset updated successfully with ID:', id);
        res.status(200).send('Asset updated successfully!');
    });
};

// Delete an asset by ID

exports.deleteAsset = (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM assets WHERE id = ?';

    console.log(`DELETE /assets/${id} - Delete Asset by ID`);

    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting asset: ' + err);
        }
        
        console.log('Asset deleted successfully with ID:', id);
        res.status(200).send('Asset deleted successfully!');
    });
};
