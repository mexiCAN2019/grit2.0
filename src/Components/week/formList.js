import React from 'react';
import Table from './table';

function FormList({ tables, year, onDelete }) {


    return(
        <div>
            {tables.map(activity => {
                return <Table activity={activity}
                              key={activity.id}
                              year={year}
                              onDelete={onDelete} />
            })}
        </div>
    )
}

export default FormList;