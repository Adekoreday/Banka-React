import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountHeader from '../accountHeader/accountHeader';
import { getAllAccount, createAccounts } from '../../action/account';
import AllAccount from '../allAccount/allAccount';
import CreateAccount from '../createAccount/createAccount';
import Spinner from '../spinners/Spinner';
import './account.css';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllAccount: true,
      showCreateAccount: false
    };
  }

  componentDidMount() {
    this.props.getAllAccount();
  }

    ShowAllAccount = () => {
      this.setState({
        showAllAccount: true,
        showCreateAccount: false
      });
      this.props.getAllAccount();
    }

      ShowCreateAccount = () => {
        this.setState({
          showAllAccount: false,
          showCreateAccount: true
        });
      }

      render() {
        const { showAllAccount, showCreateAccount } = this.state;
        const {
          allAccount, loading, isSuccess, isSucessCreateAccount, createAccounts, createdAccount, isfailedAllAccount, isfailedCreateAccount, createAccountloading
        } = this.props;
        return (
          <div className="account">
            <AccountHeader items={
                [
                  {
                    text: 'all accounts',
                    onclick: this.ShowAllAccount,
                    active: showAllAccount
                  },
                  {
                    text: 'create account',
                    onclick: this.ShowCreateAccount,
                    active: showCreateAccount
                  }
                ]
            }
            />
            {(showAllAccount) && (
              <div className="account__content">
                <AllAccount
            allAccount={allAccount}
            loading={loading}
            isfailedAllAccount={isfailedAllAccount}
            isSuccess={isSuccess}
            />
              </div>
            )}
            {(showCreateAccount) && (
              <div className="account__content">
                <CreateAccount
             notify={this.props.notify}
             createAccounts={createAccounts}
             isfailedCreateAccount={isfailedCreateAccount}
             createAccounts={createAccounts}
             createdAccount={createdAccount}
             loading={createAccountloading}
             isSucessCreateAccount={isSucessCreateAccount}
            />
              </div>
            )}
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  const { account } = state;
  const {
    allAccount, loading, isSuccess, isSucessCreateAccount, isfailedAllAccount, isfailedCreateAccount, createdAccount, createAccountloading
  } = account;
  return {
    allAccount, loading, isSuccess, isSucessCreateAccount, isfailedAllAccount, isfailedCreateAccount, createdAccount, createAccountloading
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllAccount,
  createAccounts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
