# Extinction Event

We'll start at the uninteractive stone that is our [http://extinction-event-starting-point.surge.sh/]() and end up at this highly interactive [extinction event solution](http://extinction-event-solution.surge.sh/).

In between, we'll be adding a fair amount of JavaScript to make that happen!


### Tools We'll Be Using

* `querySelectorAll`
* function expressions (`const [variableName] = function() {}`)
* `for of` loops
* `event listeners`
* the `event` object


### Setup And Guidelines

* You should get familiar with the `index.html` file, as the tags in there are what you will need to hook into in order to query the elements we'll be adding interactivity to. You are ABSOLUTELY WELCOME to add ids and classes to make your querying easier or just more in your own personal style, but you also ABSOLUTELY DO NOT NEED TO.

* Similarly, you should get accustomed to what's in `style.css`. There's some Flexbox in there, which we'll be using soon, but you don't need to worry about that; it's just for general layout of the page and to make our row of dinosaurs a nice row. You shouldn't change ANYTHING in there!

* But you could and should notice that there are two `transition` rules being applied. These make it so that when those rules are changed--`width` on an `img` or `opacity` on the `li`s in the `ul`--those changes happen over 2 seconds, producing a neat effect. Might these be the properties you want to change with JavaScript? These might be the properties you want to change with JavaScript!

* But all of your work should really be in your `main.js` file. This is where you're going to work, and this is going to be where you will play.


### How To Achieve Extinction - A Walkthrough

1. The first step is our `ol`. The `li`s in their should all have an event listener on them that give them a `line-through` effect on them when they are clicked. The solution here is following the same pattern we did before--query the element, make a function that affects that target, then tie them together with an event listener that also specifies WHEN the function should be called--but with two additional tricks:
    1. We'll need to query ALL of the elements with `querySelectorAll`, which will return an array (or array-like collection) that we can loop through, putting the event listener on each individual item in the collection.
    2. We'll need to use `event` and its property `target` to figure out which element was actually clicked. Fortunately, the browser will be kind enough to pass the `event` object into our event listener functions, where we can take it in as a parameter if we need it. And this time we do!
2. Now that we've used those tools to get the first list to use `line-through`, we can do the same for the second list and `opacity`.
3. The third one is a little different, but basically the same. We're just using images instead of `li`s, and you can find them by their surrounding `div` instead of `ol`/`ul`.
4. But this last step is hugely different. How do we affect ALL the items we've covered so far on one single button press? It's not actually _that_ different. We'll just have to have a function that queries all three sets of elements--although you could also have done so globally!--and loops through each one, applying the correct effect to each set. You don't need `event` here, because you don't care WHICH element was interacted with; you're gonna affect them all. Then simply attach that function as an event listener on the button, and you're done!
