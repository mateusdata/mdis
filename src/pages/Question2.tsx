import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const { Option } = Select;

interface DiscourseMarker {
  id: string;
  content: string;
}

const discourseMarkers: DiscourseMarker[] = [
  { id: '1', content: 'no entanto' },
  { id: '2', content: 'ainda que' },
  { id: '3', content: 'e aí' },
  { id: '4', content: 'enfim' },
  { id: '5', content: 'daí' },
  { id: '6', content: 'então' },
  { id: '7', content: 'ou seja' },
  { id: '8', content: 'de qualquer forma' },
  { id: '9', content: 'Pois não?!' },
  { id: '10', content: 'né?' },
  { id: '11', content: 'de fato' },
  { id: '12', content: 'por assim dizer' },
  { id: '13', content: 'ainda por cima' },
  { id: '14', content: 'além disso' },
  { id: '15', content: 'pelo contrário' },
];

const respostasCorretas = [
  ['no entanto', 'pelo contrário'],
  ['e aí', 'enfim', 'daí', 'então'],
  ['ou seja', 'de qualquer forma'],
  ['Pois não?!', 'né?'],
  ['de fato'],
  ['por assim dizer'],
  ['ainda por cima', 'além disso']
];

const arrayQuestao = [
  "Apresenta ideias ou conclusões contrárias ao que geralmente se espera com relação ao fato já dito.",
  "Apresenta novas informações ao discurso com um vínculo consecutivo.",
  "Reformula o que foi dito.",
  "Verifica uma interação entre os interlocutores.",
  "Apresenta um membro do discurso como fato verdadeiro e, consequentemente, com mais força argumentativa que outro argumento.",
  "Apresenta um membro do discurso utilizado de modo inexato, como uma ideia aproximada, não literal.",
  "Apresenta argumentos que se somam à conclusão do argumento anterior, aumentando sua força argumentativa, que pode ser tanto positiva como negativa."
];

const shuffleArray = (array: any[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Questao: React.FC<{ index: number }> = ({ index }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

  const handleChange = (value: string[]) => {
    setSelectedValues(value);

    if (value.length === 0) {
      setFeedback('');
      return;
    }

    const correto = value.every(v => respostasCorretas[index].includes(v));
    if (correto && value.length === respostasCorretas[index].length) {
      setFeedback('Resposta correta!');
    } else {
      setFeedback('Resposta incorreta!');
    }
  };

  const isCorrect = feedback === 'Resposta correta!';

  return (
    <div className={`bg-gray-200 rounded-lg  hover:bg-gray-300 p-3 mb-4  ${isCorrect ? 'border-2 border-green-500' : ''}`}>
      <h3 className="text-sm font-semibold mb-2">{arrayQuestao[index]}</h3>
      <Select
        mode="multiple"
        className={`w-full ${isCorrect ? "text-green-500" : "text-gray-800"}`}
        placeholder="Selecione as respostas corretas"
        onChange={handleChange}
        value={selectedValues}
      >
        {shuffleArray(discourseMarkers).map(marker => (
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
  <div className="flex justify-center mt-4  p-3 ">
    <div>
      <div className='w-full '>
        <h1 className='text-lg font-bold text-center mb-8'> Selecione os marcadores do discurso e agrupe-os na descrição adequada.
        </h1>
      </div>
      <div className="flex flex-col w-full gap-2 border-2 border-red-50">
        {arrayQuestao.map((questao, index) => (
          <Questao key={index} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
