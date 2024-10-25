import ThingsToDo from "../models/things-to-do.mjs";

export const createThingsToDo = async (req, res) => {
  let { name, image, location, bestTime } = req.body;
  try {
    let thingstodo = await ThingsToDo.create({
      name,
      image,
      location,
      bestTime,
    });
    res.status(201).json({ thingstodo });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "sth is wrong,couldnt create the collection", err });
  }
};
//
export const getThingsToDo = async (req, res) => {
  try {
    let thingsTodo = await thingsTodo.find();
    res.status(200).json({ thingsTodo });
  } catch (error) {
    res.status(500).json("Server isnt working,", error);
  }
};
