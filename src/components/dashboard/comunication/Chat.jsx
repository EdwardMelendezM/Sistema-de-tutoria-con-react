export default function Chat() {
  return (
    <div className="containerChat">
      <div className="containerChat_User">
        <button className="container_Chat_User_button">
          <div className="icon"></div>
          <p>Create New</p>
        </button>
        <div className="containerChat_User_Container">
          <div className="containerChat_User_Container_buscador">
            <input
              type="text"
              className="containerChat_User_Container_buscador_input"
            />
          </div>
          <div className="containerChat_User_Container_Users">
            <div className="containerChat_User_Container_Users_user">
              <div className="containerChat_User_Container_Users_user_img">
                <img src="" alt="user" />
              </div>
              <div className="containerChat_User_Container_Users_user_text">
                <p className="containerChat_User_Container_Users_user_text_name">
                  Albeto Fujimori
                </p>
                <p className="containerChat_User_Container_Users_user_text_">
                  Albeto Fujimori
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerChat_Messages">
        <div className="containerChat_Messages_header">
          <div className="containerChat_Messages_header_content">
            <img src="" alt="" />
            <div className="containerChat_Messages_header_user">
              <p className="containerChat_Messages_header_user_name">Melonie</p>
              <p className="containerChat_Messages_header_user_online">
                Online
              </p>
            </div>
            <div className="containerChat_Messages_header_content_icon"></div>
          </div>
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
              </div>
              <div className="containerChat_Messages_body_message_user_img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="containerChat_User_Container_footer">
          <ion-icon name="add-circle-outline"></ion-icon>
          <input
            type="text"
            className="containerChat_User_Container_footer_btn"
          />
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="send-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
