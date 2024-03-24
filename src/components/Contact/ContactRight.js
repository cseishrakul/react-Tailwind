import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessge] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email verification

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
      console.log(errMsg);
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid email!");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you dear ${username}, your messages has been sent successfully!`);
      setErrMsg("");
      setUsername("");
      setphoneNumber("");
      setEmail("");
      setSubject("");
      setMessge("");

      console.log(username, phoneNumber, subject, message, successMsg);
    }
  };

  return (
    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {" "}
            {errMsg}{" "}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {" "}
            {successMsg}{" "}
          </p>
        )}

        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              className={`${
                errMsg === "Username is required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              phone number
            </p>
            <input
              onChange={(e) => setphoneNumber(e.target.value)}
              value={phoneNumber}
              type="number"
              className={`${
                errMsg === "Phone Number is required!" && "outline-designColor"
              } contactInput`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className={`${
                errMsg === "Email is required!" && "outline-designColor"
              } contactInput`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            type="text"
            className={`${
                errMsg === "Subject is required!" && "outline-designColor"
              } contactInput`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            message
          </p>
          <textarea
            onChange={(e) => setMessge(e.target.value)}
            value={message}
            className={`${
                errMsg === "Message is required!" && "outline-designColor"
              } contactTextarea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {" "}
            {errMsg}{" "}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {" "}
            {successMsg}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
