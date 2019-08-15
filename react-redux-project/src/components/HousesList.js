import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData } from '../actions';
import Houses from '../components/Houses';

const HousesList = props => {
    return (
        <div className='houses-list-container'>
            <h1>HOUSES</h1>
            <button className='get-data-btn'
                onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type='oval'
                        color='#00BFFF'
                        height="20"
                        width='20' />
                ) : (
                        'See Houses'
                    )}
            </button>
            {props.housesData && props.housesData.map(data => <Houses key={data.name} house={data} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        housesData: state.housesData
    };
};

export default connect(mapStateToProps, { getData })(HousesList);