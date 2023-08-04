import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  const connection = await openDB("jate", 1);

  const tx = connection.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const putRequest = store.put(content);

  const result = await putRequest;
  console.log("Data added to database", result);
};

export const getDb = async () => {
  console.log("GET request");
  const connection = await openDB("jate", 1);

  const tx = connection.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  const getAll = store.getAll();

  const data = await getAll;
  console.log("result.value", data);
  return data;
};

initdb();
