import React from 'react';
import { Card } from 'semantic-ui-react';

const Houses = props => {
    return (
        <Card>
            <div className='ui-cards'>
                <div className='ui-card'>
                    <div className='content'>
                        <div className='header'>{props.house.name}</div>
                        <div className='description'>
                            <p>{props.house.currentLord}</p>
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
        </Card >
    );
};

export default Houses;