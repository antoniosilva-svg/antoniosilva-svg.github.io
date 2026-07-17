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

// Cronologia consolidada a partir de CVs e comprovativos recebidos.
// Só inclui períodos que podem ser sustentados pela documentação disponível.
export const careerTimeline = [
  {
    period: '2023 - 2026',
    role: 'Operações aeroportuárias e coordenação de equipas',
    organisation: 'Ryanair / Azul Handling · Fuerteventura',
    text: 'Experiência contínua em contexto aeroportuário internacional, com coordenação operacional, segurança, eficiência e integração de colaboradores.',
  },
  {
    period: '2021 - 2022',
    role: 'Educador Social',
    organisation: 'Lar Santa Estefânea',
    text: 'Acompanhamento de crianças e jovens, gestão de rotinas, desenvolvimento pessoal e social e trabalho com equipa multidisciplinar.',
  },
  {
    period: '2019 - 2020',
    role: 'Assessor Técnico',
    organisation: 'Câmara Municipal de Guimarães',
    text: 'Acompanhamento dos projetos PMIMG e Guimarães Acolhe, apoio à integração de migrantes, articulação com entidades e desenvolvimento de respostas sociais.',
  },
  {
    period: '2013 - 2020',
    role: 'Empresário / Gestor',
    organisation: 'Orzhov',
    text: 'Gestão integral de atividade própria, incluindo planeamento, atendimento, finanças, negociação e organização do trabalho.',
  },
  {
    period: '2011 - 2012',
    role: 'Estágio em Psicologia Organizacional',
    organisation: 'Médicos do Mundo · Porto',
    text: 'Colaboração em contexto de intervenção social com populações vulneráveis e projetos comunitários.',
  },
];

export const certifications = [
  {
    year: '2024',
    title: 'Teleformação para Docentes',
    detail: '50 horas · Formação profissional em Espanha',
  },
  {
    year: '2023',
    title: 'Gestão de Segurança Informática na Empresa',
    detail: '100 horas · Formação profissional em Espanha',
  },
  {
    year: '2023',
    title: 'Gestão de Bar-Cafetaria',
    detail: '60 horas · Formação profissional em Espanha',
  },
  {
    year: '2023',
    title: 'Contabilidade e Nominaplus',
    detail: '75 horas · Formação profissional em Espanha',
  },
  {
    year: '2015',
    title: 'Marketing',
    detail: '175 horas · IEFP, Centro de Emprego e Formação Profissional de Braga',
  },
  {
    year: '2004',
    title: 'Ideias de Europa: Que Fronteiras?',
    detail: 'Curso intensivo · Universidade de Coimbra',
  },
];

// Não publicar até serem validados pelo António: existem versões divergentes nos CVs recebidos.
export const reviewNeeded = [
  'Número de telefone: surgem dois números diferentes nas versões recebidas.',
  'Formação académica: confirmar se pretende indicar o mestrado em Psicologia como frequência ou percurso não concluído.',
  'Datas e designações de experiências profissionais ainda sem comprovativos.',
];
