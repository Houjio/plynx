import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { ModalContext } from '../../contexts'

import './style.css';


export default class UserButton extends Component {
  constructor(props) {
    super(props);
    const refreshTokenExists = !!cookie.load('refresh_token');
    const username = cookie.load('username');
    this.state = {
      username: username,
      refreshTokenExists: refreshTokenExists,
    };
  }

  handleLogOut() {
    console.log("Log out");
    cookie.remove('username');
    cookie.remove('settings');
    cookie.remove('access_token');
    cookie.remove('refresh_token');
    window.location = "/login";
  }

  handleLogIn() {
    console.log("Log in");
    window.location = "/login";
  }

  render() {
    return (
      <div className="UserButton">
        {this.state.refreshTokenExists &&
          <div className="inner-user-button">
            <div className="username">
              {this.state.username}
            </div>
            -
            <div className="action" onClick={() => this.handleLogOut()}>
              LogOut
            </div>
            <ModalContext.Consumer>{(context) =>{
              return (
                <svg onClick={context.toggleModal} className='cog' viewBox="0 0 93.776665 94.046021">
                  <g transform="translate(41.811 -175.31)">
                    <path className="cogPath" d="m-0.055088 269c-1.4822-0.52969-2.547-1.4083-3.3339-2.7512-0.65924-1.1249-0.73339-1.5344-0.87135-4.8114-0.16235-3.8563-0.38242-4.5897-1.7599-5.8646-1.5512-1.4356-3.2593-1.9273-5.2283-1.5051-1.1182 0.2398-1.6483 0.59722-3.4614 2.3336-1.1775 1.1277-2.6711 2.328-3.319 2.6674-1.5459 0.80963-3.8983 0.82993-5.4113 0.0467-0.58209-0.30133-2.6772-2.1963-4.6558-4.2111-3.2961-3.3564-3.6253-3.7802-3.9307-5.0594-0.62844-2.6327-0.0543-4.0085 3.006-7.2027 2.8663-2.9918 3.3858-4.6405 2.2509-7.1438-1.2387-2.7324-2.6136-3.4472-6.9652-3.6214-3.7264-0.1492-4.6319-0.3762-5.8831-1.4748-1.8056-1.5854-2.0609-2.45-2.167-7.3392-0.11645-5.3661 0.12655-6.6614 1.5538-8.2829 1.4653-1.6646 2.647-2.0639 6.6046-2.2316 4.258-0.18035 5.5041-0.76545 6.7084-3.15 1.3111-2.596 0.73675-4.5705-2.2206-7.6346-1.1236-1.1642-2.2324-2.4911-2.4641-2.9488-0.64878-1.282-0.80799-2.8622-0.42943-4.2624 0.29431-1.0886 0.85274-1.7711 4.2012-5.1343 3.5823-3.5982 3.9723-3.9108 5.3894-4.3201 1.2493-0.36084 1.773-0.38858 2.8749-0.15227 1.6413 0.35199 2.431 0.87887 4.9903 3.3292 1.6496 1.5794 2.2163 1.9552 3.3591 2.2271 2.3881 0.56834 4.8441-0.5053 6.3248-2.7648 0.4076-0.622 0.53024-1.444 0.64911-4.3505 0.16034-3.9202 0.46767-4.9509 1.9049-6.3881 1.6231-1.6231 1.9444-1.6934 7.7381-1.6934 4.9179 0 5.3664 0.0403 6.35 0.57108 2.5938 1.3996 3.3173 2.947 3.506 7.4977 0.17827 4.301 0.73453 5.4634 3.2409 6.7729 1.099 0.57418 3.7738 0.64067 4.7457 0.11797 0.35454-0.19068 1.6892-1.3366 2.9659-2.5465 1.8564-1.7594 2.5979-2.282 3.7029-2.6101 1.7167-0.5098 1.9152-0.50911 3.6721 0.0126 1.2541 0.37242 1.8442 0.83583 4.94 3.8794 3.9361 3.8697 4.5798 4.8769 4.5798 7.1668 0 2.1381-0.5054 3.1148-2.8786 5.5627-2.4433 2.5202-2.9443 3.3927-2.9364 5.1139 0.0076 1.6587 0.71091 3.1532 2.0537 4.3638 1.2228 1.1025 1.6015 1.1918 5.8147 1.3723 3.5054 0.15009 4.7041 0.64954 6.0047 2.502l0.8055 1.1473v12.08l-0.8055 1.1473c-1.3777 1.9622-2.525 2.4008-6.7643 2.5859-3.5008 0.15286-3.6875 0.1901-4.751 0.94772-1.4822 1.0558-2.3635 2.7575-2.3635 4.5633 0 1.9998 0.48365 2.9177 2.6161 4.965 2.1689 2.0824 3.2048 3.9038 3.2048 5.6352 0 2.4147-0.41796 3.1278-3.9566 6.7508-4.0735 4.1706-5.0581 4.8068-7.4205 4.7946-2.1859-0.0113-3.0127-0.44213-5.5562-2.8951-1.0914-1.0525-2.4011-2.1284-2.9104-2.3907-1.9099-0.9838-5.0408-0.39097-6.5175 1.234-1.2457 1.3708-1.519 2.3292-1.6858 5.9127-0.0881 1.8918-0.29075 3.744-0.45032 4.116-0.5235 1.2204-1.7527 2.4312-3.1095 3.063-1.2426 0.57862-1.6502 0.62045-5.9639 0.61204-3.0927-6e-3 -4.9478-0.12253-5.5867-0.35083zm11.62-28.175c10.029-3.3742 15.559-13.724 12.739-23.843-1.8254-6.5495-7.1225-11.816-13.745-13.665-2.664-0.7439-7.9752-0.67885-10.583 0.12963-5.6006 1.736-9.6912 5.2517-12.204 10.488-3.8948 8.1179-1.4405 18.345 5.7214 23.841 3.814 2.9269 7.6451 4.1237 12.7 3.9675 2.4053-0.0743 3.3376-0.23368 5.372-0.91813z"/>
                  </g>
                </svg>
              )
            }}</ModalContext.Consumer>
          </div>
        }
        {!this.state.refreshTokenExists &&
          <div className="inner-user-button">
            <div className="action" onClick={() => this.handleLogIn()}>
              LogIn
            </div>
          </div>
        }
      </div>
    );
  }
}

UserButton.propTypes = {
  onAPIDialogClick: PropTypes.func,
};
