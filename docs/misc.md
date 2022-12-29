---
hide:
  - navigation
---

We can [link to that heading](layout.md#main-container) from another page too.

This works the same as [a normal link to that heading](./layout.md#hello-world).

Link [image](home.png){:target="_blank"}

## Mermaid graph demo

```mermaid
graph TD
  A --> B --> C
```

```mermaid
graph LR
    hello["<b>Hello</b>"] --> world["<big><i>World</i></big>"]
    world --> mermaid[mermaid web site]
```

```mermaid
graph TD
A[Client] --> B[Load Balancer]
B --> C[Server01]
B --> D[Server02]
```

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
  D-->A;
```

```mermaid
sequenceDiagram
  participant Alice
  participant Bob
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts <br/>prevail!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```
