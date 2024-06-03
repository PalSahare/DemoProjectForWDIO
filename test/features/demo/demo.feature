Feature: Demo feature



    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Serach with WDIO
         Then Click on the first search result
         Then URL should match with  https://webdriver.io
        Examples:
            | TestID     | SearchItem |  ExpectedURL |          
            | DEMO_TC001 | WDIO       | https://webdriver.io |