import React from 'react';
import Table from './table';
import Checkbox from './checkbox';
import Textbox from './textbox';

function FormList({ tables, checkboxes, textboxes, year, onDelete }) {


    return(
        <div>
            {tables.map(activity => {
                return <Table activity={activity}
                              key={activity.id}
                              year={year}
                              onDelete={onDelete} />
            })}

            {checkboxes.map(activity => {
                return <Checkbox activity={activity}
                                 key={activity.id}
                                 onDelete={onDelete}
                                 year={year} />
            })}

            {textboxes.map(activity => {
                return <Textbox activity={activity}
                                key={activity.id}
                                onDelete={onDelete}
                                year={year} />
            })}
        </div>
    )
}

export default FormList;