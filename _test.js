const assert = require("assert")

Feature('Sample Feature');

Scenario('first test', ({ I }) => {
I.amOnPage("https://www.example.com")
I.wait(1)
I.saveScreenshot("test.png", true)
});

Scenario('second test', ({ I }) => {
I.amOnPage("https://www.example.com")
I.see("Example")
I.dontSee("Google")
I.seeElement("p")
I.dontSeeElement(".header")
I.wait(2)
});

Scenario('third test', async ({ I }) => {
I.amOnPage("https://www.example.com")
const text = await I.grabTextFrom("h1")
I.wait(3)
assert.strictEqual(text,"Example Domain","Text does not match..")
});
