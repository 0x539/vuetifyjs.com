export default [
  { header: 'Core documentation' },
  {
    title: 'Getting started',
    group: 'getting-started',
    icon: 'mdi-speedometer',
    items: [
      { name: 'QuickStart', title: 'Quick Start' },
      { name: 'WhyVuetify', title: 'Why Vuetify?' },
      { name: 'FrequentlyAskedQuestions', title: 'Frequently asked questions' },
      { name: 'SponsorsAndBackers', title: 'Sponsors and backers' },
      { name: 'Contributing', title: 'Contributing' },
      { name: 'Roadmap', title: 'Roadmap' }
    ]
  },
  {
    title: 'Framework Options',
    group: 'framework',
    icon: 'mdi-buffer',
    items: [
      { name: 'Icons', title: 'Icons', badge: 'new' },
      { name: 'Internationalization', title: 'Internationalization', badge: 'new' }
    ]
  },
  {
    title: 'Application layout',
    group: 'layout',
    icon: 'mdi-page-layout-body',
    items: [
      { name: 'PreDefined', title: 'Pre-defined layouts', badge: 'updated' },
      { name: 'PreMadeThemes', title: 'Pre-made themes', badge: 'updated' },
      {
        title: 'Grid system',
        group: 'grid',
        namespace: 'layout',
        items: [
          { name: 'grid', title: 'Grid' },
          { name: 'grid-lists', title: 'Grid lists' }
        ]
      },
      { name: 'Breakpoints', title: 'Breakpoints' },
      { name: 'Spacing', title: 'Spacing' },
      { name: 'Alignment', title: 'Text alignment' },
      { name: 'Display', title: 'Display' },
      { name: 'Elevation', title: 'Elevation' },
      { name: 'Sandbox', title: 'Sandbox' }
    ]
  },
  {
    title: 'Styles & themes',
    group: 'style',
    icon: 'mdi-format-color-fill',
    items: [
      { name: 'Colors', title: 'Colors', badge: 'updated' },
      { name: 'Theme', title: 'Theme', badge: 'updated' },
      { name: 'Typography', title: 'Typography' },
      { name: 'Content', title: 'Content' }
    ]
  },
  {
    title: 'Motion & transitions',
    group: 'motion',
    icon: 'mdi-clock-fast',
    items: [
      { name: 'Scrolling', title: 'Scrolling', badge: 'new' },
      { name: 'Transitions', title: 'Transitions' }
    ]
  },
  {
    title: 'UI components',
    group: 'components',
    component: 'components/Doc',
    icon: 'mdi-view-dashboard',
    items: [
      { name: 'api-explorer', title: 'API explorer', badge: 'new' },
      { name: 'alerts', title: 'Alerts' },
      { name: 'avatars', title: 'Avatars' },
      { name: 'badges', title: 'Badges' },
      { name: 'bottom-navigation', title: 'Bottom navigation' },
      { name: 'bottom-sheets', title: 'Bottom sheets' },
      { name: 'breadcrumbs', title: 'Breadcrumbs' },
      { name: 'buttons', title: 'Buttons' },
      { name: 'floating-action-buttons', title: 'Buttons: Floating Action Buttons' },
      { name: 'cards', title: 'Cards' },
      { name: 'carousels', title: 'Carousels' },
      { name: 'chips', title: 'Chips' },
      { name: 'data-iterator', title: 'Data iterator' },
      { name: 'data-tables', title: 'Data tables' },
      { name: 'dialogs', title: 'Dialogs' },
      { name: 'dividers', title: 'Dividers' },
      { name: 'expansion-panels', title: 'Expansion panels' },
      { name: 'footer', title: 'Footer' },
      {
        title: 'Inputs & controls',
        group: '(autocompletes|combobox|forms|inputs|overflow-btns|selects|selection|text-fields)',
        namespace: 'components',
        items: [
          { name: 'autocompletes', title: 'Autocompletes', badge: 'new' },
          { name: 'combobox', title: 'Combobox', badge: 'new' },
          { name: 'forms', title: 'Forms', badge: 'updated', color: 'red lighten-2' },
          { name: 'inputs', title: 'Inputs', badge: 'new' },
          { name: 'overflow-btns', title: 'Overflow Buttons', badge: 'new' },
          { name: 'selects', title: 'Selects', badge: 'updated', color: 'red lighten-2' },
          { name: 'selection-controls', title: 'Selection controls', badge: 'updated', color: 'red lighten-2' },
          { name: 'text-fields', title: 'Text fields', badge: 'updated', color: 'red lighten-2' }
        ]
      },
      { name: 'icons', title: 'Icons' },
      { name: 'jumbotrons', title: 'Jumbotrons' },
      { name: 'lists', title: 'Lists' },
      { name: 'menus', title: 'Menus' },
      { name: 'navigation-drawers', title: 'Navigation drawers' },
      { name: 'paginations', title: 'Paginations' },
      { name: 'parallax', title: 'Parallax' },
      {
        title: 'Pickers',
        group: '(date-pickers|time-pickers)',
        namespace: 'components',
        items: [
          { name: 'date-pickers', title: 'Date pickers' },
          { name: 'time-pickers', title: 'Time pickers' }
        ]
      },
      { name: 'progress', title: 'Progress' },
      { name: 'sliders', title: 'Sliders' },
      { name: 'snackbars', title: 'Snackbars' },
      { name: 'steppers', title: 'Steppers' },
      { name: 'subheaders', title: 'Subheaders' },
      { name: 'tabs', title: 'Tabs' },
      { name: 'toolbars', title: 'Toolbars' },
      { name: 'tooltips', title: 'Tooltips' }
    ]
  },
  {
    title: 'Directives',
    group: 'directives',
    component: 'components/Doc',
    icon: 'mdi-function',
    items: [
      { name: 'resizing', title: 'Resizing' },
      { name: 'ripples', title: 'Ripples' },
      { name: 'scrolling', title: 'Scrolling' },
      { name: 'touch-support', title: 'Touch support' }
    ]
  },
  { divider: true },
  { header: 'Additional resources' },
  {
    title: 'Advanced tutorials',
    group: 'guides',
    icon: 'mdi-television-guide',
    items: [
      { name: 'SSR', title: 'Server side rendering' },
      { name: 'ALaCarte', title: 'A la carte' }
    ]
  },
  {
    title: 'Theme generator',
    icon: 'mdi-format-paint',
    name: 'ThemeGenerator',
    badge: 'new'
  }
]