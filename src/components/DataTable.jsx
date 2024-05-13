import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataTable = ({ mickeyMouses }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {mickeyMouses.map((mickey) => (
                        <TableRow
                            key={mickey.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {mickey.id}
                            </TableCell>

                            <TableCell>{mickey.name}</TableCell>
                            <TableCell>{mickey.description}</TableCell>
                            <TableCell>{mickey.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default DataTable;

// <tr key={mickey.id}>
//     <td>{mickey.id}</td>
//     <td>{mickey.name}</td>
//     <td>{mickey.description}</td>
//     <td>{mickey.date}</td>
// </tr>
