import url from "../data/contactAPI.json";

export default function Contact() {
  return (
    // basic inputs and form with POST method calling the personal conatctAPI

    <form action={`${url}`} id="contact--form" method="POST">
      <div className="contact--container">
        <p className="contact--title">Contact me</p>
        <input
          type="text"
          className="input"
          name="contactName"
          placeholder="Name"
          autoFocus
          required
          autoComplete="false"
        ></input>
        <input
          type="email"
          className="input"
          name="contactMail"
          placeholder="e-mail"
          required
          autoComplete="false"
          autoCapitalize="false"
        ></input>
        <input
          type="text"
          className="input"
          name="contactSubject"
          placeholder="Message Subject"
          required
          autoComplete="false"
        ></input>
        <textarea
          rows={5}
          type="text"
          className="input"
          name="contactMessage"
          placeholder="Type your message here"
          required
          autoComplete="false"
        ></textarea>
        <button type="submit" className="send">
          SEND
        </button>
      </div>
    </form>
  );
}
