"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState({ message: "" });

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/hello_db/backend");
      setData(res.data);
    })();
  }, []);

  return <h1>hello {data.message}</h1>;
}

export default Page;
