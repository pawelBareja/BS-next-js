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
      create: true,
      folder: 'projects',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Client', name: 'client', widget: 'string' },
        {
          label: 'Featured Image',
          name: 'thumbnail',
          widget: 'image',
        },
        {
          label: 'Second image',
          name: 'image2',
          widget: 'image',
          required: false,
        },
        {
          label: 'Third image',
          name: 'image3',
          widget: 'image',
          required: false,
        },
        {
          label: 'Fourth image',
          name: 'image4',
          widget: 'image',
          required: false,
        },

        { label: 'Author', name: 'author', widget: 'string', default: 'Admin' },
        {
          label: 'Category',
          name: 'category',
          widget: 'select',
          options: ['Corporate site', 'Shop','Landing page', 'Web analytics'],
        },
        { label: 'Body', name: 'body', widget: 'markdown', required: false },
      ],
    },
  ],
};
