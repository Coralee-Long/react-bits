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
      let propertiesText = $(element).find('td').eq(1).clone(); // Clone the second `td`
      
      // Remove the `span` elements to exclude comments
      propertiesText.find('span').remove(); 
      propertiesText = propertiesText.text().trim();
    
      // Use regex or string splitting to parse `propertiesText` and extract `font-size` and `line-height`
      const properties = {
        'font-size': /* Extracted font-size value */,
        'line-height': /* Extracted line-height value */
      };
    
      // Push the object with the class and properties into the array
      tailwindData.push({ class: className, properties });
    });
    

    // Log or return the data
    console.log(tailwindData);
    return tailwindData;
  } catch (error) {
    console.error('Error scraping font size data:', error);
  }
}

// Run the scrape function
scrapeFontSizeData();
