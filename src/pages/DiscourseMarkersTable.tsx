import React from 'react';
import { Table } from 'antd';
import { DataType, columns, data } from '../utils/DetailsTable';


const DiscourseMarkersTable: React.FC = () => {
    return (
        <div className='md:p-12 p-2'>
            <h1 className='font-bold text-lg mb-3'>SELEÇÃO-MDis</h1>
            <div className='p-2 border border-blue-500 shadow-xl rounded-xl'>
                <Table<DataType>
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 50 }} // Define 10 itens por página
                    scroll={{ x: 'max-content', y: "70vh" }} // Configuração de scroll horizontal e vertical
                />
            </div>
        </div>
    );
};

export default DiscourseMarkersTable;
// pagination={{ pageSize: 10 }} // Configuração opcional de paginação
