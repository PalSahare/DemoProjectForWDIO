Feature: Demo feature



    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Serach with <SearchItem>
         Then Click on the first search result
       #  Then URL should math <ExpectedURL>

        Examples:
            | TestID     | SearchItem |            
            | DEMO_TC001 | WDIO       | 