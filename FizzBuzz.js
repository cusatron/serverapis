module.exports =  async function (req, res) {
  try {
    let count = Number(req.query.count);
    let result = [];
    let val;
    for (let i = 1; i <= count; i++) {
      val =
        i % 15 === 0
          ? "FizzBuzz"
          : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
          ? "Buzz"
          : i;
      result.push(val);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
