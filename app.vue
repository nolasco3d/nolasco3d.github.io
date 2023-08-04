<script setup>
const jobs = [
  {
    company: 'Defensoria Pública de Minas Gerais',
    position: 'Desenvolvedor Frontend',
    tasks: [
        'Desenvolvimento e manutenção de telas, integração com sistemas internos.'
    ],
    start: 'Abr 2023',
    end: null
  },
  {
    company: 'Winx',
    position: 'Desenvolvedor Frontend',
    tasks: [
      'Criação e manutenção de dashboards responsivos',
      'Integração com sistemas internos'
    ],
    start: 'Ago 2022',
    end: 'Mar 2023'
  },
  {
    company: 'Sisloc Softwares',
    position: 'Desenvolvedor Frontend',
    tasks: [
      'Manutenção de um framework interno',
      'Desenvolvimento de uma plataforma de e-commerce white label e produtos internos'
    ],
    start: 'Jul 2021',
    end: 'Mar 2023'
  },
  {
    company: 'Alpes One',
    position: 'Desenvolvedor Frontend',
    tasks: ['Criação de sites e landing pages do segmento automotivo'],
    start: 'Mar 2020',
    end: 'Jul 2021'
  },
  {
    company: 'Uol Edtech',
    position: 'Analista Programador',
    tasks: ['Criação de sites e landing pages institucionais'],
    start: '2018',
    end: '2019'
  },
]
</script>
<template>
  <Head>
    <Title>Curriculum | André Nolasco</Title>
  </Head>
  <Body class="bg-faded">
    <div class="container mx-auto flex flex-col h-screen prose">
    <HeaderPage />
    <main class="px-4 md:px-0">
      <section>
        <TitleText tag="h2"> > Resumo </TitleText>
        <p>Apaixonado pela tecnologia e movido por desafios, busco sempre me
          manter atualizado das melhores tecnologias e ferramentas de
          desenvolvimento. Tenho experiência em produtos de educação a
          distância, lojas virtuais, áreas administrativas, sites e landing pages.</p>
      </section>

      <section>
        <TitleText tag="h2"> > Experiência Profissional </TitleText>
        <div class="mb-8" v-for="(job, index) in jobs" :key="index">
          <small> <span>{{job.start}}</span><span v-if="job.end"> - {{job.end}}</span> | {{job.company}} </small>
          <TitleText tag="h5" class="text-gray-600 font-medium">{{job.position}}</TitleText>
          <ul class="mt-0" v-if="job.tasks.length">
            <li v-for="(task, i) in job.tasks" :key="`id-${i}`">
              {{ task }}
            </li>
          </ul>
        </div>
      </section>

      <section>
        <TitleText tag="h2"> > Formação Acadêmica </TitleText>
        <div class="mb-8">
          <small> 2014 - 2016 | Universidade FUMEC </small>
          <TitleText tag="h5" class="text-gray-600 font-medium">Desenvolvimento de Jogos Digitais</TitleText>
        </div>
      </section>

      <section>
        <TitleText tag="h2"> > Tecnologias </TitleText>
        <ul>
          <li>Typescript, Javascript, Vue, Nuxt 3</li>
          <li>Quasar JS, Vuetify, Tailwindcss, Bootstrap</li>
          <li>HTML, CSS3, SASS, Vite</li>
          <li>Git, Docker, Node</li>
        </ul>
      </section>

      <section>
        <TitleText tag="h2"> > Idiomas </TitleText>
        <span class="block">Português - Nativo</span>
        <span class="block">Inglês - Avançado</span>
      </section>
    </main>
  </div>
  </Body>
</template>