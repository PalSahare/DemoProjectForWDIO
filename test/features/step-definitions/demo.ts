import { Given, When, Then } from "@wdio/cucumber-framework";
//import chai from 'chai';

// Example usage
//expect(true).to.be.true;
Given(/^Google page is opened$/, async function () {
  console.log("Before launching browser");
  await browser.url("https://www.google.com");
  await browser.pause(10000);
  await browser.deleteCookies()
  console.log("After launching browser");
});

When('Serach with <SearchItem>', async function (SearchItem) {
  await browser.pause(10000)
    console.log("Start second test");
  console.log(`>> searchItem: ${SearchItem}`);
  let ele = await $(`[name=q]`)
  await ele.setValue(SearchItem)
  await browser.keys("Enter")
   
});

Then(/^Click on the first search result$/, async function(){
    let ele= await $(`<h3>`)
    ele.click()

});

// Then(/^URL should math (.*)$/, async function(ExpectedURL){
//    console.log(`>>expectedURL: ${ExpectedURL}`);
//    let url=browser.getUrl();
//    chai.expect(url).to.equal("ExpectedURL")

// })


