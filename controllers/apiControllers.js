const { fetchFromAPI } = require('../services/apiService');
const db = require('../config/db');

 
const fetchDataAndSaveToDB = async (req, res) => {
  try {
    const blogs = await fetchFromAPI();

    blogs.forEach((blog) => {
      const { userId, title,body } = blog;
      const query = 'INSERT INTO blogs (userId, title,body) VALUES (?, ?,?)';
      db.query(query, [userId, title,body], (err, result) => {
        if (err) {
          console.error('Error inserting data into database:', err.message);
          return;
        }
        console.log(`Inserted userID ${userId} `);
      });
    });

    res.send('Data fetched from API and saved to the database.');
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
};

module.exports = { fetchDataAndSaveToDB };
