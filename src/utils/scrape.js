const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeFontSizeData() {
  try {
    // Fetch the HTML of the page
    const { data } = await axios.get('https://tailwindcss.com/docs/font-size');
    // Load HTML into cheerio
    const $ = cheerio.load(data);
    // The data structure to hold our font size data
    const tailwindData = [];

    $('tbody tr').each((index, element) => {
      const className = $(element).find('td').first().text().trim();
      let propertiesText = $(element).find('td').eq(1).text();

      // Example of extracting the 'font-size' and 'line-height' using string split
      const fontSizeMatch = propertiesText.match(/font-size: (.*?);/);
      const lineHeightMatch = propertiesText.match(/line-height: (.*?);/);

      const properties = {
        'font-size': fontSizeMatch ? fontSizeMatch[1] : 'unknown',
        'line-height': lineHeightMatch ? lineHeightMatch[1] : 'unknown',
      };

      // Push the object with the class and properties into the array
      tailwindData.push({ class: className, properties });
    });

    // Here's where you would write the tailwindData array to a file
    fs.writeFile(
      'tailwindData.json',
      JSON.stringify(tailwindData, null, 2),
      (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Successfully wrote data to file');
        }
      },
    );

    // Optionally return the data if you want to use this function as a module

    return tailwindData;
  } catch (error) {
    console.error('Error scraping font size data:', error);
  }
}

// Run the scrape function
scrapeFontSizeData();
