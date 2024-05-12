const Table = ({ mickeyMouses }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {mickeyMouses.map((mickey) => (
                    <tr key={mickey.id}>
                        <td>{mickey.id}</td>
                        <td>{mickey.name}</td>
                        <td>{mickey.description}</td>
                        <td>{mickey.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default Table;
