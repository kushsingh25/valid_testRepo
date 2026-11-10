import React from 'react';
import { useState } from 'react';

export function DashboardComponent() {
    const [status] = useState('active');
    return <div>System Status: {status}</div>;
}