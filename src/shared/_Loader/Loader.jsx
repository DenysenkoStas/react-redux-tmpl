import React from 'react';
import {css} from '@emotion/core';
import RotateLoader from 'react-spinners/RotateLoader';

const override = css`
  display: block;
  margin: 0 auto;
`;

class Loader extends React.Component {
    render() {
        return (
            <div className='loader-block'>
                <RotateLoader css={override} sizeUnit={'px'} color={'#373F51'} loading={true} {...this.props} />
            </div>
        );
    }
}

export default Loader;
