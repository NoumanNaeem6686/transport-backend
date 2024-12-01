const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { sanitizeObject } = require("../utils/sanitize");
const { User, UserToken } = require("../models/user");
dotenv.config();
const cloudinary = require('../utils/Cloudnairy')

const handleError = (res, statusCode, message) => {
  return res.error({ status: statusCode, message });
};



async function signAdminIn(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return handleError(res, 400, "Email and password are required");
    }

    const adminUser = await User.findOne({ email });
    if (!adminUser) {
      return handleError(res, 401, "Incorrect credentials");
    }

    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (isMatch) {

      const token = jwt.sign({ id: adminUser._id }, process.env.SECRET, {
        expiresIn: "15d",
      });
      await UserToken.create({ token });

      await adminUser.save();

      return res.success({ token, user: adminUser });
    }

    return handleError(res, 401, "Incorrect credentials");
  } catch (err) {
    return handleError(res, 500, err.message);
  }
}






async function createAdminUser(req, res) {
  try {
    const sanitizedBody = sanitizeObject(req.body);
    console.log("🚀 ~ createAdminUser ~ sanitizedBody:", sanitizedBody)

    const isUserExist = await User.findOne({ email: sanitizedBody.email });
    if (isUserExist) {
      return handleError(res, 400, "User with this Email already exists");
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(sanitizedBody.encryptedPassword ? sanitizedBody.encryptedPassword : sanitizedBody.password, salt);

    const user = await User.create({
      ...sanitizedBody,
      password: hashPassword
    });
    return res.success({ new_admin_user: user });
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return handleError(res, 400, err.message);
    }
    return handleError(res, 500, err.message);
  }
}

async function getAllUsers(req, res) {
  try {
    const query = {}
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const userType = req.query.type ? req.query.type : "admin"
    query.type = userType
    const totalUsers = await User.countDocuments();

    const users = await User.find(query)
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    if (!users.length) {
      return res.error({ message: "No users found", status: 404 });
    }

    const meta = {
      currentPage: page,
      pageItems: users.length,
      totalItems: totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
    };

    return res.success({ users }, meta);
  } catch (err) {
    console.error("Error fetching users:", err);
    return handleError(res, 500, "Server error");
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find({ type: "employee" });

    if (!users.length) {
      return res.error({ message: "No users found", status: 404 });
    }
    return res.success({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return handleError(res, 500, "Server error");
  }
}

async function getUserById(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const userId = req.params.id; // Use req.params.id to access user ID from URL parameter

    // Find the user by ID and select only the timeSchedule field
    const user = await User.findById(userId);

    if (!user) {
      return res.error({ message: "User not found", status: 404 });
    }

    // Pagination calculations
    const totalEntries = user.timeSchedule.length;
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, totalEntries);

    // Slice the timestamps for the current page
    const paginatedTimestamps = user.timeSchedule.slice(startIndex, endIndex);

    const meta = {
      currentPage: page,
      pageItems: paginatedTimestamps.length,
      totalItems: totalEntries,
      totalPages: Math.ceil(totalEntries / limit),
    };

    return res.success({ timestamps: paginatedTimestamps, name: user.full_name }, meta);
  } catch (err) {
    console.error("Error fetching user timestamps for user:", err); // Log error details for debugging
    return handleError(res, 500, "Server error");
  }
}

async function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const updates = sanitizeObject(req.body);

    // If updating password, hash it first
    if (updates.encryptedPassword) {
      const salt = await bcrypt.genSalt();
      updates.password = await bcrypt.hash(updates.encryptedPassword, salt);
    }

    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) {
      return handleError(res, 404, "User not found");
    }

    return res.success({ updated_user: user });
  } catch (err) {
    return handleError(res, 500, err.message);
  }
}
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, newPassword, profileImage } = req.body;
    let updatedFields = {};

    console.log(req.body)
    if (name) {
      updatedFields.full_name = name;
    }

    // Hash and update password if provided
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      updatedFields.password = hashedPassword;
    }

    // Update profile image URL if provided
    if (profileImage) {
      updatedFields.profileImage = profileImage;
    }

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return handleError(res, 404, "User not found");
    }

    return res.success({ message: "User deleted successfully" });
  } catch (err) {
    return handleError(res, 500, err.message);
  }
}

// Protected Admin Route
async function protectedAdmin(req, res) {
  return res.success({ type: "user" });


}



module.exports = {
  protectedAdmin,
  signAdminIn,
  createAdminUser,
  getAllUsers,
  getUsers,
  updateUserProfile,
  getUserById,
  updateUserById,
  deleteUserById,
};
