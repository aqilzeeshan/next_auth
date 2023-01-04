import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Secret() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You aren't signed in, please sign in firsttt</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h1> Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}