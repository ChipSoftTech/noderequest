# noderequest

Node Request is a node.js starter kit.  You won't find anything fancy here, just the way I start all my node.js projects. I know about complexity but I don't see the point if I'm constantly trying to figure out how it works instead of getting the features done. Plus I'm not very comfortable with the structure/coding style of many frameworks.  Node.js provides the environment to keep it simple.  The side effect, this kit provides a good starting point for learning.

## Run

```bash
 npm install
 node app
 ```

## Libraries

### Back-end

- [dirty](https://github.com/felixge/node-dirty/)


### Front-end

- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

## TODO

- Clean up Twitter Bootstrap, we don't need all that files at start
- Finalize the design pattern and naming conventions
- Add default page
- Querystring and Post helper
- Add dirty for database 
- Logger helper
- Release v1

## Thoughts
Well in my experience, every time you add a new third party tool, you tie yourself into that third party for the life expectancy of the product your developing. This is bad, the lack of control and understanding of someones idea of good code which has been black boxed is very hard to deal with when something goes wrong (it always does) in the aforementioned black box. You will find many disclaimers attached to third party licence agreements, "use at own risk" is one that I see often. 

If you can program the code yourself and most importantly understand the code, and the code can be developed in a reasonable amount of time, why would you use a third party tool? And I trust all the code I write far more than some third party. I am an engineer, I build code that sometimes breaks but never collapses. 

Frameworks are not "silver bullets". When you program against a Framework, your allowing someone else to take control of the big decisions about the code for you. Surely you can see that? these big decisions once made are very hard to retrace upon, if the Framework is too encompassing then it will make all the major decisions for you. Using Frameworks also obfuscate the actual programming away. Define your interpretation of a Framework, there is more than one type of Framework. Some Frameworks are so integrated to the programming language then I would call these Programming systems.

Some thoughts.  My goal is to keep close to node.js.  Go ahead and contribute or fork - add code or packages that meet your needs.  Enjoy the Code!  Brian.