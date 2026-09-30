export const codeTitleTransformer = {
  name: 'quiet-signal:code-title',
  pre(node) {
    const raw = this.options.meta?.__raw ?? '';
    const filename = raw.match(/(?:title|filename)=["']([^"']+)["']/)?.[1];
    if (filename) node.properties['data-filename'] = filename;
  },
};
