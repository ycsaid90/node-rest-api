module.exports = {
    has: (role) => {
      return (req, res, next) => {
        const {
          user: { userId },
        } = req;
  
     UserModel.findUser({ id: userId }).then((user) => {
  
      // IF user does not exist in our database, means something is fishy
      // THEN we will return forbidden error and ask user to login again
      if (!user) {
        return res.status(403).json({
          status: false,
          error: "Invalid access token provided, please login again.",
        });
      }
    }
    }
    }
}
