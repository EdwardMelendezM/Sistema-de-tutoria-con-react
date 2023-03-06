import "./communication.css";
export default function Communication() {
  return (
    <div className="containerCommunication">
      <h3 className="containerCommunicationTitle-title">Messages</h3>

      <div className="containerCommunicationContent">
        <div className="containerCommunicationContent_chat">
          <div className="containerCommunicationContent_chat_img">
            <img
              src="userImage.jpg"
              alt="user"
              className="containerCommunicationContent_chat_img-img"
            />
          </div>
          <div className="containerCommunicationContent_chat-text">
            <p className="containerCommunicationContent_chat-text-user">Juan</p>
            <p className="containerCommunicationContent_chat-text-message">
              Como te fue hermano
            </p>
          </div>
          <div className="containerCommunicationContent_chat-date">
            <p className="containerCommunicationContent_chat-date-date">
              8:41 P.M.
            </p>
            <ion-icon
              name="chevron-down-outline"
              className="containerCommunicationContent_chat-date-icon"
            ></ion-icon>
          </div>
        </div>
        <div className="containerCommunicationContent_chat">
          <div className="containerCommunicationContent_chat_img">
            <img
              src="userImage.jpg"
              alt="user"
              className="containerCommunicationContent_chat_img-img"
            />
          </div>
          <div className="containerCommunicationContent_chat-text">
            <p className="containerCommunicationContent_chat-text-user">
              Pedro
            </p>
            <p className="containerCommunicationContent_chat-text-message">
              Como te fue hermano
            </p>
          </div>
          <div className="containerCommunicationContent_chat-date">
            <p className="containerCommunicationContent_chat-date-date">
              8:41 P.M.
            </p>
            <ion-icon
              name="chevron-down-outline"
              className="containerCommunicationContent_chat-date-icon"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
