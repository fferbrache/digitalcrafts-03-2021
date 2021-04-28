const Sequelize = require('sequelize');
const { User, Photo } = require('./models');
const express = require('express')
const app = express();
// const cors = require("cors");
const port = 3017;
console.log(port);

// middleware
app.use(express.json());
// app.use(cors());

// CRUD

// Create
app.post('/users', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email
  });

  // Send back the new user's ID in the response:
  res.json({
    id: newUser.id
  });
})

// Retrieving Users
app.get('/users', async (req, res) => {
  const users = await User.findAll({
    attributes: ['lastName']
  });
  res.json(users);
});

// Retrieve Users by Last Name
app.get('/users/by-last-name', async (req, res) => {
  const users = await User.findAll({
    attributes: ['lastName']
  });
  res.json(users);
});

// Retrieve Users by id
app.get('/users/:id', async (req, res) => {
  try {
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: 'User not found'
    });
  }
});

// Updating Existing Users
app.post('/users/:id', async (req, res) => {
  const { id } = req.params;

  // Assuming that `req.body` is limited to 
  // the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });

  res.json(updatedUser);
});

// Deleting a User
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
    where: {
      id
    }
  });
  res.json(deletedUser);
});

// Search
app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
              firstName: req.body.term,
              lastName: req.body.term
        }
      ]
    },
    include: [{
      model: Photo
  }]
  });
  res.json(users);
});

// To get all Users with thier Photos
app.get('/users/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

// To get all Photos
app.get('/photos/users', async (req, res) => {
  const photos = await Photos.findAll({
      include: [{
          model: User
      }]
  });
  res.json(photos);
});

// listen
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})