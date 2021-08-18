module.exports = function (req, res, next) {

  try {
    let count = req.query.count;
    if (count !== null && count !== undefined) {
        count = Number(req.query.count);
      if (!Number.isInteger(count)) {
        res.status(401).json({ msg: "Please enter a whole number " });
      } else {
        if (count <= 0) {
          res.status(401).json({ msg: "Please enter a number greater than 1" });
        } else {
            next();
        }
      }
    } else {
      res.status(400).json({ msg: "missing parameters " });
    }
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
