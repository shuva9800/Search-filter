import React, { useState } from 'react';

const initialData = [
    { name: 'Shuvankar', lastSeen: '2023-06-01', order: 23, totalAmount: '250.50', latestPurchase: '2023-06-15', news: 'Normal', segment: 'Regular' },
    { name: 'Rohim', lastSeen: '2023-06-02', order: 45, totalAmount: '100.00', latestPurchase: '2023-06-10', news: 'VIP', segment: 'Irregular' },
    { name: 'Panday', lastSeen: '2023-06-03', order: 12, totalAmount: '150.75', latestPurchase: '2023-06-12', news: 'VVIP', segment: 'Regular' },
    { name: 'Apu', lastSeen: '2023-06-04', order: 67, totalAmount: '350.00', latestPurchase: '2023-06-20', news: 'Normal', segment: 'Irregular' },
    { name: 'Prience', lastSeen: '2023-06-05', order: 34, totalAmount: '500.99', latestPurchase: '2023-06-22', news: 'VIP', segment: 'Regular' },
    { name: 'Rahul', lastSeen: '2023-06-06', order: 89, totalAmount: '100.50', latestPurchase: '2023-06-23', news: 'VVIP', segment: 'Irregular' },
    { name: 'Shayam', lastSeen: '2023-06-07', order: 56, totalAmount: '75.25', latestPurchase: '2023-06-24', news: 'Normal', segment: 'Regular' }
  ];

const SortableTable = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    }
    return '';
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Customers Details</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search here..."
      />
      <table border="1">
        <thead>
          <tr>
            <th onClick={() => sortData('name')}>Customer {getSortArrow('name')}</th>
            <th onClick={() => sortData('lastSeen')}>Last Seen {getSortArrow('lastSeen')}</th>
            <th onClick={() => sortData('order')}>Orders {getSortArrow('order')}</th>
            <th onClick={() => sortData('totalAmount')}>Total Spent {getSortArrow('totalAmount')}</th>
            <th onClick={() => sortData('latestPurchase')}>Latest Purchase {getSortArrow('latestPurchase')}</th>
            <th onClick={() => sortData('news')}>News {getSortArrow('news')}</th>
            <th onClick={() => sortData('segment')}>Segments {getSortArrow('segment')}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lastSeen}</td>
              <td>{item.order}</td>
              <td>{item.totalAmount}</td>
              <td>{item.latestPurchase}</td>
              <td>{item.news}</td>
              <td>{item.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
