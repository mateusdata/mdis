import { ColumnsType } from "antd/es/table";

export interface DataType {
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


export const columns: ColumnsType<DataType> = [
    {
        title: 'MARCADORES DO DISCURSO',
        dataIndex: 'marcadores',
        key: 'marcadores',
        width: '130px',
    },
    {
        title: 'VARIAÇÕES',
        dataIndex: 'variacoes',
        key: 'variacoes',
        width: '130px',
    },
    {
        title: 'EQUIVALÊNCIAS EM ESPANHOL',
        dataIndex: 'equivalencias_es',
        key: 'equivalencias_es',
        width: '150px',
    },
    {
        title: 'DESCRIÇÃO',
        dataIndex: 'o_que_e',
        key: 'o_que_e',
        width: '280px',
    },
    {
        title: 'EXEMPLOS EM CONTEXTO ESCRITO',
        dataIndex: 'escrito',
        key: 'escrito',
        width: '380px',
        render: (text:any) => <div dangerouslySetInnerHTML={{ __html: text }} />,

    },
    {
        title: 'COMENTÁRIO',
        dataIndex: 'comentario',
        key: 'comentario',
        width: '550px',
    },
    {
        title: 'EXEMPLOS EM CONTEXTO ORAL',
        dataIndex: 'oral',
        key: 'oral',
        width: '380px',
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
        title: 'COMENTÁRIO',
        dataIndex: 'comentariovideo',
        key: 'comentariovideo',
        width: '220px',
    },
];


export const data: DataType[] = [
    {
        key: '1',
        marcadores: 'ou seja',
        variacoes: 'isto é',
        equivalencias_es: 'es decir; o sea',
        o_que_e: 'DPDE: Apresenta o integrante do discurso em que aparece como explicação ou esclarecimento de tudo ou parte do que foi dito anteriormente:',
        escrito: 'a) Ele é cardiologista, ou seja, especialista em coração.  <br /> b) Ela mora perto do trabalho, ou seja, não precisa pegar trânsito todos os dias."                                                    <br /> c) Ele é vegano, ou seja, não consome nenhum produto de origem animal."   <br />  d) O projeto foi aprovado pelo conselho, ou seja, podemos começar a execução imediatamente."',
        comentario: 'Nos exemplos a e c, o marcador "ou seja" está introduzindo um esclarecimento sobre o que é ser cardiologista e ser vegano respectivamente. Nos exemplos b e d, o marcador introduz uma explicação sobre o que se deve concluir a partir do dito anterioremente: em b, "morar perto do trabalho" , e "o projeto foi aprovado", em d, podem implicar várias coisas, mas o "ou seja" delimita a conclusão a que se deve chegar a partir do que foi dito.',
        oral: {
            descricao: 'No vídeo 1 temos:  "E lá fui eu estudar sobre a empatia, essa nossa capacidade de se colocar no lugar do outro, de adotar a sua perspectiva, ou seja, enxergar o mundo pelos seus olhos, e compartilhar dos seus sentimentos."',
            descricaoVideo: 'https://youglish.com/pronounce/ou%20seja/portuguese',
        },
        comentariovideo: 'Nessa fala, o "ou seja" intorduz argumentos que explicam o que é " essa nossa capacidade de se colocar no lugar do outro, de adotar a sua perspectiva".',
    },
    {
        key: '2',
        marcadores: 'e aí',
        variacoes: 'e então, aí',
        equivalencias_es: 'y entonces',
        o_que_e: `(MARTÍN ZORRAQUINO; PORTOLÉS, 1999), Apresenta um membro do discurso vinculado ao anterior, aportando informações novas ao tópico de caráter geral. Como conector consecutivo, apresenta um sentido de consequência enfraquecido, diferentemente de outros conectores consecutivos.`,
        escrito: `a) Chegamos ao restaurante, e aí percebemos que tínhamos esquecido de fazer a reserva.
       <br /> b)  Fiz a prova de manhã, e aí fui comemorar com meus amigos.
       <br /> c) O time marcou um gol nos últimos minutos, e aí garantiu a vitória.
       <br />  d)  Ele saiu do trabalho mais cedo, e aí decidiu passear no parque.`,
        comentario: `Nos exemplos a-d, temos o marcador "e aí" introduzindo novas informações vinculadas ao que já foi dito. Essas novas informações se justificam na parte do discurso a qual estão vinculadas.`,
        oral: {
            descricao: `No vídeo 2, por exemplo, temos "Quando você não paga o total da sua fatura, você entra no crédito rotativo
      que está entre as operações de crédito mais caras do mundo em termos de taxas de juros e aí, o efeito bola de neve cresce rapidamente, e aí, quem resolver parcelar o pagamento vai pagar juros elevados de qualquer forma."`,
            descricaoVideo: 'https://youglish.com/pronounce/e%20a%C3%AD/portuguese',
        },
        comentariovideo: `O uso do marcador "e aí" indica que foram adicionadas novas informações vinculadas ao tópico que já se discute, as quais comentam.`,
    },
    {
        key: '3',
        marcadores: 'então',
        variacoes: 'entonces',
        equivalencias_es: 'entonces',
        o_que_e: `(MARTÍN ZORRAQUINO; PORTOLÉS, 1999), Apresenta um membro do discurso vinculado ao anterior, aportando informações novas ao tópico de caráter geral. Como conector consecutivo, apresenta um sentido de consequência enfraquecido, diferentemente de outros conectores consecutivos.`,
        escrito: `a) "O show foi cancelado, então decidimos ir ao cinema."
       <br /> b)  "Ela não estava se sentindo bem, então foi para casa mais cedo."
       <br /> c) "O trânsito estava horrível, então chegamos atrasados na reunião."
       <br />  d)  "Ele estudou muito para a prova, então conseguiu tirar uma boa nota."`,
        comentario: 'Nos exemplos a-d, temos o marcador "então" introduzindo novas informações vinculadas ao que já foi dito. Essas novas informações se justificam na parte do discurso a qual estão vinculadas.',
        oral: {
          descricao: 'No vídeo 3, temos a seguinte fala: "Dependendo do volume que você gasta e da frequência que você voa, sim, esse cartão será isento de anuidade. Então, o ponto fundamental que deve se destacar na escolha de um bom cartão de crédito é a isenção."',
          descricaoVideo: 'https://youglish.com/pronounce/e%20a%C3%AD/portuguese'
        },
        comentariovideo:`Após apresentar algumas informações, o falante acrescenta novas informações para sustentar sua ideia, o que não deixa de ser um comentário sobre as informações vinculadas pelo marcador "então"`
      },
      
    {
        key: '4',
        marcadores: 'enfim',
        variacoes: 'e enfim',
        equivalencias_es: 'enfín',
        o_que_e: 'DPDE: Apresenta o membro do discurso em que aparece como conclusão, ao mesmo tempo como encerramento e resumo final (muitas vezes avaliativo) que é extraído de todo ou parte do que foi dito anteriormente.',
        escrito: `a) "Estudamos a noite toda, fizemos muitos exercícios e, enfim, estávamos preparados para a prova."
       <br /> b)  Tivemos vários contratempos durante a viagem, mas, enfim, chegamos ao nosso destino.
       <br /> c) "Ela passou por muitas dificuldades, mas, enfim, conseguiu realizar seu sonho."
       <br />  d)  "Expliquei todos os detalhes do projeto, discutimos as melhorias e, enfim, tomamos uma decisão."`,
        comentario: `Nos exemplos a)-d), temos o marcador "enfim" introduzindo partes que encerram ou concluem o discurso.`,
        oral: {
            descricao: `No video 2 temos: "Saiba que nós somos uma empresa que te ajuda a comprar na China mais barato para aumentar o lucro de sua operação comércio físico, comércio eletrônico ou comércio figital, que agora estão juntando físico com digital. Enfim, se você quiser sair da guerra de preços, aumente seu lucro comprando produtos diretamente da China, a gente pode te ajudar."`,
            descricaoVideo: 'https://youglish.com/pronounce/enfim/portuguese',
        },
        comentariovideo: `Nessa fala, o "enfim" é usado para introduzir um resumo do todo dito anteriormente.`,
    },
    {
        key: '5',
        marcadores: 'daí',
        variacoes: 'e daí',
        equivalencias_es: 'de ahí',
        o_que_e: `(MARTÍN ZORRAQUINO; PORTOLÉS, 1999), Apresenta uma consequência que é uma evidência em relação ao que foi dito anteriormente.`,
        escrito: `a) "Ela terminou o curso, daí conseguiu um emprego excelente."
       <br /> b)  "Estávamos com fome, daí decidimos pedir uma pizza."
       <br /> c) "Ele se machucou jogando futebol, daí foi ao hospital."
       <br />  d)  "Fizemos todas as compras, daí voltamos para casa."`,
        comentario: 'Nos exemplos de a)-d), o marcador "daí" introduz uma consequência que tem mais evidência que a causa.',
        oral: {
            descricao: `No vídeo 1, "E daí, então, compreendendo que toda transformação passa pela gente e que a nossa mente tem muito poder, eu resolvi que eu queria estudar como o nosso cérebro funciona."`,
            descricaoVideo: 'https://youglish.com/pronounce/da%C3%AD/portuguese',
        },
        comentariovideo: 'Nesta fala, a consequência evidente introduzida pelo marcador "e daí" está separada dele por conta da oração que leva à tal consequência e está intercalada. Deslocando a oração intercalada "compreendo que toda transformação passa pela gente e que a nossa mente tem muito poder" para o início da frase, e colocando o "e daí" na sequência, conectando com "eu resolvi que eu queria estudar como o nosso cérebro funciona", percebemos claramente a relação de causa e consequência conectada pelo marcador "e daí".',
    },


    {
        key: '6',
        marcadores: 'por assim dizer',
        variacoes: '',
        equivalencias_es: 'por así decir',
        o_que_e: 'DPDE: Apresenta um elemento, ao qual afeta, como uma expressão que é utilizada de um modo inexato ou aproximado, que não deve ser interpretada como literal. Evitam-se, assim, responsabilidades diante do interlocutor, pela inexatidão do que foi expresso ou por não saber encontrar outra expressão mais apropriada.',
        escrito: `a) "Ele é o líder do grupo, por assim dizer, pois sempre toma as decisões importantes."  <br />
b)  "O projeto está em seus estágios iniciais, por assim dizer, ainda temos muito a desenvolver."
   <br /> c) "Ela é a 'mãe' do grupo, por assim dizer, porque sempre cuida de todos."`,
        comentario: 'Nos exemplos a)-   <br /> c), temos o marcador "por assim dizer" que apresenta uma informação que não deve ser concebida com o significado literal. No caso da letra a), ser "líder de um grupo", deveria haver uma nomeação consensual e clara de um membro como líder do grupo. Entretanto, o "por assim dizer" adverte que esse não é o caso, que a informação apresentada deve ser concebida como uma aproximação ao significado de "líder". A mesma coisa pode-se observar na    <br /> c). "Ser mãe" é uma ideia atribuída a um membro do grupo porque enxergam seu comportamento com o grupo como o comportamento de uma mãe com seu filho, ainda que ela não seja, de fato, mãe. Na letra  <br /> b) , o "por assim dizer" adverte ao interlocutor que, ainda que se tenha trabalhado muito no projeto ou passado muito tempo nele (o que não se concebe naturalmente como estágio inicial), há muita coisa para desenvolver, como se estivesse no início.',
        oral: {
            descricao: 'No vídeo 1, temos: "Dia após dia estamos piorando por assim dizer, mas interiormente ele fala sobre a possibilidade de não só viver uma condição diferente, mas ele falou do oposto, de vivermos a renovação."',
            descricaoVideo: 'https://youglish.com/pronounce/por%20assim%20dizer/portuguese',
        },
        comentariovideo: 'Nesta fala, o marcador "por assim dizer" destaca "estamos piorando" em um sentido inexato.',
    },

    {
        key: '7',
        marcadores: 'no entanto',
        variacoes: 'entretanto',
        equivalencias_es: 'sin embargo',
        o_que_e: 'DPDE: Apresenta o membro do discurso no qual aparece como uma conclusão contrária a outra que poderia ser inferida a partir de um argumento anterior.',
        escrito: `a) "Estudou muito para a prova, no entanto, não conseguiu tirar uma boa nota."
       <br /> b)  "A previsão era de chuva, no entanto, o dia amanheceu ensolarado."
       <br /> c) "Ele se esforçou bastante no trabalho, no entanto, não foi promovido."
       <br />  d)  "A equipe trabalhou duro no projeto, no entanto, o cliente não ficou satisfeito com o resultado."`,
        comentario: `Em a), por exemplo, a primeira conclusão a que "estudou muito para a prova" nos leva é que se obtenha uma boa nota. Contudo, o marcador "no entanto" apresenta a conclusão contrária a isso. Em  <br /> b) , o que você menos espera para "A previsão era de chuva" é que o dia amanheça ensolarado. Em    <br /> c), "no entanto" apresenta uma conclusão não natural. Quem se esforça muito no trabalho, espera ser promovido. Em  <br />  d) , "A equipe trabalhou duro no projeto" leva a concluir que houve um resultado positivo e satisfatório, em primeira instância, contudo, o "no entanto" introduz uma conclusão contrária a essa.`,
        oral: {
            descricao: `No video 4 temos: "Tendo em vista que é possível determinar o tempo de exibição das fotos e vídeos que você posta ou envia e depois seu conteúdo some pra nunca mais ser visto, pra quem curte, esse é o espaço certo pra compartilhar as intimidades picantes. No entanto, no ano passado, pessoas que usavam o Snapchat através de aplicativos de terceiros tiveram milhares de fotos vazadas."`,
            descricaoVideo: 'https://pt.youglish.com/pronounce/no%20entanto/portuguese/br',
        },
        comentariovideo: `Nesta fala, a primeira parte do discurso diz que o Snapchat é "o espaço certo para compartilhar as intimidades picantes". Esse argumento leva a uma conclusão imediata de que o aplicativo é seguro. O "no entanto", por sua vez, conduz a uma conclusão contrária a isso, informando que "no ano passado, pessoas que usavam o Snapchat através de aplicativos de terceiros tiveram milhares de fotos vazadas."`
    },
    {
        key: '8',
        marcadores: 'pelo contrário',
        variacoes: "    ",
        equivalencias_es: 'al revés, al contrario',
        o_que_e: 'DPDE: Apresenta o membro do discurso no qual aparece como oposto a outro membro anterior do discurso. Esta oposição pode aparecer como um contraste entre os dois membros ou como uma refutação do primeiro pelo segundo.',
        escrito: `a) "Ele não está desanimado com os desafios, pelo contrário, está mais motivado do que nunca."
       <br /> b)  "A previsão do tempo dizia que faria sol, pelo contrário, choveu o dia inteiro."
       <br /> c) "Ela não ficou triste com a notícia, pelo contrário, ficou muito feliz com a novidade."
       <br />  d)  "O projeto não foi um fracasso, pelo contrário, superou todas as expectativas."`,
        comentario: `Nos exemplos, podemos ver dois membros do discurso opostos conectados por "pelo contrário". Em a),    <br /> c) e  <br />  d) , o segundo membro, além de se opor ao primeiro, o refuta. Enquanto no exemplo  <br /> b) , temos um contraste entre os dois argumentos, que são opostos.`,
        oral: {
            descricao: `No video 2 temos: "Tratamento de imagem não é um demérito de quem fotografa, pelo contrário, é uma etapa essencial da pós-produção fotográfica"`,
            descricaoVideo: 'https://youglish.com/pronounce/pelo%20contr%C3%A1rio/portuguese'
        },
        comentariovideo: `Nesta fala, "pelo contrário" introduz um membro do discurso que faz um contraste com o primeiro e refuta uma opinião que poderia ser atribuída à questão "tratamento de imagem".`
    },

    {
        key: '9',
        marcadores: 'além disso',
        variacoes: 'além do mais',
        equivalencias_es: 'además',
        o_que_e: 'DPDE: Apresenta o membro do discurso em que se encontra como um novo argumento que se soma a um anterior. Ambos são argumentos a favor da mesma conclusão, expressa ou implícita. A soma ou adição destes argumentos tem mais força argumentativa do que o primeiro sozinho.',
        escrito: `a) "O projeto foi bem elaborado e, além disso, teve um excelente feedback dos clientes."
       <br /> b)  "A empresa oferece ótimos salários e, além disso, benefícios como plano de saúde e vale-alimentação."
       <br /> c) "O filme tem uma trama envolvente; além disso, a trilha sonora é incrível."
       <br />  d)  "Ele é um bom aluno; além disso, participa de várias atividades extracurriculares."`,
        comentario: `Na letra a) o argumento "o projeto foi bem elaborado" nos leva a uma conclusão positiva sobre o resultado desse projeto. O marcador "além disso" apresenta o membro do discurso "teve um excelente feedback dos clientes" para somar para a mesma conclusão, com uma força maior que se fosse o argumento anterior sozinho. Na letra  <br /> b)  o argumento "A empresa oferece ótimos salários" nos leva a concluir que é vantajoso fazer parte dessa empresa no que diz respeito aos benefícios salariais. O marcador "além disso" apresenta o membro do discurso "benefícios como plano de saúde e vale-alimentação" para somar para a mesma conclusão, com uma força maior que se fosse o argumento anterior sozinho. Na letra    <br /> c) o argumento "O filme tem uma trama envolvente" nos leva a concluir que o filme é interessante. O marcador "além disso" apresenta o membro do discurso "a trilha sonora é incrível" para somar para a mesma conclusão, com uma força maior que se fosse o argumento anterior sozinho. Na letra  <br />  d) , o argumento "ele é um bom aluno" leva a concluir que o aluno é dedicado. O marcador "além disso" apresenta o membro do discurso "participa de várias atividades extracurriculares" para somar para a mesma conclusão, com uma força maior que se fosse o argumento anterior sozinho.`,
        oral: {
            descricao: `No video 2 temos: "E quem tem menos coisas também consegue viver em lugares menores, que custam menos para comprar ou alugar. Além disso, você vai se preocupar menos com dinheiro. Com uma vida mais simples, você precisa de um salário menor ou precisa ter menos dinheiro investido para viver de renda."`,
            descricaoVideo: 'https://youglish.com/pronounce/al%C3%A9m%20disso/portuguese'
        },
        comentariovideo: `Nesta fala, a primeira parte do discurso "E quem tem menos coisas também consegue viver em lugares menores, que custam menos para comprar ou alugar" nos leva a concluir que as pessoas desapegadas a bens materiais conseguem economizar em gastos com lugar para morar. O marcador "além disso" apresenta a segunda parte do discurso encabeçada por "você vai se preocupar menos com dinheiro", somando para a mesma conclusão, com uma força maior que se fosse o argumento anterior sozinho.`
    },
    {
        key: '10',
        marcadores: 'de qualquer forma',
        variacoes: 'de qualquer maneira; de qualquer jeito',
        equivalencias_es: 'de cualquier manera',
        o_que_e: 'DPDE: Apresenta o membro do discurso em que aparece como conclusão ou opção mais relevante do que outras que poderiam ser inferidas do membro do discurso anterior, o que perde força.',
        escrito: `a) "Não conseguimos reservar mesa no restaurante, mas de qualquer forma conseguimos um lugar no bar ao lado."
       <br /> b)  "Ela não aceitou o convite para a festa, mas de qualquer forma nós nos divertimos muito."
       <br /> c) "O resultado do projeto não foi o esperado, mas de qualquer forma aprendemos muito durante o processo."
       <br />  d)  "Eu não estava me sentindo muito bem, mas de qualquer forma fui trabalhar."`,
        comentario: `Nos exemplos, podemos ver que os argumentos anteriores ao marcador "de qualquer forma" podem levar a diversas conclusões. No a), "não conseguimos reservar mesa no restaurante" pode levar a concluir que não foram ao restaurante ou que escolheram ir a outro, por exemplo; No  <br /> b) , "Ela não aceitou o convite para a festa" pode levar a concluir que a festa não foi como esperavam já que a pessoa convidada não compareceu; No    <br /> c), "o resultado do projeto não foi o esperado" pode levar a concluir que não houve proveito em trabalhar nele, que o projeto foi uma perda de tempo; No  <br />  d) , "Eu não estava me sentindo muito bem'" pode levar a concluir que a pessoa ficou em casa descansando, teve que ir ao hospital, passou mal, etc. Contudo, o que vemos é que o "de qualquer forma", em cada exemplo dado, apresenta uma conclusão mais relevante do que se poderia inferir, naturalmente, a partir do primeiro membro destacado em cada exemplo.`,
        oral: {
            descricao: `No video 2 temos: "Porque eu sabia que eles estavam fazendo um esforço enorme pra me oferecer aquela educação. Mas de qualquer forma, era muito difícil pra mim."`,
            descricaoVideo: 'https://youglish.com/pronounce/de%20qualquer%20forma/portuguese'
        },
        comentariovideo: `Nessa fala, o "de qualquer forma" apresenta uma conclusão incontundente diante do argumento anterior, enfraquecendo qualquer outra inferência que se pudesse. Seria possível inferir, por exemplo, que ela era muito feliz com os esforços dedicados pela sua dedicação. Mas o "de qualquer forma" quebra essa e qualquer outra possibilidade de conclusão.`
    },

    {
        key: '11',
        marcadores: 'né',
        variacoes: 'né não?',
        equivalencias_es: 'verdad? a que sí?',
        o_que_e: `(MARTÍN ZORRAQUINO; PORTOLÉS, 1999), verifica se o locutor aceita ou não o segmento do discurso ao qual está vinculado, buscando a cooperação, compreensão e cumplicidade do interlocutor.`,
        escrito: `a) "O tempo está muito quente hoje, né?"
       <br /> b)  "Você gostou do filme, né?"
       <br /> c) "Precisamos terminar esse relatório até amanhã, né?"
       <br />  d)  "Ela está sempre atrasada, né?"
      e) "Esse restaurante é muito bom, né?"`,
        comentario: `Nos exemplos, as letras a),  <br /> b) ,    <br /> c) e  <br />  d)  apresentam o "né" para que o interlocutor corrobore com seu discurso em um caráter de cumplicidade, enquanto no exemplo    <br /> c) podemos ver o "né" buscando um caráter cooperativo do interlocutor que pode corroborar com seu discurso.`,
        oral: {
            descricao: 'No video 1 temos: "Isso é outra coisa que a gente sabe, não é só no Brasil, né?"',
            descricaoVideo: 'https://youglish.com/pronounce/n%C3%A9/portuguese'
        },
        comentariovideo: 'Nessa fala, o "né" é usado para buscar a cumplicidade do interlocutor no discurso. O falante afirmou algo e joga essa afirmação para seu interlocutor corroborar.'
    },
    {
        key: '12',
        marcadores: 'além disso',
        variacoes: 'e ainda',
        equivalencias_es: 'además',
        o_que_e: 'DPDE: Apresenta o membro do discurso em que se encontra como um novo argumento que se soma a um anterior. Ambos são argumentos a favor da mesma conclusão, expressa ou implícita. A soma ou adição destes argumentos tem mais força argumentativa do que o primeiro sozinho.',
        escrito: `a) "O filme foi incrível. Além disso, a trilha sonora era maravilhosa."
      "Ela é uma excelente escritora e, além disso, uma ótima pintora."
       <br /> b)  "A cidade é conhecida pelas suas praias maravilhosas e, além disso, pela sua gastronomia única."
       <br /> c) "A reunião foi muito produtiva e, além disso, conseguimos resolver alguns problemas pendentes."
       <br />  d)  "Eles são bons amigos e, além disso, são colegas de trabalho na mesma empresa."`,
        comentario: 'Nos exemplos, o "além disso" reforça a conclusão a que os outros argumentos estão dirigidos, ao apresentar um argumento que se soma ao já dito.',
        oral: {
            descricao: 'No vídeo 2, temos: "E quem tem menos coisas também consegue viver em lugares menores, que custam menos para comprar ou alugar. Além disso, você vai se preocupar menos com dinheiro."',
            descricaoVideo: 'https://youglish.com/pronounce/al%C3%A9m%20disso/portuguese'
        },
        comentariovideo: 'No exemplo, o "além disso" apresenta um argumento que se soma à conclusão do argumento já dito, e o reforça.'
    },
    {
        key: '13',
        marcadores: 'ainda por cima',
        variacoes: 'e ainda encima',
        equivalencias_es: 'encima',
        o_que_e: 'DPDE: Apresenta um membro do discurso como argumento acrescentado que reforça o sentido de excesso, importância, abuso ou surpresa que se desprende do discurso imediatamente anterior. Este membro anterior pode estar constituído por um único argumento ou por uma série de argumentos que ficam retroativamente caracterizados como uma informação suficiente para chegar a uma determinada conclusão (expressa ou subentendida). A conclusão pode implicar uma valorização tanto positiva como negativa. É mais frequente no registro informal da língua e no discurso oral.',
        escrito: `a) "Ele perdeu o voo e ainda por cima teve que esperar seis horas no aeroporto."
       <br /> b)  "A festa foi cancelada de última hora e ainda por cima choveu o dia inteiro."
       <br /> c) "O carro quebrou na estrada e ainda por cima não tínhamos sinal de celular."
       <br />  d)  "A conta de luz aumentou muito este mês e ainda por cima tivemos que lidar com uma infiltração em casa."`,
        comentario: 'Nos exemplos, o "ainda por cima" apresenta um argumento que reforça a conclusão a que os argumentos anteriores estão direcionados, e leva a uma conclusão negativa mais intensa.',
        oral: {
            descricao: 'No vídeo 3, temos: "Porque, quando você quer que tudo dê certo, e você é muito protagonista, como eu sou, e louca ainda por cima, você toma as rédeas."',
            descricaoVideo: 'https://youglish.com/pronounce/ainda%20por%20cima/portuguese/br'
        },
        comentariovideo: 'No exemplo, o "ainda por cima" apresenta o membro do discurso "e louca" em sentido figurativo para intensificar a conclusão de que você precisa ter um determinado caráter para dominar algo.'
    },
    {
        key: '14',
        marcadores: 'de fato',
        variacoes: 'de verdade',
        equivalencias_es: 'de hecho',
        o_que_e: `(MARTÍN ZORRAQUINO; PORTOLÉS, 1999), apresenta um membro do discurso como fato verdadeiro e, consequentemente, com mais força argumentativa que outro argumento`,
        escrito: `a) "Ele é, de fato, um excelente músico."
       <br /> b)  "O projeto foi, de fato, concluído dentro do prazo estipulado."
       <br /> c) "As mudanças no regulamento são, de fato, necessárias para melhorar o processo."
       <br />  d)  "Ela estava, de fato, muito nervosa durante a apresentação."`,
        comentario: 'Nos exemplos, o "de fato" introduz um membro do discurso concebido como verdadeiro pelo falante e descarta outro argumento que será enfraquecido.',
        oral: {
            descricao: 'No vídeo 1, temos: "E não são pessoas que, de fato, pesquisam."',
            descricaoVideo: 'https://youglish.com/pronounce/de%20fato/portuguese/br#google_vignette'
        },
        comentariovideo: 'No exemplo, outros argumentos como "essas pessoas se informam" são enfraquecidos diante da verdade vinculada ao "de fato".'
    },
    {
        key: '15',
        marcadores: 'pois não?',
        variacoes: 'pois não!',
        equivalencias_es: 'sí?',
        o_que_e: 'PRIBERAM: apresenta solicitude ou disponibilidade para atender alguém, como também indica confirmação.',
        escrito: `a) "Posso te ligar mais tarde para discutirmos esse assunto?" - "Pois não, estarei disponível."
       <br /> b)  - "Deseja fazer um pedido? Pois não!"
       <br /> c) "Posso te oferecer algo para beber?" - "Pois não, um suco seria ótimo."`,
        comentario: 'Nos exemplos, o "pois não" no a) e    <br /> c) demonstra confirmação ao membro anterior do discurso, que é uma pergunta. No exemplo  <br /> b) , o marcador demonstra disponibilidade do falante.',
        oral: {
            descricao: 'No vídeo 2, temos: [campainha tocando] [Luiza] Pois não? - "Olá. A Dona Valentina se encontra?" [Luiza] A Valentina saiu, encomenda pra ela? Eu pego',
            descricaoVideo: 'https://youglish.com/pronounce/Pois%20n%C3%A3o%20%3F/portuguese/br',
        },
        comentariovideo: 'Nessa conversa, o "pois não" apresenta a disponibilidade da pessoa em atender a quem bateu à sua porta, e que essa pessoa pode dizer o que deseja.'
    }
];
