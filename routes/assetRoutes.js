const express = require('express');
const assetController = require('../controllers/assetController');

const router = express.Router();

// Route to create a new asset

router.post('/assets', assetController.createAsset);

// Route to get all assets

router.get('/assets', assetController.getAllAssets);

//Route to get specific id 

router.get('/assets/:id', assetController.getAssetById);

// Route to update an asset

router.put('/assets/:id', assetController.updateAsset);

// Route to delete an asset

router.delete('/assets/:id', assetController.deleteAsset);

module.exports = router;
