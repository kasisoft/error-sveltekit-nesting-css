# What is this about?

This is about the _svelte(css-unused-selector)_ . This application shows that CSS selectors will be removed despite them being used and there's no kind of programmatic change of CSS classes.


## Notes

* This project uses the current Svelte 5 preview. I recreated the project using Svelte 4 which shows the same effect.


## What the application does?

It generates two blocks through the components [Working] and [NotWorking].
Both components generate the same HTML:

```html
<section>
    <div>
        <p>Yellow</p>
    </div>
    <div>
        <p>Green</p>
    </div>
</section>
```

associated with the identical CSS:

```css
section {

    > div:first-of-type {
        background-color: yellow;
    }

    > div:last-of-type {
        background-color: green;
    }

}
```

## Expectation

The first __div__ will have a __yellow__ background whilst the second __div__ should have a __green__ background.

However this __does not__ work for the component [NotWorking] as the __div__ elements will be rendered through the helper component [PM].

I found [Issue-1594] though it doesn't explain why the CSS is being removed despite being used (I assumed that the optimization will happen after the rendering had happened).

I know how to circumvent this using additional CSS classes or some restructurings. I want to avoid both solutions as this project is merely meant for demonstration purposes and the issue is that Svelte is obviously identifying CSS selector (the majority of my components are generated as dedicated __div__ wrapped elements).


## My Question

Is this behaviour of Svelte as expected and thus considered correct?
* I would understand it as the architects might have taken the viewpoint that it's not okay to make assumption about the HTML behind the component [PM] and thus styling it using __div__ could be considered an invalid use case.

Or is that an actual issue?



[Issue-1594]: https://github.com/sveltejs/svelte/issues/1594
[NotWorking]: ./src/lib/components/NotWorking.svelte
[PM]: ./src/lib/components/PM.svelte
[Working]: ./src/lib/components/Working.svelte
