---
title: Features
permalink: /features/
---

## <i class="fa-solid fa-chalkboard icon-color-pink"></i> Features

### Math Equation

Inline equation example is like $E = m c^2$.

Block equation example:

$$
\int_{-\infty}^\infty e^{-x^2} \, \mathrm{d} x = \sqrt{\pi}.
$$

### Footnote

Footnote example[^1]. Another footnote example[^2].

[^1]: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
[^2]: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

### Table

| Header 1 | Header 2 | Header 3 |
|:---------|:--------:|:--------:|
| cell 11  | cell 12  | cell 13  |
| cell 21  | cell 22  | cell 23  |
| cell 31  | cell 32  | cell 33  |

### Figure

<figure class="third">
  <a href="https://example.com">
    <img src="{{ '/images/publication-teaser/example-image.png' | relative_url }}" alt="(a)">
  </a>
  <a href="https://example.com">
    <img src="{{ '/images/publication-teaser/example-image.png' | relative_url }}" alt="(a)">
  </a>
  <a href="https://example.com">
    <img src="{{ '/images/publication-teaser/example-image.png' | relative_url }}" alt="(a)">
  </a>
  <figcaption>The subfigures can be clickable.</figcaption>
</figure>

### Video

<figure>
  <iframe width="1179" height="884" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="Me at the zoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <figcaption>Responsive video embed.</figcaption>
</figure>

### Code

Inline code example is like `x`.

Block code block example:

```python
# my first code
def hello():
    print("Hello, world!")
```

### Notice

<p><a href="#" class="show-notice-link" data-target="notice-id">Click here</a> to show a notice block.</p>
<div id="notice-id" class="notice" markdown="1">
#### Title
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
</div>

### Well

<div class="well" markdown="1">
#### Title
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
</div>

### Modal

<button data-modal-open="modal-id" class="btn">Open Modal</button>

<div id="overlay"></div>

<div id="modal-id" class="modal" markdown="1">
#### Title
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
<div class="actions">
<button data-modal-close class="btn">Close</button>
</div>
</div>