import React from 'react';
import { Card } from 'semantic-ui-react';

const Houses = props => {
    return (
        <Card>
            <div className='houses-ui-card'>
                <div className='content'>
                    <div className='header'>{props.house.name}</div>
                    <div className='ui sub header'>
                        <h4>{props.house.currentLord}</h4>
                        <div className='ui small feed'>
                            <p>{props.house.region}</p>
                            <p>{props.house.coatOfArms}</p>
                            <p>{props.house.words}</p>
                            <p>{props.house.founded}</p>
                            <p>{props.house.founder}</p>
                            <p>{props.house.overlord}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Houses;