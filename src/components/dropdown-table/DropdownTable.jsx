// DropdownTable.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './DropdownTable.scss';

export const DropdownTable = ({ data }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="dropdown-table">
            {data.map((section, index) => (
                <div key={index} className="dropdown-section">
                    <button
                        className="dropdown-title"
                        onClick={() => toggleSection(index)}
                    >
                        {section.title}
                        <FontAwesomeIcon 
                            className="footer-icon" 
                            icon={faPlus} 
                        /> 
                    </button>
                    {openSection === index && (
                        <table className="dropdown-content">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Послуга</th>
                                    <th>Ціна</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}
        </div>
    );
};
