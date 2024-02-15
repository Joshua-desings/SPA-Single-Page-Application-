app.post('/users', async (req, res) => {
    try {
      const { name, email } = req.body;
  
      const user = new User({
        name,
        email,
      });
  
      await user.save();
  
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  app.get('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  app.put('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const { name, email } = req.body;
  
      const user = await User.findByIdAndUpdate(id, {
        name,
        email,
      }, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });