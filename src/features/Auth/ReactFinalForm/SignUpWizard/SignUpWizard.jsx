import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-final-form';
import {ReactComponent as ArrowBlueIcon} from '../../../../assets/icons/arrow-blue.svg';
import ButtonMUI from '../../../../shared/ButtonMUI';
import {Link} from 'react-router-dom';
import {authPath} from '../../../../routes/paths';

export default class SignUpWizard extends Component {
  static Page = ({children}) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = Children.toArray(this.props.children)[this.state.page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const {children, onSubmit} = this.props;
    const {page} = this.state;
    const isLastPage = page === Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const {children} = this.props;
    const {page, values} = this.state;
    const activePage = Children.toArray(children)[page];
    const isLastPage = page === Children.count(children) - 1;

    let descText;
    if (page === 0) {
      descText = 'Please, provide some information about yourself';
    } else if (page === 1) {
      descText = 'Please, fill out the form about your location at the moment';
    } else if (page === 2) {
      descText = 'Just a little bit left, create a password for your personal account';
    }

    return (
      <Form initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
        {({handleSubmit, submitting, values, pristine, invalid}) => (
          <form className='auth-box max-w-530' onSubmit={handleSubmit}>
            {(page === 1 || page === 2) && (
              <button type='button' className='backlink mb-10' onClick={this.previous}>
                <ArrowBlueIcon />
                <span>{page === 1 ? 'Step 1' : 'Step 2'}</span>
              </button>
            )}

            <h1 className='h1 mb-15'>Sign up</h1>
            <p className='mb-85'>{descText}</p>

            {activePage}

            {!isLastPage && (
              <div className='auth-box__btn-wrap mt-65 mb-105 mx-auto'>
                <ButtonMUI disabled={invalid} formAction>
                  Next
                </ButtonMUI>
              </div>
            )}
            {isLastPage && (
              <div className='auth-box__btn-wrap mt-65 mb-185 mx-auto'>
                <ButtonMUI disabled={submitting || invalid} formAction>
                  Submit
                </ButtonMUI>
              </div>
            )}

            <div className='auth-box__footer'>
              <span className='auth-box__text mr-15'>Already a member?</span>
              <Link className='auth-box__link' to={authPath.signIn}>
                SIGN IN
              </Link>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

SignUpWizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
