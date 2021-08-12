export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'pawelBareja/BS-next-js',
    branch: 'main',
  },
  media_folder: 'public/images',
  public_folder: 'images',
  collections: [
    {
      name: 'projects',
      label: 'Projects',
      create: true,
      folder: 'posts',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Download', name: 'download', widget: 'string' },
        { label: 'Featured Image', name: 'thumbnail', widget: 'image' },
        { label: 'Author', name: 'author', widget: 'string', default: 'Admin' },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
  ],
};
