import React, {useEffect, useState} from 'react';
import {ButtonMUI, Pagination} from '../../shared';
import {dashboardData} from '../../helpers/mockData';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (dashboardData?.length > 0) setData(dashboardData);
  }, [dashboardData]);

  return (
    <main className={`${styles.root} page-wrap`}>
      <div className={`${styles.container} container`}>
        <h1>Dashboard</h1>

        <section className='card-wrap'>
          <table className='table full-width'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Referrals</th>
                <th>Profit</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(({id, name, email, referrals, profit}) => (
                  <tr key={id}>
                    <td className='bold'>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{referrals}</td>
                    <td>{profit} USDT</td>
                    <td className='w-10'>
                      <span className='table-inner table-inner--right'>
                        <ButtonMUI size='small' variant='outlined'>
                          Approve
                        </ButtonMUI>
                        <ButtonMUI size='small' variant='outlined' color='secondary'>
                          Reject
                        </ButtonMUI>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination pageCount={10} />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
