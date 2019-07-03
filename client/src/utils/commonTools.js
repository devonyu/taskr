// @flow

import uuidv4 from 'uuid/v4';

export function convertTagsArray(tags: Array<string>): string {
  return tags.join(' ');
}

export function convertTagsStrings(
  tags: string,
): Array<{ label: string, value: string }> {
  const tagArray = tags.split(',');
  return tagArray.map(tag => {
    return {
      label: tag,
      value: tag,
    };
  });
}

export function addID(task) {
  task.id = uuidv4();
  return task;
}
