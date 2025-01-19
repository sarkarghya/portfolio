import React from 'react';

const HTMLToJSON = ({ children }) => {
  const parseNode = (node) => {
    // Handle text nodes
    if (typeof node === 'string') {
      return node.trim();
    }

    // Handle React elements
    if (React.isValidElement(node)) {
      const result = {
        type: node.type.name || node.type,
        props: { ...node.props }
      };

      // Handle children
      if (node.props.children) {
        if (Array.isArray(node.props.children)) {
          result.children = node.props.children.map(parseNode).filter(Boolean);
        } else {
          result.children = [parseNode(node.props.children)].filter(Boolean);
        }
      }

      delete result.props.children;
      return result;
    }

    // Handle arrays of elements
    if (Array.isArray(node)) {
      return node.map(parseNode).filter(Boolean);
    }

    return null;
  };

  const jsonOutput = parseNode(children);

  return (
    <pre>
      {JSON.stringify(jsonOutput, null, 2)}
    </pre>
  );
};


export default HTMLToJSON;
