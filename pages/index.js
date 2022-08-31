import { useEffect, useState } from "react";
import { getAPI } from "../servces/api";
import Posts from "../src/components/Posts/Posts";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await getAPI("posts");
    if (response && response.data) {
      setData(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center text-red-900 text-3xl py-6">Loading...</div>
      ) : (
        <Posts data={data} />
      )}
    </>
  );
}
