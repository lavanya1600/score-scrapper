var hb = require('puppeteer');

async function process(){

	var browser = await hb.launch();
	var page = await browser.newPage();

	await page.goto('https://www.cricbuzz.com/cricket-match/live-scores', {
                timeout: 3000000
            });

	
	var data = await page.evaluate(function(){

		var score =document.querySelector('#page-wrapper > div:nth-child(6) > div.cb-col-67.cb-col.cb-left.cb-schdl > div:nth-child(3) > div > div:nth-child(2) > a > div > div:nth-child(1) > div.cb-lv-scrs-col.text-black').innerText;
		
		return score;
	});
	console.log(data);
	//await page.screenshot({path:'google.png'});
	await browser.close();
}

process();