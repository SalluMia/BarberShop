const User=require('../model/user')
const bcrypt = require("bcryptjs");
const Services=require('../model/services')
// login route 
exports.loginData = async (req, res) => {
    const { email, password } = req.body;
  
    // Validate email and password
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }
  
    // Find user with email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful"});
}


// Registration Route 
exports.registerData = async (req, res) => {
    const { name, email, phone, password } = req.body;
  
    // Validate name, email, phone and password
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
  
    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email address" });
    }
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Save user data
    const data = new User({ name, email, phone, password: hashedPassword });
    await data.save();
  
    res.json({ message: "Registration successful" });
  };
  


  exports.services = async (req, res) => {
    try {
      const { name, phone, address, selectedServices, date, time } = req.body;
  
      // Create a new Service instance with the provided data
      const service = new Services({
        name,
        phone,
        address,
        selectedServices,
        date,
        time
      });
  
      // Save the service to the database
      await service.save();
  
      // Send a success response with the newly created service
      res.status(201).json({
        success: true,
        data: service,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  };
  