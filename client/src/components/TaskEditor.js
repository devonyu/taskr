// @flow

import { Editor } from '@tinymce/tinymce-react';
import React, { useState, useEffect } from 'react';

type InputPropsFlow = {
  getContent: (content: string) => void,
  inputContent: string,
};

function TaskEditor(inputProps: InputPropsFlow) {
  const [editorContent, setContent] = useState(inputProps.inputContent);

  useEffect(() => {
    setContent(inputProps.inputContent);
    document.title = `ICLength: ${inputProps.inputContent.length}`;
  }, [inputProps.inputContent]);

  const handleChange = changedContent => {
    setContent(changedContent);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          inputProps.getContent(editorContent);
        }}
      >
        Save Content
      </button>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        initialValue={editorContent}
        init={{
          plugins: 'link image code preview lists insertdatetime table',
          toolbar:
            // eslint-disable-next-line max-len
            'preview | undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | code | numlist bullist table insertdatetime',
          height: 400, // can dynamically change this to window height later
        }}
        onEditorChange={handleChange}
        value={editorContent}
      />
    </>
  );
}
export default TaskEditor;
