import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Chart = ({ ratings }) => {
    console.log(ratings)
    return (
        <div style={{ width: '100%', height: '300px' }}>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart

                    data={ratings}

                    layout="vertical"
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Bar dataKey="count" fill="#ff8811" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Chart;