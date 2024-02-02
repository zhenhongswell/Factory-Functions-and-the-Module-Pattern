# Factory-Functions-and-the-Module-Pattern
Odin Project Factory-Functions-and-the-Module-Pattern


Closure

- a way to pass the share specific funtionality or variables between parts of code


Factory-Functions

- levy the power of closures!

- They do not use the prototype!  which incurs a performance penalty

- just like normal constructor,but with a return object

- The module pattern IIFE is used for namespacing,for instance:
    "me" have a walk function,
    "you" also have a walk function,
    if we don't utilize "namespacing",it would occurs naming collision.