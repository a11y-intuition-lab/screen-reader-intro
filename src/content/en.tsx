// Innholdet i innføringen på engelsk. Hvert trinn er én skjerm.
import { Disclosure, IconButton, InPage, Practice, PracticeDialog, PracticeForm, SearchForm, SilentButton, StatusButton, ToggleButton } from '../components/practice';
import library from '../assets/library.svg';
import wave from '../assets/wave.svg';
import type { Content } from './types';

const content: Content = {
  iphone: {
    name: "VoiceOver on iPhone",
    source: { url: "https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios", title: "Apple, Learn VoiceOver gestures on iPhone" },
    parts: [
    {
      id: "get-started",
      title: "Get started",
      intro: "Five short steps, about 15 minutes. Read step 1 before you turn on VoiceOver.",
      steps: [
          {
            title: "Turn it off before you turn it on",
            body: (
              <>
                <p>Read this step before you turn on VoiceOver.</p>
                <p>When VoiceOver is on, your phone works differently. One tap selects something and reads it aloud. You tap twice to open or activate what you selected. That is why you set up a shortcut first.</p>
                <ol>
                  <li>Open Settings, then Accessibility, then Accessibility Shortcut.</li>
                  <li>Choose VoiceOver.</li>
                  <li>Come back to this page.</li>
                </ol>
                <p>You can now turn VoiceOver on and off by pressing the side button three times quickly. If your phone has a Home button, press that three times instead.</p>
                <div className="box">
                  <p><strong>Stuck?</strong> Press the side button three times. Or tell Siri: “Turn off VoiceOver”.</p>
                </div>
                <p>When the shortcut is ready, tap Next at the bottom of the screen.</p>
              </>
            ),
          },
          {
            title: "Turn on VoiceOver",
            body: (
              <>
                <p>Press the side button three times. You hear a voice, and a black frame appears around whatever VoiceOver has selected.</p>
                <p>From now on VoiceOver reads this page to you. To move on, swipe right with one finger, anywhere on the screen. Try it now.</p>
                <p>Good. Each swipe right moves to the next thing on the page. Swipe left to go back.</p>
                <p>At the bottom of the screen there is a menu with Home, Back, Menu and Next, like the tab bar in an app. Keep swiping right until you hear “Next”. Then double-tap anywhere on the screen.</p>
              </>
            ),
          },
          {
            title: "Listen and stop",
            body: (
              <>
                <p>You will hear far more than you need. The most important skill is stopping the speech.</p>
                <p>Tap once with two fingers to stop. Tap with two fingers again to continue.</p>
                <p>Practise on this paragraph. It is long on purpose. Screen reader users skim by hearing the first few words and moving on if it is not what they are looking for. That is why the most important words should come first in a text, a link and a button. When you hear that a paragraph is not what you need, just swipe on. You don't have to wait until it has been read to the end. Try stopping the speech now, with two fingers.</p>
                <p>To read the whole page from the top, swipe up with two fingers. To read from where you are, swipe down with two fingers. Stop with two fingers whenever you like.</p>
                <p>VoiceOver scrolls the page as you swipe. To scroll yourself, swipe up or down with three fingers.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Explore by touch and activate",
            body: (
              <>
                <p>You can also drag one finger around the screen. VoiceOver reads whatever you touch. This is a quick way to find things when you know roughly where they are.</p>
                <p>When VoiceOver has selected something, double-tap anywhere on the screen to activate it. You don't need to hit the button itself.</p>
                <p>Try it on the button below. Swipe to it, or find it with your finger. Then double-tap.</p>
                <StatusButton message="Well done! You activated the button. VoiceOver read this message without you moving.">Try me</StatusButton>
                <p>Now find Next with your finger. It is at the bottom right of the screen. Touch it, listen, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Screen Curtain",
            body: (
              <>
                <p>Screen Curtain turns the screen black while VoiceOver keeps working. You then have to rely on what you hear, as many screen reader users do.</p>
                <p>The same gesture turns it on and off: triple-tap with three fingers. If Zoom is on, quadruple-tap with three fingers.</p>
                <p>Try it: turn on Screen Curtain. Swipe through this page, then find Next at the bottom right with your finger and double-tap. You can leave Screen Curtain on.</p>
                <div className="box">
                  <p><strong>Can't get the screen back?</strong> Triple-tap with three fingers again. If that doesn't help, turn off VoiceOver by pressing the side button three times.</p>
                </div>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now turn VoiceOver on and off, move back and forth, stop the speech, find things with your finger, activate them and use Screen Curtain.</p>
          <p>If Screen Curtain is still on, triple-tap with three fingers to turn it off.</p>
          <p>Next up is part 2: headings, landmarks, links and buttons, forms and status messages.</p>
          <p>For more practice, Apple has its own. Open Settings, then Accessibility, then VoiceOver, and choose VoiceOver Practice.</p>
          <p>Remember to turn off VoiceOver when you are done: press the side button three times.</p>
        </>
      ),
    },
    {
      id: "find-your-way",
      title: "Find your way around a page",
      intro: "Five steps on finding what you need without reading everything. This is how most people use a screen reader.",
      steps: [
          {
            title: "Headings",
            body: (
              <>
                <p>Most screen reader users don't read a page from the top. They jump between headings to get an overview, just as you skim with your eyes. Two out of three start this way on a long page.</p>
                <p>You jump between headings with the rotor. Rotate two fingers on the screen as if you were turning a dial. VoiceOver says the name of each setting. Keep turning until you hear “Headings”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>If you never hear “Headings”, add it: open Settings, then Accessibility, then VoiceOver, then Rotor, and turn on Headings.</p>
                <p>VoiceOver also says the heading level, such as “heading level 3”. The levels tell you how the page is organised.</p>
                <p>Try it: find out when Fjordby Library closes on Saturday. Use headings to jump there.</p>
                <Practice title="Fjordby Library">
                <h3>Events</h3>
                <p>Book club meets on the first Tuesday of every month. Children's story time is on Wednesdays at 11.</p>
                <h3>Borrowing books</h3>
                <p>You can borrow up to 20 books for four weeks. Renew them in the app or at the front desk.</p>
                <h3>Opening hours</h3>
                <p>Monday to Friday 9 to 20. Saturday 10 to 15. Closed on Sundays.</p>
                <h3>Contact</h3>
                <p>Call us or drop by the front desk. We answer the phone on weekdays.</p>
                </Practice>
                <p>The answer is under the heading Opening hours: 15.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the rotor is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Landmarks",
            body: (
              <>
                <p>Landmarks are the main areas of a page: the header at the top, navigation menus, the main content and the footer. Some screen reader users jump between them to skip things that repeat on every page, such as menus.</p>
                <p>Landmarks are in the rotor too. Rotate two fingers on the screen as if you were turning a dial. VoiceOver says the name of each setting. Keep turning until you hear “Landmarks”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>If you never hear “Landmarks”, add it: open Settings, then Accessibility, then VoiceOver, then Rotor, and turn on Landmarks.</p>
                <p>Try it: this page has a header, the main content with a practice area, the menu at the bottom called “Steps”, and a footer. Jump to the menu called “Steps”, then back to the main content.</p>
                <p>Each landmark needs a name when there is more than one of the same kind. That is why the menu at the bottom is called “Steps”, so you know what kind of navigation it is.</p>
                <Practice title="Fjordby Library">
                <p>This practice area is a landmark of its own, because it has a name. Did you hear it when you jumped between landmarks?</p>
                </Practice>
                <p>Swiping left and right still moves one thing at a time, whatever the rotor is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Links and buttons",
            body: (
              <>
                <p>VoiceOver says “link” or “button” after the name. A link takes you somewhere else. A button does something on the page you are on. That is why it matters which one we use.</p>
                <p>You can jump between links with the rotor. Rotate two fingers on the screen as if you were turning a dial. VoiceOver says the name of each setting. Keep turning until you hear “Links”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>Try it on the news below. Jump between the links and listen. Which link do you understand without hearing the text around it?</p>
                <Practice title="Fjordby Library">
                <h3 id="news-1">New books in the crime section</h3>
                <p>Twenty new Nordic crime novels have arrived. <InPage target="news-1">Read more</InPage></p>
                <h3 id="news-2">The reading room is being renovated</h3>
                <p>The reading room is closed until December. <InPage target="news-2">Read more</InPage></p>
                <h3 id="news-3">Book talk with a local author</h3>
                <p>We invite you to an evening about writing. <InPage target="news-3">Read more</InPage></p>
                <p><InPage target="news-3">Read more about the book talk with a local author</InPage></p>
                <ToggleButton>Favourite</ToggleButton>
                </Practice>
                <p>Three links are called “Read more”. When you jump between links, you don't know where they go. The last link says what it is about.</p>
                <p>The Favourite button tells you whether it is on or off. Double-tap it and listen to what VoiceOver says.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the rotor is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Form fields",
            body: (
              <>
                <p>In a form, VoiceOver reads the name of the field, what kind of field it is, and any hint that belongs to it.</p>
                <p>You can jump between form fields with the rotor. Rotate two fingers on the screen as if you were turning a dial. VoiceOver says the name of each setting. Keep turning until you hear “Form Controls”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>Double-tap a text field to bring up the keyboard. Typing with a screen reader takes time, so type just a few letters. Find a letter with your finger and lift your finger, or double-tap, to type it.</p>
                <p>While the keyboard is open, you can move to the next field with the rotor: choose Form Controls and swipe down.</p>
                <p>Try it: first press “Sign up” without filling anything in. Listen to what happens. Then fill in the form and sign up.</p>
                <Practice title="Fjordby Library">
                <h3>Sign up for the book talk</h3>
                <PracticeForm />
                </Practice>
                <p>When something is wrong, the page moves you to the field, and VoiceOver reads the field name together with the error message. If the error were only shown in red, you would not have heard it.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the rotor is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Status messages",
            body: (
              <>
                <p>Some changes on a page are read aloud without you moving, such as “Saved”. They are called status messages. Other changes happen in silence, and then a screen reader user does not know that anything happened.</p>
                <p>Try both buttons below. Afterwards, swipe to the text under the last button.</p>
                <Practice title="Fjordby Library">
                <h3>Your list</h3>
                <StatusButton message="Saved to your list.">Save with message</StatusButton>
                <SilentButton message="Saved at" initial="Not saved yet.">Save without message</SilentButton>
                </Practice>
                <p>The first button gave a message you heard. The second one changed the text on the screen, but you heard nothing. A sighted user sees the change. You only find it if you go looking.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the rotor is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now jump between headings, landmarks, links and form fields, and you have heard the difference between a status message and a silent change.</p>
          <p>Think about a page you have made yourself. What would you hear if you jumped between its headings? Are there links called “Read more”? Are error messages read aloud?</p>
          <p>Remember to turn off VoiceOver when you are done.</p>
        </>
      ),
    },
    {
      id: "more-than-text",
      title: "More than text",
      intro: "Five steps about content that is more than text: images, lists, tables, content you can show and hide, and dialogs.",
      steps: [
          {
            title: "Images and icons",
            body: (
              <>
                <p>An image needs a text that says what it shows. This is called alternative text. Without it, a screen reader user does not know what the image is, or whether it matters. Images that are only decoration should not be read at all.</p>
                <p>The same goes for buttons that are only an icon. The button needs a name, even if the name is not shown.</p>
                <p>Try: swipe right through the practice area. Listen to what VoiceOver says about the image and about the two buttons.</p>
                <Practice title="Fjordby library">
                <img src={library} alt="Fjordby library: a low house with four windows and a blue door." width="320" height="180" />
                <img src={wave} alt="" width="320" height="24" />
                <p>Share the page with a friend:</p>
                <p><IconButton label="Share" /><IconButton /></p>
                </Practice>
                <p>The image of the library was read with its description. The wavy line below is decoration, so VoiceOver skipped it. The two buttons look the same, but only the first one says “Share”. The second has no name, so you do not know what it does until you press it.</p>
                <p>If an image has no description, VoiceOver can try to describe it. This is called VoiceOver Recognition, and you find it in Settings, then Accessibility, then VoiceOver, then VoiceOver Recognition. The description can be wrong, and it does not know why the image is there.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Lists",
            body: (
              <>
                <p>When you reach a list, VoiceOver says that it is a list and how many items it has. Then you know how much is coming, and whether you want to hear it all.</p>
                <p>To get past a long list, jump to the next heading with the rotor.</p>
                <p>Try: swipe right into the first list and listen to what VoiceOver says at the start. Then skip past the long list of branches to the heading Contact.</p>
                <Practice title="Fjordby library">
                <h3>What you need to borrow</h3>
                <ul>
                <li>A library card</li>
                <li>A PIN you choose yourself</li>
                <li>The books you want to borrow</li>
                </ul>
                <h3>All branches</h3>
                <ul>
                <li>Fjordby centre</li>
                <li>North harbour</li>
                <li>Lia</li>
                <li>Strand</li>
                <li>Bakkeby</li>
                <li>Upper Fjordby</li>
                <li>Seaside</li>
                <li>The woods</li>
                </ul>
                <h3>Contact</h3>
                <p>Call us or come by the desk.</p>
                </Practice>
                <p>If the list had only been lines starting with a dash, VoiceOver would not have said it was a list. Then you do not know how long it is until you have heard it all.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Tables",
            body: (
              <>
                <p>In a table, VoiceOver reads one cell at a time. In a well-built table, VoiceOver also knows which column the cell belongs to, so you hear that “35 kr” is an amount and not something else.</p>
                <p>Swipe right to move from cell to cell, row by row. Listen for whether VoiceOver says the name of the column together with the content of the cell.</p>
                <p>Try: find out how much you had to pay for returning a book late.</p>
                <Practice title="Fjordby library">
                <table>
                <caption>Your account in October</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">What</th><th scope="col" className="amount">Amount</th></tr></thead>
                <tbody>
                <tr><td>2 Oct</td><td>Reservation</td><td className="amount">10 kr</td></tr>
                <tr><td>9 Oct</td><td>Copies, 12 pages</td><td className="amount">24 kr</td></tr>
                <tr><td>16 Oct</td><td>Returned late</td><td className="amount">35 kr</td></tr>
                <tr><td>23 Oct</td><td>Lost library card</td><td className="amount">50 kr</td></tr>
                </tbody>
                </table>
                </Practice>
                <p>The answer is 35 kr, in the row Returned late. If the table had been made with plain text and spaces, you would have heard the numbers without knowing what they mean.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Show more and accordions",
            body: (
              <>
                <p>Many pages hide text behind a button, for example questions and answers. A good button says whether the content is hidden or shown. VoiceOver says it after the name of the button.</p>
                <p>Try: find out whether you can return books when the library is closed. Double-tap the question, and swipe right to hear the answer. Listen to what VoiceOver says about the button before and after you tap it.</p>
                <Practice title="Fjordby library">
                <Disclosure title="Can I return books when you are closed?"><p>Yes. There is a return slot by the entrance. It is open day and night.</p></Disclosure>
                <Disclosure title="What does it cost to return late?"><p>35 kroner per book.</p></Disclosure>
                <Disclosure title="Can I borrow e-books?"><p>Yes, in the app.</p></Disclosure>
                </Practice>
                <p>The answer came right after the button. If it had appeared somewhere else on the page, you would not have found it. And if the button had not said that the content was hidden, you would not have known there was something to open.</p>
                <p>The questions are also headings, so you can jump between them with headings.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Dialogs",
            body: (
              <>
                <p>A dialog sits on top of the page and waits for an answer, for example “Are you sure?”. When it opens, VoiceOver should move you into it. While it is open, you should not be able to swipe out to the page behind it.</p>
                <p>Try: double-tap “Delete your list”. Swipe right through the dialog, and on past the last button. Do you get out of the dialog? Then choose Cancel.</p>
                <Practice title="Fjordby library">
                <h3>Your list</h3>
                <PracticeDialog open="Delete your list" title="Do you want to delete your list?"><p>You lose the four books you have saved.</p></PracticeDialog>
                </Practice>
                <p>When the dialog closed, you came back to the button you pressed, and you heard what happened. Without that, you often end up at the top of the page and have to find your way back.</p>
                <p>Many dialogs can also be closed with a two-finger scrub: move two fingers back and forth quickly three times, like a “z”. It does not work on every website. Then use the button to close it.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You have heard how images, lists, tables, content that can be hidden, and dialogs are read, and what you miss when they are built badly.</p>
          <p>Think of a page you have made yourself. Do the icon buttons have names? Are the tables real tables? Can you hear whether something is hidden or shown?</p>
          <p>Remember to turn off VoiceOver when you are done.</p>
        </>
      ),
    },
    {
      id: "take-control",
      title: "Take control",
      intro: "Five steps about using the screen reader faster: speech rate, reading everything, searching, typing and language.",
      steps: [
          {
            title: "Speech rate",
            body: (
              <>
                <p>Many people who use a screen reader every day listen much faster than the default rate. That is how they skim a page as fast as you do with your eyes.</p>
                <p>You change the speaking rate with the rotor. Rotate two fingers on the screen as if you are turning a dial, until you hear “Speaking Rate”. Swipe up to make it faster, and down to make it slower. If you never hear “Speaking Rate”, add it: open Settings, then Accessibility, then VoiceOver, then Rotor.</p>
                <p>Try: turn the rate up a little, and swipe right to the text in the practice area. Go up one more step, and listen again. Set it back when you think it is too fast.</p>
                <Practice title="Fjordby library">
                <p>Fjordby library opened in 1927 in an old warehouse by the quay. In the first years it had only three shelves and one librarian, who was also a teacher at the school. Today the library has eight branches and more than 40,000 books.</p>
                </Practice>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Read everything",
            body: (
              <>
                <p>Sometimes you just want to hear everything, for example an article. Then the screen reader can keep reading by itself, instead of you swiping for each thing.</p>
                <p>Swipe up with two fingers to have the whole screen read from the top. Swipe down with two fingers to read from where you are. Tap with two fingers to pause, and tap with two fingers again to continue.</p>
                <p>Try: swipe right to the heading in the practice area, and let VoiceOver read the rest of the screen. Stop when you have heard enough.</p>
                <Practice title="Fjordby library">
                <h3>The story of the library</h3>
                <p>The warehouse by the quay was too small after only ten years. The town built a new house on the square, with a reading room and a children's section.</p>
                <p>In 1980 the first branch opened, in North harbour. It was a bus that drove out to people who lived far from the centre.</p>
                <p>Today you can borrow books, games and tools, and you can read e-books in the app.</p>
                </Practice>
                
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Find on the screen",
            body: (
              <>
                <p>On a long page it is slow to swipe your way to what you are looking for. The screen reader can search for text on the screen for you.</p>
                <p>On iPhone it is called the Item Chooser. Triple-tap with two fingers. You get a list of what is on the screen, and a search field at the top. Type a few letters in the search field, and choose the result you want to go to. To close the Item Chooser without choosing anything, do a two-finger scrub.</p>
                <p>Try: find the book The whale who sang in the list below, without swiping through the whole list.</p>
                <Practice title="Fjordby library">
                <h3>New books</h3>
                <ul>
                <li>All we did not say</li>
                <li>The bakery on Beach Street</li>
                <li>A letter from Lia</li>
                <li>The last butterflies</li>
                <li>The daughters of Bakkeby</li>
                <li>A winter in North harbour</li>
                <li>Hiking for everyone</li>
                <li>The lighthouse keeper's daughter</li>
                <li>Forgotten gardens</li>
                <li>The garden by the fjord</li>
                <li>The house in the woods</li>
                <li>The whale who sang</li>
                <li>Whales of the North Sea</li>
                <li>Ice and light</li>
                <li>A map of nowhere</li>
                <li>The light over Lia</li>
                <li>Dark waters</li>
                <li>When the boats come in</li>
                <li>The night before the storm</li>
                <li>Shadows on the seaside</li>
                <li>Quiet days</li>
                <li>Aunt Inger's recipes</li>
                <li>Under the bridge</li>
                <li>The wind from the west</li>
                </ul>
                </Practice>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Typing",
            body: (
              <>
                <p>Typing is what takes the longest with a screen reader on a phone. That is why many use a faster way of typing, or dictate.</p>
                <p>By default you find a key by dragging your finger across the keyboard, and double-tap to type it. It is faster with touch typing: the key is typed when you lift your finger. You switch with the rotor: choose Typing Mode, and swipe up or down.</p><p>You can also dictate: double-tap with two fingers on the keyboard to start, and the same to stop. Dictation must be turned on in Settings, under General and Keyboards.</p>
                <p>Try: search for “whale” in the catalogue. Listen to the message that comes after you search.</p>
                <Practice title="Fjordby library">
                <SearchForm items={['All we did not say', 'The bakery on Beach Street', 'A letter from Lia', 'The last butterflies', 'The daughters of Bakkeby', 'A winter in North harbour', 'Hiking for everyone', "The lighthouse keeper's daughter", 'Forgotten gardens', 'The garden by the fjord', 'The house in the woods', 'The whale who sang', 'Whales of the North Sea', 'Ice and light', 'A map of nowhere', 'The light over Lia', 'Dark waters', 'When the boats come in', 'The night before the storm', 'Shadows on the seaside', 'Quiet days', "Aunt Inger's recipes", 'Under the bridge', 'The wind from the west']} />
                </Practice>
                <p>After the search you heard how many hits there were, without looking for them. That is a status message, which you learned about in part 2.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Language",
            body: (
              <>
                <p>When a page has text in more than one language, the page can say which language each part is in. Then VoiceOver changes voice, and the pronunciation is right. Without it, it reads Norwegian with English pronunciation, and it is hard to understand.</p>
                <p>You do not need to do anything for the voice to change. VoiceOver changes it when the page says which language the text is in.</p>
                <p>Try: swipe through the two sentences below. The text is the same, but only the first one says it is in Norwegian.</p>
                <Practice title="Fjordby library">
                <p lang="nb">Et bibliotek er ikke en luksus, men noe vi trenger for å leve.</p>
                <p>Et bibliotek er ikke en luksus, men noe vi trenger for å leve.</p>
                </Practice>
                <p>The first sentence was read with a Norwegian voice. The second was read as if it were English. The same goes for the language of the page itself: if it is wrong, the whole page is read with the wrong voice.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now change the speech rate, let VoiceOver read everything, search the screen, type faster, and hear when the page says which language it is in.</p>
          <p>Think of a page you have made yourself. Does it say which language it is in? Do you get a message when you have searched?</p>
          <p>Remember to turn off VoiceOver when you are done.</p>
        </>
      ),
    },
    ],
  },
  android: {
    name: "TalkBack on Android",
    source: { url: "https://support.google.com/accessibility/android/answer/6151827", title: "Google, TalkBack gestures" },
    parts: [
    {
      id: "get-started",
      title: "Get started",
      intro: "Five short steps, about 15 minutes. Read step 1 before you turn on TalkBack.",
      steps: [
          {
            title: "Turn it off before you turn it on",
            body: (
              <>
                <p>Read this step before you turn on TalkBack. If you can't find an option, search for “TalkBack” in Settings.</p>
                <p>When TalkBack is on, your phone works differently. One tap selects something and reads it aloud. You tap twice to open or activate what you selected. That is why you set up a shortcut first.</p>
                <ol>
                  <li>Open Settings, then Accessibility, then TalkBack.</li>
                  <li>Turn on the TalkBack shortcut.</li>
                  <li>Come back to this page.</li>
                </ol>
                <p>You can now turn TalkBack on and off by holding both volume keys for three seconds. The first time, your phone asks whether you want to use the shortcut.</p>
                <div className="box">
                  <p><strong>Stuck?</strong> Hold both volume keys for three seconds. Or tell Google Assistant: “Turn off TalkBack”.</p>
                </div>
                <p>When the shortcut is ready, tap Next at the bottom of the screen.</p>
              </>
            ),
          },
          {
            title: "Turn on TalkBack",
            body: (
              <>
                <p>Hold both volume keys for three seconds. You hear a voice, and a coloured frame appears around whatever TalkBack has selected.</p>
                <p>From now on TalkBack reads this page to you. To move on, swipe right with one finger, anywhere on the screen. Try it now.</p>
                <p>Good. Each swipe right moves to the next thing on the page. Swipe left to go back.</p>
                <p>Tap once with three fingers. If a menu opens, your phone supports multi-finger gestures, which this introduction uses. Close the menu by swiping down then left in one movement. If no menu opens, your phone uses one-finger gestures only. You will find them in the TalkBack tutorial, in TalkBack settings.</p>
                <p>At the bottom of the screen there is a menu with Home, Back, Menu and Next, like the tab bar in an app. Keep swiping right until you hear “Next”. Then double-tap anywhere on the screen.</p>
              </>
            ),
          },
          {
            title: "Listen and stop",
            body: (
              <>
                <p>You will hear far more than you need. The most important skill is stopping the speech.</p>
                <p>Tap once with two fingers to stop. Tap with two fingers again to continue.</p>
                <p>Practise on this paragraph. It is long on purpose. Screen reader users skim by hearing the first few words and moving on if it is not what they are looking for. That is why the most important words should come first in a text, a link and a button. When you hear that a paragraph is not what you need, just swipe on. You don't have to wait until it has been read to the end. Try stopping the speech now, with two fingers.</p>
                <p>To read the whole page from the top, open the TalkBack menu by tapping with three fingers, and choose “Read from top”. Stop with two fingers whenever you like.</p>
                <p>TalkBack scrolls the page as you swipe. To scroll yourself, swipe up or down with two fingers.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Explore by touch and activate",
            body: (
              <>
                <p>You can also drag one finger around the screen. TalkBack reads whatever you touch. This is a quick way to find things when you know roughly where they are.</p>
                <p>When TalkBack has selected something, double-tap anywhere on the screen to activate it. You don't need to hit the button itself.</p>
                <p>Try it on the button below. Swipe to it, or find it with your finger. Then double-tap.</p>
                <StatusButton message="Well done! You activated the button. TalkBack read this message without you moving.">Try me</StatusButton>
                <p>Now find Next with your finger. It is at the bottom right of the screen. Touch it, listen, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Hide screen",
            body: (
              <>
                <p>TalkBack can turn the screen black while TalkBack keeps working. You then have to rely on what you hear, as many screen reader users do.</p>
                <p>Open the TalkBack menu by tapping with three fingers, and choose “Hide screen”. Choose the same option in the menu to show the screen again.</p>
                <p>Try it: hide the screen. Swipe through this page, then find Next at the bottom right with your finger and double-tap. You can leave the screen hidden.</p>
                <div className="box">
                  <p><strong>Can't get the screen back?</strong> Open the TalkBack menu with three fingers and choose to show the screen. If that doesn't help, turn off TalkBack by holding both volume keys.</p>
                </div>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now turn TalkBack on and off, move back and forth, stop the speech, find things with your finger, activate them and hide the screen.</p>
          <p>If the screen is still hidden, open the TalkBack menu with three fingers and choose to show it.</p>
          <p>Next up is part 2: headings, landmarks, links and buttons, forms and status messages.</p>
          <p>For more practice, TalkBack has its own tutorial. Open the TalkBack menu with three fingers, choose TalkBack settings, then Tutorial and help.</p>
          <p>Remember to turn off TalkBack when you are done: hold both volume keys.</p>
        </>
      ),
    },
    {
      id: "find-your-way",
      title: "Find your way around a page",
      intro: "Five steps on finding what you need without reading everything. This is how most people use a screen reader.",
      steps: [
          {
            title: "Headings",
            body: (
              <>
                <p>Most screen reader users don't read a page from the top. They jump between headings to get an overview, just as you skim with your eyes. Two out of three start this way on a long page.</p>
                <p>You jump between headings with the reading controls. Swipe up then down in one movement to change the reading control. On phones with multi-finger gestures you can also swipe up or down with three fingers. TalkBack says the name of each control. Keep going until you hear “Headings”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>If you never hear “Headings”, add it: open the TalkBack menu with three fingers, choose TalkBack settings, then Edit menus, then Customize reading controls, and turn on Headings.</p>
                <p>TalkBack also says the heading level, such as “heading level 3”. The levels tell you how the page is organised.</p>
                <p>Try it: find out when Fjordby Library closes on Saturday. Use headings to jump there.</p>
                <Practice title="Fjordby Library">
                <h3>Events</h3>
                <p>Book club meets on the first Tuesday of every month. Children's story time is on Wednesdays at 11.</p>
                <h3>Borrowing books</h3>
                <p>You can borrow up to 20 books for four weeks. Renew them in the app or at the front desk.</p>
                <h3>Opening hours</h3>
                <p>Monday to Friday 9 to 20. Saturday 10 to 15. Closed on Sundays.</p>
                <h3>Contact</h3>
                <p>Call us or drop by the front desk. We answer the phone on weekdays.</p>
                </Practice>
                <p>The answer is under the heading Opening hours: 15.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the reading controls is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Landmarks",
            body: (
              <>
                <p>Landmarks are the main areas of a page: the header at the top, navigation menus, the main content and the footer. Some screen reader users jump between them to skip things that repeat on every page, such as menus.</p>
                <p>Landmarks are in the reading controls too. Swipe up then down in one movement to change the reading control. On phones with multi-finger gestures you can also swipe up or down with three fingers. TalkBack says the name of each control. Keep going until you hear “Landmarks”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>If you never hear “Landmarks”, add it: open the TalkBack menu with three fingers, choose TalkBack settings, then Edit menus, then Customize reading controls, and turn on Landmarks. If your version of TalkBack has no Landmarks option, read this step and move on.</p>
                <p>Try it: this page has a header, the main content with a practice area, the menu at the bottom called “Steps”, and a footer. Jump to the menu called “Steps”, then back to the main content.</p>
                <p>Each landmark needs a name when there is more than one of the same kind. That is why the menu at the bottom is called “Steps”, so you know what kind of navigation it is.</p>
                <Practice title="Fjordby Library">
                <p>This practice area is a landmark of its own, because it has a name. Did you hear it when you jumped between landmarks?</p>
                </Practice>
                <p>Swiping left and right still moves one thing at a time, whatever the reading controls is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Links and buttons",
            body: (
              <>
                <p>TalkBack says “link” or “button” after the name. A link takes you somewhere else. A button does something on the page you are on. That is why it matters which one we use.</p>
                <p>You can jump between links with the reading controls. Swipe up then down in one movement to change the reading control. On phones with multi-finger gestures you can also swipe up or down with three fingers. TalkBack says the name of each control. Keep going until you hear “Links”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>Try it on the news below. Jump between the links and listen. Which link do you understand without hearing the text around it?</p>
                <Practice title="Fjordby Library">
                <h3 id="news-1">New books in the crime section</h3>
                <p>Twenty new Nordic crime novels have arrived. <InPage target="news-1">Read more</InPage></p>
                <h3 id="news-2">The reading room is being renovated</h3>
                <p>The reading room is closed until December. <InPage target="news-2">Read more</InPage></p>
                <h3 id="news-3">Book talk with a local author</h3>
                <p>We invite you to an evening about writing. <InPage target="news-3">Read more</InPage></p>
                <p><InPage target="news-3">Read more about the book talk with a local author</InPage></p>
                <ToggleButton>Favourite</ToggleButton>
                </Practice>
                <p>Three links are called “Read more”. When you jump between links, you don't know where they go. The last link says what it is about.</p>
                <p>The Favourite button tells you whether it is on or off. Double-tap it and listen to what TalkBack says.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the reading controls is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Form fields",
            body: (
              <>
                <p>In a form, TalkBack reads the name of the field, what kind of field it is, and any hint that belongs to it.</p>
                <p>You can jump between form fields with the reading controls. Swipe up then down in one movement to change the reading control. On phones with multi-finger gestures you can also swipe up or down with three fingers. TalkBack says the name of each control. Keep going until you hear “Controls”. Then swipe down to go to the next one, and up to go to the previous one.</p>
                <p>Double-tap a text field to bring up the keyboard. Typing with a screen reader takes time, so type just a few letters. Find a letter with your finger and lift your finger to type it.</p>
                <p>While the keyboard is open, you can move to the next field with the reading controls: choose Controls and swipe down.</p>
                <p>Try it: first press “Sign up” without filling anything in. Listen to what happens. Then fill in the form and sign up.</p>
                <Practice title="Fjordby Library">
                <h3>Sign up for the book talk</h3>
                <PracticeForm />
                </Practice>
                <p>When something is wrong, the page moves you to the field, and TalkBack reads the field name together with the error message. If the error were only shown in red, you would not have heard it.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the reading controls is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Status messages",
            body: (
              <>
                <p>Some changes on a page are read aloud without you moving, such as “Saved”. They are called status messages. Other changes happen in silence, and then a screen reader user does not know that anything happened.</p>
                <p>Try both buttons below. Afterwards, swipe to the text under the last button.</p>
                <Practice title="Fjordby Library">
                <h3>Your list</h3>
                <StatusButton message="Saved to your list.">Save with message</StatusButton>
                <SilentButton message="Saved at" initial="Not saved yet.">Save without message</SilentButton>
                </Practice>
                <p>The first button gave a message you heard. The second one changed the text on the screen, but you heard nothing. A sighted user sees the change. You only find it if you go looking.</p>
                <p>Swiping left and right still moves one thing at a time, whatever the reading controls is set to. Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now jump between headings, landmarks, links and form fields, and you have heard the difference between a status message and a silent change.</p>
          <p>Think about a page you have made yourself. What would you hear if you jumped between its headings? Are there links called “Read more”? Are error messages read aloud?</p>
          <p>Remember to turn off TalkBack when you are done.</p>
        </>
      ),
    },
    {
      id: "more-than-text",
      title: "More than text",
      intro: "Five steps about content that is more than text: images, lists, tables, content you can show and hide, and dialogs.",
      steps: [
          {
            title: "Images and icons",
            body: (
              <>
                <p>An image needs a text that says what it shows. This is called alternative text. Without it, a screen reader user does not know what the image is, or whether it matters. Images that are only decoration should not be read at all.</p>
                <p>The same goes for buttons that are only an icon. The button needs a name, even if the name is not shown.</p>
                <p>Try: swipe right through the practice area. Listen to what TalkBack says about the image and about the two buttons.</p>
                <Practice title="Fjordby library">
                <img src={library} alt="Fjordby library: a low house with four windows and a blue door." width="320" height="180" />
                <img src={wave} alt="" width="320" height="24" />
                <p>Share the page with a friend:</p>
                <p><IconButton label="Share" /><IconButton /></p>
                </Practice>
                <p>The image of the library was read with its description. The wavy line below is decoration, so TalkBack skipped it. The two buttons look the same, but only the first one says “Share”. The second has no name, so you do not know what it does until you press it.</p>
                <p>If an image has no description, TalkBack can try to describe it with AI: put focus on the image, tap with three fingers to open the TalkBack menu, and choose Describe image. It is not available on every phone. The description can be wrong, and it does not know why the image is there.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Lists",
            body: (
              <>
                <p>When you reach a list, TalkBack says that it is a list and how many items it has. Then you know how much is coming, and whether you want to hear it all.</p>
                <p>To get past a long list, jump to the next heading. You can also add Lists to the reading controls: tap with three fingers to open the TalkBack menu, choose TalkBack settings, then Customize menus, then Customize reading controls, and turn on Lists.</p>
                <p>Try: swipe right into the first list and listen to what TalkBack says at the start. Then skip past the long list of branches to the heading Contact.</p>
                <Practice title="Fjordby library">
                <h3>What you need to borrow</h3>
                <ul>
                <li>A library card</li>
                <li>A PIN you choose yourself</li>
                <li>The books you want to borrow</li>
                </ul>
                <h3>All branches</h3>
                <ul>
                <li>Fjordby centre</li>
                <li>North harbour</li>
                <li>Lia</li>
                <li>Strand</li>
                <li>Bakkeby</li>
                <li>Upper Fjordby</li>
                <li>Seaside</li>
                <li>The woods</li>
                </ul>
                <h3>Contact</h3>
                <p>Call us or come by the desk.</p>
                </Practice>
                <p>If the list had only been lines starting with a dash, TalkBack would not have said it was a list. Then you do not know how long it is until you have heard it all.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Tables",
            body: (
              <>
                <p>In a table, TalkBack reads one cell at a time. In a well-built table, TalkBack also knows which column the cell belongs to, so you hear that “35 kr” is an amount and not something else.</p>
                <p>Swiping right moves from cell to cell as usual. When you are inside a table, the reading controls also get Rows and Columns. Swipe up then down in one movement until you hear “Rows”, and swipe down to go to the next row. Listen for whether TalkBack says the name of the column together with the content of the cell.</p>
                <p>Try: find out how much you had to pay for returning a book late.</p>
                <Practice title="Fjordby library">
                <table>
                <caption>Your account in October</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">What</th><th scope="col" className="amount">Amount</th></tr></thead>
                <tbody>
                <tr><td>2 Oct</td><td>Reservation</td><td className="amount">10 kr</td></tr>
                <tr><td>9 Oct</td><td>Copies, 12 pages</td><td className="amount">24 kr</td></tr>
                <tr><td>16 Oct</td><td>Returned late</td><td className="amount">35 kr</td></tr>
                <tr><td>23 Oct</td><td>Lost library card</td><td className="amount">50 kr</td></tr>
                </tbody>
                </table>
                </Practice>
                <p>The answer is 35 kr, in the row Returned late. If the table had been made with plain text and spaces, you would have heard the numbers without knowing what they mean.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Show more and accordions",
            body: (
              <>
                <p>Many pages hide text behind a button, for example questions and answers. A good button says whether the content is hidden or shown. TalkBack says it after the name of the button.</p>
                <p>Try: find out whether you can return books when the library is closed. Double-tap the question, and swipe right to hear the answer. Listen to what TalkBack says about the button before and after you tap it.</p>
                <Practice title="Fjordby library">
                <Disclosure title="Can I return books when you are closed?"><p>Yes. There is a return slot by the entrance. It is open day and night.</p></Disclosure>
                <Disclosure title="What does it cost to return late?"><p>35 kroner per book.</p></Disclosure>
                <Disclosure title="Can I borrow e-books?"><p>Yes, in the app.</p></Disclosure>
                </Practice>
                <p>The answer came right after the button. If it had appeared somewhere else on the page, you would not have found it. And if the button had not said that the content was hidden, you would not have known there was something to open.</p>
                <p>The questions are also headings, so you can jump between them with headings.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Dialogs",
            body: (
              <>
                <p>A dialog sits on top of the page and waits for an answer, for example “Are you sure?”. When it opens, TalkBack should move you into it. While it is open, you should not be able to swipe out to the page behind it.</p>
                <p>Try: double-tap “Delete your list”. Swipe right through the dialog, and on past the last button. Do you get out of the dialog? Then choose Cancel.</p>
                <Practice title="Fjordby library">
                <h3>Your list</h3>
                <PracticeDialog open="Delete your list" title="Do you want to delete your list?"><p>You lose the four books you have saved.</p></PracticeDialog>
                </Practice>
                <p>When the dialog closed, you came back to the button you pressed, and you heard what happened. Without that, you often end up at the top of the page and have to find your way back.</p>
                <p>Many dialogs can also be closed with Back: swipe down then left in one movement. It does not work on every website. Then use the button to close it.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You have heard how images, lists, tables, content that can be hidden, and dialogs are read, and what you miss when they are built badly.</p>
          <p>Think of a page you have made yourself. Do the icon buttons have names? Are the tables real tables? Can you hear whether something is hidden or shown?</p>
          <p>Remember to turn off TalkBack when you are done.</p>
        </>
      ),
    },
    {
      id: "take-control",
      title: "Take control",
      intro: "Five steps about using the screen reader faster: speech rate, reading everything, searching, typing and language.",
      steps: [
          {
            title: "Speech rate",
            body: (
              <>
                <p>Many people who use a screen reader every day listen much faster than the default rate. That is how they skim a page as fast as you do with your eyes.</p>
                <p>You change the speech rate with the reading controls. Swipe up then down in one movement until you hear “Speech rate”. Swipe up to make it faster, and down to make it slower.</p>
                <p>Try: turn the rate up a little, and swipe right to the text in the practice area. Go up one more step, and listen again. Set it back when you think it is too fast.</p>
                <Practice title="Fjordby library">
                <p>Fjordby library opened in 1927 in an old warehouse by the quay. In the first years it had only three shelves and one librarian, who was also a teacher at the school. Today the library has eight branches and more than 40,000 books.</p>
                </Practice>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Read everything",
            body: (
              <>
                <p>Sometimes you just want to hear everything, for example an article. Then the screen reader can keep reading by itself, instead of you swiping for each thing.</p>
                <p>Tap with three fingers to open the TalkBack menu, and choose Read from focused item. TalkBack reads everything from where you are, and continues on the next screen. Touch the screen to stop.</p>
                <p>Try: swipe right to the heading in the practice area, and let TalkBack read the rest of the screen. Stop when you have heard enough.</p>
                <Practice title="Fjordby library">
                <h3>The story of the library</h3>
                <p>The warehouse by the quay was too small after only ten years. The town built a new house on the square, with a reading room and a children's section.</p>
                <p>In 1980 the first branch opened, in North harbour. It was a bus that drove out to people who lived far from the centre.</p>
                <p>Today you can borrow books, games and tools, and you can read e-books in the app.</p>
                </Practice>
                <p>To find out exactly what TalkBack said, open the TalkBack menu and choose Copy last spoken phrase. Then you can paste it somewhere else, for example in a bug report.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Find on the screen",
            body: (
              <>
                <p>On a long page it is slow to swipe your way to what you are looking for. The screen reader can search for text on the screen for you.</p>
                <p>On Android it is called screen search. Tap and hold with three fingers, or open the TalkBack menu and choose Screen search. Type a few letters, and choose the result you want to go to from the list.</p>
                <p>Try: find the book The whale who sang in the list below, without swiping through the whole list.</p>
                <Practice title="Fjordby library">
                <h3>New books</h3>
                <ul>
                <li>All we did not say</li>
                <li>The bakery on Beach Street</li>
                <li>A letter from Lia</li>
                <li>The last butterflies</li>
                <li>The daughters of Bakkeby</li>
                <li>A winter in North harbour</li>
                <li>Hiking for everyone</li>
                <li>The lighthouse keeper's daughter</li>
                <li>Forgotten gardens</li>
                <li>The garden by the fjord</li>
                <li>The house in the woods</li>
                <li>The whale who sang</li>
                <li>Whales of the North Sea</li>
                <li>Ice and light</li>
                <li>A map of nowhere</li>
                <li>The light over Lia</li>
                <li>Dark waters</li>
                <li>When the boats come in</li>
                <li>The night before the storm</li>
                <li>Shadows on the seaside</li>
                <li>Quiet days</li>
                <li>Aunt Inger's recipes</li>
                <li>Under the bridge</li>
                <li>The wind from the west</li>
                </ul>
                </Practice>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Typing",
            body: (
              <>
                <p>Typing is what takes the longest with a screen reader on a phone. That is why many use a faster way of typing, or dictate.</p>
                <p>Drag your finger across the keyboard until you hear the letter you want, and lift your finger to type it. Some keys, like Enter, need a double-tap. Close the keyboard with Back: swipe down then left in one movement.</p><p>You can also tap the microphone on the keyboard and say what you want to type.</p>
                <p>Try: search for “whale” in the catalogue. Listen to the message that comes after you search.</p>
                <Practice title="Fjordby library">
                <SearchForm items={['All we did not say', 'The bakery on Beach Street', 'A letter from Lia', 'The last butterflies', 'The daughters of Bakkeby', 'A winter in North harbour', 'Hiking for everyone', "The lighthouse keeper's daughter", 'Forgotten gardens', 'The garden by the fjord', 'The house in the woods', 'The whale who sang', 'Whales of the North Sea', 'Ice and light', 'A map of nowhere', 'The light over Lia', 'Dark waters', 'When the boats come in', 'The night before the storm', 'Shadows on the seaside', 'Quiet days', "Aunt Inger's recipes", 'Under the bridge', 'The wind from the west']} />
                </Practice>
                <p>After the search you heard how many hits there were, without looking for them. That is a status message, which you learned about in part 2.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          },
          {
            title: "Language",
            body: (
              <>
                <p>When a page has text in more than one language, the page can say which language each part is in. Then TalkBack changes voice, and the pronunciation is right. Without it, it reads Norwegian with English pronunciation, and it is hard to understand.</p>
                <p>You do not need to do anything for the voice to change. TalkBack changes it when the page says which language the text is in. You can also change the language yourself with the reading control Spoken language.</p>
                <p>Try: swipe through the two sentences below. The text is the same, but only the first one says it is in Norwegian.</p>
                <Practice title="Fjordby library">
                <p lang="nb">Et bibliotek er ikke en luksus, men noe vi trenger for å leve.</p>
                <p>Et bibliotek er ikke en luksus, men noe vi trenger for å leve.</p>
                </Practice>
                <p>The first sentence was read with a Norwegian voice. The second was read as if it were English. The same goes for the language of the page itself: if it is wrong, the whole page is read with the wrong voice.</p>
                <p>Swipe right until you hear “Next”, and double-tap.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>You can now change the speech rate, let TalkBack read everything, search the screen, type faster, and hear when the page says which language it is in.</p>
          <p>Think of a page you have made yourself. Does it say which language it is in? Do you get a message when you have searched?</p>
          <p>Remember to turn off TalkBack when you are done.</p>
        </>
      ),
    },
    ],
  },
};

export default content;
