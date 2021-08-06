import Dexie from "dexie";

const db = new Dexie("bookdb");
db.version(1).stores({
  books: "id,shelf,book"
});

export default db;
