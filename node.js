import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: '<YOUR_API_TOKEN>',
});

// Prepare Actor input
const input = {
    "querys": [
        "X_23VaFMOsk"
    ],
    "max_depth": 1,
    "wp_url": "https://www.yoursite.com",
    "wp_user": "admin",
    "wp_api": "2jXwDdnPukZo1Bq8ctMkWRf7",
    "publish_it": false,
    "category": 1
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("aICb12hPvSVEErnOF").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();