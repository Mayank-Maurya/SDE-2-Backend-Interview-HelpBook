import { db } from "./src/db";

db.begins();
db.set("a", "20");
console.log(db.get("a")); // MUST return 20
db.commit();
console.log(db.get("a")); // MUST return 10