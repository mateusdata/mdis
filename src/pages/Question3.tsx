import React, { useState } from 'react';
import { Select } from 'antd';

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
    { id: '9', content: 'por assim dizer' },
    { id: '10', content: 'além disso' },
    { id: '11', content: 'daí' },
    { id: '12', content: 'ainda que' }
  ],
  [
    { id: '13', content: 'além disso' },
    { id: '14', content: 'pelo contrário' },
    { id: '15', content: 'no entanto' },
    { id: '16', content: 'ainda que' }
  ],
  [
    { id: '17', content: 'de qualquer forma' },
    { id: '18', content: 'né' },
    { id: '19', content: 'ainda por cima' },
    { id: '20', content: 'pois não' }
  ],
  [
    { id: '21', content: 'de qualquer forma' },
    { id: '22', content: 'né' },
    { id: '23', content: 'além disso' },
    { id: '24', content: 'ainda por cima' },
    { id: '25', content: 'pois não' }
  ],
  [
    { id: '26', content: 'no entanto' },
    { id: '27', content: 'de fato' },
    { id: '28', content: 'além disso' },
    { id: '29', content: 'né' },
    { id: '30', content: 'pois não' }
  ],
  [
    { id: '31', content: 'no entanto' },
    { id: '32', content: 'e então' },
    { id: '33', content: 'pelo contrário' },
    { id: '34', content: 'se não' },
    { id: '35', content: 'ainda por cima' }
  ],
  [
    { id: '36', content: 'no entanto' },
    { id: '37', content: 'e então' },
    { id: '38', content: 'e aí' },
    { id: '39', content: 'de fato' },
    { id: '40', content: 'ainda por cima' }
  ],
  [
    { id: '41', content: 'no entanto' },
    { id: '42', content: 'e então' },
    { id: '43', content: 'pelo contrário' },
    { id: '44', content: 'além disso' },
    { id: '45', content: 'por assim dizer' }
  ],
  [
    { id: '46', content: 'e aí' },
    { id: '47', content: 'pelo contrário' },
    { id: '48', content: 'ainda por cima' },
    { id: '49', content: 'ainda que' },
    { id: '50', content: 'por assim dizer' }
  ],
  [
    { id: '51', content: 'e aí' },
    { id: '52', content: 'pelo contrário' },
    { id: '53', content: 'no entanto' },
    { id: '54', content: 'ainda que' },
    { id: '55', content: 'pois não' }
  ],
  [
    { id: '56', content: 'ainda por cima' },
    { id: '57', content: 'pelo contrário' },
    { id: '58', content: 'no entanto' },
    { id: '59', content: 'e enfim' },
    { id: '60', content: 'daí' }
  ],
  [
    { id: '61', content: 'no entanto' },
    { id: '62', content: 'pelo contrário' },
    { id: '63', content: 'e enfim' },
    { id: '64', content: 'de qualquer forma' },
    { id: '65', content: 'daí' }
  ],
  [
    { id: '66', content: 'ainda que' },
    { id: '67', content: 'por assim dizer' },
    { id: '68', content: 'pois não' },
    { id: '69', content: 'ou seja' }
  ],
  [
    { id: '70', content: 'no entanto' },
    { id: '71', content: 'por assim dizer' },
    { id: '72', content: 'pelo contrário' },
    { id: '73', content: 'ainda por cima' }
  ],
  [
    { id: '74', content: 'e enfim' },
    { id: '75', content: 'pelo contrário' },
    { id: '76', content: 'além disso' },
    { id: '77', content: 'de qualquer forma' },
    { id: '78', content: 'ou seja' }
  ]
];

const respostasCorretas = [
  ['pois não'],
  ['de fato'],
  ['além disso'],
  ['ainda que'],
  ['de qualquer forma'],
  ['de qualquer forma'],
  ['pois não'],
  ['pelo contrário'],
  ['e então'],
  ['além disso'],
  ['e aí'],
  ['e aí'],
  ['e enfim'],
  ['e enfim'],
  ['por assim dizer'],
  ['por assim dizer'],
  ['ou seja'],
];

const arrayQuestao = [
  "Você pode me explicar como funciona este aplicativo? - '_______, claro que posso.'",
  "O evento foi bem organizado, e _______ todos os detalhes foram cuidadosamente planejados.",
  "O apartamento é bem localizado e,_______ , tem uma vista incrível da cidade.",
  "Ela se destacou na apresentação, _______ estivesse muito nervosa.",
  "Podemos não ganhar o prêmio, mas _______ nossa participação foi importante.",
  "Ela pode não gostar do presente, mas _______ vou dar a ela algo especial.",
  "Gostaria de uma sugestão de prato vegetariano. - '_______, temos várias opções deliciosas no menu.'",
  "Muitos pensam que ela é tímida,_______, ela adora conversar e fazer novas amizades.",
  "O restaurante estava lotado, _______, conseguimos uma mesa rapidamente.",
  "A loja tem uma grande variedade de produtos e,_______, oferece ótimos descontos.",
  "Ele saiu do emprego, _______ resolveu abrir seu próprio negócio.",
  "Ela terminou seu trabalho no escritório mais cedo, _______ aproveitou para ir à academia e fazer uma sessão completa de exercícios.",
  "Procuramos por meses um apartamento que atendesse às nossas necessidades, visitamos diversos imóveis,_______, encontramos o lugar perfeito para morar.",
  "Ela terminou de ler o livro que eu recomendei, _______ começou a me pedir mais sugestões de leitura.",
  "A nova política implementada pela empresa é um divisor de águas,_______. Com foco na sustentabilidade e na responsabilidade social, está redefinindo a maneira como fazemos negócios.",
  "Ela é a 'rainha' das festas, _______. Sua presença e carisma fazem qualquer evento brilhar, transformando uma simples reunião em uma ocasião especial.",
  "O filme foi um sucesso de bilheteria,_______ , muita gente foi assistir.",
];

const Questao3: React.FC<{ index: number }> = ({ index }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    setIsCorrect(respostasCorretas[index].includes(value));
  };

  const renderQuestion = () => {
    if (isCorrect) {
      return arrayQuestao[index].replace('_______', selectedValue!);
    }
    return arrayQuestao[index];
  };

  return (
    <div className={`bg-gray-200 rounded-lg ${selectedValue && isCorrect && "border-2 border-green-500"} hover:bg-gray-300 p-3 mb-4`}>
      <h3 className="text-sm font-semibold mb-2">{renderQuestion()}</h3>
      <Select
        className="w-full"
        placeholder="Selecione a resposta correta"
        onChange={handleChange}
        value={selectedValue}
      >
        {discourseMarkersQuestao3[index].map(marker => (
          <Option key={marker.id} value={marker.content}>
            {marker.content}
          </Option>
        ))}
      </Select>
      {selectedValue && isCorrect && (
        <p className="mt-2 text-green-500">Resposta correta!</p>
      )}
      {selectedValue && isCorrect === false && (
        <p className="mt-2 text-red-500">Resposta incorreta!</p>
      )}
    </div>
  );
};

const App: React.FC = () => (
  <div className="flex justify-center mt-4 p-3">
    <div>
      <div className='w-full'>
        <h1 className='text-lg font-bold text-center mb-8'>
          Escolha o marcador do discurso adequado para completar as frases.
        </h1>
      </div>
      <div className="flex flex-col w-full gap-2">
        {arrayQuestao.map((questao, index) => (
          <Questao3 key={index} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
