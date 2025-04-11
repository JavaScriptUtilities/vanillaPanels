# Vanilla Panels

Add simple panels to your website

## Usage

```html
<button data-panel-trigger="panel-name" type="button">Open Panel</button>
<div class="panel-wrapper" data-panel="panel-name" aria-hidden="true" data-panel-open="false">
    <div class="panel-overlay"></div>
    <div class="panel-content">
        <a class="panel-content__close" href="#"><span>Close Panel</span></a>
        <div class="panel-content__inner">
            <h2>Panel</h2>
            Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.
        </div>
        <div class="panel-content__action">
            action
        </div>
    </div>
</div>
```
