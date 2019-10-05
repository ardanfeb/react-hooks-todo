import React from 'react'
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Table(props) {
    return (
        <div className="col-md-12">
            <table className="table table-striped table-responsive-md">
                <thead>
                    <tr>
                        <th></th>
                        <th>To Do List</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) =>
                        <tr key={index}>
                            <td className="align-middle cb">
                                <input
                                    type="checkbox"
                                    checked={item.status}
                                    onChange={() => props.onCheckedTodos(index, !item.status)} />
                            </td>
                            <td className="align-middle">{item.status ? <strike>{item.title}</strike> : item.title}</td>
                            <td className="align-middle cb">
                                <button className="btn btn-secondary btn-sm" onClick={() => props.onDeleteTodos(index)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Table
