export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'pawelBareja/BS-next-js',
    branch: 'main',
    publish_mode: 'editorial_workflow',
  },
  media_folder: 'public/images',
  public_folder: 'images',
  collections: [
    {
      name: 'projects',
      label: 'Projects',
      slug: `projects/{{slug}}`,
      create: true,
      folder: 'posts',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Client', name: 'client', widget: 'string' },
        { label: 'Featured Image', name: 'thumbnail', widget: 'image' },
        { label: 'Author', name: 'author', widget: 'string', default: 'Admin' },
        {
          label: 'Category',
          name: 'category',
          widget: 'select',
          options: ['corporate site', 'shop', 'landing page', 'web analytics'],
        },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
  ],
};
