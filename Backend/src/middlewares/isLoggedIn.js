function isLoggedIn(req, res, next) {
    // Assuming user info is stored in cookies after login
    
    if (req.cookies && req.cookies.user) {
        next();  // User is logged in, proceed to the next middleware/controller
    } else {
        return res.status(401).json({ message: 'Unauthorized: User not logged in' });
    }
}

module.exports = isLoggedIn;