export const extractParagraphText = (content) => {
    for (const node of content) {
      if (node.type === 'paragraph' && node.content) {
        for (const subNode of node.content) {
          if (subNode.type === 'text') {
            return subNode.text;
          }
        }
      }
    }
    return 'No paragraph text found';
};

const extractText = (content) => {
  let texts = [];

  const traverse = (nodes) => {
      nodes.forEach(node => {
          if (node.type === 'text') {
              texts.push(node.text);
          } else if (node.content && Array.isArray(node.content)) {
              traverse(node.content);
          }
      });
  };

  traverse(content);
  return texts.join(' ');
};

export const parseDescription = (descriptionContent) => {
  const descriptionObj = {
      description: '',
      acceptanceCriteria: []
  };

  let isDescriptionSection = false;
  let isAcceptanceCriteriaSection = false;

  descriptionContent.forEach(section => {
      if (section.type === 'heading' && section.attrs && section.attrs.level === 3) {
          if (section.content[0].text === 'Description') {
              isDescriptionSection = true;
              isAcceptanceCriteriaSection = false;
          } else if (section.content[0].text === 'Acceptance Criteria') {
              isAcceptanceCriteriaSection = true;
              isDescriptionSection = false;
          }
      }

      if (isDescriptionSection && section.type === 'paragraph') {
          descriptionObj.description += `${extractText(section.content)}\n`;
      }

      if (isAcceptanceCriteriaSection) {
          if (section.type === 'paragraph' || section.type === 'listItem') {
              descriptionObj.acceptanceCriteria.push(extractText(section.content));
          }
      }
  }); 

  return descriptionObj;
};

