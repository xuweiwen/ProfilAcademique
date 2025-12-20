---
title: Features
permalink: /features.html
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

<div class="well">
  <h4>Title</h4>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>

### Modal

<button data-modal-open="modal-id" class="btn">Open Modal</button>

<div id="overlay"></div>

<div id="modal-id" class="modal">
  <h4 class="modal__title">Title</h4>
  <div class="modal__supporting-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
  <div class="modal__actions">
    <button data-modal-close class="btn">Close</button>
  </div>
</div>