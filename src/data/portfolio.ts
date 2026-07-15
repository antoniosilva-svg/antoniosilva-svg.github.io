/**
 * Fonte única de conteúdo do portefólio.
 * Atualizar este ficheiro evita repetir dados entre a página inicial e a área RH.
 * Os campos marcados como `review` não devem ser publicados sem validação.
 */
export const profile = {
  name: 'António José Abreu e Silva',
  email: 'antoniosilva@orzhov.pt',
  headline: 'Coordenação operacional, gestão de equipas e intervenção social',
  summary:
    'Profissional com experiência em coordenação de equipas, gestão operacional e intervenção social, em contextos institucionais, empresariais e internacionais. Combina organização, capacidade relacional e foco na melhoria contínua.',
  recruiterSummary:
    'Com um percurso que cruza operações aeroportuárias, coordenação de equipas e intervenção social, procuro contribuir com responsabilidade, clareza e atenção às pessoas em contextos exigentes.',
};

export const strengths = [
  'Coordenação e desenvolvimento de equipas',
  'Planeamento operacional e gestão de processos',
  'Intervenção social com crianças, jovens e populações vulneráveis',
  'Integração e acompanhamento de refugiados e migrantes',
  'Mediação, comunicação e gestão de conflitos',
  'Articulação institucional e trabalho multidisciplinar',
];

export const featuredExperience = [
  {
    area: 'Operações e equipas',
    title: 'Coordenação operacional em contexto aeroportuário',
    text: 'Experiência de coordenação, segurança, eficiência operacional e acompanhamento de equipas em ambiente aeroportuário internacional.',
  },
  {
    area: 'Intervenção social',
    title: 'Câmara Municipal de Guimarães',
    text: 'Desenvolvimento de planos de integração social para refugiados, articulação com entidades e elaboração de estratégias de intervenção.',
  },
  {
    area: 'Acompanhamento institucional',
    title: 'Lar Santa Estefânea',
    text: 'Acompanhamento diário de crianças e jovens, desenvolvimento pessoal e social, gestão de rotinas e trabalho em equipa multidisciplinar.',
  },
  {
    area: 'Trabalho comunitário',
    title: 'Médicos do Mundo - Porto',
    text: 'Experiência em intervenção social com populações vulneráveis, trabalho de rua e colaboração em projetos sociais.',
  },
];

// Não publicar até serem validados pelo António: existem versões divergentes nos CVs recebidos.
export const reviewNeeded = [
  'Número de telefone: surgem dois números diferentes nas versões recebidas.',
  'Formação académica: há referências diferentes à instituição da licenciatura e à designação da formação em Psicologia.',
  'Datas e designações exatas de cada experiência profissional.',
];
