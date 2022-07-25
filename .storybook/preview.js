export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
          ['Overview', 'How to use', 'Architecture', 'Contribution'],
        'Brand',
          ['Logo'],
        'Foundations',
          ['Accessibility and Inclusivity',
          'Typography',
          'Layouts',
            ['Responsive UI', 'Containers', 'Positioning', 'Spacing'],
          'Colours',
          'Themes',
          'Iconography',
          'Photography'],
        'Components',
          ['Accordion',
          'Alert',
          'Card',
          'DataGrid (Table)',
          'Dialog',
          'Forms',
            ['Button', 'Checkbox', 'DatePicker', 'FileDropField', 'Radio', 'Select', 'TextArea', 'TextField', 'Password'],
          'Icons',
          'Image',
          'Link',
          'List',
          'Menu',
          'Popover (Drop Menu)',
          'Slideshow',
          'Spinner',
          'Switch',
          'Tabs',
          'Tag',
          'Timeline',
          'Toast',
          'Tooltip',
          'Navigation',
            ['Breadcrumbs', 'Pagination', 'Progress']
          ],
        'Behaviours (Patterns)',
          ['Animations',
          'Forms',
          'Loading',
          'Pagination',
          'Managing the Unexpected',
            ['Errors and Messages', 'Network Connection', 'Empty State']],
        'Accessibility',
          ['Copywriting (content: include types of disability)'],
        'Content',
          ['Inclusive language (see https://atlassian.design/content/inclusive-writing/)',
          '^ get inspired for more section with the same link',
          'Data formats (Date and time, Ranges, Time zones)'],
        'Advanced',
          ['Web Performance (content: asset size and priorities, image types)',
          'Monitoring'],
        'Resources',
          ['Design Tokens (tip: include a live json URL)',
          'Logo Library',
          'Fonts',
          'Link to UX Eng article'],
        'Roadmap & Changelog',
          ['Versioning'],
        'Get in Touch',
      ]
    }
  }
}