"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Data = {
  message: string;
};

function Page() {
  const [data, setData] = useState<Data>({ message: "" });

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/hello/backend");
      console.log(res.data);
      setData(res.data);
    })();
  }, []);

  return <h1>hello {data.message}</h1>;
}

export default Page;
