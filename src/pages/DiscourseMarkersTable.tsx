import React from 'react';
import { Table } from 'antd';
import { DataType, columns, data } from '../utils/DetailsTable';


const DiscourseMarkersTable: React.FC = () => {
    return (
        <div className='md:py-5'>
            <div className='px-12 '>
                <h1 className='text-center font-bold text-lg mb-3'>
                    Saiba o que são os marcadores do discurso abaixo e entenda seu uso tanto na língua escrita como na língua oral.
                </h1>
                <h2 className='text-justify font-medium text-md mb-3'>
                    Além do vídeo indicado, assista várias vezes aos vídeos disponíveis e compreenda como usar e pronunciar corretamente os marcadores do discurso assinalados.
                </h2>
                <h3 className='text-justify font-medium text-md mb-3'>
                    Marcadores do Discurso são unidades linguísticas advindas de diferentes classes gramaticais e
                    também combinadas entre elas. Não são variáveis e são indiferentes à composição sintática
                    de um discurso. Isto é, seu valor está na inferência de sentidos atribuídos
                    a essa unidade. Por isso, Zorraquino e Portolés (2000) afirmam que os marcadores
                    do discurso guiam o interlocutor para a inferência.
                </h3>
            </div>

            <div className='p-2 border-2 border-gray-300 shadow-xl rounded-xl'>
                <Table<DataType>
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 50 }} // Define 10 itens por página
                    scroll={{ x: 'max-content', y: "70vh" }} // Configuração de scroll horizontal e vertical
                />
            </div>
            <div className='h-5 flex items-center justify-center w-full'>
                <span className='text-md mt-8 text-center w-screen '>Os exemplos em texto escrito foram gerados pelo Chat GPT.</span>

            </div>
        </div>
    );
};

export default DiscourseMarkersTable;
// pagination={{ pageSize: 10 }} // Configuração opcional de paginação
