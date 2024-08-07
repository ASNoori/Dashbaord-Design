import './Dashboardmain.css';
import Stats from '../Stats/Stats';
import Activitychart from '../Activitychart/Activitychart';
import Ordersfeedback from '../Ordersfeedback/Ordersfeedback';
export default function Dashboardmain(){
    return(
        <div className="dashboard-container">
            <h2 className='dashbaord-heading'>Dashboard</h2>
            <div>
                <Stats/>
                <Activitychart/>
                <Ordersfeedback/>
            </div>
        </div>
    );
}