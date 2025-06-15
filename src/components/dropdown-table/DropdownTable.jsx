// DropdownTable.js
import React, { useState } from 'react';
import './DropdownTable.scss';

export const DropdownTable = ({ data, title, descr }) => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section className="dropdown-table">
            <div className="dropdown-table-price">
                <div className="dropdown-table-price-descr">
                    <span>
                        {descr}
                    </span>
                </div>
            </div>
            {data.map((section, index) => (
                <div key={index} className="dropdown-section">
                    <button
                        className="dropdown-title"
                        onClick={() => toggleSection(index)}
                    >
                        {section.service}
                        <span className="dropdown-icon">{openSection === index ? '−' : '+'}</span>
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
                                {section.itemsForTable.map((item) => (
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
        </section>
    );
};
