import Sidebar from '../components/Sidebar';

const Dashboard = () => {

    return <div className="dashboard">
        <Sidebar />

        <div className="management-block"> <div className="management-panel">
            <div>Нещодавні</div> <h6>Всі файли</h6><div>pdf</div><div>docx</div>
            <div className='management-search'> </div>

        </div>

        </div>
    </div>

}
export default Dashboard;