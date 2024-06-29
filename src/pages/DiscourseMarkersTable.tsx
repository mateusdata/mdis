import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    marcadores: string;
    variacoes: string;
    equivalencias_es: string;
    o_que_e: string;
    escrito: string;
    comentario: string;
    oral: { descricao: string; descricaoVideo: string };
    comentariovideo: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Marcadores',
        dataIndex: 'marcadores',
        key: 'marcadores',
        width: 'auto',
    },
    {
        title: 'Variações',
        dataIndex: 'variacoes',
        key: 'variacoes',
        width: 'auto',
    },
    {
        title: 'Equivalências ES',
        dataIndex: 'equivalencias_es',
        key: 'equivalencias_es',
        width: 'auto',
    },
    {
        title: 'O que é',
        dataIndex: 'o_que_e',
        key: 'o_que_e',
        width: 'auto',
    },
    {
        title: 'Escrito',
        dataIndex: 'escrito',
        key: 'escrito',
        width: 'auto',

    },
    {
        title: 'Comentário',
        dataIndex: 'comentario',
        key: 'comentario',
        width: 'auto',
    },
    {
        title: 'Oral',
        dataIndex: 'oral',
        key: 'oral',
        width: 'auto',
        render: (oral: { descricao: string; descricaoVideo: string }) => (
            <div>
                <p>{oral.descricao}</p>
                <a className='underline text-blue-600' href={oral.descricaoVideo} target="_blank" rel="noopener noreferrer">
                    Assistir ao vídeo
                </a>
            </div>
        ),
    },
    {
        title: 'Comentário Video',
        dataIndex: 'comentariovideo',
        key: 'comentariovideo',
        width: 'auto',
    },
];

const data: DataType[] = [
    {
        key: '1',
        marcadores: 'no entanto',
        variacoes: '',
        equivalencias_es: 'sin embargo',
        o_que_e: 'indica uma oposicao ou contraste com o que foi dito anteriormente.',
        escrito: 'no entanto, ele decidiu nao ir.',
        comentario: 'pode ser substituido por "mas".',
        oral: {
            descricao: 'expressa uma mudanca de direcao no discurso.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },
    {
        key: '9',
        marcadores: 'em outras palavras',
        variacoes: 'ou seja',
        equivalencias_es: 'en otras palabras',
        o_que_e: 'indica uma reformulacao ou explicacao mais simples do que foi dito anteriormente.',
        escrito: 'ele e muito preguicoso. em outras palavras, nao gosta de trabalhar.',
        comentario: 'usado para parafrasear ou esclarecer uma ideia anterior.',
        oral: {
            descricao: 'reformula uma ideia para torna-la mais compreensivel.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },
    {
        key: '10',
        marcadores: 'enfim',
        variacoes: '',
        equivalencias_es: 'en fin',
        o_que_e: 'introduz uma conclusao ou encerramento para o que foi dito anteriormente.',
        escrito: 'falamos muito sobre isso. enfim, precisamos decidir o que fazer.',
        comentario: 'usado para concluir uma discussao ou topico.',
        oral: {
            descricao: 'marca o final ou a conclusao de um assunto.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },

    {
        key: '11',
        marcadores: 'enfim',
        variacoes: '',
        equivalencias_es: 'en fin',
        o_que_e: 'introduz uma conclusao ou encerramento para o que foi dito anteriormente.',
        escrito: 'falamos muito sobre isso. enfim, precisamos decidir o que fazer.',
        comentario: 'usado para concluir uma discussao ou topico.',
        oral: {
            descricao: 'marca o final ou a conclusao de um assunto.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },

    {
        key: '12',
        marcadores: 'enfim',
        variacoes: '',
        equivalencias_es: 'en fin',
        o_que_e: 'introduz uma conclusao ou encerramento para o que foi dito anteriormente.',
        escrito: 'falamos muito sobre isso. enfim, precisamos decidir o que fazer.',
        comentario: 'usado para concluir uma discussao ou topico.',
        oral: {
            descricao: 'marca o final ou a conclusao de um assunto.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },

    {
        key: '13',
        marcadores: 'enfim',
        variacoes: '',
        equivalencias_es: 'en fin',
        o_que_e: 'introduz uma conclusao ou encerramento para o que foi dito anteriormente.',
        escrito: 'falamos muito sobre isso. enfim, precisamos decidir o que fazer.',
        comentario: 'usado para concluir uma discussao ou topico.',
        oral: {
            descricao: 'marca o final ou a conclusao de um assunto.',
            descricaoVideo: 'https://www.youtube.com/watch?v=OyuL5biOQ94&list=RDOyuL5biOQ94&start_radio=1',
        },
        comentariovideo: 'utiliza-se para um comentario sobre um video',
    },
    // Adicione outros marcadores conforme necessário...
];

const DiscourseMarkersTable: React.FC = () => {
    return (
        <div className='md:p-12 p-2'>
            <h1 className='font-bold text-lg mb-3'>SELEÇÃO-MDis</h1>
            <div className='p-2 border border-blue-500 shadow-xl rounded-xl'>
                <Table<DataType>
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 10 }} // Configuração opcional de paginação
                    scroll={{ x: 'max-content', y: 480 }} // Configuração de scroll horizontal e vertical
                />
            </div>
        </div>
    );
};

export default DiscourseMarkersTable;
