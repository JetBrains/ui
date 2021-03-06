---
title: Mnemonics
category: Principles
---

A mnemonic is an alphanumeric character, which indicates the key to press to activate a command or navigate to a component.

There are *regular* and *numeric* mnemonics.

* Regular mnemonics are used inside the text. The mnemonic is underlined in this case to be distinguishable.

  In a control:
  ![]({{site.baseurl}}/images/mnemonics/inside.png)
  In a menu:
  ![]({{site.baseurl}}/images/mnemonics/menu.png)

  Activate the control by pressing the mnemonic with:

    * Alt modifier key on Windows/Linux

    * Ctrl+Alt modifier keys on Mac OS.

* Numeric mnemonics are used as the first numeric character of an action in a popup:
  ![]({{site.baseurl}}/images/mnemonics/first.png)
  Invoke the action by pressing the corresponding number key.

## When to use

Specify mnemonics wherever possible in menus and controls. Mnemonics make the functionality more usable for power users who interact through the keyboard. Moreover, mnemonics make the functionality accessible for users with disabilities.

If there are many actions and/or controls and it is not possible to assign mnemonics for all of them:

* Provide mnemonics for the most frequently used actions/controls.

* Provide mnemonics for [group headers]({{site.baseurl}}/controls/group_header) for quick navigation to the first element of the group.

Note: The rules for using numeric mnemonics in popups are under discussion. [Contact us](https://github.com/JetBrains/ui/issues) if you have questions.

## How to use

![]({{site.baseurl}}/images/mnemonics/letters.png)

Make mnemonics in the label discoverable, they must be easy to find:

* Use letters at the beginning of the first or second word of the label.

* Use letters with wide widths, such as w, m, and capital letters.

* Avoid using letters that are difficult to see when they are assigned to underlined keys. These letters include:

    * Letters with descenders, such as g, j, p, q, or y.

    * Letters next to a letter with a descender.

    * Letters that are only one pixel wide, such as i or l.

Make it easy to remember for the most frequently used actions:

* Use standard Windows mnemonic if any. For example, Properties, Rename, Delete, Cut, Copy, Paste, Exit, etc.
  Note, that Windows users are more likely to form habits for mnemonics as mnemonics are not that common on Mac or Linux.

* Do **not** use silent letters. For example, Design, Column, etc.

Do **not** assign mnemonics to the default or Cancel buttons. The default button is typically assigned to the ENTER key, and Cancel is assigned to the ESC key.

Do **not** use the same mnemonic letter twice in the same window; duplicated mnemonics confuse users. If you need to assign a new mnemonic in an existing context, check that it's not already taken. If it is, prioritize the mnemonic for the more frequently used action.

