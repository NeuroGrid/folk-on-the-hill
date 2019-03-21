Feature: BrowserStack Testing

Background:
  Given I am on http://localhost:4000

Scenario: Can see folk on the hill
  Then I should see "Folk on the Hill"
