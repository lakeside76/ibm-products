//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { SingleAddSelect } from '.';
import mdx from './SingleAddSelect.mdx';
// import { action } from '@storybook/addon-actions';

export default {
  title: getStoryTitle(SingleAddSelect.displayName),
  component: SingleAddSelect,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  open: true,
  title: 'Select category',
  actions: [
    {
      label: 'Cancel',
      kind: 'secondary',
    },
    {
      label: 'Add',
      kind: 'primary',
    },
  ],
  description: 'select a category lorem ipsum',
  items: [
    {
      label: 'first',
      id: 1,
    },
    {
      label: 'second',
      id: 2,
    },
    {
      label: 'third',
      id: 3,
    },
  ],
  multiSelect: false,
  inputPlaceholder: 'Find categories',
  itemsLabel: 'Categories',
};

const Template = (args) => {
  return <SingleAddSelect {...args} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});