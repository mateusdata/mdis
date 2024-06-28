import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const { Option } = Select;

interface DiscourseMarker {
  id: string;
  content: string;
}

const discourseMarkersQuestao3: DiscourseMarker[][] = [
  [
    { id: '1', content: 'além disso' },
    { id: '2', content: 'pois não' },
    { id: '3', content: 'pelo contrário' },
    { id: '4', content: 'de qualquer forma' }
  ],
  [
    { id: '5', content: 'de fato' },
    { id: '6', content: 'né' },
    { id: '7', content: 'por assim dizer' },
    { id: '8', content: 'pelo contrário' }
  ],
  [
    { id: '9', content: 'além disso' },
    { id: '10', content: 'pois não' },
    { id: '11', content: 'pelo contrário' },
    { id: '12', content: 'de qualquer forma' }
  ]
];

const respostasCorretasQuestao3 = [
  'pois não',
  'de fato',
  'além disso'
];

const arrayQuestao3 = [
  `"Você pode me explicar como funciona este aplicativo?" - "_______, claro que posso."`,
  `"O evento foi bem organizado, e _______ todos os detalhes foram cuidadosamente planejados."`,
  `"O apartamento é bem localizado e,_______ , tem uma vista incrível da cidade."`
];

const Questao3: React.FC<{ index: number }> = ({ index }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleChange = (value: string) => {
    setSelectedValue(value);

    if (value === respostasCorretasQuestao3[index]) {
      setFeedback('Resposta correta!');
    } else {
      setFeedback('Resposta incorreta!');
    }
  };

  const isCorrect = feedback === 'Resposta correta!';

  return (
    <div className={`bg-gray-200 rounded-lg hover:bg-gray-300 p-3 mb-4 ${isCorrect ? 'border-2 border-green-500' : ''}`}>
      <h3 className="text-sm font-semibold mb-2">
        {isCorrect 
          ? arrayQuestao3[index].replace('_______', selectedValue || '_______')
          : arrayQuestao3[index]}
      </h3>
      <Select
        className={`w-full ${isCorrect ? "text-green-500" : "text-gray-800"}`}
        placeholder="Selecione a resposta correta"
        onChange={handleChange}
        value={selectedValue}
        disabled={isCorrect}
      >
        {discourseMarkersQuestao3[index].map(marker => (
          <Option key={marker.id} value={marker.content}>
            {marker.content}
          </Option>
        ))}
      </Select>
      {feedback && <p className={`mt-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{feedback}</p>}
    </div>
  );
};

const App: React.FC = () => (
  <div className="flex justify-center mt-4 p-3">
    <div>
      <div className='w-full'>
        <h1 className='text-lg font-bold text-center mb-8'>Selecione os marcadores do discurso adequados para completar as frases.</h1>
      </div>
      <div className="flex flex-col w-full gap-2 border-2 border-red-50">
        {arrayQuestao3.map((questao, index) => (
          <Questao3 key={index} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
