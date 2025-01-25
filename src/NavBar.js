
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Invoices from './invoices'
import Expenses from './expenses'

export default function NavBar() {
    return (
        <BrowserRouter>
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Book Keeper</h1>
        <nav  style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ padding: "20px" }}>
                <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}>
                    <li><Link to="/invoices">Invoices</Link></li>
                    <h>|</h>
                    <li><Link to="/expenses">Expenses</Link></li>
                </ul>
            </div>
        </nav>
        </div>
        <Routes>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:invoiceId" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
        </Routes>
        </BrowserRouter>
    )
}