// @flow

import uuidv4 from 'uuid/v4';

export function convertTagsArray(
  tags: Array<{ label: String, value: string }>,
): string {
  if (!Array.isArray(tags)) {
    return tags;
  }
  return tags.map(tag => tag.value).join(', ');
}

export function convertTagsStrings(
  tags: string,
): Array<{ label: string, value: string }> {
  if (Array.isArray(tags)) {
    return tags;
  }
  const tagArray = tags.split(', ');
  return tagArray.map(tag => {
    return {
      label: tag,
      value: tag,
    };
  });
}

export function addID(task) {
  const taskCopy = { ...task };
  taskCopy.id = uuidv4();
  return taskCopy;
}
