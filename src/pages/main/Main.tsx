import * as React from 'react';
import { connect } from 'react-redux';
import { getTest } from './mainRequests';
import { Dispatch } from 'redux';

const MainTemp: React.FC = (props: any) => {
  return (
    <>
      <div className="">
        It is working
        <button className="btn waves-effect waves-light" onClick={props.test}>
          Request
        </button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    test: () => dispatch(getTest()),
  };
};

export const Main = connect(null, mapDispatchToProps)(MainTemp);
