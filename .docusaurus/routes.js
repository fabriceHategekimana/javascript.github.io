import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/javascript.github.io/markdown-page',
    component: ComponentCreator('/javascript.github.io/markdown-page', 'c68'),
    exact: true
  },
  {
    path: '/javascript.github.io/typr',
    component: ComponentCreator('/javascript.github.io/typr', '729'),
    exact: true
  },
  {
    path: '/javascript.github.io/docs',
    component: ComponentCreator('/javascript.github.io/docs', '443'),
    routes: [
      {
        path: '/javascript.github.io/docs',
        component: ComponentCreator('/javascript.github.io/docs', '7fb'),
        routes: [
          {
            path: '/javascript.github.io/docs',
            component: ComponentCreator('/javascript.github.io/docs', '2e9'),
            routes: [
              {
                path: '/javascript.github.io/docs/intro',
                component: ComponentCreator('/javascript.github.io/docs/intro', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/01',
                component: ComponentCreator('/javascript.github.io/docs/projects/01', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/02',
                component: ComponentCreator('/javascript.github.io/docs/projects/02', 'e17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/03',
                component: ComponentCreator('/javascript.github.io/docs/projects/03', '460'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/04',
                component: ComponentCreator('/javascript.github.io/docs/projects/04', 'e0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/05',
                component: ComponentCreator('/javascript.github.io/docs/projects/05', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/06',
                component: ComponentCreator('/javascript.github.io/docs/projects/06', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/07',
                component: ComponentCreator('/javascript.github.io/docs/projects/07', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/08',
                component: ComponentCreator('/javascript.github.io/docs/projects/08', '442'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/09',
                component: ComponentCreator('/javascript.github.io/docs/projects/09', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/10',
                component: ComponentCreator('/javascript.github.io/docs/projects/10', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/11',
                component: ComponentCreator('/javascript.github.io/docs/projects/11', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/12',
                component: ComponentCreator('/javascript.github.io/docs/projects/12', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/13',
                component: ComponentCreator('/javascript.github.io/docs/projects/13', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/javascript.github.io/docs/projects/intro',
                component: ComponentCreator('/javascript.github.io/docs/projects/intro', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/javascript.github.io/',
    component: ComponentCreator('/javascript.github.io/', 'b0c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
