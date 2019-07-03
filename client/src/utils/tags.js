// @flow

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
