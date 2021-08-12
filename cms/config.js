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
      files: [
        {
          label: 'Project A',
          name: 'firstproject',
          file: 'content/pages/blog.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
  ],
};
