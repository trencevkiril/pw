import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'pictureName',
      title: 'Picture Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'Format: HH:MM (e.g., 18:00)',
      validation: (Rule) => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false,
      }).error('Time must be in HH:MM format'),
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      description: 'Format: HH:MM (e.g., 21:00)',
      validation: (Rule) => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        name: 'time',
        invert: false,
      }).error('Time must be in HH:MM format'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'FREE',
      options: {
        list: [
          {title: 'Free', value: 'FREE'},
          {title: 'Booked', value: 'BOOKED'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'pictureName',
      subtitle: 'date',
      media: 'image',
    },
  },
})
