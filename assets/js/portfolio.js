// ===== EDITE AQUI: portfólio e planos =====
// PORTFÓLIO: para cada projeto real troque os textos, coloque o print em "img" (ex.: "assets/img/clinica.jpg") e o endereço em "link".
// Sem "img", o site mostra uma miniatura de modelo. Apague "modelo:true" quando for um projeto real.
window.PROJETOS = [
  { titulo:"Clínica Sorriso", tag:"Saúde", resumo:"Landing page para a clínica odontológica receber pedidos de avaliação pelo WhatsApp.", resultado:"Modelo: foco em agendamento, depoimentos e mapa.", img:"", link:"", modelo:true },
  { titulo:"Almeida Advogados", tag:"Jurídico", resumo:"Página institucional sóbria, com áreas de atuação e contato direto.", resultado:"Modelo: transmite confiança e facilita o primeiro contato.", img:"", link:"", modelo:true },
  { titulo:"Studio Move", tag:"Fitness", resumo:"Página de captação de alunos para personal trainer, com planos e botão de WhatsApp.", resultado:"Modelo: planos claros e prova social.", img:"", link:"", modelo:true },
  { titulo:"Aura Estética", tag:"Beleza", resumo:"Vitrine de serviços e galeria de antes e depois, pensada para o celular.", resultado:"Modelo: galeria rápida e agendamento em um toque.", img:"", link:"", modelo:true },
  { titulo:"Casa Brasa", tag:"Alimentação", resumo:"Cardápio digital e reservas para restaurante, com carregamento rápido.", resultado:"Modelo: cardápio visual e botão de reserva.", img:"", link:"", modelo:true },
  { titulo:"Prisma Consultoria", tag:"Serviços", resumo:"Landing page de serviço B2B com proposta de valor direta e formulário de briefing.", resultado:"Modelo: mensagem objetiva e chamada para reunião.", img:"", link:"", modelo:true }
];
// PLANOS: os preços abaixo são VALORES DE EXEMPLO. Troque "preco" pelo valor que você quer cobrar.
// "periodo" aparece depois do preço (ex.: "/mês"). "destaque:true" marca o plano como o mais escolhido.
window.PLANOS = [
  { nome:"Essencial", preco:"500", periodo:"", desc:"Para começar a receber contatos com uma página profissional.", destaque:false,
    itens:["1 landing page responsiva","Design na sua identidade visual","Botão de WhatsApp e formulário","Publicação com HTTPS","2 rodadas de revisão"] },
  { nome:"Completo", preco:"800", periodo:"", desc:"Página pronta e base para você ser encontrado no Google.", destaque:false,
    itens:["Tudo do Essencial","Configuração de domínio e e-mail profissional","SEO básico e Google Search Console","Política de Privacidade, Termos e cookies","Medição de visitas","3 rodadas de revisão"] },
  { nome:"Manutenção", preco:"150", periodo:"/mês", desc:"A gente cuida do site para você focar no seu negócio.", destaque:false,
    itens:["Ajustes de texto e imagens","Atualizações e monitoramento","Suporte pelo WhatsApp","Até 3 alterações por mês"] }
];
