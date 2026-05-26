import React from 'react';

const letterMap: Record<string, string> = {
  a: "201", b: "201-b", c: "201-c", d: "201-d", e: "201-e",
  f: "201-f", g: "201-g", h: "201-h", i: "201-i", j: "201-j",
  k: "201-k", l: "201-l", m: "201-m", n: "201-n", o: "201-o",
  p: "201-p", q: "201-q", r: "201-r", s: "201-s", t: "201-t",
  u: "201-u", v: "201-v", w: "201-w", x: "201-x", y: "201-y",
  z: "201-z", "!": "201-exclamation", "?": "201-question"
};

export function UnownText({ text, enabled = true }: { text: string, enabled?: boolean }) {
  if (!enabled || !text) return <>{text}</>;
  return (
    <span className="inline-flex flex-wrap items-center">
      {text.toLowerCase().split('').map((char, i) => {
        if (letterMap[char]) {
          return (
            <img 
              key={i} 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${letterMap[char]}.png`}
              alt={char}
              className="h-[1.5em] w-auto inline-block -mx-[0.1em] invert brightness-200"
              style={{ imageRendering: 'pixelated' }}
              draggable={false}
            />
          );
        }
        return <span key={i} className="whitespace-pre">{char}</span>;
      })}
    </span>
  );
}

export function unownify(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      // If it's pure whitespace, preserve it, or unownify text
      if (child.trim() === '') return child;
      return <UnownText text={child} />;
    }
    if (React.isValidElement(child)) {
      if (typeof child.type === 'string') {
        const props = { ...child.props };
        if (props.children) {
          props.children = unownify(props.children);
        }
        return React.cloneElement(child, props);
      }
      // If it's a Framer Motion component, do the same
      if (typeof child.type === 'object' || typeof child.type === 'function') {
        const props = { ...child.props };
        if (props.children) {
          props.children = unownify(props.children);
        }
        return React.cloneElement(child, props);
      }
    }
    if (Array.isArray(child)) {
      return unownify(child);
    }
    return child;
  });
}

export function UnownProvider({ children, isUnown }: { children: React.ReactNode, isUnown: boolean }) {
  if (!isUnown) return <>{children}</>;
  return <>{unownify(children)}</>;
}
