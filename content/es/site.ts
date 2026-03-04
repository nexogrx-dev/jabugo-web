export const esContent = {
  locale: 'es',
  siteName: 'Jabugo Bodega',
  baseUrl: 'https://example.com',
  defaultTitle: 'Jabugo Bodega | Tradicion, origen y producto iberico',
  defaultDescription:
    'Proyecto web de Jabugo Bodega. Contenido base listo para completar con informacion oficial.',
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/carta/', label: 'Carta' },
    { href: '/historia/', label: 'Historia' },
    { href: '/cultura-del-iberico/', label: 'Cultura del iberico' },
    { href: '/contacto/', label: 'Contacto' },
    { href: '/legal/', label: 'Legal' },
  ],
  home: {
    title: 'Jabugo Bodega',
    subtitle: 'Hospitalidad centrada en el iberico, el territorio y el oficio.',
    cta: 'Ver carta',
  },
  carta: {
    title: 'Carta',
    body: 'Contenido pendiente de definicion. Añadir referencias oficiales cuando esten aprobadas.',
  },
  historia: {
    title: 'Historia',
    body: 'Espacio reservado para la historia oficial de Jabugo Bodega.',
  },
  cultura: {
    title: 'Cultura del iberico',
    body: 'Seccion editorial para explicar origen, curacion y cultura del iberico.',
  },
  contacto: {
    title: 'Contacto',
    body: 'Datos de contacto pendientes. No publicar telefono ni horarios hasta confirmacion oficial.',
    phonePlaceholder: 'Telefono: pendiente',
    hoursPlaceholder: 'Horario: pendiente',
  },
  legal: {
    title: 'Legal',
    body: 'Aviso legal, privacidad y cookies pendientes de texto juridico definitivo.',
  },
} as const;
