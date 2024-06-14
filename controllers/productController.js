const connect = require('../db/connect')
const productController = {
  getAllProduct: async (req, res) => {
    try {
      const sql = 'Select * from product'
      const [rows, fields] = await connect.execute(sql)
      res.status(200).json({
        msg: 'Ok',
        data: rows,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  getSingleProduct: async (req, res) => {
    try {
      const { id } = req.params
      const sql = 'Select * from product where id = ?'
      const [result, fields] = await connect.execute(sql, [id])
      res.status(200).json({
        msg: 'OK',
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body
      const sql =
        'INSERT INTO `product`(`name`, `description`,`price`) VALUES (?,?,?)'

      const [result, fields] = await connect.query(sql, [
        name,
        description,
        price,
      ])

      res.status(200).json({
        msg: 'Ok',
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params
      const { name, description, price } = req.body
      const sql =
        'UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?'
      const [result, fields] = await connect.query(sql, [
        name,
        description,
        price,
        id,
      ])
      res.status(200).json({
        msg: 'OK',
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params
      const sql = 'DELETE FROM product WHERE id = ?'
      const [result, fields] = await connect.query(sql, [id])
      res.status(200).json({
        msg: 'Ok',
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
}

module.exports = productController
