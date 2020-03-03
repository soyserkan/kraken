
const path = require('path');
const Kraken = require('kraken');

const { krakenConfig } = require('../../config')

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
};

exports.post = (req, res) => {
    const kraken = new Kraken(krakenConfig);
    const params = { url: req.body.imageUrl, wait: true };
    kraken.url(params, (err, data) => {
        if (err) {
            return res.status(500).send({ message: 'an error occured!', error: err })
        } else {
            return res.status(200).send({ message: 'image succesfully compressed', compressed_image: data.kraked_url })
        }
    });
};