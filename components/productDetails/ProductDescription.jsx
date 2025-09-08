const ProductDescription = ({ description }) => {
  return (
    <div className="mt-16">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button className="border-b-2 border-primary-500 text-primary-600 dark:text-primary-400 py-4 px-1 text-sm font-medium">
            Description
          </button>
          <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 py-4 px-1 text-sm font-medium">
            Reviews (127)
          </button>
          <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 py-4 px-1 text-sm font-medium">
            Farmer Info
          </button>
        </nav>
      </div>

      <div className="py-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h3>About This Product</h3>
          <p>{description}</p>

          <h4>Key Features:</h4>
          <ul>
            <li>100% Organic - No pesticides or chemical fertilizers</li>
            <li>Vine-ripened for optimal taste and nutrition</li>
            <li>Harvested within 24 hours of delivery</li>
            <li>Rich in vitamins C, K, and antioxidants</li>
            <li>Perfect for salads, cooking, and sauces</li>
          </ul>

          <h4>Storage Instructions:</h4>
          <p>
            Store at room temperature for best flavor. Refrigerate only when
            fully ripe to extend shelf life. Use within 5-7 days for optimal
            freshness.
          </p>

          <h4>Nutritional Information (per 100g):</h4>
          <ul>
            <li>Calories: 18</li>
            <li>Vitamin C: 14mg</li>
            <li>Potassium: 237mg</li>
            <li>Folate: 15mcg</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
