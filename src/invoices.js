
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Invoices() {
    const {invoiceId} = useParams();
    return (
        <div>
            <h1>Iam from Invoices</h1>
            <nav >
            <div style={{ padding: "20px" }}>
                <ul style={{  padding: 0, margin: 0 }}>
                    <li><Link to="/invoices/52">Devdarshan</Link></li>
                    <h>|</h>
                    <li><Link to="/invoices/05">Deva</Link></li>
                    <h>|</h>
                    <li><Link to="/invoices/05">Darshan</Link></li>
                    <h>|</h>
                </ul>
            </div>
        </nav>
        <h1> Invoice Id: {invoiceId}</h1>
        </div>
    )
}