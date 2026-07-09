# That feeling when the app has perfect UX.

You know there are some apps that give you pleasure when you use them. Navigating through the app feels like an act of love instead of just doing a task.

As a frontend developer who has been working in the field for 6 years I did reinvent the wheel a lot of times. I was obsessed with centralized management of the state, I was obsessed with a UI that every part of it communicating with each other.

> _It was perfect - Homelander_

Imagine a dialog knows that a tooltip is visible inside it and it should do some stuff different according to that tooltip. And Maybe a dialog has another dialog inside it and which opens a popover and all the components should know about each other. The popover must be aware that it's triggered by an element inside the dialog content and it should behave differently. Maybe change it's keyboard navigation or something else.

## Hotkey Management

Focus management requires some solid state management and communication between components. If you go with the easy route and do a event bubbling blocker, I have bad news for you that it's not good. I remember that I created a hotkey management pool system that was working perfectly. It was doing it by a `request` system. When a popover is opened it requires a specific key from the pool, and every component has a `weight` (means the one that weighs more goes down in the list gets picked up) a.k.a "priority". If the key is already taken by a component with a higher priority, the lower priority component will not be able to use that key and on unmount it will unregisters itself from the key pool. But what if the component requires the key and has same or higher priority? Then it's added to a stack which holds registration of the listeners and runs the fattest one and last one.

## One key to rule them all

Is it just me or do you also feel that `CMD + P` command menu can easily kill most of the hotkeys, even UI's itself in some areas. I usually find myself doing `CMD + P` then typing the thing I want to have instead of using the hotkeys. And thanks to the `fuzzy-search` algorithms I sometimes just write three to four characters for the action I want to happen.

## A centralized z-index system.

When you use a virtual DOM library like React, and you want to create a floating element you usually use `createPortal` because you want that content to be at the top and you use a floating positioner so it looks like it belongs to the trigger. But portalling doesn't guarantee that z-index will always be correct and the last opened one will be at the top. I think you can guess what I created to overcome this thing, of course a z-index pool. What I did was just store a global z-index starting from 100 and every time a component gets mounted I increase it and give it to the next person.

## Last thoughts

Nowadays I'm using Zed editor, I was using VS Code editor for 7 years and I tried Zed. One thing perfectly caught my eye, the `CMD + N` handling.

Usually a hotkey has one purpose in the UI and it doesn't change very often according to the focus. But Zed editor knows if you are focused on the editor, terminal, file manager or agents bar. I realized that I quickly adapted to this focus aware hotkey management.

Yeah that's one of the reasons why UI/UX doesn't feel perfect. If you are not using a single component library that is designed to work fully together and 100% configurable you're going to end up conflicts between your elements or no configuration at all. I remember those days when we didn't have shadcn, headlessui, base-ui etc. I still do create my own Popovers, Dialogs but I use positioner libraries like floating-ui.
