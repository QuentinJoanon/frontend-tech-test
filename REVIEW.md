# Review notes
Amélioration ou remarques sur mes impressions de manière générale.

## Good
Dependencies are well splited between dev and pro dependencies (package.json)
App is working and do the job

## Refacto?
Code is well splitted! I was surprised to see that api file was created but not used 😲.

## Tab n spaces
Tab and spaces are mixed up in files. Choose one way to indent.
You can update the eslintrc to howl on you (see change on .eslintrc).

## Split
We are use to split component in 2. One dummy and one with api call and logic.
This is useful to limit responsibilities of a component.

## Style
In stylesheets we are always hopping to not have side effect ouside of our component.
One way to ensure that is to have a main classname like "search-page" that you use in the root of the scss as
````scss
.search-page {
    .title {
        ...
    }
}
````

Here title style will only be applied on the search page.


## Next?
Create an homepage?
Create detail page / dialog to display hero detail
Create loading state
Better responsive?
Have the query in url param