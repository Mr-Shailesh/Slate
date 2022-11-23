import React, { useCallback, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Editor, Transforms, Text } from "slate";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const SlateDemo = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const value = "1";

  console.log("value", value);
  // Defining Custom Element
  const renderElement = useCallback((props) => {
    console.log("props", props);
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // BOLD FORMAT ***************
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div>
      {console.log("initialValue", initialValue)}
      SlateDemo
      <br />
      <br />
      <Slate editor={editor} value={initialValue}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(e) => {
            console.log(e.key);
            // if (e.key === "`" && e.ctrlKey) {
            //   e.preventDefault();
            //   editor.insertText("Shailesh");
            // }

            // CODE EDITOR *****************
            // if (e.key === "`" && e.ctrlKey) {
            //   e.preventDefault();
            //   const [match] = Editor.nodes(editor, {
            //     match: (n) => n.type === "code",
            //   });
            //   Transforms.setNodes(
            //     editor,
            //     { type: match ? "paragraph" : "code" },
            //     { match: (n) => Editor.isBlock(editor, n) }
            //   );
            // }
            // BOLD CONVERTER**************

            if (!e.ctrlKey) {
              return;
            }

            switch (e.key) {
              case "`": {
                e.preventDefault();
                const [match] = Editor.nodes(editor, {
                  match: (n) => n.type === "code",
                });
                Transforms.setNodes(
                  editor,
                  { type: match ? "paragraph" : "code" },
                  { match: (n) => Editor.isBlock(editor, n) }
                );
                break;
              }

              case "b": {
                e.preventDefault();
                Transforms.setNodes(
                  editor,
                  { bold: true },
                  // Apply it to text nodes, and split the text node up if the
                  // selection is overlapping only part of it.
                  { match: (n) => Text.isText(n), split: true }
                );
                break;
              }

              default:
                break;
            }
          }}
        />
      </Slate>
    </div>
  );
};

// BOLD FORMAT
const Leaf = (props) => {
  console.log("props1", typeof props.leaf.text);
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

// *****
const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default SlateDemo;
