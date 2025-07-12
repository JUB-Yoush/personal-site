---
title: 'Object Orientation: Polymorphic Code Organization'
date: '2025-07-11'
wip: 'false'
tags: ['programming']
---

A fundamental problem software engineers run into is organizing polymorphic data. That is, datatypes that share some similar data but also do other things differently. We're given quite a lot of flexibility in how to approach problems based on tools in a given language, so It can be difficult to come up with the "best" way to go about modeling or representing our code, especially if it's a new problem you've never solved before.

This post summarizes the different approaches I've become familiar with, and the considerations and trade offs one would make when considering one.

I'm going to start off simple and slowly discuss different aspects using concepts that might be new to you, if anything discussed here is as interesting to you as it is to me, I implore you to look into it yourself.

Let's say you're making a geometry library. You have Rectangle and Triangle classes that can both calculate the area of themselves.

If you've ever written any object oriented code, you'd know how to solve this: Make an abstract parent class "Shape" with abstract class for `area()`, and have each Shape extend from it.

(All code examples will be in C#)

```C#
public abstract class Shape(float width, float length)  {
 float length = length;
 float width = width;

 public abstract float area();

}

class Rectangle(float width, float length) : Shape
{
    public override float area(){
    return width * length
    }
}

class Triangle(float width, float length) : Shape
{
    public override float area(){
    return width * length * 0.5
    }
}

```

Simple!

But I don't know if you've heard... object oriented programming is LAME actually. Java blew up and started selling out shows at the Rogers Center, so now it's cool to not like them. Clearly all these 45 year old suit and tie Netbeans programmers have no idea what good music is. In between taking turns participating in our favorite hobby (shoving SOLID principles into lockers) you might be interested in actually learning where criticisms of OOP come from?

The Two primary concerns are:

1. OOP encourages abstraction that can lead to coupling and messy codebases.
2. Pointer indirection, Cache locality, and vtables make objects slower than plain structs.

I am only considering the first one in this post. Originally I covered both but was easily clearing the 5000 word mark.

# Inheritance is (able to become) messy

## Abstraction inherently causes coupling

Inheritance tightly couples child classes to parent classes. The Shape example I demonstrated seems quite benign (because it is), but more complex hierarchies can come with issues. Changes to the parent class propagate down the abstraction tree, and if a child doesn't perfectly fit what the parent class had designed, then you need to refactor the entire section of the tree, and all the nodes that extended from that branch. Abstraction is about making assumptions about what your code will need. If the abstraction was correct then you saved yourself repeating code. If they aren't then you'll need to modify your assumptions to fit. The issue isn't inheritance inherently (get it), but the tight coupling of code. Some modern "Post-OOP" languages like Rust and Go don't have inheritance at all, however they do have abstraction through interfaces.

## Interfaces

Interfaces are contracts that an abiding class must fulfill. They're like a abstract class but they only define functions any "child" would have. Unlike inheritance with classes, you can implement an unlimited number of interfaces from multiple sources, which allows you to make lots of small and modular interfaces that a class can pick and choose to specify behavior.

Lets say we also wanted to support circles, it'd make no sense for circles to extend the shape class, as it has no width nor length, but we can pass in the shape interface which is only concerned about whatever type it's referencing having an area() function that matches it's forward declaration. We can refactor our example to work based on an interface instead of an inherited class.

```C#
public interface Shape() {
 public virtual float area();

}

class Rectangle(float width, float length) : Shape
{
    public float width = width;
    public float length = length;
    public float area(){
    return width * length
    }
}

class Triangle(float width, float length) : Shape
{
    public float width = width;
    public float length = length;
    public float area(){
    return width * length * 0.5
    }
}
```

Breaking things up from large connected components into smaller modular components is the heart behind the phrase "favor composition over inheritance". The functionality of a class isn't the only thing we can modularize, we can also modularize the members of the class itself through dependency injection.

## Dependency Injection

Dependency Injection Sounds much more complicated than it actually is. Instead of data being provided to a class through it's inherited parent, you simply include the data. I originally learned about this pattern when making games using [Bevy](https://bevy.org/), as it uses a inheritance-less entity component system for your games data.

Lets say you're making a game and have a entity base class with a sprite and position. If you were using something inheritance based, like Godot, that data would look something like:

```C#
class Position{
 float x;
 float y;
}

class Sprite: Position{
 byte[] imgData;
 bool flipX = false;
 bool flipY = false;
 bool centered = false;
}

class Entity: Sprite{
 int entity_id;
}

class Player: Entity{
// player specific things
}

```

This is sort of how the inheritance hierarchy for Godot's Nodes is set up. It makes assumptions about the kind of data a class is interested in having. This can lead to the same coupling issues we had just discussed.

A Dependency injection based approach would be the following:

```C#
class Position{
float x;
float y;
}

class Entity{
int entityId;
}

class Sprite{
byte[] imgData;
bool flipX = false;
bool flipY = false;
bool centered = false;
}

class Player{
 Entity entity;
 Sprite sprite;
 Position position;
 // player specific things
}
```

Your classes are now composed of atomic classes that can be composed. DI does to your members what interfaces did to your functionality. This solution allows you to not have to make assumptions about the other kinds of data a class would want, as any class simply gets any data it wants passed in.

## A word on functional(ish) programming

Functional Programming is a type of programming focused on only using "pure" functions. A "pure" function is one without "side-effects", meaning:

1. **The same input will always yield the same output.**
2. **Nothing outside of the passed in data is modified**.

Think only using static functions with no static variables.

In FP you also (generally) only operate on immutable data. meaning all values need to be updated and returned instead of modifying by a passed in reference. Functional languages like [ML](<https://en.wikipedia.org/wiki/ML_(programming_language)>), [Haskell](https://www.haskell.org/), [Elixir](https://elixir-lang.org/), or [Ocaml](https://ocaml.org/) are expressly written in this style and have extremely unfamilar syntax to those who've only really used C-like languages. However lots of non-functional languages have functional language features or can be written in a functional style.

Functional programming relies on a separation between your data and functions that operate on that data. That might sound like a very different architectural approach, until you understand it's mostly the difference between this:

```C#
// OOP based
class Rectangle(float width, float length)
{
    float width = width;
    float length = length;

 public setDimensions(float w, float l){
  //updates existing rectangle values (mutable)
  width = w;
  length = l;
 }
}

public static void Main(){
 Rectangle r = new Rectangle(3,4);
 r.setDimensions(4,5);
}
```

and this:

```C#
// Functionalish
class Rectangle(float width, float length)
{
    float width = width;
    float length = length;

}

// "pure" function
static class RectangleHandler(){
 public static Rectangle ChangeDimensions(float w, float l){
  //return new rectangle instead of modifying value (immutability)
  return new Rectangle(w,l)
 }
}

public static void Main(){
 Rectangle r = new Rectangle(3,4);
 r = Rectangle.ChangeDimensions(4,5);
}
```

Then at that point you might think it's a completely pedantic and worthless distinction, (languages like Go convert all your methods into functional calls at compile time) but it's not!

### How to think about functional programming

You can think of any set of polymorphic data as a table. **The rows are the different types**, and **the columns are the different methods they implement**. - In OOP, when we add a new datatype we append a new **row** to the table and create methods in that class to handle all of the new interface's methods. - In functional programming, we simply create a object as a data container with no functionality, and then in every function that handles every type, we add a new case to our switch statement that handles that new datatype, adding a **column** to the table. This "do a different thing based on every datatype" is known as pattern matching.
Each method has a different "grain" to it. You either add a new column and handle every row or add a new row and handle every column. This table metaphor was the thing that helped me understand the fundamental differences between OOP and FP paradigms, I learned about the idea in the [crafting interpreters](https://craftinginterpreters.com/representing-code.html#the-expression-problem) which is a great book that walks you through implementing a programming language, free to read online! Big recommend!

Lets try to make our shape example more functional using pattern matching in C#:

```C#
public interface Shape { }

class Rectangle(float width, float length) : Shape
{
    public float width = width;
    public float length = length;
}

class Triangle(float base, float length) : Shape
{
    public float base = base;
    public float length = length;
}

class Circle(float radius) : Shape
{
    public float radius = radius;
}

static class ShapeHandler
{
    public static float calcualteArea(Shape s)
    {
        return s switch
        {
            Rectangle r => r.width * r.length,
            Triangle t => 0.5 * t.base * t.height,
            Circle c => (float)Math.Pow(Math.PI * c.radius, 2),
        };
    }
}

```

It might seem odd that we're still implementing the shape interface despite it not doing anything. The Shape interface now simply acts as a "union" of different types that we want to potentially handle, and C# will only let us implicitly convert types that implement the interface. Functional languages have lots more features to support this kind of programming. but depending on your language a lot of functional ideas can be applied to non functional languages.

Pattern matching for every new case can become annoying when we have a lot of new functions to implement, what if we wanted to return the perimeter of the shape? or turn it 3d? add hexagons or rhombuses? we'd have to loop over every type in every function that implements a shape. But we have solutions for that too:

### Function pointers

- How does inheritance work? Not conceptually, but to the compiler? If I have a child class that overrides a parent function, or a class that overrides and implements an interfaces function, how does the compiler know what function to use when I call the abstract `shape.area()` ?
- Classes have what is called a "virtual function table" or "vtable". This is a lookup table that the compiler can reference to figure out what version of a function an object is referring to. Classes automatically contain data that reference a function to call. However in a functional style with no abstraction we'd need to implement this behavior ourselves through the `calculateArea()` function, acting as a manually implemented vtable.

- The vtable effectively stores a function as a variable that is a part of an object. What's stopping us from... doing that ourselves? We can dependency inject that data into the class ourselves and sidestep abstraction altogether.
- Lets try storing a function as a parameter in a concrete class, to emulate abstraction we can use a enum of different "types" the class could be so we know which function to call.
- Instead of pattern matching for every possible condition, we can simply pass in all the relevant functions on the objects creation, and call whatever function it has within it.

```C#
public enum ShapeType
{
    RECTANGLE,
    CIRCLE,
    TRIANGLE,
}

public class Shape(ShapeType id, Func<Shape, float> areaFn)
{
    public ShapeType id = id;
    public Func<Shape, float> areaFn = areaFn;
    public float width;
    public float length;
    public float radius;

    public static Shape MakeShape(ShapeType id)
    {
        return id switch //pattern match once to pass in the correct function.
        {
            ShapeType.RECTANGLE => new(ShapeType.RECTANGLE, RectangleArea),
            ShapeType.CIRCLE => new(ShapeType.CIRCLE, CircleArea),
            ShapeType.TRIANGLE => new(ShapeType.TRIANGLE, TriangeArea),
        };
    }

    public static float RectangleArea(Shape r)
    {
        return r.width * r.length;
    }

    public static float TriangeArea(Shape t)
    {
        return (float)0.5 * t.width * t.length;
    }

    public static float CircleArea(Shape c)
    {
        return (float)Math.Pow(Math.PI * c.radius, 2);
    }

    public static void Main(string[] args)
    {
        Shape r = Shape.MakeShape(ShapeType.RECTANGLE);
        Console.WriteLine(r.areaFn(r)); // call whatever stored function was given at costruction time.
    }
}
```

- I wrapped object initialization into a static factory function (yeah, that's the factory method! I know some design patterns! gang of 4! agile! sprint!? story points???)
- We also need to pass in the variable into itself, as The object calls a static method and passes itself into it. You could potentially get away with using a method through initializing the variable in one line and referencing the function pointer in the second using itself. But I don't really mind.
- This solution forces us to implement a single concrete type, which means we'd need to have all the parameters of all possible types within a single class. This could get quite complex and hard to organize based on the number of different types you have and how many different parameters they share with each other, but this is how you'd implement interfaces/abstract classes in a "procedural" language with no abstraction features like C, Zig or Odin.

### My rules for OOP hierarchies I try to follow

- Prefer interfaces over inheritance.
- Prefer dependency injection over inheritance.
- Keep all inheritable classes abstract.
- Never use grandparent classes, keep all inheritance only one level.
- When to use inheritance vs a function pointer:
  - Use inheritance when child classes implement a lot more behavior than the abstract parent (and you want references to specific members).
  - If the abstract parent implements most of the behavior, use a function pointer for any polymorphic behavior.

## OOP: The bottom line

OOP encourages modeling environments based on our intuitive understanding of how it'd works, and then use the capabilities you designed in that system to solve problems and implement the requirements of your program. Instead of managing the overhead of a systems in our brain, we front-load that work and design a high level abstract model that we can use to solve the problems through. `class Student extends Person` because we understand students to also be people. This isn't inherently bad, abstraction is all over software engineering and computing after all. If we never got any more high level we'd still all be handing reams of punch-cards to secretaries.

But abstraction isn't free. Ignoring performance concerns, the more abstraction you add to your systems the more assumptions you make about how things fit together. More abstraction leads to more assumptions which leads to more coupling. These assumptions can be wrong and will cause you to have to untangle your spaghetti code. Note that this isn't inherit to OOP, you can make responsibility organized OOP based codebases, just as you can make difficult to maintain code in a functional language.

OOP encourages you model a problem, then use the model to solve the problem.

You come up with the model first then use it to do stuff second.

An inversion of this would be the old school "procedural" programming style of just writing code that solves the problems directly, due to there simply not being a lot of abstraction features available in simple procedural languages. After you start implementing solutions, you then can start to observe common/shared behavior between features that can be abstracted. You solve the problems and then create the model.

Software Engineer and Game Programmer Casey Muratori coined the phrase ["semantic compression"](https://caseymuratori.com/blog_0015) based on this style. You act as a human compression algorithm, finding pieces of functionality that can be compressed into commonly shared pieces, only abstracting something after you've used it twice. It isn't necessarily about not using objects or interfaces or inheritance, it's about using them when they make sense to based on what you've observed about the codebase.

Big detailed UML diagrams plot too specific of a course towards what we think is the API that will best accomplish the set of requirements we're after. If we've never made that thing before then it's very hard to know what form the final code will take. Unlike other types of engineering, software is extremely cheap to refactor after we've begun building. Large detailed blueprints of buildings are made not because that's the best way to go about designing a building, but because civil engineers and architects need to lock in all decisions before construction (their compiler) can start building what they described. Being able to write code quickly, that solves problems directly, and then figuring out the best models to represent your code as you make it is a benefit many software engineers take for granted but don't seem to take advantage of.

Casey in his blog post writes:

> "make your code usable before you try to make it reusable".

and

> "The fallacy of “object-oriented programming” is exactly that: that code is at all “object-oriented”. It isn’t. Code is procedurally oriented, and the “objects” are simply constructs that arise that allow procedures to be reused. So if you just let that happen instead of trying to force everything to work backwards, programming becomes immensely more pleasant."

If that all sounds too vauge and nonspecific then:

- Write down all the requirements of your program.
- Write your code as simply as possible to solve the first requirement without considering how it'll fit into the rest of the requirements,
- Get it to work!
- Try to implement another requirement.
- Did the second thing do anything similarly to the first thing?
- If so, compress the first and second thing into some reusable components
- Repeat!

And I think this philosophy of only trying to abstract things once they present themselves as abstractable is valuable in things outside of programming, in projects of various disciplines we tend to think of high level conceptual origination of things without considering the specifics of how it'll actually be implemented. Not only can it make the project feel more complicated then it has to be, but it's also can turn into a form of "metaworking" based procrastination. The easiest way to get started is to just start making the thing, regardless of if it's a piece of software or a painting or a song or a blog post. So start making things! Now!

Next post will be all about the performance related stuff I skipped.

Get your [Hawaiian Shirts](https://youtu.be/rX0ItVEVjHc?si=6uevKg9T4wkR4--D) ready.
