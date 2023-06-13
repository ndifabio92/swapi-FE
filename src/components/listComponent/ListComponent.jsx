import React from 'react';

export const ListComponent = ({ data, CardItem: CardComponent }) => {

    return (
        <div className='container-list'>
            {data?.map((item, index) => (
                <CardComponent item={item} key={index} />
            ))}
        </div>
    );
};
