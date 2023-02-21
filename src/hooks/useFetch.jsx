import { useState } from "react";

const useFetch = async (url) => {
  const [newFetch, setNewFetch] = useState({
    loading: true,
    data: "",
    error: "",
  });
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(`
    {"email":"mariadb@gmail.com","password":"123132"}`),
  })
    .then((res) => res.json())
    .then((newData) => setNewFetch({ ...newFetch, data: newData }))
    .catch((err) => setNewFetch({ ...newFetch, error: err }));
  const { loading, data, error } = newFetch;
  return [loading, data, error];
};
export { useFetch };
