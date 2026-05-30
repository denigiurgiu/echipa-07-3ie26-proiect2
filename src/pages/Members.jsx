import { useEffect, useState } from "react";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Membrii Echipei
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">
              {member.name}
            </h2>

            <p className="text-blue-600 font-semibold mb-3">
              {member.role}
            </p>

            <p className="text-gray-600">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}