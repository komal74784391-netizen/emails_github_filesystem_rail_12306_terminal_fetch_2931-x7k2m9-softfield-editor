export interface SoftFieldConfig {
  lineHeight: number;
  softWrap: boolean;
  gutter: number;
}

export function reflow(text: string, config: SoftFieldConfig): string[] {
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    if (!current.length) {
      current = word;
    } else if ((current + " " + word).length <= config.gutter) {
      current += " " + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current.length) lines.push(current);
  return config.softWrap ? lines : lines.slice(0, config.lineHeight);
}
