import React from "react";
import { request } from "../../config/request";

export const Messages = () => {
  const [data, setData] = React.useState([]);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  };

  const handlePost = () => {
    if (message.trim() === "") return alert("Please enter a message.");

    request
      .post("/messages", { name: message })
      .then((res) => {
        setData((prevData) => [...prevData, res.data]);
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to post message:", error);
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="w-[400px] bg-gray-100 p-4 rounded shadow">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="p-2 w-full border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handlePost}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
      <div className="w-[400px] mt-6">
        {data.map((item,index) => (
          <h2
            key={item.id}
            className="text-lg bg-white shadow p-2 mb-2 rounded border border-gray-200"
          >
            {index +1}: {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
};
