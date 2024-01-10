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

    // Assume that each font size is in a table row (`tr`)
    $('tr').each((index, element) => {
      // Extract the class name, which is in the first `td`
      const className = $(element).find('td').first().text().trim();

      // Extract the properties, which are in the second `td`
      // Here you would parse the properties string as needed
      const propertiesText = $(element).find('td').eq(1).text();

      // Parse propertiesText and construct the properties object here
      // This is a placeholder - you will need to adjust it to the actual content
      const properties = {
        'font-size': propertiesText.match(/font-size: (\S+);/)[1],
        'line-height': propertiesText.match(/line-height: (\S+);/)[1],
      };

      // Construct the item object and push it into the tailwindData array
      tailwindData.push({
        class: className,
        properties,
      });
    });

    fs.writeFile('tailwindData.json', JSON.stringify(tailwindData, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote data to file');
      }
    });

    // Log or return the data
  //   console.log(tailwindData);
  //   return tailwindData;
  // } catch (error) {
  //   console.error('Error scraping font size data:', error);
  // }

  
}

// Run the scrape function
scrapeFontSizeData();
