export default {
  name: 'createCreditClassPage',
  type: 'document',
  title: 'Create Credit Class Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'stepCardSection',
      type: 'stepCardSection',
      title: 'Step Card Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'creditTypeSection',
      type: 'creditTypeSection',
      title: 'Institutional vs. Flex Credits Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'outcomeSection',
      type: 'heroSection',
      title: 'Outcome Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bottomBanner',
      type: 'bottomBanner',
      title: 'Bottom Banner',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footerLink',
      type: 'url',
      title: 'Footer Link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};