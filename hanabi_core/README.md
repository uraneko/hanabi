<h1>hanabi_components</h1>
Components collection for the hanabi app.

## Contents
- Containers
- Wrappers
- Primitives
- Extras

###
### Containers

Containers are components that take (usually many) children components and group them in a way specific to that container.

#### Available Containers are

- Auth Form 
- Matrix *
- Tree *
- Vector *
- AppsMenu *
- NavBar *
- SideTab *
- SplashPage *
- Calendar *

* = wip

###
### Wrappers 

Wrappers also contain other components, but they usually take only 1 component as their direct child.
Differing from containers, wrappers implement some functionality that mutates their child in some way.

#### Available Wrappers are

- Blinds *
- InteractiveArea *
- Pending *
- ColorScheme **

* = wip
** = not even a wip yet

### 
### Primitives 

Primitives are simple components that may exist as HTML elements with some customizations on top.

#### Available Primitives are

- TextField
- PasswordField
- CheckBox
- SigninButton
- Note
- Item
- HomeLogo
- LoadingLogo

###
### Extra 

These are other components that don't fall into the above 3 categories

#### Available Extras are

- ContextMenu *

* = wip
** = not even a wip yet
