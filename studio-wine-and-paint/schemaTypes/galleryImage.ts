import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the image appears in the gallery (1-9)',
      validation: (Rule) => Rule.required().min(1).max(9),
    }),
  ],
  preview: {
    select: {
      subtitle: 'order',
      media: 'image',
    },
    prepare({subtitle, media}) {
      return {
        title: `Gallery Image ${subtitle}`,
        subtitle: `Order: ${subtitle}`,
        media,
      }
    },
  },
})
