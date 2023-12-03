import { useEffect, useState } from "react";
import { API } from "./constants";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${API}/users/${userId}`;
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setUser(json);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, [userId]);

  if (!user) {
    return "Yükleniyor...";
  }

  return (
    <section>
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
      </dl>
    </section>
  );
}

export default UserProfile;
