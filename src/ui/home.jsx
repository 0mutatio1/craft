import { Outlet, Link } from "react-router-dom";
import './ui.scss';

export default function Home() {
    return (
        <div className="craft-ui">

            <div className='craft-ui-header'>Craft Header</div>            

            <div className="craft-ui-body">
                <div className="craft-ui-sidebar">
                    <ul>
                        <li><Link to={`button`}>Button</Link></li>                    
                        <li><Link to={`input`}>Input</Link></li>
                    </ul>
                </div>
                <div className="craf-ui-content">
                    <Outlet />
                </div>
            </div>

            <div className="craft-ui-footer">Footer</div>

        </div>
    )
}