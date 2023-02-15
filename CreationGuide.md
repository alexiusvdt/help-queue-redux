### Building a React App from scratch

## Step 1 - Plan component tree
  * It's tempting to want to jump in and start writing tests, but this diagram is ESSENTIAL for managing state.

## Step 2 - Build out the static site
  * Get the bare bones up. Don't even think about CSS yet. 
  * Create components and just enough content to verify functionality
  * Consider adding props/proptypes at this point, depending on state complexity

## Step 3 - Wrestle with the inexorable frustration that is State
  * Thinking in React article - "Identify the Minimal (but complete) representation of UI State", key words: minimal & complete.
  * Write out state. It'll be OK.
  * Be thorough. Enjoy the solving.
  * Consider this example:

One of the project prompts in this section is the word guessing game we call Word Puzzle. For the Word Puzzle game, players are supposed to guess a word, letter by letter, within about 6 or so guesses. For the UI, the word is hidden, but we tell the player how many letters are in it. Each time the player guesses a correct letter, the UI is updated with that correct letter.

For Word Puzzle, it's not enough to just write "add letters to game board". There's a lot more to the UI than that. Here are a few steps:

    * Generate a word.
    * Generate blanks (or spaces or lines) based on the number of letters in the word.
    * If a player guesses correctly, fill in the blanks that should be that letter.
    * If a player guesses incorrectly, subtract one from the number of available guesses.

  * Make sure to differentiate between application state and local state. React can handle local state and Redux will handle global (in this case)
  * if proptypes haven't been added, add them now! Even though we haven't created state, we know where everything should live once Control components are spun up correctly.
  
## Step 4 - Think with Redux
  * Test & write reducers
  * write many tests & then write many more

## Step 5 - Add Redux to the application
dont forget to install `$ npm install redux@4.2.0 react-redux@8.0.2`
  * Refactor the code to use Redux store

## Step 6 - Debug!
  * be patient with yourself if you get to this point and things just... aren't... working
  * React with Redux is hard. 
  * You have your whole career to improve, you dont need to be perfect now!