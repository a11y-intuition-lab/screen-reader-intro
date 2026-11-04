// Innholdet i innføringen på engelsk. Hvert trinn er én skjerm.
import { InPage, Practice, PracticeForm, SilentButton, StatusButton, ToggleButton } from '../components/practice';
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
          <p>Coming soon: test pages with good and bad examples.</p>
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
          <p>Coming soon: test pages with good and bad examples.</p>
          <p>Remember to turn off TalkBack when you are done.</p>
        </>
      ),
    },
    ],
  },
};

export default content;
