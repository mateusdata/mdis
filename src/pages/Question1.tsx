import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { frases } from '../utils/frases';
import { conectivos } from '../utils/conectivos';

// Tipo para representar uma frase com seu marcador
interface Frase {
  partes: string[];
  ordem: number[];
}

const shuffleArray = (array: any[]) => {
  const shuffledArray = array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledArray;
};

const FraseOrganizada: React.FC<{ frase: Frase }> = ({ frase }) => {
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [mensagem, setMensagem] = useState<string>("");
  const [embaralhado, setEmbaralhado] = useState<string[]>([]);
  const [mapaIndices, setMapaIndices] = useState<Map<number, number>>(new Map());

  useEffect(() => {
    resetarJogo();
    // eslint-disable-next-line
  }, [frase]);
  

  const resetarJogo = () => {
    const partesEmbaralhadas = shuffleArray(frase.partes);
    setEmbaralhado(partesEmbaralhadas);

    const novoMapaIndices = new Map<number, number>();
    partesEmbaralhadas.forEach((parte, indice) => {
      novoMapaIndices.set(indice + 1, frase.partes.indexOf(parte) + 1);
    });
    setMapaIndices(novoMapaIndices);

    setSelecionados([]);
    setMensagem("");
  };

  const handleClick = (indice: number) => {
    // Verifica se o índice já está selecionado
    if (selecionados.includes(indice)) {
      // Se já estiver selecionado, remove da lista de selecionados
      const novaSelecao = selecionados.filter(item => item !== indice);
      setSelecionados(novaSelecao);
    } else {
      // Caso contrário, adiciona à lista de selecionados
      const novaSelecao = [...selecionados, indice];
      setSelecionados(novaSelecao);

      // Verifica se todas as partes foram selecionadas
      if (novaSelecao.length === frase.ordem.length) {
        const ordemSelecionada = novaSelecao.map(i => mapaIndices.get(i));
        if (JSON.stringify(ordemSelecionada) === JSON.stringify(frase.ordem)) {
          setMensagem("Correto!");
        } else {
          setMensagem("Incorreto, tente novamente.");
        }
      }
    }
  };


  const handleReset = () => {
    resetarJogo();
  };

  return (
    <div className={`p-4 border rounded-lg  shadow-md bg-gray-200 ${mensagem === "Correto!" && " border border-green-600"}`}>
      <p className="mb-4">
        {embaralhado.map((parte, indice) => (
          <button
            key={indice}
            onClick={() => handleClick(indice + 1)}
            className={`inline-block mx-1 my-1 px-2 py-1 border rounded-lg ${selecionados.includes(indice + 1)
              ? 'bg-blue-300 text-white cursor-not-allowed'
              : 'bg-white text-black font-extrabold hover:bg-gray-300'
              }`}
          >
            {conectivos.some(conectivo => {
              // Verifica se a parte contém o conectivo exato como uma palavra inteira
              const palavrasParte = parte.split(' ');
              const conectivoPalavras = conectivo.split(' ');

              for (let i = 0; i <= palavrasParte.length - conectivoPalavras.length; i++) {
                if (conectivoPalavras.every((word, index) => palavrasParte[i + index] === word)) {
                  // Verifica se o conectivo não está precedido por outra palavra
                  if (
                    (i > 0 && conectivos.includes(palavrasParte[i - 1].toLowerCase())) ||
                    (i + conectivoPalavras.length < palavrasParte.length &&
                      conectivos.includes(palavrasParte[i + conectivoPalavras.length].toLowerCase()))
                  ) {
                    return false; // Ignora se o conectivo não é uma palavra inteira
                  }
                  return true;
                }
              }

              return false;
            }) ? (
              <span className="text-red-500">{parte}</span>
            ) : (
              <span>{parte}</span>
            )}
          </button>
        ))}



      </p>
      <p className="text-gray-700 mb-2">Seleção: {selecionados.map(i => `${embaralhado[i - 1]}`).join(" ")}</p>
      <p className={`text-lg font-semibold ${mensagem === "Correto!" ? 'text-green-500' : 'text-red-500'}`}>{mensagem}</p>
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
      >
        Resetar
      </button>
    </div>
  );
};

const App: React.FC = () => {
  // Frases com os marcadores e as ordens corretas

  return (
    <div className="container mx-auto p-8 ">

      <h2 className='text-xl font-bold mb-8 text-center'>
      Estruture o enunciado observando o uso a funcionalidade do marcador do discurso destacado.
      </h2>

      <div className="space-y-8">
        {frases.map((frase, index) => (
          <div>
            <span>Questão {index + 1}</span>
            <FraseOrganizada key={index} frase={frase} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default App;
