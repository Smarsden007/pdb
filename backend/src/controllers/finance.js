const db = require("../db");
const nodeExcel = require('excel-export');

exports.createReceipt = async (req, res) => {
  try {
    const { image, description } = req.body;
    const result = await pool.query(
      "INSERT INTO receipts (image, description) VALUES ($1, $2) RETURNING *",
      [image, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
};

exports.excelReceipts = async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const result = await pool.query(
      "SELECT * FROM receipts WHERE created_at BETWEEN $1 AND $2",
      [start_date, end_date]
    );

    // Create the Excel file
    const conf = {};
    conf.cols = [
      {
        caption: "ID",
        type: "number",
      },
      {
        caption: "Image",
        type: "string",
      },
      {
        caption: "Description",
        type: "string",
      },
      {
        caption: "Created At",
        type: "date",
      },
    ];
    conf.rows = result.rows.map((row) => [
      row.id,
      row.image,
      row.description,
      row.created_at,
    ]);
    const excel = nodeExcel.execute(conf);

    // Set the content type and disposition of the response
    res.setHeader("Content-Type", "application/vnd.openxmlformats");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "receipts.xlsx"
    );

    // Send the Excel file to the client
    res.send(excel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
};
