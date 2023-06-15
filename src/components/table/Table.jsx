import React from 'react'

export const Table = ({ data, heading }) => {
    return (
        <>
            <table>
                <thead style={{ color: "yellow " }}>
                    <tr>
                        {
                            heading.map((item, index) =>
                                <th key={index} >{item}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody style={{ color: "white" }}>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                {Object.keys(item).map((key, i) => (
                                    <td key={i}>{item[key]}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
