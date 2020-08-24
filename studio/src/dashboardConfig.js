export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f43dd42804ed2671261b0e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-33q7pes2',
                  apiId: '378a0bb3-be1d-401b-93c8-a8b94db39270'
                },
                {
                  buildHookId: '5f43dd4285f65a51d48963d9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-titvqx52',
                  apiId: 'f13ea542-29f4-4d84-82e6-526c862c91b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBroom/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-titvqx52.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
