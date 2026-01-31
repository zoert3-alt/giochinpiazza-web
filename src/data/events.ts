export interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  category: 'workshop' | 'conference' | 'webinar' | 'training'
  description: string
  image: string
  capacity?: number
  tags: string[]
  featured?: boolean
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Workshop: Gamification per HR',
    date: new Date('2026-02-15'),
    time: '14:00 - 18:00',
    location: 'Milano, Sede GiochInPiazza',
    category: 'workshop',
    description: 'Scopri come aumentare l\'engagement dei dipendenti attraverso meccaniche di gioco innovative. Workshop pratico con esercizi hands-on.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    capacity: 25,
    tags: ['HR', 'Engagement', 'Hands-on'],
    featured: true
  },
  {
    id: '2',
    title: 'Conferenza: Il Futuro dei Serious Games',
    date: new Date('2026-03-08'),
    time: '09:30 - 17:00',
    location: 'Roma, Centro Congressi Fiera',
    category: 'conference',
    description: 'Esperti internazionali discutono l\'evoluzione dei serious games nell\'educazione e nel training aziendale.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    capacity: 200,
    tags: ['Industry Trends', 'Networking', 'Case Studies'],
    featured: true
  },
  {
    id: '3',
    title: 'Webinar: Introduzione al Game-Based Learning',
    date: new Date('2026-02-22'),
    time: '18:00 - 19:30',
    location: 'Online (Zoom)',
    category: 'webinar',
    description: 'Sessione introduttiva gratuita per scoprire i principi del game-based learning e come applicarli nella tua organizzazione.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    tags: ['Online', 'Gratuito', 'Introduttivo'],
    featured: false
  },
  {
    id: '4',
    title: 'Training: Design di Meccaniche di Gamification',
    date: new Date('2026-03-20'),
    time: '09:00 - 17:00',
    location: 'Torino, Innovation Hub',
    category: 'training',
    description: 'Corso intensivo di una giornata per imparare a progettare meccaniche di gamification efficaci per prodotti digitali e servizi.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    capacity: 30,
    tags: ['Design', 'UX', 'Certificato'],
    featured: false
  },
  {
    id: '5',
    title: 'Workshop: Serious Games per la Sostenibilità',
    date: new Date('2026-04-10'),
    time: '14:30 - 18:30',
    location: 'Bologna, Spazio Verde',
    category: 'workshop',
    description: 'Come utilizzare i serious games per educare e sensibilizzare su tematiche ambientali e sostenibilità aziendale.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop',
    capacity: 20,
    tags: ['Sostenibilità', 'CSR', 'Impact'],
    featured: false
  },
  {
    id: '6',
    title: 'Webinar: AI e Gamification - Il Futuro',
    date: new Date('2026-03-15'),
    time: '17:00 - 18:30',
    location: 'Online (Microsoft Teams)',
    category: 'webinar',
    description: 'Esplora l\'intersezione tra intelligenza artificiale e gamification: personalizzazione dinamica, adaptive learning e molto altro.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tags: ['AI', 'Innovation', 'Tech'],
    featured: true
  },
  {
    id: '7',
    title: 'Training: Metriche e ROI della Gamification',
    date: new Date('2026-04-25'),
    time: '10:00 - 16:00',
    location: 'Milano, Sede GiochInPiazza',
    category: 'training',
    description: 'Impara a misurare l\'efficacia delle tue iniziative di gamification: KPI, analytics, A/B testing e reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    capacity: 15,
    tags: ['Analytics', 'Business', 'Data-Driven'],
    featured: false
  },
  {
    id: '8',
    title: 'Conferenza: GiocaItalia 2026',
    date: new Date('2026-05-18'),
    time: '09:00 - 18:00',
    location: 'Firenze, Palazzo Congressi',
    category: 'conference',
    description: 'Il più grande evento italiano dedicato a gamification e serious games. Keynote, workshop paralleli, networking e demo interattive.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop',
    capacity: 500,
    tags: ['Networking', 'Keynote', 'Demo'],
    featured: true
  }
]
