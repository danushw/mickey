import MickeyContainer from './MickeyContainer';
import Table from './Table';
import mickeyMouses from '../data.js';
const Home = () => {
    return (
        <div>
            <MickeyContainer mickeyMouses={mickeyMouses} />
            <Table mickeyMouses={mickeyMouses} />
        </div>
    );
};
export default Home;
