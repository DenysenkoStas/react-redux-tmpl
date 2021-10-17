import React from 'react';
import {ButtonMUI, Pagination} from '../../shared';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
  let data = [
    {id: '2746234293', name: 'Calvin', email: 'calvin.reynolds@gmail.com', referrals: '12', profit: '1,425.50'},
    {id: '9283420941', name: 'Rosa', email: 'rosa_gilbert@gmail.com', referrals: '8', profit: '852.75'},
    {id: '0293389241', name: 'Bettie', email: 'bettie.higgins@gmail.com', referrals: '7', profit: '640.00'},
    {id: '4949234293', name: 'Calvin', email: 'calvin.reynolds@gmail.com', referrals: '12', profit: '1,425.50'},
    {id: '2334909023', name: 'Rosa', email: 'rosa_gilbert@gmail.com', referrals: '8', profit: '852.75'},
    {id: '2323389241', name: 'Bettie', email: 'bettie.higgins@gmail.com', referrals: '7', profit: '640.00'},
    {id: '3429327462', name: 'Calvin', email: 'calvin.reynolds@gmail.com', referrals: '12', profit: '1,425.50'},
    {id: '8342092941', name: 'Rosa', email: 'rosa_gilbert@gmail.com', referrals: '8', profit: '852.75'},
    {id: '0292413389', name: 'Bettie', email: 'bettie.higgins@gmail.com', referrals: '7', profit: '640.00'},
    {id: '6234227493', name: 'Calvin', email: 'calvin.reynolds@gmail.com', referrals: '12', profit: '1,425.50'}
  ];

  return (
    <main className={`${styles.dashboard} page-wrap`}>
      <div className={`${styles.dashboardInner} container`}>
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
