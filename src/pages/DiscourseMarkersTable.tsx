import React from 'react';
import { Table } from 'antd';
import { DataType, columns, data } from '../utils/DetailsTable';


const DiscourseMarkersTable: React.FC = () => {
    return (
        <div className='md:py-5'>
            <div className='px-12 '>
                <h1 className='text-center font-bold text-lg mb-3'>

                    Consulte o material informativo abaixo, inclusive a tabela, e responda a Atividade 1, Atividade 2 e Atividade 3.

                </h1>
                <h2 className='text-justify font-medium text-md mb-3'>
                    De acordo com Zorraquino e Portolés (1999, p. 4058), marcadores do discurso são unidades linguísticas advindas de diferentes
                    classes gramaticais e/ou de diferentes classes combinadas entre si (conjunção + verbo: ou seja; preposição + numeral ordinal
                    + substantivo: em primeiro lugar). São invariáveis e não exercem nenhuma daquelas funções já catalogadas pela sintaxe tradicional,
                    como sujeito, predicado, objetos, adjuntos, aposto etc.  Seu conteúdo semântico e pragmático são
                    responsáveis por guiar as inferências  que devem ser realizadas pelo interlocutor para compreender bem o que foi comunicado.
                </h2>
                <h3 className='text-justify  text-md mb-3'>
                    Ex: Mário teve que arcar com todos os gastos comuns da casa, ou seja, conta de água, luz, internet e condomínio.

                    No enunciado acima, ou seja  avisa ao interlocutor da mensagem que aquilo que se disse antes dele será dito de outra
                    maneira: mais detalhada e, portanto,  mais esclarecedora.

                </h3>
                <h3 className='text-justify  text-md mb-3'>
                    No enunciado acima, ou seja  avisa ao interlocutor da mensagem que aquilo que se disse antes dele 
                    será dito de outra maneira: mais detalhada e, portanto,  mais esclarecedora.
                </h3>

                <h3 className='text-justify  text-md text-red-500 mb-3'>
                Os marcadores do discurso são de grande importância na produção de discursos que circulam no meio acadêmico ou em qualquer outra situação comunicativa.

                </h3>

                <h3 className='text-justify  font-medium text-md mb-3'>
                Lembre-se: assista aos vídeos disponíveis na página indicada para exemplos na oralidade, observe em que contextos são usados e pratique a pronúncia.
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
