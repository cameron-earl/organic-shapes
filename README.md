# organic-shapes

Most people are familiar with the css attribute `border-radius`. Usually, it's used to round the edges of boxes `border-radius: 3px;` or create a circle `border-radius: 50%;`. Many know that you can set all four corners independently, allowing you to make shapes like teardrops: `border-radius: 0 50% 50% 50%;`.

However, what I didn't know until recently is that you can use 8 parameters, like so: `border-radius: 54% 46% 72% 28% / 33% 59% 41% 67%;` to make very interesting blob-like shapes. For more information on how it works, check out [this excellent blog post](https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae) where I learned it.

This little project plays around with those blobs by constantly shifting these `border-radius` values. To launch, clone the repository and load index.html in your browser.

## Demo
[https://cameron-earl.github.io/organic-shapes/](https://cameron-earl.github.io/organic-shapes/)