import AboutEthiopia from "../models/aboutEthiopia.mjs";

//create about table
export const createAboutEthiopia = async (req, res) => {
  try {
    const { history, culture, location, religion, government } = req.body;
    let about = await AboutEthiopia.create({
      history,
      culture,
      location,
      religion,
      government,
    });
    res.status(201).json({ message: about });
    console.log(about);
  } catch (err) {
    console.error(err);
  }
};
//get all aboutEthiopia
export const getAllAboutEthiopia = async (re, res) => {
  try {
    let allAboutEthiopia = await AboutEthiopia.find();
    res.status(200).json({ message: allAboutEthiopia });
    console.log(allAboutEthiopia);
  } catch (err) {
    console.error(err);
    res.this.status(500).json({ msg: "sth is wrong with server" });
  }
};
//get all aboutEthiopiaWithName

export const getAllAboutWithName = async (req, res) => {
  let name = req.params.nameId;
  try {
    let abouEthiopia = AboutEthiopia.findOne({ _id: name });
    res.status(200).json({ abouEthiopia });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "some thing wrong with find by name" });
  }
};
