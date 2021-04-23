const db = require("./db");
const Publisher = require("./models/publisher");
const Book = require("./models/book");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
/// find book
/// create book
/// update books
/// deltete book

const createPublisher = async () => {
  const naeem = await Publisher.insertMany({
    name: "Naeem",
    location: "new york",
    url: "www.naeemshafi.com",
  });
  console.log("Heyoo ", naeem);
};

const createBook = async () => {
  const naeem = await Publisher.find({ name: "Naeem" });
  const newBook = await Book.insertMany({
    title: "Newbooks",
    author: "unknown",
    published_date: "2005",
    publisher_id: naeem[0]._id,
  });

  console.log("New Book", newBook);
};


const updaingBook = async () => {
  const newUpdat = await Book.updateMany(
    { title: "Zen and the Art of Motorcycle Maintenance" },
    { $set: { title: " UpdatedBookName" } }
  );
  console.log("new update in name add mr ", newUpdat);
};


const deletingBook = async () => {
  const deleteOneBook = await Book.deleteOne({
    title: "Newbooks",
  });
  console.log("book deleted:", deleteOneBook);
};



const findAllBook = async () => {
  const allbook = await Book.find({});
  console.log("all book ", allbook);
};

const run = async () => {
  await createPublisher();
  await createBook();
  await updaingBook();
  await deletingBook();
  await findAllBook();
  db.close();
};
run();
