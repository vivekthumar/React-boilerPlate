import { LockClosedIcon } from '@heroicons/react/solid';
import { Component } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Text, Button } from 'components/common/Forms';
import { login } from 'redux/auth/action';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string().required('Password Required'),
});

class Login extends Component {
  handleLogin = (values) => {
    const { login } = this.props;
    login(values);
  };

  render() {
    const { loading } = this.props;
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={this.handleLogin}
      >
        {(props) => (
          <form method="POST" onSubmit={props.handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="form-wrapper">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Text
                  name="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Text
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input-control-end"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                />
                {props.errors.password && props.touched.password ? (
                  <div>{props.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="center-wrapper">
              <div className="flex items-center">&nbsp;</div>
              <div className="text-sm">
                <Link href="/">
                  <a>Forgot your password?</a>
                </Link>
              </div>
            </div>
            <div>
              <Button disabled={loading} type="submit">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {!loading ? (
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  ) : null}
                  {loading ? <svg className="button-loading" viewBox="0 0 24 24" /> : null}
                </span>
                Sign in
              </Button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const authData = {
    loading: auth.loading,
  };
  return authData;
};
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
