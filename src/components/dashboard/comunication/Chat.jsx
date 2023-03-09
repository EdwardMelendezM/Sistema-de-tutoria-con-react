import "./chat.css";
export default function Chat() {
  return (
    <div className="containerChat">
      <div className="containerChat_Users">
        <button className="container_Chat_User_button">
          <ion-icon name="add-outline"></ion-icon>
          <p className="container_Chat_User_button_text">Create New</p>
        </button>
        <div className="containerChat_User_Container">
          <div className="containerChat_User_Container_title">
            <p className="containerChat_User_Container_titulo_p">Chat</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <div className="containerChat_User_Container_buscador">
            <input
              type="text"
              className="containerChat_User_Container_buscador_input"
              placeholder="Search name"
            />
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className="containerChat_User_Container_Users">
            <div className="containerChat_User_Container_Users_user">
              <div className="containerChat_User_Container_Users_user_img">
                <img
                  src="userImage.jpg"
                  alt="user"
                  className="containerChat_User_Container_Users_user_img"
                />
                <ion-icon name="ellipse-outline"></ion-icon>
              </div>
              <div className="containerChat_User_Container_Users_user_text">
                <p className="containerChat_User_Container_Users_user_text_name">
                  Alberto Fujimori
                </p>
                <p className="containerChat_User_Container_Users_user_text_fecha">
                  Hour ago
                </p>
              </div>
            </div>
            <div className="containerChat_User_Container_Users_user">
              <div className="containerChat_User_Container_Users_user_img">
                <img
                  src="userImage.jpg"
                  alt="user"
                  className="containerChat_User_Container_Users_user_img"
                />
                <ion-icon name="ellipse-outline"></ion-icon>
              </div>
              <div className="containerChat_User_Container_Users_user_text">
                <p className="containerChat_User_Container_Users_user_text_name">
                  Alberto Fujimori
                </p>
                <p className="containerChat_User_Container_Users_user_text_fecha">
                  Hour ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerChat_Messages">
        <div className="containerChat_Messages_header">
          <div className="containerChat_Messages_header_content">
            <img
              src="userImage.jpg"
              alt="user"
              className="containerChat_Messages_header_content_img"
            />
            <div className="containerChat_Messages_header_user">
              <p className="containerChat_Messages_header_user_name">Melonie</p>
              <p className="containerChat_Messages_header_user_online">
                Online
              </p>
            </div>
          </div>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="containerChat_Messages_body">
          <div className="containerChat_Messages_body_message">
            <div
              className="containerChat_Messages_body_message_user"
              id="you other"
            >
              <div className="containerChat_Messages_body_message_user_text">
                <p className="containerChat_Messages_body_message_user_text_p">
                  Hi bro, how are you?
                </p>
                <p className="containerChat_Messages_body_message_user_text_date">
                  10:10
                </p>
              </div>
              <div className="containerChat_Messages_body_message_user_img">
                <img src="userImage.jpg" alt="" id="userImagePhoto" />
              </div>
            </div>
          </div>
        </div>
        <div className="containerChat_User_Container_footer">
          <ion-icon name="add-outline" className="icon_add"></ion-icon>
          <input
            type="text"
            className="containerChat_User_Container_footer_input"
          />
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="send-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
