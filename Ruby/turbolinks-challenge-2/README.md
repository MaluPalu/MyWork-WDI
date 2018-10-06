# Turbolinks Challenge

| **Objectives** |
| :---- |
| Explore javascript in rails |
| Discover Turbolinks & Turbolinks Events |
| Organize javascript to only execute on specific pages |

**Terms:**
- Javascript Events
- Event Listener / Event Binding
- Turbolinks

## Instructions

This lab does not have a database! Just clone, bundle, and run `rails server`. Then launch the home page ("/") in your browser.

You should work exclusively in your javascript directory: `app/assets/javascripts/` unless otherwise noted.

#### Challenge 1: Color Changer

When you click on a color page, your background color should change to match the name of the color in your url path. Each file has some JavaScript that should do this update when the page loads, but because of Turbolinks, our pages never load! Can you fix the current javascript? (Your homepage should _not_ be teal!)

In order to fix this problem, you'll need to understand Turbolinks. In particular, you may wish to read [this documentation](https://github.com/turbolinks/turbolinks#building-your-turbolinks-application) on the way that Turbolinks handles page loads & refreshes.

Once you have your initial solution working, consider:
- Does it work on refresh?
- Does it work when you click through to the page?
- Is your solution DRY?

<details><summary>Hint: How would you grab the path for the current page from the URL bar? (Click Here)</summary>

```js
window.location.pathname
// or, just
location.pathname
```
</details>

<details><summary>Hint: How would you grab the color for the current page from the path? (Click Here)</summary>

```js
location.pathname.split("/")[1]; // warning: returns "" if path is "/"!
```
</details>

#### Challenge 2: Page View Counter

The counter should increase for every individual page view, but (surprise) it's also broken because it doesn't correctly handle Turbolinks. Can you fix the current JavaScript?

- Do all the numbers reset when you refresh? (good!)
- Do specific numbers increment on each pageview?
- Do all the numbers show up on every page you visit?
- Is your solution DRY?

#### Challenge 3: Be More Specific
**Page Specific CSS**: Can you think of a way to get the desired "Color Changer" behavior (from Challenge 1), without using _any_ javascript? (For this challenge you should only modify `application.html` and any `css` files).

<details><summary>Hint: Namespace your CSS to only apply to certain pages.</summary>

Identify the current page by giving the body a `class` with the name of the current controller & method:
```html
<!-- app/views/layouts/application.html.erb -->
<body class="<%= page_specific_identifier %>">
    <!-- ... -->
</body>
```
<br/>
Reference the page specific `class` (i.e. the controller name and method name) in your stylesheet:
```css
/* app/assets/stylesheets/name_of_controller.css */
body.controller_name.method_name p {
    /*  
     *  the styles inside here will only apply to p tags
     *    that are nested inside body tags
     *      that have the "page_specific_identifier" id
     */
}
```
</details>

<br>

**Page Specific JS**: Create a pop-up that says "Welcome!" whenever a user lands on `/goldenrod` for the first time (but _not_ when they click through to other pages.).

#### Bonus: Remember Your Visitors
 Remember that a visitor has already been welcomed, and do not welcome them again!

<details><summary>Hint: Hmm, how would you remember that on the front-end? (Click Here)</summary>

Use a [cookie](http://letmegooglethat.com/?q=set+cookie+javascript+-w3schools), or [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)!
</details>

## Resources
- [Turbolinks Events](https://github.com/turbolinks/turbolinks#full-list-of-events)
- [Conditional Execution of Page Specific Javascript](https://railsapps.github.io/rails-javascript-include-external.html#conditional)

<img width="400" src="https://media.giphy.com/media/l2Je2UKgDMm2HMqha/giphy.gif">
