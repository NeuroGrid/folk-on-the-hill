Feature: BrowserStack Testing

Background:
  Given I am on http://samjoseph1.browserstack.com

Scenario: Can see folk on the hill
  Then I should see "Folk on the Hill"
