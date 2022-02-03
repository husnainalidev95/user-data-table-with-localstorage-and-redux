import React, { useEffect, useMemo } from 'react';
import { usersAction } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from './components/ReactTable';

function App() {
  const dispatch = useDispatch();
  const { users, usersLoading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(usersAction.getUsers());
  }, []);

  const columns = useMemo(() => [
    {
      Header: 'Avatar',
      accessor: 'avatar',
      disableSortBy: true,
      Cell: ({ row: { original } }) => (
        <img src={original.avatar} />
      )
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    }
  ], []);

  if (usersLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className='d-flex justify-content-center align-items-center mx-5 my-5'>
      <ReactTable columns={columns} data={users} />
    </div>
  );
}

export default App;
