import Block from './Block';

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);
  const blockContent = block.getContent();
  if (root && blockContent) {
    root.appendChild(blockContent);
    block.dispatchComponentDidMount();
  }

  return root;
}
