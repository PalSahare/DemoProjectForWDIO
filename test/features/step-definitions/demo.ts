import { Given, When, Then } from "@wdio/cucumber-framework";
//import expect from 'chai';
//import expect from 'chai';
import { expect as expectchai } from 'chai'
// Example usage
//expect(true).to.be.true;
Given(/^Google page is opened$/, async function () {
  console.log("Before launching browser");
  await browser.url("https://www.google.com");
  await browser.pause(10000);
  await browser.maximizeWindow()
 // await browser.deleteCookies()
  console.log("After launching browser");
  //await browser.pause(50000)
});

When(/^Serach with WDIO$/, async function () {
  await browser.pause(10000)
    console.log("Start second test");
  //console.log(`>> searchItem: ${SearchItem}`);
  //await browser.keys("Enter")
  let ele = await $(`#APjFqb`)
  await ele.setValue("WDIO")
  await browser.keys("Enter")
   
});

Then(/^Click on the first search result$/, async function(){
    let ele= await $(`<h3>`)
    ele.click()

});

Then(/^URL should match with url$/, async function(url1){
   console.log(`>>expectedURL: ${url1}`);
   let url=await browser.getUrl();
   await browser.pause(10000);
   console.log("browser url is: " ,url);
   
   expectchai((url)).to.equal(url1)
   console.log("Verified the url");
   

})


